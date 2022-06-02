import styles from "../../../styles/Result.module.scss";
import * as React from "react";
import {  Button, TextField } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import { Select } from "../../../components/Select";
import { http } from "../../../utils/http";
import { useRouter } from "next/router";

interface ISet{
  id: string;
  name: string;
}

interface IMember{
  id: string;
  name: string;
}

interface ResultProps{
  set: ISet[];
  team1Members: IMember[],
  team2Members: IMember[]
}

const Result: React.FC<ResultProps> = ({set, team1Members, team2Members}) => {
  const router = useRouter()
  const {control, handleSubmit, watch} = useForm()
  const selectedTeam = watch("team_id")

  const onSubmitStatistic = data => {
    console.log(data)
    const result = Object.keys(data).map(key => key.split(":"))
    console.log(result)

  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de resultados</h1>

      <div className={styles.contentContainer}>
        <div className={styles.teams}>
          <section>
            <TextField type="number" size="small" label="Time 1" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 1" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 2" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 3" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 4" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 5" variant="outlined"/>
          </section>   
          <h2>X</h2>
          <section>
            <TextField type="number" size="small" label="Time 2" variant="outlined" />
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 1" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 2" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 3" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 4" variant="outlined"/>
            <TextField type="number" size="small" sx={{maxWidth: 100, marginLeft: 5}} label="Set 5" variant="outlined"/>
          </section>
          <Button variant="contained" sx={{marginTop: 1}}>Cadastrar</Button>
        </div>
        <div className={styles.separator} />
        <div className={styles.playersContainer}>
          <h1>Cadastro de estatística jogador</h1>
          <div className={styles.playersContent}>
          <form onSubmit={handleSubmit(onSubmitStatistic)}>
            <section >
              <Controller
                name="team_id"
                control={control}
                render={({field: {onChange, value}}) => (
                  <Select 
                  label="Time"
                  labelId="time"
                  onChange={onChange}
                  value={value}
                  options={[
                    {
                    value: router.query.team1 as string,
                    label: "Time 1"
                  },
                    {
                    value: router.query.team2 as string,
                    label: "Time 2"
                  },
                ]}
                  />
                )}
              />
              <Controller
                name="member_id"
                control={control}
                render={({field: {onChange, value}}) => (
                  <Select 
                  label="Jogador"
                  labelId="Jogador"
                  onChange={onChange}
                  value={value}
                  options={(selectedTeam === router.query.team1 ? team1Members : team2Members).map((member) =>
                      ({
                        value: member.id, 
                        label: member.name
                      })
                    )}
                  />
                )}
              />
              <Controller 
                name="spots"
                control={control}
                render={({field: {onChange, value}})=> (
                    <TextField type="number" onChange={onChange} value={value} size="small" label="Pontos" variant="outlined" />
                  )}
              />
              <Controller 
                name="withdraw"
                control={control}
                render={({field: {onChange, value}})=> (
                    <TextField type="number" onChange={onChange} value={value} size="small" label="Pontos de saque" variant="outlined" />
                  )}
              />
              <Controller 
                name="block"
                control={control}
                render={({field: {onChange, value}})=> (
                    <TextField type="number" onChange={onChange} value={value} size="small" label="Bloqueios" variant="outlined" />
                  )}
              />
              <Controller 
                name="right_attack"
                control={control}
                render={({field: {onChange, value}})=> (
                    <TextField type="number" onChange={onChange} value={value} size="small" label="Ataques certos" variant="outlined" />
                  )}
              />
              <Controller 
                name="wrong_attack"
                control={control}
                render={({field: {onChange, value}})=> (
                    <TextField type="number" onChange={onChange} value={value} size="small" label="Ataques errados" variant="outlined" />
                  )}
              />
              {set.map(set => (
                <div key={set.id} className={styles.playerSet}>
                  <h4>{set.name}</h4>
                  <Controller 
                    name={`${set.id}:spots`}
                    control={control}
                    render={({field: {onChange, value}}) => 
                      <TextField type="number" size="small" value={value} onChange={onChange} sx={{maxWidth: '20%'}} label="Pontos" variant="outlined" />
                    }
                  />
                  <Controller 
                    name={`${set.id}:withdraw`}
                    control={control}
                    render={({field: {onChange, value}}) => 
                      <TextField type="number" size="small" value={value} onChange={onChange} sx={{maxWidth: '20%'}} label="Saques" variant="outlined" />
                    }
                  />
                  <Controller 
                    name={`${set.id}:block`}
                    control={control}
                    render={({field: {onChange, value}}) => 
                      <TextField type="number" size="small" value={value} onChange={onChange} sx={{maxWidth: '20%'}} label="Bloqueios" variant="outlined" />
                    }
                  />
                </div>
              ))}
              <Button variant="contained" type="submit">Cadastrar</Button>

            </section>
          </form>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Result;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {team1, team2}
  } = ctx;

  const [{ data: set }, {data: memberTeam1}, {data: memberTeam2} ] = await Promise.all([
    await http.get('set'),
    await http.get(`member/player/${team1}`),
    await http.get(`member/player/${team2}`)
  ]) ;

  return {
    props: {
      set: set.set,
      team1Members: memberTeam1.members,
      team2Members: memberTeam2.members
    }
  }
}