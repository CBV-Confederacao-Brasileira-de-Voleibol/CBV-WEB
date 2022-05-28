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
  console.log(teams)
  return (
    <div className={styles.contentContainer}>
      <div className={styles.top}>
        {teams.length < 14 && <Button onClick={() => router.push("/create-team")}>Adicionar um novo time</Button>}
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

  // const {data: teams} = await http.get("/teams");
  const {teams} = {
    teams:[
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
    {
      "id": "b1d1b277-f281-484a-b9e4-ea7ceefe1350",
			"name": "Cruzeiro",
			"img": "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
			"competition_id": "3a31459e-7543-416f-8f69-c32840f51f38"
    },
  ]}

  return {
    props: {
      teams
    }
  }
}