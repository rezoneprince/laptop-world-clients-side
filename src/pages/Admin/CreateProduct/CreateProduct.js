import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MdAlternateEmail, MdPerson } from "react-icons/md";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CreateProduct = () => {
  const { title } = useContext(AuthContext);
  title("Create Product");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Add A Doctor</h3>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <div className="w-full  md:w-[385px] shadow-lg p-7 rounded-2xl flex flex-col  bg-base-100">
          <form
            onSubmit={handleSubmit(handleAddDoctor)}
            className="flex flex-col gap-3"
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <div className="relative">
                <input
                  {...register("name", { required: "this is a required" })}
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.name && (
                <p className="text-error">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Address</span>
              </label>
              <div className="relative">
                <input
                  {...register("address", { required: "this is a required" })}
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.address && (
                <p className="text-error">{errors.address?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <div className="relative">
                <input
                  {...register("resalePrice", {
                    required: "this is a required",
                  })}
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.resalePrice && (
                <p className="text-error">{errors.resalePrice?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <div className="relative">
                <input
                  {...register("originalPrice", {
                    required: "this is a required",
                  })}
                  min="0"
                  type="number"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.originalPrice && (
                <p className="text-error">{errors.originalPrice?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Condition</span>
              </label>
              <div className="relative">
                <select
                  {...register("condition", { required: "this is a required" })}
                  name="condition"
                  className="select select-bordered w-full "
                  required
                >
                  <option className="hidden" value="">
                    Select a Condition
                  </option>
                  <option className="" value="excellent">
                    Excellent
                  </option>
                  <option className="" value="good">
                    Good
                  </option>
                  <option className="" value="fair">
                    Fair
                  </option>
                </select>
              </div>
              {errors.condition && (
                <p className="text-error">{errors.condition?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Use of year</span>
              </label>
              <div className="relative">
                <input
                  {...register("useYear", {
                    required: "this is a required",
                  })}
                  min="0"
                  type="number"
                  className="input input-bordered w-full"
                />
              </div>
              {errors.useYear && (
                <p className="text-error">{errors.useYear?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <div className="relative">
                <select
                  {...register("category", { required: "this is a required" })}
                  name="category"
                  className="select select-bordered w-full "
                  required
                >
                  <option className="hidden" value="">
                    Select a Specialty
                  </option>
                  <option className="" value="apple">
                    Apple
                  </option>
                  <option className="" value="hp">
                    HP
                  </option>
                </select>
              </div>
              {errors.category && (
                <p className="text-error">{errors.category?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <div className="relative">
                <input
                  {...register("sellerName", {
                    required: "this is a required",
                  })}
                  type="text"
                  className="input input-bordered w-full"
                />
                <MdPerson className="absolute bottom-1/3 right-3" />
              </div>
              {errors.sellerName && (
                <p className="text-error">{errors.sellerName?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <div className="relative">
                <input
                  {...register("email", {
                    required: "this is a required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="input input-bordered w-full"
                />
                <MdAlternateEmail className="absolute bottom-1/3 right-3" />
              </div>
              {errors.email && (
                <p className="text-error">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Discretion</span>
              </label>
              <div className="relative">
                <textarea
                  {...register("discretion", {
                    required: "this is a required",
                  })}
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
              {errors.discretion && (
                <p className="text-error">{errors.discretion?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <div className="relative">
                <input
                  {...register("image", { required: "this is a required" })}
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </div>
              {errors.image && (
                <p className="text-error">{errors.image?.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label justify-start gap-5 cursor-pointer">
                <input
                  {...register("featured")}
                  type="checkbox"
                  className="checkbox"
                />
                <span className="label-text">Featured Product</span>
              </label>
            </div>

            <PrimaryBtn>Create Product</PrimaryBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
