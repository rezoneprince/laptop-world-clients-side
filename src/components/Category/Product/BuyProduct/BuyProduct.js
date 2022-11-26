import React from "react";

const BuyProduct = ({ closeModal }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="order-product-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <button onClick={closeModal}>Processed</button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
