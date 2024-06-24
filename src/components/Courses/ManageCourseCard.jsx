import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ManageCourseCard = ({ course, index, handelDelectProduct }) => {
    const { course_title, instructor, price, _id } = course
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{instructor}</td>
            <td>{course_title}</td>
            <td>{price}</td>
            <td className='flex gap-2'>
                <Link to={`/update-course/${_id}`}>
                    <button className='btn btn-sm btn-success text-white'>Update</button>
                </Link>
                <button onClick={() => handelDelectProduct(_id)} className='btn btn-sm btn-error text-white'>Delate</button>
            </td>
        </tr>
    );
};

export default ManageCourseCard;