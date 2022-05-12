import {  colors, createTheme, ThemeProvider } from '@mui/material'
import '../styles/globals.css'


const blueTheme = createTheme({palette: {primary: colors.blue, secondary: colors.yellow}, components: {
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
  }
}})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={blueTheme}>

    <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp
