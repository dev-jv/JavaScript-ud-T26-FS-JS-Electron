import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  //console.log(process.env.REACT_APP_BACKEND_URL);

  // State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect( () => {
    // console.log('desde useEffect');
    if(consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // console.log(respuesta.data)

            // Colocar en el state el resultado
            guardarCitas(respuesta.data);

            // Deshabilitar la consulta
            guardarConsultar(false);

          })
          .catch(error => {
            console.log(error);
          })
      }
  
      consultarAPI();
    }

  }, [consultar] );

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/"
          component={() => <Pacientes citas={citas} />}
        />

        <Route 
          exact 
          path="/nueva"
          component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
        />

        <Route 
          exact 
          path="/cita/:id"
          component={Cita}
        />
      </Switch>

    </Router>
  );
}

export default App;



