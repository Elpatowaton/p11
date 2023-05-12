import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './Components/ListadoNoticias'

function App() {
 // definir la categoria y noticias
 const [categoria, guardarCategoria] = useState('')
 const [noticias, guardarNoticias] = useState([])

 useEffect(() => {
  const consultarAPI = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey='5bfac484a53b4b3a994c012668c2d804`

   const respuesta = await fetch(url)
   const noticias = await respuesta.json()

   guardarNoticias(noticias.articles)
  }
  consultarAPI()
 }, [categoria])

 return (
  <Fragment>
   <Header titulo='Buscador de Noticias' />

   <div className='container white'>
    <Formulario guardarCategoria={guardarCategoria} />

    <ListadoNoticias noticias={noticias} />
   </div>
  </Fragment>
 )
}

export default App
