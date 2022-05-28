import { useRouter } from "next/router";
import styles from "./Team.module.scss";
interface TeamsProps{
  name: string;
  escudo: string;
  id: string
}

export function TeamContainer(team:TeamsProps){
  const router = useRouter()
    return(
        <div className={styles.container} onClick={() => router.push(`/team/${team.id}`)}>
          <img src={team.escudo} alt={team.name}/>
          <h4>{team.name}</h4>
        </div>
    )
  }

