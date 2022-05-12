import { Button, Input, TextField } from '@mui/material'
import styles from '../styles/Home.module.scss'




export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3>Cadastro de equipes</h3>
        <form action="">

        <TextField variant="outlined" size='small' label="Nome do time"/>
        <Button
          variant="outlined"
          component="label"
          >
          Escudo do time
          <input
            type="file"
            hidden
            />
        </Button>
        <Button variant="contained">
          Cadastrar
        </Button>
        </form>
      </div>
      <div className={styles.formWrapper}>
        <h3>Cadastro de Membros</h3>
        <form action="" className={styles.form}>

        <TextField variant="outlined" size='small' label="Nome"/>
        <TextField variant="outlined" size='small' label="tipo"/>
        <TextField variant="outlined" size='small' label="idade"/>
        <TextField variant="outlined" size='small' label="posição"/>
        <TextField variant="outlined" size='small' label="time"/>
        
        <Button variant="contained">
          Cadastrar
        </Button>
        </form>
      </div>
    </div>
  )
}
