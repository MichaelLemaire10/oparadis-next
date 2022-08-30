import React from "react";
import styles from "../../../styles/Header.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, getSearchHouses } from "../../reducers/houses/slice";
import { useGetHousesQuery } from '../../services/house';

const Search = () => {
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.houses);
    const { data, refetch } = useGetHousesQuery({ skip: true });

    React.useEffect(() => {
      dispatch(getSearchHouses(data));
    }, [data]);

    const handleChange = (e) => dispatch(setSearch(e.target.value));

    const handleSearch = () => {
        refetch();
        data ? data : data = [];
        if (search === '') {
            dispatch(getSearchHouses(data));
        } else {
            const arrayFilter = data.filter(({ city }) =>
            city.toLowerCase().includes(search.toLowerCase()));
            dispatch(getSearchHouses(arrayFilter));
        };
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