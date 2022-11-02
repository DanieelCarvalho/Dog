import { useEffect, useState } from 'react';
import axios from "axios";
import Loading from "./assets/loading.svg"


function App() {
  
  const [dog, setDog] = useState(null);
  const [open, setOpen] = useState(false);
  const API = "https://dog.ceo/api/breeds/image/random"
  useEffect(() => {
  
    axios
     .get(API)
 
    .then((response) => {
      setDog(response.data.message);
      console.log(response)
    })
    .catch(e => console.log("deu ruim! 😢", e));
  }, [] );
  
 

  function buildImage() {
 
     if (dog === null) return <img src={Loading} alt="carregando..." />
     if (dog.length === 0) return <h1>Poxa, que peninha! Não há produtos cadastrados</h1>
  
        return( 
          
        <img src={dog} alt="imagem de cachorro" />
      
        )
  
  }


  const image = buildImage();
  return (
    <div className="view">
      <div className="image">
        {image}
      </div>
   
     
    </div>
  );
}

export default App;
