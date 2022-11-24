import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AllSellers = () => {
  const { title } = useContext(AuthContext);
  title("All Sellers");
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Total User:</h3>
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
                <th>Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              <tr>
                <th>1</th>
                <td>name</td>
                <td>email</td>
                <td>email</td>

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

export default AllSellers;
