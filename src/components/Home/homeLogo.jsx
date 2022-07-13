import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import img from "../../../public/house.jpg";

function HomeLogo () {
    return (
        <Image
            priority
            loader={imageLoader}
            unoptimized
            src={img}
            alt="image house"
          />
    );
};

export default HomeLogo;