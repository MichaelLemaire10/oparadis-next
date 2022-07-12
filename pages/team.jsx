import Image from "next/image";
import { ImageList, ImageListItem } from "@material-ui/core";
import imageLoader from "../imagesLoader";
import styles from "../styles/Footer.module.css";

const Team = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Dev Front',
          author: 'Michaël',
        },
        {
          img: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Dev Back',
          author: 'Kerstone',
        },
      ];
    return(
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
    )
}

export default Team;