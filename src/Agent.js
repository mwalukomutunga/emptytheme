import axios from "axios";
axios.defaults.baseURL ="http://localhost:5000/api/";

const responseBody =(response) =>response.data;
const requests= {
    get:(url)=>axios.get(url).then(responseBody),
    post:(url,body ={})=>axios.post(url,body).then(responseBody),
    put:(url,body ={})=>axios.put(url,body).then(responseBody),
    del:(url)=>axios.delete(url).then(responseBody),
}
const Costs ={
    list: ()=> requests.get('/costs')
}
const ValidityPeriod ={
    list: ()=> requests.get('/validityperiod')
}
const valuechain ={
    list: ()=> requests.get('/valuechain')
}
const insuranceItem ={
    list: ()=> requests.get('/insuranceitems')
}
const agent ={
    Costs,ValidityPeriod,valuechain,insuranceItem
}
export default agent;