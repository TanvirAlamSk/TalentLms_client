import { } from "react-icons/si";

const Status = () => {
    return (
        <div className="stats shadow stats-vertical md:stats-horizontal bg-slate-50 w-full mt-20 mb-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    {/* <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src="https://cdn-icons-png.freepik.com/512/5045/5045878.png" alt='' />
                        </div>
                    </div> */}
                </div>
                <div className="stat-value text-">1 Million+</div>
                <div className="stat-title"> Registered Flavoriz Users</div>
                <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
                <div className="stat-figure ">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> */}
                    {/* <SiCodechef className="inline-block w-12 h-12 stroke-current text-secondary" /> */}
                </div>
                <div className="stat-value text-[#FF5C67]">5,000+</div>
                <div className="stat-title">Verified Chefs in Community</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
                </div>
                <div className="stat-value text-warning"> 98%</div>
                <div className="stat-title">User Satisfaction Rate</div>
                <div className="stat-desc text-[#FF5C67]">They are all regular users</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    {/* <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='' />
                            </div>
                        </div> */}
                </div>
                <div className="stat-value text-[#FF5C67]"> 10,000+</div>
                <div className="stat-title">Officially Published Recipes</div>
                <div className="stat-desc text-[#FF5C67]">31 tasks remaining</div>
            </div>
        </div>
    );
};

export default Status;