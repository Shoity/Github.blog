import { ThemeProvider } from "styled-components"
import { Header } from "./Components/Header"
import { defaultTheme } from "./Styles/Themes/default"
import { GlobalStyle } from "./Styles/global"

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>

    </ThemeProvider>
  )
}

export default App
