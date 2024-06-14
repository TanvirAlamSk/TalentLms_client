import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../components/Shared/Loader";

const SingleCourse = () => {
    const course = useLoaderData()
    const navigation = useNavigation()
    const { image_url, title, instructor, description, price, _id } = course

    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    return (
        <div className="card bg-base-100 shadow-xl border-2 h-[720px] w-full">
            <figure className='rounded-lg m-4'><img className=''
                src={image_url} alt="CourseImage" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl m-0 p-0">{instructor}</p>
                <p>{description}</p>
                <small> {price} Taka</small>
                <div className="card-actions w-full md:w-3/4 mx-auto">
                    <Link to={`/payment/${_id}`} className="w-full">
                        <button className="btn-sm text-black text-center font-semibold bg-slate-200 w-full flex items-center justify-center rounded-md ">
                            Enroll <FaArrowRight className="ms-3"></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;