import { Button, TextField } from "@mui/material";

import styles from "../styles/Home.module.scss";


export default function CreatePlayer(){
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3>Cadastro de Membros</h3>
        <form action="" className={styles.form}>
          <TextField variant="outlined" size="small" label="Nome" />
          <TextField variant="outlined" size="small" label="Tipo" />
          <TextField variant="outlined" size="small" label="Idade" />
          <TextField variant="outlined" size="small" label="Posição" />
          <TextField variant="outlined" size="small" label="Time" />

          <Button variant="contained">Cadastrar</Button>
        </form>
      </div>
    </div>
  )
}