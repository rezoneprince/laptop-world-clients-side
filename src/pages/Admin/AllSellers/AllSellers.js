import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";
import ConfirmationModal from "../../../ConfirmationModal/ConfirmationModal";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AllSellers = () => {
  const { title, logOut } = useContext(AuthContext);
  const [deletingSeller, setDeletingSeller] = useState(null);
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/sellers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      if (data.message === "forbidden access") {
        return logOut()
          .then(() => {
            toast.success("Successfully Sign Out");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
      return data;
    },
  });
  title("All Sellers");

  const makeVerifiedHandle = (id) => {
    fetch(`http://localhost:5000/users/verified/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          refetch();
          toast.success("Seller verified successful");
        }
      });
  };

  const deleteSellerHandle = (seller) => {
    fetch(`http://localhost:5000/seller/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User Delete successfully");
        }
      });
  };
  const closeModal = () => {
    setDeletingSeller(null);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Total Seller: {sellers.length}</h3>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {sellers &&
                sellers.map((seller, i) => (
                  <tr key={seller._id}>
                    <th>{i + 1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>
                      {seller?.verified ? (
                        "Verified"
                      ) : (
                        <button
                          onClick={() => makeVerifiedHandle(seller._id)}
                          className="btn btn-sm btn-primary"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => setDeletingSeller(seller)}
                        className="btn btn-md btn-circle btn-error btn-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingSeller && (
        <ConfirmationModal
          title={`Ate you sure to delete ${deletingSeller.name}`}
          message={`If you delete ${deletingSeller.name}. You cannot recover it`}
          modalData={deletingSeller}
          closeModal={closeModal}
          successAction={deleteSellerHandle}
          successColor="btn-error"
        />
      )}
    </div>
  );
};

export default AllSellers;
