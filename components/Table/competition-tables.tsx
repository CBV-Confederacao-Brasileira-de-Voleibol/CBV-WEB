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
  nomeCompeticao: string;
  Tipo: string;
  numerodeTimesParticipantes: number;
  datadeInicio: string;
  Estado: string;
}

export function Table({ rows }: tableProps) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
      <MuiTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome da Competicao</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Numero de Times Participantes</TableCell>
            <TableCell align="right">Data de Inicio</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nomeCompeticao}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.nomeCompeticao}</TableCell>
              <TableCell align="right">{row.Tipo}</TableCell>
              <TableCell align="right">
                {row.numerodeTimesParticipantes}
              </TableCell>
              <TableCell align="right">{row.datadeInicio}</TableCell>
              <TableCell align="right">{row.Estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
