import React from "react";
import styles from "../../../styles/House.module.css";
import { Pagination, Stack, Typography } from "@mui/material";
import { ArrayAnimal } from "../../selectors/ArrayData";
import Card from "./CardAnimal";

function SectionAnimal() {
  const [page, setPage] = React.useState(1);
  const [animal, setAnimal] = React.useState("");

  React.useEffect(() => { setAnimal(ArrayAnimal.at(--page)) });

  console.log('animal:', animal);

  const handleChange = (e, value) => {
    setPage(value);
    setAnimal(ArrayAnimal.at(--page));
  };

  return (
    <section className={`${styles.animal} ${styles.card}`}>
      {/* <h3>Un ou plusieurs animaux</h3> */}
      <Card obj={animal} />
      <button><</button>
      {/* <Stack spacing={2}> */}
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination count={ArrayAnimal.length} page={page} onChange={handleChange} />
      {/* </Stack> */}
    </section>
  );
}

export default SectionAnimal;
