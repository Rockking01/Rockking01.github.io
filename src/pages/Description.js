import logo from '../assets/logo.png'
import './Desctiption.css'

function Description() {
  return (
    <div style={{textAlign: "center"}}>
      <img className="logo-description" src={logo} alt="Logo de mi aplicación" />
      <div className="container-description">
        <p className='p-description'>Bienvenidos al software de capacitación de Regal Rexnord. Este software de capacitación ha sido diseñado para brindar una capacitación efectiva y amigable a los empleados de almacén, fábrica y oficina sobre situaciones de riesgo, en particular, sobre cómo reaccionar en caso de incendios en un edificio.</p>
        <p className='p-description'>Este software se presenta en forma de videojuego interactivo, en donde los empleados pueden aprender de manera visual y práctica qué hacer en caso de incendios. El videojuego es una herramienta divertida y efectiva que brinda una experiencia de aprendizaje única y atractiva para los empleados.</p>
        <p className='p-description'>Los empleados pueden aprender cómo utilizar las escaleras de emergencia, cómo evitar utilizar los elevadores en caso de incendios, entre otros aspectos importantes. Además, este software también les brinda la oportunidad de aprender a identificar y prevenir situaciones de riesgo en su lugar de trabajo.</p>
        <p className='p-description'>La capacitación mediante este software se mide por medio de puntos que se calculan dentro del juego, lo que permite a los empleados evaluar su progreso y mejorar su desempeño.</p>
        <p className='p-description'>Este software es una herramienta importante para la capacitación de los empleados y Regal Rexnord está comprometido a seguir desarrollando y mejorando esta plataforma. ¡Acompáñanos en este viaje y descubre la manera más divertida de aprender sobre situaciones de riesgo!</p>
      </div>
    </div>
  )
}

export default Description