import styles from "../../styles/Team.module.scss";
import * as React from "react";
import { TeamContainer } from "../../components/Team";
import { Table } from "../../components/Table/members-tables";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { http } from "../../utils/http";

interface Team{
  id: string;
  name: string;
  img: string;
  liga: string;
}

interface Member{
  id: string,
  type: string,
  name: string,
  age: Date,
  position: string,
}

interface TeamProps{
  team: Team
  members: Member[]
}

const Team: React.FC<TeamProps> =({team, members}) =>  {
  const router = useRouter()
  console.log(members)
  return (
    <div className={styles.contentContainer}>
      <h1>Detalhes do Time</h1>
      <div className={styles.details}>
        <img src={team.img} alt={team.name} />
        <h2>{team.name}</h2>
        <p>{team.liga}</p>
      </div>
      <h3>Membros</h3>
      <Button onClick={() => router.push("/create-member")}>Adicionar um novo Membro</Button>
        <Table rows={members}/>
    </div>
  )
}

export default Team;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {id}
  } = ctx;


  const {members}={
    "members": [
      {
        "id": "2f0291d8-7e49-4878-b2d0-a48c84aabd29",
        "type": "Atleta",
        "name": "João de deus",
        "age": "2022-10-10T00:00:00.000Z",
        "position": "Libero",
      }
    ]
  }

  const team = {
    "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
    "name": "Cruzeiro",
    "img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
    "competition_id": "3a31459e-7543-416f-8f69-c32840f51f38",
    liga: "liga teste"
  }

  return {
    props: {
      team,
      members
    }
  }
}