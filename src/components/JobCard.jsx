import React from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, Button } from '@mui/material';
import airtable from "../assets/airtable.jpg"
import tick from "../assets/tick.png"
import thunder from "../assets/thunder.png"
function JobCard(props) {
  return (
    <div>
        <Card sx={{maxWidth:320, borderRadius:5}}>
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
                fampay
              </div>
            }
            subheader={
              <div>
                <div>Backend Engineer</div>
                <div style={{ fontSize: 12, color: "#000" }}>Bangalore</div>
              </div>
            }
          />
          <CardContent>
          <div>
            Estimated Salary: 18 - 35 LPA <span><img src={tick} alt='tick mark' width={20} height={20}/></span>
          </div>
          <h4>About Company:</h4>
          <Typography paragraph>
          Feufo specializes in temporary, permanent, contract, and remote staffing across healthcare, manufacturing, IT, finance, and oil & gas industries.
          We offer tailored solutions for short-term projects, full-time positions, executive searches, and international staffing needs. s...

          </Typography>

          <Button variant="contained" 
          sx={{
            width:280, 
            height:50,
            backgroundColor:"#55efc4", 
            color:"#000",
            '&:hover': {
              backgroundColor: "#55efc4",
            },
          }}
          >
            <img src={thunder} alt="Thunder Symbol" width={20}/>Easy Apply
          </Button>

          <Button variant="contained" 
          sx={{
            marginTop:2,
            height:50,
            width:280, 
            backgroundColor:"#4943da", 
            color:"#fff",
            '&:hover': {
              backgroundColor: "#4943da",
            },
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