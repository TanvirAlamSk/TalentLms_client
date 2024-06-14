/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCoursesCard = ({ course }) => {
    const { course_title, instructor, image_url, _id } = course
    return (
        <div className="card bg-base-100 shadow-xl border-2 h-[400px] w-full">
            <figure className='rounded-lg'><img className=''
                src={image_url} alt="CourseImage" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-base">{course_title}</h2>
                <p className="text-sm">{instructor}</p>
                <div className="card-actions mt-5 mb-0 w-full">
                    <Link to={`/courses/${_id}`} className="w-full" >
                        <button className="btn-sm text-black font-semibold bg-slate-200 w-full mx-auto flex items-center justify-center rounded-md">
                            View Details <FaArrowRight className="ms-3"></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyCoursesCard;