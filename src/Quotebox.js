import './index.css';
import {useState} from 'react';
import {Print} from './Initial_quote';
import Newquotes from './newQuotes';
 

export default function Quotesbox (){

    const [quote, setquote] = useState(Print());
    
    return(

        <div className="container">
            <h1 className="position-center ">Quotes</h1>
            <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="span1"><span>❝</span></div>
                    <div>
                        {quote}
                    </div>
                    <div className="span2"><span>❞</span></div>
                    <div className="position-end">
                        <button className="button-next " onClick={() => setquote( Newquotes())}>➢</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}