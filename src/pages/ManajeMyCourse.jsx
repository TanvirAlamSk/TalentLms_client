import { useLoaderData, useNavigation } from "react-router-dom";
import ManageCourseCard from "../components/ManageCourse/ManageCourseCard/ManageCourseCard";
import toast from "react-hot-toast";
import Loader from "../components/Shared/Loader";

const ManajeMyCourse = () => {
    const myCourses = useLoaderData()

    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    const handelDelectProduct = (id) => {
        fetch(`http://localhost:3000/courses?id=${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    // const restShoes = shoes.filter((shoe) => shoe._id != id)
                    toast.success("product delete successful")
                }
            })
    }
    return (
        <div className="w-3/4 mx-auto mt-12">
            <h3 className="text-2xl text-center">Manage All Recipes</h3>
            <div >
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Model</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myCourses.map((myCourse, index) => <ManageCourseCard key={myCourse.id} myCourse={myCourse}
                                    handelDelectProduct={handelDelectProduct}
                                    index={index}
                                ></ManageCourseCard>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManajeMyCourse;