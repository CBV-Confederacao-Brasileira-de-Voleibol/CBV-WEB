import { Button, TextField } from "@mui/material";

import styles from "../styles/Home.module.scss";

export default function CreatePlayer() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3>Cadastro de Competições</h3>
        <form action="" className={styles.form}>
          <TextField
            variant="outlined"
            size="small"
            label="Nome da Competição"
          />
          <TextField variant="outlined" size="small" label="Tipo" />
          <TextField
            variant="outlined"
            size="small"
            label="Numero de Times Participantes"
          />
          <TextField variant="outlined" size="small" label="Data de Inicio" />
          <TextField variant="outlined" size="small" label="Estado" />

          <Button variant="contained">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
