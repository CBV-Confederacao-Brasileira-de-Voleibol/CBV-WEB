import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Button } from "@mui/material";
import { LeagueContainer } from "../components/League/teams-list";

export default function Home() {
    return (
      <div className={styles.container}>
        <LeagueContainer name_time="Sada Cruzeiro" liga="liga 1" escudo="Lugar do Escudo" />
        <LeagueContainer name_time="Sada Cruzeiro" liga="liga 1" escudo="Lugar do Escudo" />
  
        <Button>Adicione novo time</Button>
      </div>
    );
  }