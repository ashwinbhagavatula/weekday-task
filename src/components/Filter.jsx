import React from 'react'
import Select from 'react-select';
import { TextField } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateFilteredJobData,addFilteredJobData, updateRoles, updateExperience, updateRemote, updateMinBaseSalary} from '../features/filterSlice';


const roles = [
  {value:'backend', label: 'Backend'},
  {value:'frontend', label: 'Frontend'},
  {value:'fullstack', label: 'Fullstack'},
  {value:'ios', label: 'IOS'},
  {value:'flutter', label: 'Flutter'},
  {value:'react native', label: 'React Native'},
  {value:'android', label: 'Android'},
  {value:'frontend', label: 'Frontend'},
  {value:'tech lead', label: 'Tech Lead'},
  {value:'dev-ops', label: 'Dev-Ops'},
  {value:'data engineer', label: 'Data Engineer'},
  {value:'data science', label: 'Data Science'},
  {value:'computer-vision', label: 'Computer-Vision'},
  {value:'nlp', label: 'NLP'},
  {value:'deep learning', label: 'Deep Learning'},
  {value:'test / qa', label: 'Test / QA'},
  {value:'web3', label: 'Web3'},
  {value:'sre', label: 'SRE'},
  {value:'data-infrastructure', label: 'Data-Infrastructure'},
  {value:'designer', label: 'Designer'},
  {value:'design manager', label: 'Design Manager'},
  {value:'graphic designer', label: 'Graphic Designer'},
  {value:'product designer', label: 'Product Designer'},
  {value:'product manager', label: 'Product Manager'},
  {value:'operations manager', label:'Operations Manager'},
  {value:`founder's office/ chief of staff`, label:`Founder's Office/Chief Of Staff`},
  {value:'sales development representative', label: 'Sales Development Representative'},
  {value:'account executive', label: 'Account Executive'},
  {value:'account manager', label: 'Account Manager'},
  {value:'digital marketing manager', label: 'Digital Marketing Manager'},
  {value:'growth hacker', label: 'Growth Hacker'},
  {value:'marketing', label: 'Marketing'},
  {value:'product marketing manager', label: 'Product Marketing Manager'},
  {value:'hardware', label:'Hardware'},
  {value:'mechanical', label: 'Mechanical'},
  {value:'systems', label: 'Systems'},
  {value:'business analyst', label: 'Business Analyst'},
  {value:'data analyst', label:'Data Analyst'},
  {value:'project manager', label: 'Project Manager'},
  {value:'management', label: 'Management'},
  {value:'legal', label: 'Legal'},
  {value:'hr', label: 'HR'},
  {value:'finance', label: 'Finance'},
];

const noOfEmployees = [
  {value:'1-10', label: '1-10'},
  {value:'11-20', label: '11-20'},
  {value:'21-50', label: '21-50'},
  {value:'51-100', label: '51-100'},
  {value:'101-200', label: '101-200'},
  {value:'201-500', label: '201-500'},
  {value:'500+', label: '500+'},
];

const exp = [
  {value:1, label: '1'},
  {value:2, label: '2'},
  {value:3, label: '3'},
  {value:4, label: '4'},
  {value:5, label: '5'},
  {value:6, label: '6'},
  {value:7, label: '7'},
  {value:8, label: '8'},
  {value:9, label: '9'},
  {value:10, label: '10'},
];

const jobMode = [
  {value:'remote', label: 'Remote'},
  {value:'hybrid', label: 'Hybrid'},
  {value:'in-office', label: 'In-Office'},
]

const salaries = [
  {value:0, label: '0L'},
  {value:10, label: '10L'},
  {value:20, label: '20L'},
  {value:30, label: '30L'},
  {value:40, label: '40L'},
  {value:50, label: '50L'},
  {value:60, label: '60L'},
  {value:70, label: '70L'},

]


function Filter({jobData, filters,updateFilter, filteredJobData}) {
  const dispatch = useDispatch()
  const rolesState = useSelector(state => state.roles)
  const updateFilteredJobDataHandler = (searchTerm) =>{
    if(searchTerm){
      dispatch(updateFilteredJobData(searchTerm))
    }else{
      dispatch(addFilteredJobData(jobData))
    }
  }

  const handleRoleChange = (selectedOptions) => {
    
    if(selectedOptions.length != 0)
      dispatch(updateRoles(selectedOptions.map((option)=>option.value)));
    else
      dispatch(addFilteredJobData(jobData))
  };

  const handleNoOfEmployeesChange = (selectedOptions) => {
    updateFilter('numberOfEmployees', selectedOptions.map(option => option.value));
  };

  const handleExperienceChange = (selectedOptions) => {
    console.log(selectedOptions.map((option)=>option.value))
    if(selectedOptions.length != 0)
      dispatch(updateExperience(selectedOptions.map((option)=>option.value)));
    else
      dispatch(addFilteredJobData(jobData))
  };

  const handleJobModeChange = (selectedOptions) => {
    if(selectedOptions.length != 0)
      dispatch(updateRemote(selectedOptions.map((option)=>option.value)));
    else
      dispatch(addFilteredJobData(jobData))
  };

  const handleSalaryChange = (selectedOptions) => {
    if(selectedOptions.length != 0)
      dispatch(updateMinBaseSalary(selectedOptions.map((option)=>option.value)));
    else
      dispatch(addFilteredJobData(jobData))
  };

  const handleSearchChange = (event) => {
    // Implement search functionality here
    const searchTerm = event.target.value.toLowerCase(); // Convert search term to lowercase for case-insensitive search
    updateFilteredJobDataHandler(searchTerm)
  };
  
  return (
    <div className='filter'>
      <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={roles}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={<div className="select-placeholder-text">Roles</div>}
      onChange={handleRoleChange}
      />
      <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={noOfEmployees}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={<div className="select-placeholder-text">Number Of Employees</div>}
      onChange={handleNoOfEmployeesChange}
      />
      <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={exp}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={<div className="select-placeholder-text">Experience</div>}
      onChange={handleExperienceChange}
      />
      <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={jobMode}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={<div className="select-placeholder-text">Remote</div>}
      onChange={handleJobModeChange}
      />
      <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={salaries}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={<div className="select-placeholder-text">Minimum Base Pay Salary</div>}
      onChange={handleSalaryChange}
      />
      
      <TextField id="outlined-basic" 
      label="Search Company Name" 
      variant="outlined"
      InputProps={{ style: { height: '38px'} }}
      
      sx={{
        '& .MuiInputLabel-root': {
          top: '-20%',
        }
      }}
      onChange={handleSearchChange}
      />
    </div>
  )
}

export default Filter;