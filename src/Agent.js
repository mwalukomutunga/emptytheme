import axios from "axios";
axios.defaults.baseURL ="http://localhost:4000/api/";

const responseBody =(response) =>response.data;
const requests= {
    get:(url)=>axios.get(url).then(responseBody),
    post:(url,body ={})=>axios.post(url,body).then(responseBody),
    put:(url,body ={})=>axios.put(url,body).then(responseBody),
    del:(url)=>axios.delete(url).then(responseBody),
}
const Costs ={
    list: ()=> requests.get('/InsuranceCosts'),
    create: (body)=>requests.post('/InsuranceCosts',body)
}
const ValidityPeriod ={
    list: ()=> requests.get('/PeriodValidity'),
    create: (body)=>requests.post('/PeriodValidity',body)
}
const valuechain ={
    list: ()=> requests.get('/ValueChain'),
    create: (body)=>requests.post('/ValueChain',body)
}
const insuranceItem ={
    list: ()=> requests.get('/LoadJson'),
    create: (body)=>requests.post('/insuranceitems',body)
}
const agent ={
    Costs,ValidityPeriod,valuechain,insuranceItem
}
export default agent;