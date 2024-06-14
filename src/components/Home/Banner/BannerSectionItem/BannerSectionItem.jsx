/* eslint-disable react/prop-types */
import { FaBookReader, FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerSectionItem = ({ image, i }) => {
    let prev, next;
    if (i == 0) {
        prev = 2
    } else {
        prev = i - 1
    }


    if (i == 2) {
        next = 0
    } else {
        next = i + 1
    }
    return (
        <div id={`slide${i}`} className="carousel-item relative w-full mb-10 md:mb-20 rounded">
            <img src={image} className="w-full bg-slate-900 rounded" alt='' />
            <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-2/3">

                <div className='hidden md:inline-block'>
                    <a href={`#slide${prev}`} className=" btn btn-warning  btn-circle ">❮</a>
                </div>

                <div className=' text-left carousel-text'>
                    <h3 className='text-white text-xl lg:font-semibold'>BEST ONLINE COURSES</h3>
                    <h1 className='text-white lg:text-6xl font-bold '>Best Education From<br></br> Your Home</h1>
                    <button className="btn btn-warning text-black font-bold mt-5 ml-2">Learn More</button>
                    {/* ------------------------------------------------------- */}
                    <div className='mt-10 hidden lg:block '>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className="card card-side w-68 bg-base-300 py-0 px-4">
                                <figure>
                                    <FaChalkboardTeacher className='w-12 text-yellow-500' ></FaChalkboardTeacher>
                                </figure>

                                <div className="card-body mb-2">
                                    <h2 className="card-subtitle font-bold">BEST INDUSTRY <br></br> LEADERS</h2>
                                    <Link to=""><button className=" btn btn-sm btn-warning ">Visit</button></Link>

                                </div>
                            </div>
                            <div className="card card-side w-68 bg-base-300  py-0 px-4 ">
                                <figure>
                                    <FaBookReader className='w-12 text-yellow-500' ></FaBookReader>
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-subtitle font-bold">LEARN COURSES <br></br> ONLINE</h2>
                                    <Link to=""><button className=" btn btn-sm btn-warning ">Visit</button></Link>
                                </div>
                            </div>
                            <div className="card card-side w-68 bg-base-300 px-4  py-0 ">
                                <figure>
                                    <FaSchool className='w-12 text-yellow-500' ></FaSchool>
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-subtitle font-bold">BOOK LIBRARY & <br></br>STORE</h2>
                                    <Link to=""><button className=" btn btn-sm btn-warning ">Visit</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden md:inline-block'>
                    <a href={`#slide${next}`} className="btn btn-warning btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default BannerSectionItem;