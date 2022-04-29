import React from "react";
import './style.css'

const Currencies = ({eur, btc, usd}) => {

    
    
    return (
        <div className='content_exchange_rates'>
         <div className='content_exchange_rates_header'>Курси валют</div>
                <div className='content_exchange_rates_couter'>
                    <div className='grid_course_name'>
                    <div>Валюта</div>
                    <div>Покупка</div>
                    <div>Продаж</div>
                    </div>
                    <div className='grid_course_counter'>
                    <div className='grid_usd'>  
                        <div>USD</div>
                        <div>{usd.buy}</div>
                        <div>{usd.sale}</div>
                    </div>
                    <div className='grid_euro'>  
                        <div>EUR</div>
                        <div>{eur.buy}</div>
                        <div>{eur.sale}</div>
                    </div>
                    <div className='grid_rub'>   
                        <div>BTC</div>
                        <div>{btc.buy}</div>
                        <div>{btc.sale}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Currencies;