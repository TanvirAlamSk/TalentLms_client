/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../../context/AuthContext";

const AddCourse = () => {
    const { user } = useContext(AuthProvider)
    const handelAddProduct = (event) => {
        event.preventDefault();
        const instructor = event.target.instructor.value
        const course_title = event.target.title.value
        const price = event.target.price.value
        const image_url = event.target.image.value
        const img = event.target.image.value
        const description = event.target.description.value
        const owner_email = user?.email

        const newCourse = {
            course_title,
            description,
            instructor,
            image_url,
            owner_email,
            price
        }

        fetch("https://talentlms-server.onrender.com/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "authorization": `bearer ${localStorage.getItem("recipe-easy-token")}`
            },
            body: JSON.stringify(newCourse)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                toast.success("product Added Successfully")
                event.target.reset()
                // if (data.acknowledged) {
                //     toast.success("product Added Successfully")
                //     event.target.reset()
                // }
            }).catch((error) => alert(error))
    }

    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Add A New Course</h2>
            <form onSubmit={handelAddProduct} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" placeholder="title" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Instructor</label>
                        <input name='instructor' type="text" placeholder="instructor name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6 justify-around mt-6'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Price</label>
                        <input name='price' type="text" placeholder="price" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Image</label>
                        <input name='image' type="text" placeholder="image" className="input input-bordered  w-full" />
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Description</label>
                        <textarea name='description' type="text" placeholder="description" className="textarea textarea-bordered w-full h-36"></textarea>
                    </div>
                </div>
                <div className='px-'>
                    <button className='w-full btn btn-info text-white my-4'>Add Course</button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;