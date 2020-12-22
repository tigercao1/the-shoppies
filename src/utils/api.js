import axios from 'axios';
import { properties } from './../resources/properties';

export default axios.create({
    baseURL: properties.host,
    responseType: "json",
    timeout: 5000
});