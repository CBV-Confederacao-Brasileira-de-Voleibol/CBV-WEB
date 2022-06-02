import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Button, CircularProgress } from "@mui/material";
import { LeagueContainer } from "../components/League";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { http } from "../utils/http";
import { AiOutlineLoading } from "react-icons/ai";

interface competitions {
  id: string;
  name: string;
  description: string;
  date_start: Date;
  date_end: Date;
  type: string
}
interface LeagueProps{
  competitions: competitions[]
}



const Home:React.FC<LeagueProps> = ({competitions}) =>{
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.leagueContainer}>
        {competitions ? competitions.map(league => {
          return (
            <LeagueContainer DateEnd={league.date_end} dateStart={league.date_start} description={league.description} type={league.type} key={league.id} name={league.name}  id={league.id}/>
          )
        }): <CircularProgress />
        }
      </div>

      <Button variant="contained" onClick={() => router.push("/competition-registration")}>Adicione nova liga</Button>
    </div>
  );
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {data} = await http.get<{competitions: competitions[]}>("competition");
  return {
    props: data
  }
}