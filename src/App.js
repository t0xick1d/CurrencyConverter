import './App.css';
import React, {useState, useEffect} from 'react'
import Currencies from './Component/Сurrencies/Currencies';
import Conversion from './Component/Conversion/Conversion'
import axios from 'axios';




function App() {
  const [data, setData] = useState({
    
    usd:{buy:0,sale:0},
    eur:{buy:0,sale:0},
    btc:{buy:0,sale:0}
  })
  const [curency, setCurency] = useState([])

  useEffect(()=>{

    axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then(({data})=>{
    
    const state = {
      usd:{buy:data[0].buy,sale:data[0].sale},
      eur:{buy:data[1].buy,sale:data[1].sale},
      btc:{buy:data[2].buy,sale:data[2].sale}
    }
    
    setData(state)
    setCurency([data[0].buy,data[1].buy,data[2].buy])
    
  })
  },[])

  
  return (
    <div className="App">
      <div className="App-content">
          <div className="Conteiner-exchange-rates">
            <Currencies usd={data.usd} eur={data.eur} btc={data.btc} curency={curency}/>
          <div className="conteiner-conversion">
            <Conversion usd={data.usd} eur={data.eur} btc={data.btc} curency={curency}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
