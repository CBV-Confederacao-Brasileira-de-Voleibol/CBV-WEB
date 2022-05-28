import styles from "../../styles/League.module.scss";
import * as React from "react";
import { TeamContainer } from "../../components/Team";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { http } from "../../utils/http";
import { Matches } from "../../components/Matches";


interface Team{
  id: string;
  name: string;
  img: string;
}
interface TeamProps{
  teams: Team[]
}


const League:React.FC<TeamProps> =({teams}) => {
  const router = useRouter()
  return (
    <div className={styles.contentContainer}>
      <div className={styles.top}>
        {teams.length < 14 && <Button onClick={() => router.push(`/create-team/${router.query.id}`)}>Adicionar um novo time</Button>}
        <div className={styles.teams}>
          {teams ? teams.map(team => (
            <TeamContainer 
            key={team.id}
            name={team.name} 
            escudo={team.img} 
            id={team.id}
            />
            
            )): <CircularProgress/>}
        </div>
      </div>
      {teams.length === 14 && <div>
        <Button >Iniciar Competição</Button>
        <Button >Finalizar Classificatória</Button>
      </div>}
      <div className={styles.bottomRight}>
        <Matches/>
      </div>
    </div>
  );
}

export default League

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {id}
  } = ctx;

  const {data: teams} = await http.get(`/team/competition/${id}`);

  return {
    props: {
      teams: teams.teams
    }
  }
}