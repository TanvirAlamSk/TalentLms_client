import { useContext, useEffect, useState } from "react";
import ManageCourseCard from "../../components/Courses/ManageCourseCard";
import { AuthProvider } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ManageCourse = () => {
    const [myCourses, setMyCourses] = useState([])
    const { user } = useContext(AuthProvider)


    useEffect(() => {
        fetch(`http://localhost:5000/my-courses?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("talent-lms-token")}`
            }
        })
            .then((response) => response.json())
            .then((data) => setMyCourses(data))
    }, [user.email])

    const handelDelectProduct = (id) => {
        fetch(`http://localhost:5000/courses/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("talent-lms-token")}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                const restShoes = myCourses.filter((myCourse) => myCourse.id != id)
                setMyCourses(restShoes)
                if (data.acknowledged) {
                    toast.success("product delete successful")
                    const restCourse = myCourses.filter((myCourse) => myCourse._id != id)
                    setMyCourses(restCourse)
                }
            })
    }

    return (
        <div className="w-3/4 mx-auto mt-12 min-h-screen">
            <h3 className="text-2xl text-center">Manage My Courses</h3>
            <div >
                <div className="overflow-x-auto">
                    {
                        myCourses.length == 0
                            ?
                            <p className="text-center">You have No Course</p>
                            :
                            <table className="table table-zebra">


                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Owner</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        myCourses.length >= 0 &&
                                        myCourses.map((course, index) => <ManageCourseCard key={course._id} course={course}
                                            handelDelectProduct={handelDelectProduct}
                                            index={index}
                                        ></ManageCourseCard>)
                                    }

                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageCourse;