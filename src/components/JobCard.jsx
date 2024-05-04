import React from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, Button } from '@mui/material';
import airtable from "../assets/airtable.jpg"
import tick from "../assets/tick.png"
import thunder from "../assets/thunder.png"
function JobCard(props) {
  return (
    <div>
        <Card sx={{maxWidth:380, borderRadius:5}}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img src={airtable} alt="" />
              </Avatar>
            }
            titleTypographyProps={{
              fontSize: 14,
              color:"#6c757d"
            }}
            subheaderTypographyProps={{
              fontSize: 16,
              color:"#000"
            }}
            title={
              <div>
                {props.companyName}
              </div>
            }
            subheader={
              <div>
                <div>{props.role}</div>
                <div style={{ fontSize: 12, color: "#000" }}>{props.jobLocation}</div>
              </div>
            }
          />
          <CardContent>
          <div>
            Estimated Salary: {props.salary} <span><img src={tick} alt='tick mark' width={20} height={20}/></span>
          </div>
          <h4>About Company:</h4>
          <Typography paragraph>
          Feufo specializes in temporary, permanent, contract, and remote staffing across healthcare, manufacturing, IT, finance, and oil & gas industries.
          We offer tailored solutions for short-term projects, full-time positions, executive searches, and international staffing needs. We offer tailored solutions for short-term projects, 
          full-time positions, executive searches, and international staffing needs...

          </Typography>

          <Button variant="contained" 
          sx={{
            width:350, 
            height:50,
            backgroundColor:"#55efc4", 
            color:"#000",
            '&:hover': {
              backgroundColor: "#55efc4",
            },
            borderRadius:2
          }}
          >
            <img src={thunder} alt="Thunder Symbol" width={20}/>Easy Apply
          </Button>

          <Button variant="contained" 
          sx={{
            marginTop:2,
            height:50,
            width:350, 
            backgroundColor:"#4943da", 
            color:"#fff",
            '&:hover': {
              backgroundColor: "#4943da",
            },
            borderRadius:2
          }}
          >
            <img src={thunder} alt="Thunder Symbol" width={20}/>Unlock Referal asks
          </Button>
          </CardContent>
        </Card>
    </div>
  )
}

export default JobCard;