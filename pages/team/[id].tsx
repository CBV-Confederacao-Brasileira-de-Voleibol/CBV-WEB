import styles from "../../styles/Team.module.scss";
import * as React from "react";
import { Table } from "../../components/Table/members-tables";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { http } from "../../utils/http";

interface Team{
  id: string;
  name: string;
  img: string;
  competition: {
    name: string;
  };
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
  return (
    <div className={styles.contentContainer}>
      <h1>Detalhes do Time</h1>
      <div className={styles.details}>
        <img src={team.img} alt={team.name} />
        <h2>{team.name}</h2>
        <p>{team.competition.name}</p>
      </div>
      <h3>Membros</h3>
      <Button onClick={() => router.push(`/create-member/${router.query.id}`)}>Adicionar um novo Membro</Button>
      <Table rows={members}/>
    </div>
  )
}

export default Team;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {id}
  } = ctx;


  const [{data: team}, {data: members}] = await Promise.all([
    await http.get(`/team/${id}`),
    await http.get(`/member/${id}`),
  ])

  return {
    props: {
      team: team.teams,
      members: members.members
    }
  }
}