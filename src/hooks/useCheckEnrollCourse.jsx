import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../context/AuthContext";

const useCheckEnrollCourse = (id) => {
    const { user } = useContext(AuthProvider)
    const [enrollCourses, setEnrollCourses] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/enroll-course?email=${user?.email}`)
            .then((response) => response.json())
            .then((data) => setEnrollCourses(data))
    }, [user?.email])
    const isEnroll = enrollCourses.find((enrollCourse) => enrollCourse.course_id === id)
    return isEnroll
};

export default useCheckEnrollCourse;