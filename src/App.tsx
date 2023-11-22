import React, {useState} from 'react';
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import { employeeType } from './types';

function App() {

  const [data,setData]=useState<employeeType[]>([])
  
  const handleChange=(data:employeeType)=>{
    setData((prev)=>[...prev,data])
  }
  console.log(data);
  console.log(typeof data);

  const handleEmployeeDelete =  (employeeName: string) => {
    setData(oldValues => {
      return oldValues.filter(value => !employeeName)
    })
  };

  return (
   <>
   <Header />
   <div className='add'>
        <AddEmployeeComponent onEmployeChange={handleChange} />
   </div>
   <div className='list'>
        <ListEmployeeComponent employee={data} onEmployeeDelete={handleEmployeeDelete}/>
   </div>
   </>
  );
}

export default App;
