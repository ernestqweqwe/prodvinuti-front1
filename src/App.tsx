import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense, useContext } from 'react'
import { Theme, ThemeContext } from './themes/ThemeContext'
import { useTheme } from './themes/useTheme'


const App = () => {

  const {theme,toggleTheme} = useTheme()

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