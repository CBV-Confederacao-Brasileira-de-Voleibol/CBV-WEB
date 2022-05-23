import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Button } from "@mui/material";
import { LeagueContainer } from "../components/League";

export default function Home() {
  return (
    <div className={styles.container}>
      <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 1" type="infantil" />
      <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 2" type="infantil" />
      <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 3" type="infantil" />
      <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 4" type="infantil" />

      <Button>Adicione nova liga</Button>
    </div>
  );
}
