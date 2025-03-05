import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Searchbar from './components/Searchbar';
import MainWeatherCard from './components/MainWeatherCard';
import Highlight from './components/Highlight';


const App = () => {
  return (
    <>
      <div className="app-container">
        <Container>
          <Searchbar />
          <div className="main-component pt-4">
            <div className="row">
              <div className="col-12 col-xl-7">
                <MainWeatherCard />
              </div>
              <div className="col-12 col-xl-5 ">
                <Highlight />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default App