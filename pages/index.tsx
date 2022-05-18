import { AppBar, Button, Input, TextField } from "@mui/material";
import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Table } from "../components/Table";
import Link from "next/link";


function createData(
  NomeDoTime: string,
  QuantidadeDeMembros: number,
  Tecnico: string,
  Estado: string
) {
  return { NomeDoTime, QuantidadeDeMembros, Tecnico, Estado };
}

const rows = [
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Table rows={rows} />
    </div>
  );
}
