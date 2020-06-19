import axios from 'axios'
import config from "../config";

const createInstance = (req) => axios.create({
  baseURL: config.serverURL,
  headers: {
    cookie: req.get('cookie') || ''
  },
  params: {
    secret: config.secret
  }
})

export default createInstance