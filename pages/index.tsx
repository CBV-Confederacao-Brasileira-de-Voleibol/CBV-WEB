import styles from "../styles/Home.module.scss";
import * as React from "react";
import { Button } from "@mui/material";
import { LeagueContainer } from "../components/League";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.leagueContainer}>
        <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 1" type="infantil" id={'1'} />
        <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 2" type="infantil" id={'2'} />
        <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 3" type="infantil" id={'3'} />
        <LeagueContainer DateEnd={new Date()} dateStart={new Date()} description="liga nova" name="liga 4" type="infantil" id={'4'} />
      </div>

      <Button onClick={() => router.push("/competition-registration")}>Adicione nova liga</Button>
    </div>
  );
}
