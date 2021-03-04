import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Coktail from '../Coktail/Coktail';

import './Home.css';


const Home = () => {
const [search, setSearch] = useState('')
const [coktail, setCoktail] = useState([]);
useEffect(() => {
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    axios.get(url)
    .then(response=>setCoktail(response.data.drinks))
    
}, [search])

    
  
    return (
       <div>
       <form>
  <div className="form-row md-4 ">
    <div className="form-group col-md-6">
      <input onChange={(e)=>setSearch(e.target.value) } value={search} type="text" class="form-control" placeholder="search"/>
    </div>
  </div>
</form>    
   
  
        <div className="home">
          {coktail.map(drink=><Coktail drink={drink} key={drink.idDrink} />)}
        
        </div>
        </div>
    )
}

export default Home
