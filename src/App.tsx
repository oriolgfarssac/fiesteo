import { BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomePage from './pages/welcome_page/welcome_page';

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
        <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='*' element={<h1>ERROR 404</h1>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
