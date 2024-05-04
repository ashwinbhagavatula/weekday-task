import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import './App.css';
import Filter from './components/Filter';

function App() {
  const [jobData, setJobData] = useState([]);

  //Make API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": 10,
          "offset": 0
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        
        setJobData(result.jdList); 
        console.log(result.jdList)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <Filter/>

      <div className='grid-container'>
        {jobData.map((job, index) => (
          <div className='item' key={index}>
            <JobCard
              companyName={job.companyName}
              role={job.jobRole}
              jobLocation={job.location}
              salary={job.salary}
              maxJdSalary={job.maxJdSalary}
              minJdSalary={job.minJdSalary}
              minExp={job.minExp}
              jobDetailsFromCompany= {job.jobDetailsFromCompany}
              logoUrl = {job.logoUrl}
              jdLink = {job.jdLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
