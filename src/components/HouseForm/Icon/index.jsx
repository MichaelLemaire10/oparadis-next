import React from "react";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import styles from "../../../../styles/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setHouseFormBool } from "../../../reducers/houses/slice";

const IconForm = ({obj}) => {
    const dispatch = useDispatch();
    const { houseFormBool } = useSelector( state=> state.houses);
    
    let bool;
    for (const key in houseFormBool) if (key === obj.name) bool = houseFormBool[key];

    const handleOnChange = (e) => {
        const getName = e.target.getAttribute('name');
        dispatch(setHouseFormBool({ ...houseFormBool, [getName]: !houseFormBool[getName] }));
    };

    return (
        <label htmlFor={obj.name} className={styles.icon}>
            <input
                className={styles.displayNone}
                type="checkbox"
                id={obj.name}
                name={obj.name}
                checked={houseFormBool[obj.name]}
                onChange={handleOnChange}
            />
            <Image
                src={obj.src}
                className={houseFormBool[obj.name] ? `${styles.icon_img}` : `${styles.icon_img_false}`}
                loader={imagesLoader}
                unoptimized
                width="64"
                height="64"
                alt={obj.alt}
            />
        </label>
    )
};

export default IconForm;