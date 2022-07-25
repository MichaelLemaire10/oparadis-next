import styles from "../../../styles/Profil.module.css";
import { TextareaAutosize } from "@material-ui/core";

const DescForm = () => {
    const handleChange = (e) => { 
        // console.log(e.target.value) 
    };

    return (
        <div className={styles.form_desc}>
            Description
            <TextareaAutosize
                className={styles.form_desc__texte}
                aria-label="maximum height"
                minRows={8}
                placeholder="Quelques mots sur vous ?"
                style={{ width: 300 }}
                onChange={handleChange}
            />
        </div>
        
    );
};

export default DescForm;