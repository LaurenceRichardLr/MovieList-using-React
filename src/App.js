import Cards from "./Cards";
import './App.css';
import Data from './movieData';

function App() {
  return (

    
    <div className="App">
     

      <h1 className="heading_style"> Movies List using React js</h1>
        <Cards
        img= {Data[0].img} alt="my-pic" className="card_img"
      
        title= {Data[0].title}
        distributor= {Data[0].distributor}
        year={Data[0].year}
        amount={Data[0].amount}
        ranking={Data[0].ranking}
        link= "https://www.hotstar.com/in/movies/avengers-endgame/1260013556"
         />

<Cards
        img= {Data[1].img} alt="my-pic" className="card_img"
      
        title= {Data[1].title}
        distributor= {Data[1].distributor}
        year={Data[1].year}
        amount={Data[1].amount}
        ranking={Data[1].ranking}
        link= "https://www.hotstar.com/in/movies/avengers-endgame/1260013556"
         />

<Cards
        img= {Data[2].img} alt="my-pic" className="card_img"
      
        title= {Data[2].title}
        distributor= {Data[2].distributor}
        year={Data[2].year}
        amount={Data[2].amount}
        ranking={Data[2].ranking}
        link= "https://www.hotstar.com/in/movies/avengers-endgame/1260013556"
         />

<Cards
        img= {Data[3].img} alt="my-pic" className="card_img"
      
        title= {Data[3].title}
        distributor= {Data[3].distributor}
        year={Data[3].year}
        amount={Data[3].amount}
        ranking={Data[3].ranking}
        link= "https://www.hotstar.com/in/movies/avengers-endgame/1260013556"
         />

<Cards
        img= {Data[4].img} alt="my-pic" className="card_img"
      
        title= {Data[4].title}
        distributor= {Data[4].distributor}
        year={Data[4].year}
        amount={Data[4].amount}
        ranking={Data[4].ranking}
        link= "https://www.hotstar.com/in/movies/avengers-endgame/1260013556"
         />

      
      
    </div>
  );
}

export default App;
