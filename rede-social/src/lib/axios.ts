import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.100.36:4000/v1/'
})

// baseURL: 'http://192.168.100.36:4000/v1/'