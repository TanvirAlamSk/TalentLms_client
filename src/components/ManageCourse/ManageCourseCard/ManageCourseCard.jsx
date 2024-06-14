/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ManageCourseCard = ({ myCourse, index, handelDelectProduct }) => {
    const { title, instructor, price, id } = myCourse
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{instructor}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td className='flex gap-2'>
                <Link to={`/update-course/${id}`}>
                    <button className='btn btn-sm btn-success text-white'>Update</button>
                </Link>
                <button onClick={() => handelDelectProduct(id)} className='btn btn-sm btn-error text-white'>Delate</button>
            </td>
        </tr>
    );
};

export default ManageCourseCard;