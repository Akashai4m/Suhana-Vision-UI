import React from 'react'
import VuiInput from "components/VuiInput";
import VuiSelect from "components/VuiSelect";
import VuiDatePicker from "components/VuiDatePicker";
import Grid from "@mui/material/Grid";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PieChart from "examples/Charts/PieChart";
import VuiBox from "components/VuiBox";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { IoWallet, IoDocumentText } from "react-icons/io5";
import AnalticsPageBarChart from './AnalticsPageBarChart';
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Bhuleshwar from "./Bhuleshwar.css";

function AnaylticDetails() {
  return (
    <div> Anaylitics
        <div style={{display:"flex" ,flexWrap:"wrap" , marginBottom:"1.5vh",  justifyContent:"space-around"}} >
            <div style={{width:"30%"}}>
        <VuiDatePicker md={3} lg={1} 
         input={{ placeholder: "Select a date" }} /> </div>
          <div style={{width:"30%"}}>  <VuiSelect
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
        </div>
        <br/>
        <div style={{display:"flex" ,flexWrap:"wrap",   justifyContent:"space-around"}}>
        <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Truck Loaded"
                description="suhana"
                value="89"
              />
            </Grid>
           
            <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Avg.Loading time"
                description="suhana"
                value="89"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Capacity Utilization"
                description="suhana"
                value="89"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Efficient Loading Time"
                description="suhana"
                value="89"
              />
            </Grid>
            <br/>
        </div>
        <br/>
        <div className='piechart' >
            <div className='pie'><PieChart
  title="Pie Chart"
  data={[70, 10, 20]}
  options={{
    labels: ["Dev.to", "Creative Tim", "Github"],
    colors: ["#2d8cfc", "#0f4a91", "#012654"],
    chart: {
      width: "100%",
      stroke: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#2d8cfc", "#0f4a91", "#012654"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  }}
/></div>
<div style={{width:"5%"}}></div>
            <div className='bayidling'>
                    
                    <Grid item xs={12} md={5} lg={6} xl={5}>
                    <br/>
                <VuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "No Trolly", fontWeight: "bold" }}
                    count="86.67% of the time"
                    // percentage={{ color: "success", text: "+55%" }}
                    icon={<LocalShippingIcon color="white" />}
                  />
                </VuiBox>
                <br/><br/>
                <MiniStatisticsCard
                  title={{ text: "No Loader", fontWeight: "bold" }}
                  count="13% of the time"
                  // percentage={{ color: "success", text: "+3%" }}
                  icon={<LocalShippingIcon color="white" />}
                />
              </Grid>
            </div>
        </div>
        <br/>
        <div>
         
          <AnalticsPageBarChart  name={" Number of Trucks Loaded So Far "}  />
        </div>
        <br/>
        <div>
           
          <AnalticsPageBarChart name={" Average Loading Time and Effective Loading Time "}/>
        </div>

       
    </div>
  )
}

export default AnaylticDetails