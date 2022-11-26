import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MdVerified } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import BuyProduct from "../BuyProduct/BuyProduct";

const ProductDetails = () => {
  const { title, user } = useContext(AuthContext);
  const [buyProduct, setBuyProduct] = useState(null);
  const product = useLoaderData();

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
  } = product;

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

  const closeModal = () => {
    setBuyProduct(null);
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
          <label
            htmlFor="order-product-modal"
            className="btn btn-primary btn-outline"
          >
            Buy Now
          </label>
        </div>
      </div>
      {buyProduct && <BuyProduct closeModal={closeModal} />}
    </div>
  );
};

export default ProductDetails;
