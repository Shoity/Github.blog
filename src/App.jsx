import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/Themes/default"
import { GlobalStyle } from "./Styles/global"
import { Blog } from "./Pages/Blog"

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Blog/>

    </ThemeProvider>
  )
}

export default App
