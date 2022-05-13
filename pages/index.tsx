import { Button, Input, TextField } from "@mui/material";
import styles from "../styles/Home.module.scss";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  NomeDoTime: string,
  QuantidadeDeMembros: number,
  Tecnico: string,
  Estado: string
) {
  return { NomeDoTime, QuantidadeDeMembros, Tecnico, Estado };
}

const rows = [
  createData("Sada Cruzeiro", 30, "Filipe Augusto Faccion Ferraz", "São Paulo"),
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3>Cadastro de equipes</h3>
        <form action="">
          <TextField variant="outlined" size="small" label="Nome do time" />
          <Button variant="outlined" component="label">
            Escudo do time
            <input type="file" hidden />
          </Button>
          <Button variant="contained">Cadastrar</Button>
        </form>
      </div>
      <div className={styles.formWrapper}>
        <h3>Cadastro de Membros</h3>
        <form action="" className={styles.form}>
          <TextField variant="outlined" size="small" label="Nome" />
          <TextField variant="outlined" size="small" label="Tipo" />
          <TextField variant="outlined" size="small" label="Idade" />
          <TextField variant="outlined" size="small" label="Posição" />
          <TextField variant="outlined" size="small" label="Time" />

          <Button variant="contained">Cadastrar</Button>
        </form>
      </div>
      <div className={styles.formWrapper}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome do Time</TableCell>
                <TableCell align="right">Quantidade de Membros</TableCell>
                <TableCell align="right">Técnico</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.NomeDoTime}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.NomeDoTime}</TableCell>
                  <TableCell align="right">{row.QuantidadeDeMembros}</TableCell>
                  <TableCell align="right">{row.Tecnico}</TableCell>
                  <TableCell align="right">{row.Estado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
