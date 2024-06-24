import { useContext } from 'react';
import video from '../../assets/Video/7 Data Structures that Every Programmers.mp4';
import { AuthProvider } from '../../context/AuthContext';
import { Navigate, useLoaderData } from 'react-router-dom';

const Content = () => {
    const course = useLoaderData()
    const { course_title, instructor, student_email } = course
    const { user } = useContext(AuthProvider)


    if (student_email !== user?.email) {
        return <Navigate to="/all-course"></Navigate>
    } else {
        return (
            <div>
                <h2 className='text-2xl mb-4 font-bold'>{course_title}</h2>
                <div className='w-full flex justify-center'>
                    <video className='h-[300px] md:h-[500px]' width="750" controls >
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
                <small>{instructor}</small>
            </div>
        );
    }

};

export default Content;