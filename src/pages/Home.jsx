import Banner from "../components/Home/Banner/Banner";
import Courses from "../components/Home/Courses";
import ProjectDescriptionSection from "../components/Home/ProjectDescriptionSection";
import Status from "../components/Home/Status";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <ProjectDescriptionSection></ProjectDescriptionSection>
            <Status></Status>
        </div>
    );
};

export default Home;