import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense, useContext } from 'react'
import { Theme, ThemeContext } from './themes/ThemeContext'


const App = () => {

  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK?Theme.LIGHT:Theme.DARK)
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
       
      <Suspense fallback={<div>Loading....</div>} >
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
      
    </div>
  )
}

export default App