/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";

const UpdateCourse = () => {
    const { user } = useContext(AuthProvider)
    const navigate = useNavigate()
    const course = useLoaderData()
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }
    const { course_title, instructor, description, price, image_url, _id } = course

    const handelUpdateCourse = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const instructor = event.target.instructor.value
        const price = event.target.price.value
        const image_url = event.target.image.value
        const description = event.target.description.value
        const owner_email = user?.email

        const updateCourse = {
            course_title,
            description,
            instructor,
            image_url,
            owner_email,
            price
        }

        fetch(`http://localhost:5000/courses/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                authorization: `bearer ${localStorage.getItem("talent-lms-token")}`
            },
            body: JSON.stringify(updateCourse)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Product update successfully");
                    navigate("/manage-course")
                }
            })
    }

    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Update Course</h2>
            <form onSubmit={handelUpdateCourse} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" defaultValue={course_title} className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Instructor</label>
                        <input name='instructor' type="text" defaultValue={instructor} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6 justify-around mt-6'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Price</label>
                        <input name='price' defaultValue={price} type="text" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Image</label>
                        <input name='image' defaultValue={image_url} type="text" className="input input-bordered  w-full" />
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Description</label>
                        <textarea name='description' defaultValue={description} type="text" className="textarea textarea-bordered w-full h-36" ></textarea>
                    </div>
                </div>
                <div className='px-8'>
                    <button className='w-full btn btn-info text-white my-4'> Update Course </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCourse;