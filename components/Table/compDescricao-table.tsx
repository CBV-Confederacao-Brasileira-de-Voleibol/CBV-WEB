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
    jogosQueTiveram: string;
    Resultado: string;
    timesParticipantes: string;
}

export function Table({ rows }: tableProps) {
    return (
      <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
        <MuiTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Historico de Jogos</TableCell>
              <TableCell align="right">Resultado da Partida</TableCell>
              <TableCell align="right">Times Participantes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell align="right">{row.jogosQueTiveram}</TableCell>
                <TableCell align="right">{row.Resultado}</TableCell>
                <TableCell align="right">{row.timesParticipantes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    );
  }