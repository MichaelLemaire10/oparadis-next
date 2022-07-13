import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import imageLoader from "../../../imagesLoader";

function Cards({ obj }) {
  return (
        <article className={styles.section_down__article}>
          <Image
            loader={imageLoader}
            unoptimized
            width="350"
            height="350"
            src={obj.src}
            alt={obj.alt}
          />
          <p>{obj.desc}</p>
        </article>
  );
}

export default Cards;
