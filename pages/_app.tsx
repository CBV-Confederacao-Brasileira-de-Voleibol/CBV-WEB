import { AppBar, colors, createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/globals.css";
import styles from "../styles/App.module.scss";
import { useRouter } from "next/router";

const blueTheme = createTheme({
  palette: { primary: colors.blue, secondary: colors.amber },
});

const routesDictionary = {
  "/": "Ligas",
  "/create-team": "Criar time",
  "/registered-team": "Times Registrados",
  "/create-player": "gador",
  "/competition-registration": "Criar Competições",
  "/registered-members": "Membros Registrados",
  "/registered-competition": "Competições Registradas",
  "/create-member": "Criar membro",
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
                <a>
                  <AiOutlineHome />
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/create-team",
                }}
              >
                <a>Criar time</a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/registered-team",
                }}
              >
                <a>Times Registrados</a>
              </Link>
            </li>
            <li>
              <Link href={{
                pathname: "/create-member",
              }}>
                <a>Criar Membro</a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/competition-registration",
                }}
              >
                <a>Cadastro de Competições</a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/registered-members",
                }}
              >
                <a>Membros Registrados</a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/registered-competition",
                }}
              >
                <a>Competições Registradas</a>
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
