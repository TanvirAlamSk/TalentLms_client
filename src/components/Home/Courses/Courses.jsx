import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SecondaryLoader from "../../Shared/SecondaryLoader";
import CourseCard from "./CourseCard/CourseCard";

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://talentlms-server.onrender.com/courses")
            .then((response) => response.json())
            .then((data) => setCourses(data))
    }, [])
    return (
        <div>
            <div className="flex items-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">Foundation Course</h3>
                <Link to="/all-course">
                    <button className="btn btn-sm btn-warning md:font-bold rounded-md ms-4 px-5">
                        See All
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.length == 0 ?
                    <SecondaryLoader></SecondaryLoader>
                    :
                    courses.slice(0, 3).map((course) => <CourseCard key={course._id} course={course}></CourseCard>)
                }

            </div>
        </div>
    );
};

export default Courses;