/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EnrollCourseCard = ({ enrollCouese }) => {
    const { course_title, image_url, course_id } = enrollCouese

    return (
        <div className="card card-compact bg-base-100 md:w-80 shadow-xl border-2">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{course_title}</h2>
                <div className="card-actions w-full mt-20">
                    <Link to={`/content/${course_id}`} className="w-full" >
                        <button className="btn bg-sky-950 w-full text-white hover:bg-blue-900">Complete This Course <FaArrowRight className="ms-2"></FaArrowRight></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default EnrollCourseCard;