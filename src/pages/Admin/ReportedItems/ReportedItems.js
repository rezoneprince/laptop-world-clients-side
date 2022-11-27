import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";
import ConfirmationModal from "../../../ConfirmationModal/ConfirmationModal";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReportedItems = () => {
  const { title } = useContext(AuthContext);
  const [deletingReported, setDeletingReported] = useState(null);
  const {
    data: reportedItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reported`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  title("Reported Items");

  const deleteReportedHandle = (reported) => {
    fetch(`http://localhost:5000/reported/${reported._id}`, {
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
          toast.success("Reported Product Delete successfully");
        }
      });
  };
  const closeModal = () => {
    setDeletingReported(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Total User: {reportedItems.length}</h3>
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
                <th>Resale Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {reportedItems &&
                reportedItems.map((report, i) => (
                  <tr key={report._id}>
                    <th>{i + 1}</th>
                    <td>{report.name}</td>
                    <td>{report.email}</td>
                    <td>{report.resalePrice}</td>

                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => setDeletingReported(report)}
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
      {deletingReported && (
        <ConfirmationModal
          title={`Ate you sure to delete ${deletingReported.name}`}
          message={`If you delete ${deletingReported.name}. You cannot recover it`}
          modalData={deletingReported}
          closeModal={closeModal}
          successAction={deleteReportedHandle}
          successColor="btn-error"
        />
      )}
    </div>
  );
};

export default ReportedItems;
