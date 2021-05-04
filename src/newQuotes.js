import {quotes} from './quotes.json';


const Newquotes = () =>{

    const Nextquote = quotes[Math.floor(Math.random()* quotes.length)];

    const  {quote, author } = Nextquote

    const Quote = () => {return quote};
    const Author = () =>{return author};

    return ( 

        <div>
            <div className="quotes text-white"><Quote/></div>
            <div className="autor text-white"><Author/></div>
        </div>
    )

}

export default Newquotes