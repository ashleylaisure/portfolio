import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./ThemeContext"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
