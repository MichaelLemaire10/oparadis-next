import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import { noImgHouse as img } from "../../selectors/img";

function ImgHouse ({ data, custom }) {
return (
   <Image
        loader={imageLoader}
        unoptimized
        className={custom.styles}
        src={data.photo ? data.photo : img}
        alt="image house"
        width={custom.width}
        height={custom.height}
    />
    )
};

export default ImgHouse;