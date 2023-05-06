import { createContext, useEffect, useState } from 'react'
import { DataApi } from '../services/data'

export const DataContext = createContext()

const DataProvider = (props) => {
  const [dataAcciones, setDataAcciones] = useState({})

  useEffect(() => {
    const ObtenerDataAsync = async () => {
      let dataApi = await DataApi()

      const arrayCriptos = dataApi.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
          price: cripto.DISPLAY.USD.PRICE,
          ultimoPrecio: cripto.DISPLAY.USD.CHANGEPCT24HOUR,
          volumen: cripto.DISPLAY.USD.VOLUMEDAY,
          imagenUrl: cripto.DISPLAY.USD.IMAGEURL,
       
        }
        return objeto
      })

      setDataAcciones(arrayCriptos)
    }
  
    const interval = setInterval(() => {
      ObtenerDataAsync()
    }, 1000)
  
    return () => clearInterval(interval)
  
  }, [])
  

  return (
    <DataContext.Provider value={{ dataAcciones }}>
      {props.children}
    </DataContext.Provider>
  )
}
export default DataProvider
