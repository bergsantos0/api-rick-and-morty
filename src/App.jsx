import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carrosel from 'react-elastic-carousel'

export default function App() {


  const [personagem, setPersonagem] = useState([]);

  const pegaDados = async () => {

    const dados = await axios.get(
      "https://rickandmortyapi.com/api/character")



    setPersonagem(dados.data.results);
    console.log(dados.data.results);





  }

  useEffect(() => {
    pegaDados()

  },[])

  return (
    <>


<Carrosel itemsToShow={3}enableAutoPlay autoPlaySpeed={1500} >
      {personagem.map((item, id) =>

        <div key={id} >
          <img src={item.image} alt="" />
          <h2>{item.name}</h2>
          <p>{item.status}</p>
        </div>
        
      )}
 </Carrosel>

    </>
  )
}
