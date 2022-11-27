import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { title, user } = useContext(AuthContext);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  title("My Orders");
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Order</h3>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {orders &&
                orders.map((order, i) => (
                  <tr key={order._id}>
                    <th>{i + 1}</th>
                    <td>{order.name}</td>
                    <td>{order.customerName}</td>
                    <td>{order.location}</td>
                    <td>{order.customerPhone}</td>
                    <td>{order.customerEmail}</td>

                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        // onClick={() => setDeletingUser(user)}
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
      {/* {deletingUser && (
        <ConfirmationModal
          title={`Ate you sure to delete ${deletingUser.name}`}
          message={`If you delete ${deletingUser.name}. You cannot recover it`}
          modalData={deletingUser}
          closeModal={closeModal}
          successAction={userDeleteHandle}
          successColor="btn-error"
        />
      )} */}
    </div>
  );
};

export default MyOrders;
