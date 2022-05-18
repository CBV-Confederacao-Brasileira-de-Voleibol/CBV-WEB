import { Button, TextField } from "@mui/material";

import styles from "../styles/Home.module.scss";


export default function CreateTeams(){
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
          <h3>Cadastro de equipes</h3>
          <form action="">
            <TextField variant="outlined" size="small" label="Nome do time" />
            <Button variant="outlined" component="label">
              Escudo do time
              <input type="file" hidden />
            </Button>
            <Button variant="contained">Cadastrar</Button>
          </form>
        </div>
    </div>
  )
}