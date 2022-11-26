import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MdVerified } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const ProductDetails = () => {
  const [treatment, setTreatment] = useState(null);
  const { title } = useContext(AuthContext);

  const {
    _id,
    name,
    address,
    resalePrice,
    originalPrice,
    condition,
    useYear,
    category,
    sellerName,
    discretion,
    image,
    date,
    verified,
  } = useLoaderData();

  title(name);

  const handleReport = (id) => {
    fetch(`http://localhost:5000/report/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Submit report to admin successfully");
        }
      });
  };
  return (
    <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-between">
          <p>Publish date: {date ? date : "No date found"}</p>
          <button
            onClick={() => handleReport(_id)}
            className="btn btn-error btn-sm btn-outline"
          >
            Report
          </button>
        </div>
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-between">
          <div className="">
            <p className="flex items-center gap-2">
              SellerName: {sellerName}
              {verified && <MdVerified className="text-green-600" />}
            </p>
            <p> Resale Price: ${resalePrice}</p>
            <p>Brand: {category}</p>
            <p>Condition: {condition}</p>
          </div>
          <div className="">
            <p>Address: {address}</p>
            <p>Original Price: ${originalPrice}</p>
            <p>Use Of Year: {useYear}</p>
          </div>
        </div>
        <p>{discretion}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
