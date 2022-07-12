import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import imageLoader from "../../../imagesLoader";

function Cards() {
  const array = [
    {
      src: "https://res.cloudinary.com/dhwbw94lc/image/upload/v1655197687/image%20zen/zen1_etri1e.png",
      alt: "image cherche une destination",
      desc: "1. Chercher une destination",
    },
    {
      src: "https://res.cloudinary.com/dhwbw94lc/image/upload/v1655197687/image%20zen/zen2_t8dl4l.png",
      alt: "image choisir sa destination",
      desc: "2. Choisir sa destination",
    },
    {
      src: "https://res.cloudinary.com/dhwbw94lc/image/upload/v1655197687/image%20zen/zen1_etri1e.png",
      alt: "image profiter de votre destination",
      desc: "3. Profiter de votre destination",
    },
  ];

  return (
    array.map(({src, alt, desc}) => {
        <article className={styles.section_down__article}>
          <Image
            loader={imageLoader}
            unoptimized
            width="350"
            height="350"
            src={src}
            alt={alt}
          />
          <p>{desc}</p>
        </article>;
    })
    
  );
}

export default Cards;
