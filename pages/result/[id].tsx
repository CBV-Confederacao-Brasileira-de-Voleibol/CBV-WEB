import styles from "../../styles/Result.module.scss";
import * as React from "react";
import {  TextField } from "@mui/material";


export default function Result() {
  return (
    <div className={styles.container}>
      <h1>Cadastro de resultados</h1>

      <div className={styles.contentContainer}>
        <div>
          <TextField label="Time 1" variant="outlined"/>
        </div>
        <h2>X</h2>
        <div>
          <TextField label="Time 2" variant="outlined" />
        </div>
      </div>

    </div>
  )
}
