import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface tableProps{
  rows: rowProp[];
}

interface rowProp{
  NomeDoTime: string;
  QuantidadeDeMembros: number;
  Tecnico: string;
  Estado: string;
}

export function Table({rows}:tableProps){
  return(
      <TableContainer component={Paper} sx={{maxWidth: 1000}}>
      <MuiTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome do Time</TableCell>
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
      </MuiTable>
    </TableContainer>
  )
}