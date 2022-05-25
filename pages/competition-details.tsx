import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Button } from "@mui/material";
import { Table } from "../components/Table/compDescricao-table";

function createData(
    jogosQueTiveram: string,
    Resultado: string,
    timesParticipantes: string,
  ) {
    return {
        jogosQueTiveram,
        Resultado,
        timesParticipantes,
    };
}

const rows = [
    createData("Sada Cruzeiro X Blumenau","Blumenau Venceu Sets - 3:2", "Sada Cruzeiro"),
    createData("","", "Blumenau"),
    
  ];
  
  export default function Home() {
    return (
      <div className={styles.container}>
        <Table rows={rows} />

        <Button href="#">Iniciar Competição</Button>
        <Button href="#">Finalizar Classificatória</Button>
      </div>
    );
  }
  
