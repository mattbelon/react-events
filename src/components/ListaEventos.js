import React from 'react';
import Evento from './Evento';
import { EventosConsumer } from './EventosContext';

const ListaEventos = () => {
    
    return (
    <div uk-grid>
        <div className="uk-child-width-1-3@m" uk-grid="true">            <EventosConsumer>
                {(value) => {
                    return value.eventos.map(evento => (
                        <Evento
                        key={evento.id}
                        evento={evento}
                        />
                    ))
                }}
            </EventosConsumer>
        </div>
    </div>
    );
}
 
export default ListaEventos;