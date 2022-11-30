//const axios = require('axios')
import useSWR from "swr"
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

function App () {
  const { data, error } = useSWR('/api/data', fetcher)
  // ...
}
