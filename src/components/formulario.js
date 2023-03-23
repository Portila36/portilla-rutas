import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function LoginChido() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>o</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Correo Electronico' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>

         

          <MDBBtn className="mb-4 w-100">Ingresar</MDBBtn>
         

        </MDBTabsPane>

        

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default LoginChido;