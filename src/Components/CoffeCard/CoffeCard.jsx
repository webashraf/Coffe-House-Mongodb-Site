import { AiFillEye } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
const CoffeCard = ({ coffee }) => {
  const { name, photo, chef, taste, category, _id } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        _id && Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }





  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="card-body text-left flex-row justify-between w-full">
        <div>
          <h2 className="card-title mb-2">{name}</h2>
          <p className="mb-2"><span className="font-bold">Chef :</span> {chef}</p>
          <p className="mb-2"><span className="font-bold">Flavor :</span> {taste}</p>
          <p className="mb-2"><span className="font-bold">Category :</span> {category}</p>
        </div>
        <div className="card-actions">
          <div className="flex flex-col justify-evenly h-full ">
            <button className="bg-[#D2B48C] p-2 rounded-lg"><AiFillEye className='text-xl text-white'></AiFillEye></button>
            <button className="bg-[#3C393B] p-2 rounded-lg"><BsPencilSquare className='text-xl text-white'></BsPencilSquare></button>
            <button  onClick={() =>handleDelete(_id)} className="bg-[#EA4744] p-2 rounded-lg"><MdDelete className='text-xl text-white'></MdDelete></button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
