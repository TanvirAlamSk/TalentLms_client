import BannerSectionItem from "./BannerSectionItem/BannerSectionItem";
import carosel1 from "../../../assets/BannerImage/carousel-1.jpg"
import carosel2 from "../../../assets/BannerImage/carousel-2.jpg"
import carosel3 from "../../../assets/BannerImage/carousel-3.jpg"
const Banner = () => {
    const images = [carosel1, carosel2, carosel3]
    return (
        <div className='mx-0'>
            <div className="carousel w-full">
                {
                    images.map((image, i) => <BannerSectionItem key={i} i={i} image={image}></BannerSectionItem>)
                }
            </div>
        </div>
    );
};

export default Banner;