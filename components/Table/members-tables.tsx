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
  name: string;
  type: string;
  age: Date;
  position: string;
  id: string;
}

function getAge(date: Date){
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{getAge(row.age)}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
