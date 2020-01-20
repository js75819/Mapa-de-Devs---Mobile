import React, {useState, useEffect} from 'react';
import api from './services/api'

import './global.css'
import './app.css'
import './sadbar.css'
import './main.css'

import DevItem from './components/DevItem/index'
import FormDev from './components/DevForm'

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante das aplicação
//Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)
//Propriedade: Infromações que um componente pai passa para o componente filho



function App() {

const [devs, setDevs] = useState([])




  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')
      setDevs(response.data)

     

    }
    loadDevs()
  }, [])
 async function handleAddDev(data) {
   
   const response = await api.post('/devs', data)
   

   setDevs([...devs, response.data])
 }
  
  return (
    <div id="app" >
      <aside>
        <strong>Cadastrar</strong>
        <FormDev onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
           <DevItem  key={dev._id}  dev={dev}/>
          ))}
          
          
        </ul>
      </main>
    </div>
  );
}

export default App;
