import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Movices from './Components/Movices/Movices';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    getMovicesData()
  }, [])
  const [movices, setMovices] = useState([]);
  
  async function getMovicesData(){
    const data = await fetch('https://omdbapi.com/?s=star%20wars&apikey=d7d275b8');
    const res = await data.json();
    const dataTransform = res.Search.map((row) => {
      return{
        id: row.imdbID,
        title: row.Title,
        year: row.Year,
        poster: row.Poster,
      }
    })
    setMovices(dataTransform);
  }
  console.log("movices state:", movices);

  return (
    <>
      <div className="container">
          <Navbar hi="hiiiiiiiii"/>
          <Movices modata={movices}/>
      </div>
    </>
  )
}

export default App
