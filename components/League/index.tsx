import dayjs from "dayjs";
import { useRouter } from "next/router";
import styles from "./League.module.scss"
interface leagueProps{
  name: string;
  description: string;
  dateStart: Date;
  DateEnd: Date;
  type: string
  id:string
}


export function LeagueContainer(league:leagueProps){
  const router = useRouter();

  return(
      <div className={styles.container} onClick={() => router.push(`leagues/${league.id}`)}>
        <h2>{league.name}</h2>
        <p>{league.description} - {league.type}</p> 
        <p>{dayjs(league.dateStart).format("DD/MM/YYYY")} - {dayjs(league.dateStart).format("DD/MM/YYYY")}</p>
      </div>
  )
}