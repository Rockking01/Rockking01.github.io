import emailjs from 'emailjs-com';
import { useState } from 'react';
import API2 from '../utils/API2';
import Input from '../components/Input';
import './TokenEmail.css'
import NavbarAdmin from '../components/NavbarAdmin';

function TokenEmail() {

  const [showEmail, setShowEmail] = useState(false);


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pr7bc1e', 'template_uy4231w', e.target, 'Dd-YoH0eEvEYXzzdj')
      .then((result) => {
        console.log(result.text)
        setShowEmail(true)
        setTimeout(() => {
          setShowEmail(false)
        }, 5000)
      }, (error) => {
        console.log(error.text)
      })
  }

  const [authKey, setAuthKey] = useState("");
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    API2.post(
      "token/",
      (response) => {
        console.log("User sessions received:", response);
        setToken(response.token);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 5000); // Ocultar mensaje después de 5 segundos
      },
      (error) => {
        console.log("Error retrieving user sessions:", error);
      },
      { authKey: authKey, status: 'active' }
    );
  };

  const handleInputChange = (name, value) => {
    if (name === "authKey") {
      setAuthKey(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  return (
    <div>
      <div className='container-email'>
        <div className='flex-email'>
          <div className='token'>
            <h2 className='h2-email'>Generador de tokens</h2>
            <form onSubmit={handleSubmit}>
              <Input
                name="authKey"
                label="Token:"
                type="text"
                placeholder="Ingrese el Auth Key"
                value={authKey}
                onChangeValue={handleInputChange}
              />
              <button className='btn-margin-btm' type="submit">Generar Token</button>
            </form>
            {showMessage && (
              <div className='flex-inline'>
                <h3 className='h2-email'>Token generado exitosamente:</h3>
                <h3 className='h2-email'>{authKey}</h3>
              </div>
            )}
          </div>
          <form onSubmit={sendEmail}>
            <div className='email'>
              <h2 className='h2-email'>Formulario Email</h2>
              <div>
                <input name='name' label='Nombre' className='max-btn' type='text' placeholder='Nombre de usuario' />
              </div>
              <div>
                <input name='email' label='Email' className='max-btn' type='email' placeholder='Regalrexnord@regalrexnord.com' />
              </div>
              <div>
                <input type='number' className='max-btn' placeholder='token' value={authKey} name='token' />
              </div>
              <div>
                <button className='btn-margin-btm' type="submit">Enviar Correo</button>
              </div>
            </div>
          </form>
          {showEmail && (
            <div>
              <h3 className='h2-email'>Correo enviado con éxito</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TokenEmail;