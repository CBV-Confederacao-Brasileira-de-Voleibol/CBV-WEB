import styles from "../../styles/Team.module.scss";
import * as React from "react";
import { Table } from "../../components/Table/members-tables";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { http } from "../../utils/http";
import toast from "react-hot-toast";
import { AiFillBackward, AiOutlineDelete, AiOutlineRotateRight } from "react-icons/ai";



interface Team{
  id: string;
  name: string;
  img: string;
  competition_id:string;
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

  async function deleteTeam(){

    try {
      await http.delete(`/team/${team.id}`)
      toast.success('Time deletado com sucesso')
      router.push(`/leagues/${team.competition_id}`)
    } catch (error) {
      toast.error(error.message)
    }
  }  

  const router = useRouter()
  return (
    <div className={styles.contentContainer}>
      <h1>Detalhes do Time</h1>
      <div>
      <IconButton onClick={() => router.push(`/leagues/${team.competition_id}`)}><AiFillBackward></AiFillBackward> Pagina de Ligas</IconButton>
      <IconButton onClick={() => router.push(`/create-member/${router.query.id}`)}>Adicionar um novo Membro</IconButton>
      <IconButton onClick={deleteTeam} className={styles.deleteBtn}><AiOutlineDelete></AiOutlineDelete> Excluir Time</IconButton>
      </div>
      <div className={styles.details}>
        <img src={team.img} alt={team.name} />
        <h2>{team.name}</h2>
        <p>{team.competition.name}</p>
      </div>
      <h3>Membros</h3>
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
      members: members.members,
    }
  }

}