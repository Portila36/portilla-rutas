import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2'

function Login_face() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }

  
  return (
    <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="220014040437544"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
        
      </div>
            
      );  
}

export default Login_face;