import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../context/AnthContext";
import MyCoursesCard from "../components/MyCourses/MyCoursesCard";

const MyCourse = () => {
    const { user } = useContext(contextProvider)
    console.log(user)

    const [myCourse, setMyCourse] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000//my-courses?email=${user.email}`)
            .then((response) => response.json())
            .then((data) => setMyCourse(data))
    }, [user.email])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                myCourse.map((course) => <MyCoursesCard key={course.id} course={course}></MyCoursesCard>)
            }
        </div>
    );
};

export default MyCourse;