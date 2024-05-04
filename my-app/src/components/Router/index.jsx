import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/'
import Details from '../../pages/Details/'
import Header from '../Header'
import Error from '../Error'

function RouterComponent() {
    return (
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    )
}

export default RouterComponent