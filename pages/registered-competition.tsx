import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Table } from "../components/Table/competition-tables";

function createData(
  nomeCompeticao: string,
  Tipo: string,
  numerodeTimesParticipantes: number,
  datadeInicio: string,
  Estado: string
) {
  return {
    nomeCompeticao,
    Tipo,
    numerodeTimesParticipantes,
    datadeInicio,
    Estado,
  };
}

const rows = [
  createData("Grand Prix", "Feminino", 20, "08/10/2022", "Rio de Janeiro"),
  createData("Grand Prix", "Feminino", 22, "15/10/2023", "São Paulo"),
  createData("Grand Prix", "Feminino", 18, "10/07/2024", "Bahia"),
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Table rows={rows} />
    </div>
  );
}
