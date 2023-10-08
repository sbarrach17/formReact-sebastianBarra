import './App.css'
import Registro from './components/Registro'

const data = {
  caracteristicas :[
    {
      nombre: <i class="fa-brands fa-facebook"></i>,
    },
    {
      nombre: <i class="fa-brands fa-square-x-twitter"></i>,
    },
    {
      nombre: <i class="fa-brands fa-square-instagram"></i>,
    }
  ]
}



function App() {


  return (
<div className='container'>
<Registro caracteristicas={data.caracteristicas}></Registro>
</div>
  )
}

export default App
