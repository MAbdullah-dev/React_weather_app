import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Searchbar from './components/Searchbar';
import MainWeatherCard from './components/MainWeatherCard';


const App = () => {
  return (
    <>
      <div className="app-container">
        <Container>
          <Searchbar />
          <div className="main-component">
            <MainWeatherCard />
          </div>
        </Container>
      </div>
    </>
  )
}

export default App