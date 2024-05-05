
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    roles: [],
    numberOfEmployees: [],
    experience: [],
    remote: [],
    minBaseSalary: [],
    searchTerm:'',
    filteredJobData:[],
    originalJobData:[],
}


export const filterSlice = createSlice({
    name: 'job-filter',
    initialState,
    reducers: {
        addOriginalJob : (state,action)=>{
            state.originalJobData = action.payload;
        },
        updateRoles: (state, action) => {
            state.roles = action.payload;
            const ogJobs = state.originalJobData
            const roles = state.roles.map(role => role.toLowerCase());
            const filter = ogJobs.filter(job => {
                const jobRole = job.jobRole.toLowerCase();
                return roles.some(role => jobRole.includes(role));
            });
            state.filteredJobData = filter;
        },
        updateNoOfEmployees: (state, action) => {
            state.numberOfEmployees = action.payload;
        },
        updateExperience: (state, action) => {
            state.experience = action.payload;
            const ogJobs = state.originalJobData
            const exp = state.experience;
            const filter = ogJobs.filter(job => {
                const reqExp = job.minExp ? job.minExp : 0;
                return exp.some(exp => reqExp === exp);
            });
            state.filteredJobData = filter;
        },
        updateRemote: (state, action) => {
            state.remote = action.payload;
            const ogJobs = state.originalJobData
            const location = state.remote;
            let filter;
            if (location.includes('remote')) {
                // If 'remote' option is selected, filter jobs with 'remote' location
                filter = ogJobs.filter(job => job.location.includes('remote'));
            } else if (location.includes('in-office') && !location.includes('remote')) {
                // If only 'in-office' option is selected, filter jobs without 'remote' location
                filter = ogJobs.filter(job => !job.location.includes('remote'));
            } else {
                filter = ogJobs.filter(job => !job.location.includes('remote'));
            }
            state.filteredJobData = filter;
        },
        updateMinBaseSalary: (state, action) => {
            state.minBaseSalary = action.payload;
            const ogJobs = state.originalJobData;
            const salary = state.minBaseSalary;
            const filter = ogJobs.filter(job => {
                return salary.some(sal => (job.minJdSalary ? job.minJdSalary : 0) >= salary);
            });
            state.filteredJobData = filter;
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addFilteredJobData: (state, action)=>{
            state.filteredJobData = action.payload
        },
        updateFilteredJobData : (state, action)=>{
            const ogJobs = state.originalJobData
            const filter = ogJobs.filter((job)=>{
                const companyName = job.companyName.toLowerCase();
                const payload = action.payload.toLowerCase();
                return companyName.includes(payload);
            })
            state.filteredJobData = filter
        }
    },
})

export const {addOriginalJob,updateRoles, updateNoOfEmployees , updateExperience, updateRemote, updateMinBaseSalary, updateSearchTerm, addFilteredJobData, updateFilteredJobData} = filterSlice.actions

export default filterSlice.reducer