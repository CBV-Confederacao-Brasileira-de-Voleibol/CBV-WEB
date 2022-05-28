import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { http } from "../../utils/http";


import styles from "../../styles/CreateTeam.module.scss";


export default function CreateTeams(){
  const {push, query: {id}} = useRouter();

  const {handleSubmit, control} = useForm();

  async function onSubmit(data){
    try {
      await http.post("team", {...data, competition_id: id});
      toast.success("Time cadastrado com sucesso!");
      push(`/leagues/${id}`);
      
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
                  label="Nome do time" 
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <Controller 
              name="img"
              control={control}
              render={({field: {value, onChange}}) => (
                <TextField  
                  variant="outlined" 
                  size="small" 
                  label="Url do escudo do time"
                  value={value}
                  onChange={onChange}
                />

              )}
            />
            <Button type="submit" variant="contained">Cadastrar</Button>
          </form>
        </div>
    </div>
  )
}