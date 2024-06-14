/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { title, instructor, img, id } = course
    return (
        <div className="card bg-base-100 shadow-xl border-2 h-[400px] w-full">
            <figure className='rounded-lg'><img className=''
                src={img} alt="CourseImage" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-base">{title}</h2>
                <p className="text-sm">{instructor}</p>
                <div className="card-actions mt-5 mb-0 w-full">
                    <Link state={location.pathname} to={`/${id}`} className="w-full" >
                        <button className="btn-sm text-black font-semibold bg-slate-200 w-full mx-auto flex items-center justify-center rounded-md">
                            View Details <FaArrowRight className="ms-3"></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;