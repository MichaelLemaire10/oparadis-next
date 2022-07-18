import Image from "next/image";
import imageLoader from "../../imagesLoader";
import img from '../../public/house.jpg'
import styles from "../../styles/Home.module.css";

function ImgHouse ({ data, custom }) {
    console.log('data', data);
return (
   <Image
        loader={imageLoader}
        unoptimized
        className={custom.styles}
        src={data.main_photo ? data.photo : img}
        alt="image house"
        width={custom.width}
        height={custom.height}
    />
    )
};

export default ImgHouse;