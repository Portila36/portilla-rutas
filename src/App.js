import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Mapa from "./components/Mapa";
import Carrusel from "./components/Carrusel";
import Curriculum from "./components/Curriculum";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Example from "./components/Carrusel";
import Login from "./components/Login";
import LoginLogout from "./components/LoginLogout";
import Logout from "./components/LoginLogout";
import LoginChido from "./components/formulario";
import Login_face from "./components/Facebook";
import estilos from "./estilos/estilos.css"

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/Inicio" className="btn btn-warning">
            INICIO
          </Link>
          <Link to="/Alumno" className="btn btn-dark">
            Carrusel
          </Link>
          <Link to="/Mapa" className="btn btn-dark">
            MAPA
          </Link>
          <Link to="/Mockup" className="btn btn-dark">
            MOCKUP
          </Link>
          <Link to="/Curriculum" className="btn btn-dark">
            Curriculum
          </Link>
          <Link to="/Login" className="btn btn-dark">
            LOGIN
          </Link>
          <Link to="/Universidad" className="btn btn-dark">
            Universidad
          </Link>
          <Link to="/Foto" className="btn btn-dark">
            Foto
          </Link>
          <Link to="/Salir" className="btn btn-red">
            Salir
          </Link>
        </div>
        <hr />
        
        <Switch>
          <Route path="/Inicio" className='inicio'>
          <Container className="mt-5">
        <Row>
          <Col className="shadow-lg">
            <h2>MÉTODO RENDER</h2>
            <p>
              El término “render prop” se refiere a una técnica para compartir
              código entre componentes en React utilizando una propiedad cuyo
              valor es una función. Un componente con una render prop toma una
              función que devuelve un elemento de React y lo llama en lugar de
              implementar su propia lógica de representación.
            </p>
          </Col>
          <Col className="shadow-lg">
            <h2>MÉTODO STRICT MODE</h2>
            <p>
              StrictMode es una herramienta para destacar problemas potenciales
              en la aplicación. Al igual que Fragment, StrictMode no renderiza
              nada en la interfaz de usuario. Este modo también activa
              advertencias y comprobaciones adicionales para sus descendientes.
            </p>
          </Col>
          <Col className="shadow-lg">
            <h2>MÉTODO RETURN</h2>
            <p>
              La sentencia return se emplea para salir de la secuencia de
              ejecución de las sentencias de un método y, opcionalmente,
              devolver un valor. Tras la salida del método se vuelve a la
              secuencia de ejecución del programa al lugar de llamada de dicho
              método.
            </p>
          </Col>
        </Row>
      </Container>
      <center><button className="btn btn-dark">Github</button></center>
      
          </Route>
          <Route path="/Alumno" className=''>
            <center><h1>Bienvenido a la pagina de alumnos</h1></center>
            <Example />
          </Route>
          <Route path="/Mapa">
            <Mapa />
          </Route>
          <Route path="/Mockup">
          <center><img src={require('.//img/ejemplo2.png')} /></center>
          </Route>
          <Route path="/Curriculum">
          <center><img src={require('.//carpeta/documento.png')} /></center>
          </Route>
          <Route path="/Login">
          <center><Login /></center>
          <center><Login_face/></center>
          <center><LoginChido/></center>
          <center><Logout /></center>
          </Route>
          <Route path="/Universidad">
          <center><img src={require('.//img/logo.png')} /></center>
          </Route>
          <Route path="/Foto">
          <center><img src={require('.//img/foto.jpeg')} /></center>
          </Route>
          <Route path="/Salir">
          
          </Route>
        </Switch>
      </div>
    </Router>
    
    
  );
}

export default App;