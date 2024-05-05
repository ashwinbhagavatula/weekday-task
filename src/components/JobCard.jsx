import React , {useState} from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, Button } from '@mui/material';
import tick from "../assets/tick.png"
import thunder from "../assets/thunder.png"
import potrait from "../assets/potrait.jpg"
import Modal from '@mui/material/Modal';
function JobCard(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const trimmedText = props.jobDetailsFromCompany.slice(0, 100);

  const handleApplyClick = () =>{
    window.location.href = props.jdLink;
  }
  return (
    <div>
        <Card sx={{maxWidth:380, borderRadius:5}}>
          <CardHeader
            avatar={
              <img src={props.logoUrl} alt="" width={50} height={50} />
            }
            titleTypographyProps={{
              fontSize: 16,
              fontWeight:600,
              color:"#8b8b8b"
            }}
            subheaderTypographyProps={{
              fontSize: 18,
              color:"#000"
            }}
            title={
              <div>
                {props.companyName}
              </div>
            }
            subheader={
              <div>
                <div>{props.role.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
                <div style={{ fontSize: 12, color: "#000" }}>{props.jobLocation.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
              </div>
            }
          />
          <CardContent>
          <div className='subHeadingText'>
            Estimated Salary: {props.salaryCurrencyCode} {props.minJdSalary ? props.minJdSalary : 'N/A'} - {props.maxJdSalary ? props.maxJdSalary : 'N/A'} LPA <span><img src={tick} alt='tick mark' width={20} height={20}/></span>
          </div>
          <h4>About Company:</h4>


          <Typography paragraph>
            {trimmedText}
          </Typography>
          {!showMore && props.jobDetailsFromCompany.length > 100 && (
            <button className="showMoreButton" onClick={toggleShowMore}>Show More</button>
          )}
          <Modal
            open={showMore}
            onClose={toggleShowMore}
            aria-labelledby="job-details-modal"
            aria-describedby="job-details-description"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 1)', 
              paddingLeft:"30px",paddingRight:"30px", paddingTop:"10px", paddingBottom:"10px",
              maxWidth: '300px', borderRadius: '10px' 
              }}>
              <Typography id="job-details-description" sx={{ mt: 2 }}>
                <h4>About Company:</h4>
                {props.jobDetailsFromCompany}
              </Typography>
            </div>
          </Modal>

          <div>
            <span className='subHeadingText'>Minimum Experience</span> <br/>
            {props.minExp ? props.minExp : '0+'} Years
          </div>

          <Button variant="contained" 
          sx={{
            marginTop:2,
            width:350, 
            height:50,
            backgroundColor:"#55efc4", 
            color:"#000",
            '&:hover': {
              backgroundColor: "#55efc4",
            },
            borderRadius:2
          }}
          onClick={handleApplyClick}
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
            <img src={potrait} alt="Thunder Symbol" width={40} height={40} className='potrait'/> &#160; Unlock Referal asks
          </Button>
          </CardContent>
        </Card>
    </div>
  )
}

export default JobCard;