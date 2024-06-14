import toast from "react-hot-toast";

const AddNewCourse = () => {

    const handelAddProduct = (event) => {
        event.preventDefault();
        const instructor = event.target.instructor.value
        const title = event.target.title.value
        const price = event.target.price.value
        const image = event.target.image.value
        const description = event.target.description.value

        const newProduct = {
            title,
            instructor,
            description,
            price,
            image
        }

        fetch("http://localhost:3000/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("product Added Successfully")
                    event.target.reset()
                }
            })
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
                    <button className='w-full btn btn-info text-white my-4'>Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewCourse;