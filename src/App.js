import React, {useEffect, useState} from 'react';

import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const[advert,setAdvert] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async() => {
      setError(null)
      setIsLoading(true)
      const response = await fetch("https://kodsitesi-972e6-default-rtdb.firebaseio.com/kodsitesi.json")
      if(!response.ok) {
        throw new Error("Something went wrong while fetching")
      }
      const data = await response.json()
      
      const loadedAdverts = []
      for(let key in data) {
        console.log(data[key])
        loadedAdverts.push({
          id: key,
          name: data[key].name,
          lastname: data[key].lastname,
        })
      }
      setAdvert(loadedAdverts)
      setIsLoading(false)
      
    }
  
    getData().catch((error) => {
      setError(error.message)
    })
  },[])
  
  return (
    <div className="App">
      <Header />
      <Form advert={advert} setAdvert={setAdvert}/>
      {advert.map(item => <Card name={item.name} id={item.id} lastname={item.lastname} />)}
      
    </div>
  );
}

export default App;


