import React from 'react'
import { useSearchParams } from "react-router-dom";

const App = () => {

  const students = [
    {
      name: "Alice Johnson",
      registerNo: "REG2023001",
      gpa: 3.8,
      level: "Senior",
    },
    {
      name: "Bob Smith",
      registerNo: "REG2023002",
      gpa: 3.5,
      level: "Junior",
    },
    {
      name: "Charlie Brown",
      registerNo: "REG2023003",
      gpa: 3.9,
      level: "Senior",
    },
    {
      name: "Diana Prince",
      registerNo: "REG2023004",
      gpa: 3.7,
      level: "Sophomore",
    },
    {
      name: "Ethan Hunt",
      registerNo: "REG2023005",
      gpa: 3.6,
      level: "Junior",
    },
    {
      name: "Fiona Gallagher",
      registerNo: "REG2023006",
      gpa: 3.4,
      level: "Freshman",
    },
    {
      name: "George Michael",
      registerNo: "REG2023007",
      gpa: 3.2,
      level: "Freshman",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const filterBY = searchParams.get('level');

  const filteredStudents = filterBY ? 
  students.filter(student => student.level.toLocaleLowerCase() === filterBY)
  : students;


  return (
    <div className='container' >
    <div className='buttons-wrraper text-center mt-5'>
      <button className='btn btn-primary  btn-sm m-2' onClick={() => setSearchParams({level:"senior"})}>Senior</button>
      <button className='btn btn-secondary btn-sm m-2' onClick={() => setSearchParams({level:"junior"})}>Junior</button>
      <button className='btn btn-dark btn-sm m-2' onClick={() => setSearchParams({level:"sophomore"})}>Sophomore</button>
      <button className='btn btn-success btn-sm m-2' onClick={() => setSearchParams({level:"freshman"})}>Freshman</button>
      <button className='btn btn-light btn-sm m-2' onClick={() => setSearchParams({})}>Clear All</button>
    </div>


      {filteredStudents.length > 0?
      
      filteredStudents.map(student => {
        return (
        <div 
        className='display-students p-2 rounded-full' 
        key={student.registerNo} >
          <h2>Name: {student.name}</h2>
          <p>Register No: {student.registerNo}</p>
          <p>GPA: {student.gpa}</p>
          <p>Level: {student.level}</p>
          <hr></hr>
          </div>)
      })
     
    :<h1>Loading...</h1>}
    </div>
  )
}

export default App
