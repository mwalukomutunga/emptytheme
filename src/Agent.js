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
    list: ()=> requests.get('/costs'),
    create: (body)=>requests.post('/productcosts',body)
}
const ValidityPeriod ={
    list: ()=> requests.get('/validityperiod'),
    create: (body)=>requests.post('/validityperiod',body)
}
const valuechain ={
    list: ()=> requests.get('/valuechain'),
    create: (body)=>requests.post('/valuechain',body)
}
const insuranceItem ={
    list: ()=> requests.get('/insuranceitems')
}
const agent ={
    Costs,ValidityPeriod,valuechain,insuranceItem
}
export default agent;