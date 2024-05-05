import React, { useState, useEffect, useRef } from 'react';
import JobCard from './components/JobCard';
import './App.css';
import topArrow from "./assets/top-arrow.png"
import { connect } from 'react-redux';
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilteredJobData , addOriginalJob} from './features/filterSlice';

function App() {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [dataFetched, setDataFetched] = useState(false);
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
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": limit, // Fetch 10 items at a time
          "offset": offset,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();

        addOriginalJobDataHandler([...result.jdList]);
        addFilteredJobDataHandler([...result.jdList]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]); // Fetch data when offset changes 

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrolledToBottom = scrollTop + windowHeight >= documentHeight;
    const threshold = 200; // Adjust this value as needed

    if (documentHeight - (scrollTop + windowHeight) < threshold && !loading) {
      // Load more data if scrolled to bottom and not already loading
      setLimit(prevLimit => prevLimit + 9); // Increase offset by 10 to load more data
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Add scroll event listener on component mount


  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div ref={ref} className="App">
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
              salaryCurrencyCode = {job.salaryCurrencyCode}
            />
          </div>
        ))
        ):
        (
          <>
          {loading ? (<p className='noFilterData'>Loading...</p>):(<div className='noFilterData'>No Jobs Available with the given filter. Try refreshing the page</div>)}
          </>
        )
        }
      </div>
      <div className='arrowContainer'>
        {!loading &&
        <img src={topArrow} alt='Move to top of page' className='topArrow' onClick={handleClick}/>
        }
      </div>
      
    </div>
  );
} 

export default App;
