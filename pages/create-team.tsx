import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Select } from "../components/Select";


import styles from "../styles/CreateTeam.module.scss";


export default function CreateTeams(){
  const [option, setOption] = useState<string>();

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
          <form action="" className={styles.form}>
            <TextField variant="outlined" size="small" label="Nome do time" />
            <Select 
              label="Liga" 
              labelId="ligas" 
              onChange={e => setOption(e.target.value)} 
              options={[
                {label: "liga 1", value: "liga1"},
                {label: "liga 2", value: "liga2"},
                {label: "liga 3", value: "liga3"},
                {label: "liga 4", value: "liga4"},
                {label: "liga 5", value: "liga5"}
              ]}
              value={option}
            />
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