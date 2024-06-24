import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import EnrollCourseCard from "../../components/Courses/EnrollCourseCard";

const MyCourse = () => {
    const { user } = useContext(AuthProvider)
    const [enrollCoueses, setEnrollCourses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/enroll-course?email=${user?.email}`)
            .then((response) => response.json())
            .then((data) => setEnrollCourses(data))
    }, [user?.email])

    return (
        <div className="w-full min-h-screen">
            <p className="text-2xl font-bold">My Enroll Courses</p>
            {enrollCoueses.length === 0 ?
                <p>You have not enrolled in any courses yet</p>
                :
                <div className="bg-base-100 grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 md:mt-12">

                    {
                        enrollCoueses.map((enrollCouese) => <EnrollCourseCard key={enrollCouese._id} enrollCouese={enrollCouese} />)
                    }

                </div>
            }

        </div>
    );
};

export default MyCourse;