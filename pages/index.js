import styles from '../styles/Home.module.css'
import Image from 'next/image'


import {useState} from 'react'

function Contador() {
  const [contador,setContador] = useState(1)

  function AdicionarContador(){
    setContador(contador+1)
  }

  return(<div>
    <p>{contador}</p>
    <button onClick={AdicionarContador} class='btn btn-primary'>Adicionar</button>
  </div>)
}



export default function Home() {



  return (
    <div  class='text-center center '>
        <div >
        <a href='/' class='badge badge-success h1'>la cucaracha</a></div>
        <div><iframe src="https://giphy.com/embed/xrZuNcEAmTb6U" width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
       <Contador/>




    </div>
  )
}
