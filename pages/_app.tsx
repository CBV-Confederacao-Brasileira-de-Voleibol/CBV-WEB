import { AppBar, colors, createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/globals.css";
import styles from "../styles/App.module.scss";
import { useRouter } from "next/router";

const blueTheme = createTheme({
  palette: { primary: colors.blueGrey, secondary: colors.amber },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: "#fff",
        },
        notchedOutline: {
          borderColor: "#ccc",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ccc",
        },
      },
    },
  },
});

const routesDictionary = {
  "/": "Times",
  "/create-team": "Criar time",
  "/create-player": "Criar jogador",
  "/competition-registration": "Criar Competições",
  "/registered-members": "Membros Registrados",
  "/registered-competition": "Competições Registradas",
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
                  pathname: "/create-player",
                }}
              >
                <a>Criar Jogador</a>
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
