import React, {useState,useEffect} from "react";
import './style.css'

const Conversion = ({eur, btc, usd,curency}) => {

    
    const [current, setCurrent] = useState(

        {   actual:'USD',
            base:['USD', 'EUR', 'BTC'],
            current:{
                'USD': usd.buy,
                'EUR': eur.buy,
                'BTC': btc.buy
            }
            
        }

    )
    const [actualCurency, setActualCurrency] = useState(0)
    const [actualCount, setActualCount] = useState('')
    const [actualResult, setResult] = useState('')
    const [changeUA, setChangeUa] = useState(true)
    
    useEffect(()=>{

        setActualCurrency(curency[0])
        
    }, [curency])
  

    let refValue = React.createRef();
    let refValueUa = React.createRef();

    const handleInput = () =>{
        
        setActualCount(refValue.current.value)
        
        const result = (Math.round((actualCurency * refValue.current.value)*100))/100
        
        setResult(result)
        
        
 
    }

    const handleInputUa = () =>{

        setResult(refValueUa.current.value)
        
        const result = (Math.round((refValueUa.current.value /  actualCurency)*100))/100
       
        setActualCount(result)
    }
    

    const setActualCurrent = (e) => {
        
        
        
        setActualCurrency(curency[e.target.value])
        setCurrent({
            actual: e.target.value,
            base:['USD', 'EUR', 'BTC'],
        })
        
        if(actualCount !== 0){
            
            const result = (Math.round((curency[e.target.value] * actualCount)*100))/100
            
            setResult(result)
        }

        
    }  
    
    return (
        
        <div className='conteiner_conversion'>
            <div className='conteiner_conversion_trade'>
                <div className='title'>Отримую</div>
                <div className='group'>
                    <input className='input' placeholder="Введіть значення" type='number' ref={refValue} value={actualCount} onChange={handleInput}/>
                    
                    <select className='select' onChange={setActualCurrent} value={current.actual}>
                        
                        {current.base.map((v, index)=>(<option className='select_number' key={v} value={index} >{v}</option>)
                        )}
                    </select>
                </div>
                
            </div>
            <div className='conteiner_conversion_t'>
                <div className='title'>Віддаю</div>
                <div className='group'>
                   <input className='input' value={actualResult} ref={refValueUa} onChange={handleInputUa} placeholder="Введіть значення" type='number'/>
                    {changeUA ? <div className='select'>
                        UA
                    </div>:
                    <div className='select' >
                        USD
                    </div>
                    } 
                    
                </div>
            </div>
        </div>
    )
}

export default Conversion;