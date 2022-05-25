import styles from "../../styles/League.module.scss";
import * as React from "react";
import { TeamContainer } from "../../components/Team";
import { Table } from "../../components/Table/compDescricao-table";
import { Button } from "@mui/material";
import { useRouter } from "next/router";


export default function League() {
  const router = useRouter()
  return (
    <div className={styles.contentContainer}>
      <h1>Detalhes da Liga</h1>
      <div className={styles.details}>

      <p>Nome: Liga 1</p>
      <p>Descrição: Primeira liga</p>
      <p>Inicio: 25/05/2022</p>
      <p>Fim: 26/05/2023</p>
      <p>Tipo:infantil </p>
      </div>
      <h3>Times</h3>
      <Button onClick={() => router.push("/create-team")}>Adicionar um novo time</Button>
      <div className={styles.teams}>
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />
        <TeamContainer 
        name="Sada Cruzeiro" 
        liga="liga 1" 
        escudo="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" 
          id="1"
        />

      </div>
      <div>
        <Table rows={[{
          jogosQueTiveram: "Sada Cruzeiro X Blumenau",	
          Resultado: "Blumenau Venceu Sets - 3:2",
          id: "1"
        }]}/>
      </div>
      <div>
        <Button >Iniciar Competição</Button>
        <Button >Finalizar Classificatória</Button>
      </div>
    </div>
  );
}
