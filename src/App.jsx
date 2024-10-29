import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 401, pv: 2200, amt: 2400},
    {name: 'Page C', uv: 402, pv: 2100, amt: 2400},
    {name: 'Page D', uv: 403, pv: 2000, amt: 2400},
    {name: 'Page E', uv: 404, pv: 2300, amt: 2400},
];
 const [phones, setPhones] = useState([]);

 useEffect( ()=>{
  axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
  .then( data =>{
     
     const phoneData= data.data.data;
     const phonesWithFakeData= phoneData.map( phone =>{
       const obj ={
        name: phone.phone_name,
        price : parseInt(phone.slug.split('-')[1])
       }
       return obj;
     })
     console.log(phonesWithFakeData);
     setPhones(phonesWithFakeData);

  }
     );

 },[])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      {/* <h1>Hello World</h1> */}
      <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    </LineChart>

    <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
     
    </>
  )
}

export default App
