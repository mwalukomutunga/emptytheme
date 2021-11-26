import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000/api/";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJBZG1pbiI6IkFkbWluIiwiZXhwIjoxNjM3OTQ2MzY4LCJpc3MiOiJEaWdpZmFybSIsImF1ZCI6IlNhZmFyaWNvbSJ9.KSbNsJ7x0sIzafEo2q-vQGPYUNXZ-jQKEQ-76FLe3aU";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const responseBody = (response) => response.data;
const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body = {}) => axios.post(url, body).then(responseBody),
    put: (url, body = {}) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
}
const Costs = {
    list: () => requests.get('/InsuranceCosts'),
    create: (body) => requests.post('/InsuranceCosts', body),
    ItemCstos: (id) => requests.get('/InsureProduct/' + id),
    AddCostItem: (id, body) => requests.post('/InsureProduct/' + id, body),
    DeleteCostItem: (id, body) => requests.del('/InsureProduct/' + id +'/'+body)
}
const ValidityPeriod = {
    list: () => requests.get('/PeriodValidity'),
    create: (body) => requests.post('/PeriodValidity', body)
}
const valuechain = {
    list: () => requests.get('/ValueChain'),
    create: (body) => requests.post('/ValueChain', body)
}
const insuranceItem = {
    list: () => requests.get('/InsureProduct'),
    create: (body) => requests.post('/insuranceitems', body)
}
const agent = {
    Costs, ValidityPeriod, valuechain, insuranceItem
}
export default agent;