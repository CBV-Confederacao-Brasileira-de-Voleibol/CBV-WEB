import styles from "../../styles/Team.module.scss";
import * as React from "react";
import { TeamContainer } from "../../components/Team";
import { Table } from "../../components/Table/members-tables";
import { Button } from "@mui/material";
import { useRouter } from "next/router";


export default function Team() {
  const router = useRouter()
  return (
    <div className={styles.contentContainer}>
      <h1>Detalhes do Time</h1>
      <div className={styles.details}>
        <img src="https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png" alt="Time 1" />
        <h2>Cruzeiro</h2>
        <p>Liga X</p>
      </div>
      <h3>Membros</h3>
      <Button onClick={() => router.push("/create-member")}>Adicionar um novo Membro</Button>
        <Table rows={[
          {
            DateOfBirth: "25/05/2022",
            Nome: "João",
            Posicao: "-",
            Time: "Cruzeiro",
            Tipo:"Medico"
          },
          {
            DateOfBirth: "26/05/2022",
            Nome: "Pedro",
            Posicao: "Libero",
            Time: "Cruzeiro",
            Tipo:"Jogador"
          }
        ]}/>
    </div>
  )
}
