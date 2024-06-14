import { useEffect, useState } from "react";
import CourseCard from "../components/Home/CourseCard";

const AllCourse = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://talentlms-server.onrender.com/courses")
            .then((response) => response.json())
            .then((data) => setCourses(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses.map((course) => <CourseCard img={`img${course.id}`} key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default AllCourse;