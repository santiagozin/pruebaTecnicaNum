import axios from 'axios'

export const DataApi = async () => {
  try {
    const {data} = await axios.get(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD',
    )
    return data;
 
  } catch (error) {
    console.log(error)
  }
}
