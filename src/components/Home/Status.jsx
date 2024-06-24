import { } from "react-icons/si";

const Status = () => {
    return (
        <div className="stats shadow stats-vertical md:stats-horizontal bg-slate-50 w-full mt-20 mb-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="stat">
                <div className="stat-figure text-secondary">
                </div>
                <div className="stat-value text-">1 Million+</div>
                <div className="stat-title"> Registered Flavoriz Users</div>
                <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
                <div className="stat-figure ">
                </div>
                <div className="stat-value text-[#FF5C67]">5,000+</div>
                <div className="stat-title">Verified Chefs in Community</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                </div>
                <div className="stat-value text-warning"> 98%</div>
                <div className="stat-title">User Satisfaction Rate</div>
                <div className="stat-desc text-[#FF5C67]">They are all regular users</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                </div>
                <div className="stat-value text-[#FF5C67]"> 10,000+</div>
                <div className="stat-title">Officially Published Recipes</div>
                <div className="stat-desc text-[#FF5C67]">31 tasks remaining</div>
            </div>
        </div>
    );
};

export default Status;