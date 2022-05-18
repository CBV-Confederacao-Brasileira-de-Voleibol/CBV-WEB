import {  AppBar, colors, createTheme,  ThemeProvider } from '@mui/material'
import Link from 'next/link'
import {AiOutlineHome} from "react-icons/ai"
import '../styles/globals.css'
import styles from "../styles/App.module.scss";
import { useRouter } from 'next/router';


const blueTheme = createTheme({palette: {primary: colors.cyan, secondary: colors.yellow}, components: {
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        color: "#fff",
      },
      notchedOutline: {
        borderColor: '#ccc'
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#ccc',
      }
    }
  },
}})

const routesDictionary = {
  "/": "Times",
  "/create-team": "Criar time",
  "/create-player": "Criar jogador",
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={blueTheme}>
      <div className={styles.container}>
        <AppBar className={styles.Header}>
          <ul>
            <li>
              <Link href={{
                pathname: "/",
              }}>
                <a><AiOutlineHome /></a>
              </Link>
            </li>
            <li>
              <Link href={{
                pathname: "/create-team",
              }}>
                <a>Criar time</a>
              </Link>
            </li>
            <li>
              <Link href={{
                pathname: "/create-player",
              }}>
                <a>Criar Jogador</a>
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
  )
  
}

export default MyApp
