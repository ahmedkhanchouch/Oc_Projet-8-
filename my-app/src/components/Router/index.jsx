import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/'
import Details from '../../pages/Details/'
import Error from '../Error'
import Logement from '../../pages/Logement'

function RouterComponent() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/logement/:id" element={<Logement/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    )
}

export default RouterComponent