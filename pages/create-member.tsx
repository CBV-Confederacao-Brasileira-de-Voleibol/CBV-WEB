import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Select } from "../components/Select";
import styles from "../styles/CreateMember.module.scss"


export default function CreatePlayer(){

  const [type, setType] = useState<string>();
  const [position, setPosition] = useState<string>();

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form action="" className={styles.form}>
          <TextField variant="outlined" size="small" label="Nome" />
      	  <Select 
            label="Tipo"
            labelId="type"
            onChange={e => setType(e.target.value)}
            options={[
              { value: "atleta", label: "Atleta" },
              { value: "tecnico", label: "Técnico" },
              { value: "comissao-tecnica", label: "Comissão Técnica" },
              { value: "medico", label: "Médico" },
              { value: "dirigente", label: "Dirigente" },
            ]}
            value={type}
          />
          <TextField variant="outlined" size="small" label="Data de nascimento" />
          <Select 
            label="Posição"
            labelId="position"
            onChange={e => setPosition(e.target.value)}
            disabled={type !== "atleta"}
            options={[
              { value: "ponteiro", label: "Ponteiro" },
              { value: "libero", label: "Libero" },
              { value: "levantador", label: "Levantador" },
              { value: "oposto", label: "Oposto" },
              { value: "central", label: "Central" },
            ]}
            value={position}
          />          
          <TextField variant="outlined" size="small" label="Time" />
          <Button variant="contained">Cadastrar</Button>
        </form>
      </div>
    </div>
  )
}