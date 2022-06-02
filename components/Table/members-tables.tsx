import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import router from "next/router";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import toast from "react-hot-toast";
import { http } from "../../utils/http";

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

  async function deleteMember(){

    try {
      await http.delete(`/member/${rows.map(row => row.id)}`)
      toast.success('Membro deletado com sucesso')
      router.push("/")
    }catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
      <MuiTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Posição</TableCell>
            <TableCell align="center"><AiOutlineEdit></AiOutlineEdit></TableCell>
            <TableCell align="center"><AiOutlineDelete></AiOutlineDelete></TableCell>
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
              <TableCell align="right"><button>Editar Jogador</button></TableCell>
              <TableCell align="right"><button onClick={deleteMember}>Excluir Jogador</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
