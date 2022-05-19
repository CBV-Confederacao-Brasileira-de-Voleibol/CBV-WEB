import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Table } from "../components/Table/members-tables";

function createData(
  Nome: string,
  Tipo: string,
  Idade: number,
  Posicao: string,
  Time: string
) {
  return { Nome, Tipo, Idade, Posicao, Time };
}

const rows = [
  createData("Isac", "Jogador", 31, "Central", "Sada Cruzeiro"),
  createData("Fernando Cachopa", "Jogador", 25, "Levantador", "Sada Cruzeiro"),
  createData("Filipe Ferraz", "Gerente", 42, "Tecnico", "Sada Cruzeiro"),
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Table rows={rows} />
    </div>
  );
}
