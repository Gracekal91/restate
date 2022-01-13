import './App.scss';
import Home from './pages/Home';
import Search from './pages/Search';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState, useEffect } from 'react';

function App() {

  const [forRent, setForRent] = useState([]);
  const [forSale, setForSale] = useState([]);

  // Call House for rent Api

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://bayut.p.rapidapi.com/properties/list',
      params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-rent',
        hitsPerPage: '25',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
      },
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '798e843fe4msh0d6eef45f80db95p1da084jsn296b94bfb973'
      }
    };

    axios.request(options).then(function (response) {
      setForRent(response.data.hits)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  //Call House for sale Api

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://bayut.p.rapidapi.com/properties/list',
      params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-sale',
        hitsPerPage: '25',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
      },
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '798e843fe4msh0d6eef45f80db95p1da084jsn296b94bfb973'
      }
    };

    axios.request(options).then(function (response) {
      setForSale(response.data.hits)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  //App component Return

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search forRent={forRent} forSale={forSale} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
