import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CategoriasProvider from './components/CategoriasContext';
import EventosProvider from './components/EventosContext';
import ListaEventos from './components/ListaEventos';

function App() {


  return (
    <EventosProvider >
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
        <Formulario

        />
        <ListaEventos />

        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
