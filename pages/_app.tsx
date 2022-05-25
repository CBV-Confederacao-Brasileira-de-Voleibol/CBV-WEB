import { AppBar, colors, createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/globals.css";
import styles from "../styles/App.module.scss";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const blueTheme = createTheme({
  palette: { primary: colors.blue, secondary: colors.amber },
});
dayjs.locale('pt-br')

const routesDictionary = {
  "/": "Ligas",
  "/create-team": "Criar time",
  "/registered-team": "Times Registrados",
  "/create-player": "gador",
  "/competition-registration": "Criar Competições",
  "/registered-members": "Membros Registrados",
  "/registered-competition": "Competições Registradas",
  "/create-member": "Criar membro",
  "/competition-details": "Detalhes da competição: Nome Competição",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={blueTheme}>
      <div className={styles.container}>
        <AppBar className={styles.Header} color="secondary">
          <ul>
            <li>
              <Link
                href={{
                  pathname: "/",
                }}
              >
                  <AiOutlineHome />
              </Link>
            </li>
            </ul>
        </AppBar>
        <div className={styles.contentContainer}>
          <h1>{routesDictionary[router.pathname]}</h1>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
