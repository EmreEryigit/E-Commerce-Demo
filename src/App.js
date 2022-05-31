import React, {useEffect, useState, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthContext from './store/auth-context';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import Details from "./components/Details"
import ProfileForm from './components/ProfileForm';
function App() {
  const authCtx = useContext(AuthContext)
  const[advert,setAdvert] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async() => {
      setError(null)
      setIsLoading(true)
      const response = await fetch("https://advertsitev2-default-rtdb.europe-west1.firebasedatabase.app/kodsitesi.json")
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
          img: data[key].img
        })
      }
      setAdvert(loadedAdverts)
      setIsLoading(false)
      
    }
  
    getData().catch((error) => {
      setError(error.message)
    })
  },[])
  console.log(authCtx.isLoggedIn)
  
  return (
   
    <div className="App">
      <Header />
      {error && <h1>Sayfayı Yenileyin.</h1>}
      <ProfileForm />
      <Switch>
      <Route path="/" exact>
      {advert.map(item => <Card name={item.name} key={item.id} id={item.id} lastname={item.lastname} />)}
      </Route>
      {authCtx.isLoggedIn && <Route path="/new" >
      <Form advert={advert} setAdvert={setAdvert}/>
      </Route>}
      <Route path="/adverts/:advertId">
          <Details adverts={advert} />
      </Route>
        
      </Switch>
    </div>
  );
}

export default App;


