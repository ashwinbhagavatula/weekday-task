import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import './App.css';
import { connect } from 'react-redux';
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilteredJobData , addOriginalJob} from './features/filterSlice';

function App() {
  const jobData = useSelector(state => state.originalJobData);
  const filteredJobData = useSelector(state => state.filteredJobData)
  const dispatch = useDispatch();
  const addOriginalJobDataHandler = (jobData)=>{
    dispatch(addOriginalJob(jobData));
  }
  const addFilteredJobDataHandler = (jobData)=>{
    if (jobData.length === 0) {
      // If jobData is empty, reset filteredJobData to its initial state
      dispatch(addFilteredJobData([]));
    } else {
      dispatch(addFilteredJobData(jobData));
    }
  }
  console.log(filteredJobData)
  //Make API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": 50,
          "offset": 0,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        
        addOriginalJobDataHandler(result.jdList); 
        addFilteredJobDataHandler(result.jdList)
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []); 

  return (
    <div className="App">
      <Filter 
      jobData={jobData}
      />

      <div className='grid-container'>
        {filteredJobData.length ? (
          filteredJobData.map((job, index) => (
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
        ))
        ):
        (
          <div className='noFilterData'>No Jobs Available with the given filter. Try refreshing the page</div>
        )
        }
      </div>
    </div>
  );
}

export default App;
