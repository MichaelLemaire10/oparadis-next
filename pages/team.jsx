import Image from "next/image";
import { ImageList, ImageListItem } from "@material-ui/core";
import imageLoader from "../imagesLoader";
import styles from "../styles/Footer.module.css";
import { itemData } from "../src/selectors/data";

const Team = () => {

  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem className={styles.main} key={item.img}>
          <div className={styles.team}>
            <Image
              className={styles.team_image}
              loader={imageLoader}
              unoptimized
              width="400"
              height="500"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
            />
            <p className={styles.team_author}>
              {item.author} - {item.title}
            </p>
          </div>
        </ImageListItem>

      ))}
    </ImageList>
  );
};

export default Team;