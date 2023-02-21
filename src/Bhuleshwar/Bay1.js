import React from 'react'
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import VuiSelect from "components/VuiSelect";
import VuiDatePicker from "components/VuiDatePicker";
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import LiveStatusTable from './LiveStatusTable';

function Bay1() {
  return (
    <div>
 <Grid item xs={12} xl={3} xxl={3}>
            <ProfileInfoCard
              title="Bay1 Status"
            //   description="Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                Status: "Bay Empty",
                LoadingSince: "20 feb 2023 ",
                LoadedTrucktype : "606 truck",
                // location: "United States",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
          <br/>
          <Grid>
            <Card>
           Download Report
            <div style={{display:"flex" ,flexWrap:"wrap" , marginBottom:"1.5vh",  justifyContent:"space-around"}} >
            <div style={{width:"20%"}}>
        <VuiDatePicker md={3} lg={1} 
         input={{ placeholder: "Select a date" }} /> </div>
          <div style={{width:"20%"}}>  <VuiSelect
  placeholder="Select bay"
  options={[
    { value: "bay1", label: "bay1" },
    { value: "bay2", label: "bay2" },
    { value: "bay3", label: "bay3" },
    { value: "bay4", label: "bay4" },
    { value: "bay5", label: "bay5" },
    { value: "bay6", label: "bay6" },
    { value: "bay7", label: "bay7" },
    { value: "bay8", label: "bay8" },
  
  ]}  
/></div>
<div><Button>Download Excel</Button></div>
        </div>
       
            </Card>
          </Grid>
          
          <Grid>
            <LiveStatusTable/>
          </Grid>
    </div>
  )
}

export default Bay1