import {quotes} from './quotes.json';

const aleatory = quotes[Math.floor(Math.random()* quotes.length)];


let {  author, quote } = aleatory;

function Printquotes (){
    return quote
}

function Printautor (){
    console.log(author)
    return(author)
}


 export const Print = () =>{

    return (
        <div>
            <div className="quotes text-white"><Printquotes /></div>
            <div className="autor text-white"><Printautor /></div>
        </div>
    )
}



