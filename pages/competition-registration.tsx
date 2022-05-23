import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { Select } from "../components/Select";

import styles from "../styles/Home.module.scss";

export default function CompetitionRegistration() {
  const [type, setType] = useState<string>();

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <FormControl fullWidth className={styles.form}>
          <TextField
            variant="outlined"
            size="small"
            label="Nome da Competição"
          />
          
          <TextField variant="outlined" size="small" label="Descrição" />
          <Select 
              label="Tipo" 
              labelId="competition-type" 
              onChange={e => setType(e.target.value)} 
              options={[
                {label: "Masculina", value: "masculina"},
                {label: "Feminina", value: "feminina"},
                {label: "Juvenil Feminina", value: "juvenil-feminina"},
                {label: "Juvenil Masculina", value: "juvenil-masculina"},
              ]}
              value={type}
            />          
            <TextField variant="outlined" size="small" label="Data de Inicio" />
          <TextField variant="outlined" size="small" label="Data de Fim" />

          <Button variant="contained">Cadastrar</Button>
        </FormControl>
      </div>
    </div>
  );
}
