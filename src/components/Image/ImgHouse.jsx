import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import { noImgHouse } from "../../selectors/img";

function ImgHouse ({ data, custom }) {
return (
   <Image
        loader={imageLoader}
        unoptimized
        className={custom.styles}
        src={data.photo ? data.photo : noImgHouse}
        alt="image house"
        width={custom.width}
        height={custom.height}
    />
    )
};

export default ImgHouse;