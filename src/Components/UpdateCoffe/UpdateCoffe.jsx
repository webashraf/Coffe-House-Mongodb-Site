import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {

    const coffeeDatas = useLoaderData();

    console.log(coffeeDatas);

    const handleForm = event =>{
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const coffee = {name, supplier, category, chef, taste, details, photo};
    
        fetch(`http://localhost:5000/coffee/${coffeeDatas._id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          data.modifiedCount &&
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
    
        console.log(coffee);
    
    
      }


  return (
    <div>
      <form
        onSubmit={handleForm}
        className=" min-h-screen bg-[#F4F3F0] flex-row shadow-2xl p-20"
      >
        <div className="hero-content flex-col lg:flex-row ">
          <div className="card flex-shrink-0 w-full max-w-[36rem] ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={coffeeDatas.name}
                  name="name"
                  placeholder="Enter coffe name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Supplier</span>
                </label>
                <input
                  type="text"
                  defaultValue={coffeeDatas.supplier}
                  name="supplier"
                  placeholder="Enter coffe supplier"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Category</span>
                </label>
                <input
                  type="text"
                  defaultValue={coffeeDatas.category}
                  name="category"
                  placeholder="Enter coffe category"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-[36rem] ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Chef</span>
                </label>
                <input
                  type="text"
                  defaultValue={coffeeDatas.chef}
                  name="chef"
                  placeholder="Enter coffe chef"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Taste</span>
                </label>
                <input
                  type="text"
                  defaultValue={coffeeDatas.taste}
                  name="taste"
                  placeholder="Enter coffe teste"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Details</span>
                </label>
                <input
                  type="text"
                  defaultValue={coffeeDatas.details}
                  name="details"
                  placeholder="Enter coffe details"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl">Photo</span>
          </label>
          <input
            type="text"
            defaultValue={coffeeDatas.photo}
            name="photo"
            placeholder="Photo Url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn " value="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffe;
