import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import { noImgHouse as img} from "../../../src/selectors/img";

function HomeLogo () {
    return (
        <Image
            priority
            unoptimized
            loader={imageLoader}
            src={img}
            width='2000'
            height='1500'
            alt="image house"
          />
    );
};

export default HomeLogo;