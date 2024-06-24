/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../../context/AuthContext";
import useCheckEnrollCourse from "../../../../hooks/useCheckEnrollCourse";

const CourseCard = ({ course }) => {
    const { user } = useContext(AuthProvider)
    const { course_title, instructor, image_url, _id, owner_email } = course

    const isEnroll = useCheckEnrollCourse(_id)
    return (
        <div className="card bg-base-100 shadow-xl border-2 h-[400px] w-full">
            <figure className='rounded-lg'><img className=''
                src={image_url} alt="CourseImage" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-base">{course_title}</h2>
                <p className="text-sm">Instructor : {instructor}</p>
                {
                    user?.email === owner_email &&
                    <div className="badge badge-outline badge-success">Your Course</div>
                }
                <div className="card-actions mt-5 mb-0 w-full">
                    {
                        user?.email === owner_email ?
                            <Link to="/manage-course" className="w-full">
                                <button className="btn-sm text-black font-semibold bg-slate-100 w-full mx-auto flex items-center justify-center rounded-md">
                                    Manage Course <FaArrowRight className="ms-3"></FaArrowRight>
                                </button>
                            </Link>
                            :

                            isEnroll ?
                                // <Link to="/content" className="w-full" >
                                <button className="btn-sm text-white font-semibold bg-green-600 w-full mx-auto flex items-center justify-center rounded-md ">
                                    Already Enrolled <FaArrowRight className="ms-3"></FaArrowRight>
                                </button>
                                //</Link>
                                :
                                <Link to={`/courses/${_id}`} className="w-full" >
                                    <button className="btn-sm text-black font-semibold bg-slate-200 w-full mx-auto flex items-center justify-center rounded-md">
                                        View Details <FaArrowRight className="ms-3"></FaArrowRight>
                                    </button>
                                </Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default CourseCard;