import styles from "../../../styles/Profil.module.css";
import { TextareaAutosize } from "@material-ui/core";
import { setProfilDesc } from "../../reducers/users/slice";
import { useDispatch } from "react-redux";

const DescForm = ({ data, form, errors }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => dispatch(setProfilDesc({ ...form, description: e.target.value }));

    return (
        <div className={errors.description ? `${styles.form_desc} ${styles.error}` : styles.form_desc}>
            Description {errors.description ? errors.description : ''}
            <TextareaAutosize
                className={styles.form_desc__texte}
                aria-label="maximum height"
                minRows={4}
                placeholder="Quelques mots sur vous ?"
                name='description'
                value={form.description ? form.description : data.description}
                style={{ width: 300 }}
                onChange={handleChange}
            />
            <p className={form.description.length > 150 ? styles.error : styles.desc_char}>
                {form.description.length ?
                    form.description.length 
                    : 
                    data.description.length}
                    /150 caractères max
            </p>
        </div>

    );
};

export default DescForm;