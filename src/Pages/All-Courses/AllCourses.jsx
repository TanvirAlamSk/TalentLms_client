import { useEffect, useState } from "react";
import CourseCard from "../../components/Home/Courses/CourseCard/CourseCard";

const AllCourses = () => {
    const [allCourse, setAllCourse] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then((response) => response.json())
            .then((data) => setAllCourse(data))
    }, [])
    return (
        <div>
            <h3 className="text-3xl font-bold mb-5 text-center">All Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allCourse.map((course) => <CourseCard img={`img${course.id}`} key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCourses;