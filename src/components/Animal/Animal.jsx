import React from "react";
import styles from "../../../styles/House.module.css";
import { Pagination, Stack, Typography } from "@mui/material";
import { ArrayAnimal } from "../../selectors/ArrayData";
import Card from "./CardAnimal";

function SectionAnimal() {
  const [page, setPage] = React.useState(1);
  const handleChange = (e, value) => {
    setPage(value);
  };

  // console.log(ArrayAnimal);

  return (
    <section className={`${styles.animal} ${styles.card}`}>
      {/* <h3>Un ou plusieurs animaux</h3> */}
      {ArrayAnimal.map( a => <Card key={a.id} obj={a} /> )}
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={ArrayAnimal.length} page={page} onChange={handleChange} />
      </Stack>
    </section>
  );
}

export default SectionAnimal;
