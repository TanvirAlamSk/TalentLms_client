import { useContext } from "react";
import Banner from "../../components/Home/Banner/Banner";
import Courses from "../../components/Home/Courses/Courses";
import ProjectDescriptionSection from "../../components/Home/ProjectDescriptionSection";
import Status from "../../components/Home/Status";
import { AuthProvider } from "../../context/AuthContext";

const Home = () => {
    const { user } = useContext(AuthProvider)
    return (
        <div>
            <p>{user.email}</p>
            <Banner></Banner>
            <Courses></Courses>
            <ProjectDescriptionSection></ProjectDescriptionSection>
            <Status></Status>
        </div>
    );
};

export default Home;