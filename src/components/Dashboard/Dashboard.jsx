import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contex/dataContex'
import './style.css'
import Grafico from '../Grafico/Grafico'

const Dashboard = () => {
  const { dataAcciones } = useContext(DataContext)

  return (
    <div className="contenedor-portafolio">
      <div className="top">
        <h1>Portafolio</h1>
        <span className='link-ordenes'>Ordenes</span>
        <span className='link-ordenes'>Operaciones Manuales</span>
        <button>Vender</button>
      </div>
      <div className="general">
        <div className="contenedor-posiciones">
          <div>
            <h3>Posición consolidada</h3>

            <div className="posicion">
              <div className="item tit">Nombre</div>
              <div className="item tit">Precio</div>
              <div className="item tit">Variación</div>
            </div>
            {Array.isArray(dataAcciones) &&
              dataAcciones.map((Moneda) => {
                const { id, nombre, price, ultimoPrecio } = Moneda
                return (
                  <div key={id} className="posicion">
                    <div className="item">{nombre}</div>
                    <div className="item">{price}</div>
                    <div
                      className={`item ${ultimoPrecio > 0 ? 'subio' : 'bajo'}`}
                    >
                      {ultimoPrecio}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="contenedor-der">
          <div className="span-posicion">
            <span>Total: $50,000</span>
            <span>Disponible: $50,000</span>
            <span>Ganancia: $50,000</span>
          </div>
          <div className="grafico">
            <Grafico />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
