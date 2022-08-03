import styles from "../../../styles/Profil.module.css";
import { TextareaAutosize } from "@material-ui/core";
import { setProfilDesc } from "../../reducers/users/slice";
import { useDispatch } from "react-redux";

const DescForm = ({ data, form, errors }) => {
    const dispatch = useDispatch();
    const { description } = data;
    
    const handleChange = (e) => {
        const getName = e.target.getAttribute('name');
        dispatch(setProfilDesc({ ...form, [getName]: e.target.value }));
    };

    return (
        <div className={styles.form_desc}>
            Description
            <TextareaAutosize
                className={styles.form_desc__texte}
                aria-label="maximum height"
                minRows={8}
                placeholder="Quelques mots sur vous ?"
                name='description'
                defaultValue={description}
                value={form.description}
                style={{ width: 300 }}
                onChange={handleChange}
            />
            {errors.description && <p className={styles.error}>{errors.description}</p>}
        </div>

    );
};

export default DescForm;