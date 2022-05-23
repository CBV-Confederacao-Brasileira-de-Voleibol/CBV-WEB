import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface tableProps {
  rows: rowProp[];
}

interface rowProp {
  Nome: string;
  Tipo: string;
  Idade: number;
  Posicao: string;
  Time: string;
}

export function Table({ rows }: tableProps) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
      <MuiTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Posição</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Nome}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.Nome}</TableCell>
              <TableCell align="right">{row.Tipo}</TableCell>
              <TableCell align="right">{row.Idade}</TableCell>
              <TableCell align="right">{row.Posicao}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
