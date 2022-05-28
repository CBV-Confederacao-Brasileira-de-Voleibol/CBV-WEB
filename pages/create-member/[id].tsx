import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { Select } from "../../components/Select";
import styles from "../../styles/CreateMember.module.scss"
import { http } from "../../utils/http";


export default function CreateMember(){
  const {push, query: {id}} = useRouter()
  const {handleSubmit, control, watch} = useForm();
  const type = watch("type");

  async function onSubmit(data){
    try {
      await http.post("member", {...data, team_id: id});
      toast.success("Membro cadastrado com sucesso!");
      push(`/team/${id}`);
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Controller
            name="name"
            control={control}
            render={({field: {value, onChange}}) => (        
              <TextField
                variant="outlined"
                size="small"
                value={value}
                onChange={onChange}
                label="Nome"
              />
            )}
          />
          <Controller
            name="type"
            control={control}
            render={({field: {value, onChange}}) => (        
              <Select 
                label="Tipo"
                labelId="type"
                onChange={onChange}
                options={[
                  { value: "atleta", label: "Atleta" },
                  { value: "tecnico", label: "Técnico" },
                  { value: "comissao-tecnica", label: "Comissão Técnica" },
                  { value: "medico", label: "Médico" },
                  { value: "dirigente", label: "Dirigente" },
                ]}
                value={value}
              />
            )}
          />
          <div className={styles.birthDate}>
          <label htmlFor="age">Data de nascimento</label>
          <Controller
            name="age"
            control={control}
            render={({field: {value, onChange}}) => (        
              <TextField 
                variant="outlined" 
                size="small" 
                name="age"
                type="date" 
                onChange={onChange}
                value={value}
                />
                )}
                />
          </div>
          <Controller
            name="position"
            control={control}
            render={({field: {value, onChange}}) => (        
              <Select 
                label="Posição"
                labelId="position"
                onChange={onChange}
                disabled={type !== "atleta"}
                options={[
                  { value: "ponteiro", label: "Ponteiro" },
                  { value: "libero", label: "Libero" },
                  { value: "levantador", label: "Levantador" },
                  { value: "oposto", label: "Oposto" },
                  { value: "central", label: "Central" },
                ]}
                value={value}
              />          

            )}
          />
          <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
      </div>
    </div>
  )
}