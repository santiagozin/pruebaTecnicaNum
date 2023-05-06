import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contex/dataContex'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendUp,
  faArrowTrendDown,
  faEquals,
} from '@fortawesome/free-solid-svg-icons'

const CompraVenta = () => {
  const { dataAcciones } = useContext(DataContext)

  const [inputValue, setInputValue] = useState('')
  const [dataFiltrada, setDataFiltrada] = useState({})


  useEffect(() => {
    if (inputValue === '') {
      setDataFiltrada(dataAcciones)
    }
  }, [dataAcciones])

  const _handleFiltrar = (event) => {
    setInputValue(event.target.value.toLowerCase())

    const monedasFiltradas = dataAcciones.filter((objeto) =>
      objeto.nombre.toLowerCase().includes(inputValue),
    )

    setDataFiltrada(monedasFiltradas)
  }

  return (
    <div className="container-acciones">
      {Array.isArray(dataAcciones) && (
        <div className="slider">
          <div className="slide-track">
            {dataAcciones.map((Moneda) => {
              const { id, imagenUrl, ultimoPrecio } = Moneda
              return (
                <div
                  className={`slide ${ultimoPrecio > 0 ? 'subio' : 'bajo'}`}
                  key={id}
                >
                  <img
                    src={`https://cryptocompare.com/${imagenUrl}`}
                    alt="imagen cripto"
                    width={50}
                  />
                  <span>{ultimoPrecio}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {Array.isArray(dataAcciones) ? (
        <div className="contenedor-monedas">
          <div className='filtros'>
            <input
              type="text"
              name="buscador"
              value={inputValue}
              className="input-filtrar"
              placeholder="Filtrar"
              onChange={_handleFiltrar}
            ></input>
            <a href='#'>Mejor valoradas</a>
            <a href='#'>Mayor volumen</a>
          </div>
          <div className="contenedor-tabla">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Variación</th>
                  <th>Volumen</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(dataFiltrada) &&
                  dataFiltrada.map((moneda) => (
                    <tr key={moneda.id}>
                      <td className="nombre-moneda">{moneda.nombre}</td>
                      <td>{moneda.price}</td>
                      <td>
                        {moneda.ultimoPrecio > 0 ? (
                          <FontAwesomeIcon
                            icon={faArrowTrendUp}
                            className="icon-up"
                          ></FontAwesomeIcon>
                        ) : moneda.ultimoPrecio === 0 ? (
                          <FontAwesomeIcon
                            icon={faEquals}
                            className="icon-equal"
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            icon={faArrowTrendDown}
                            className="icon-down"
                          ></FontAwesomeIcon>
                        )}
                      </td>
                      <td>{moneda.volumen}</td>
                      <td>
                        <button className="button-comprar">Comprar</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <span>Cargando información..</span>
      )}
    </div>
  )
}

export default CompraVenta
