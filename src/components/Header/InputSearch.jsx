import React from "react";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";

const Search = () => {
    const [search, setSearch] = React.useState('');
    // const dispatch = useDispatch();

    const handleChange = (e) => setSearch(e.target.value);
    const handleSearch = () => {
        setSearch('');
        // const arrayFilter = await houses.filter((city) => city === search);
        // dispatch(getHouses(arrayFilter));
    };
    return (
        <div className={styles.div_handles}>
            <input
                className={styles.div_handles_input}
                type="text"
                placeholder="Où souhaitez-vous aller ?"
                value={search}
                onChange={handleChange}
            />
            <Link href='/result-search'>
                <a className={styles.div_handles_link} onClick={handleSearch}>Rechercher</a>
            </Link>
        </div>
    )
};

export default Search;