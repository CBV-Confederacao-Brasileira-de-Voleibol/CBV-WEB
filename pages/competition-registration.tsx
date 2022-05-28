import { Button, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { Select } from "../components/Select";

import styles from "../styles/Home.module.scss";
import { http } from "../utils/http";

export default function CompetitionRegistration() {
  const router = useRouter();

  const {handleSubmit, control} = useForm();

  async function onSubmit(data){
    try {
      await http.post("competition", data);
      toast.success("Competição cadastrada com sucesso!");
      router.push("/");
      
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({field: {value, onChange}}) => (        
              <TextField
                variant="outlined"
                size="small"
                name="name"
                value={value}
                onChange={onChange}
                label="Nome da Competição"
              />
            )}
          />
          {/* <Controller
            name="description"
            control={control}
            render={({field: {value, onChange}}) => (     
              <TextField 
                variant="outlined" 
                size="small" 
                label="Descrição"
                value={value}
                onChange={onChange}
              />
            )}
          /> */}
          <Controller
            name="type"
            control={control}
            render={({field: {value, onChange}}) => (             
              <Select 
                  label="Tipo" 
                  labelId="competition-type" 
                  options={[
                    {label: "Masculina", value: "Masculino"},
                    {label: "Feminina", value: "Feminina"},
                    {label: "Juvenil Feminina", value: "Juvenil Feminina"},
                    {label: "Juvenil Masculina", value: "Juvenil Masculina"},
                  ]}
                  value={value}
                  onChange={onChange}
                />                        
            )}
          />
          <label htmlFor="date_start">Data do inicio</label>
          <Controller
            name="date_start"
            control={control}
            render={({field: {value, onChange}}) => (             
              
              <TextField 
                variant="outlined" 
                name="date_start" 
                size="small" 
                type={"date"}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <label htmlFor="date_end">Data da final</label>
          <Controller
            name="date_end"
            control={control}
            render={({field: {value, onChange}}) => (               
              <TextField 

              variant="outlined" 
                name="date_end" 
                size="small" 
                type={"date"}
                value={value}
                onChange={onChange}
              />
            )}
          />

          <Button variant="contained" type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
