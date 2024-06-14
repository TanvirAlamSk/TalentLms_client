import toast from "react-hot-toast";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/Shared/Loader";

const UpdateCourse = () => {
    const course = useLoaderData()
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }
    const { title, instructor, description, price, img, id } = course[0]

    const handelUpdateCourse = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const instructor = event.target.instructor.value
        const price = event.target.price.value
        const image = event.target.image.value
        const description = event.target.description.value

        const updateCourse = {
            title,
            instructor,
            description,
            price,
            image,
        }

        fetch(`http://localhost:3000/courses?id=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(updateCourse)
        })
            .then((response) => response.json())
            .then(() => {
                console.log("hallo")
                toast.success("Product update successfully")
            })

    }
    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Update Course</h2>
            <form onSubmit={handelUpdateCourse} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" defaultValue={title} className="input input-bordered w-full" />
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
                        <input name='image' defaultValue={img} type="text" className="input input-bordered  w-full" />
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