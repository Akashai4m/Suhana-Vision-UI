import { useState } from "react";
import LiveStatusTable from "./LiveStatusTable";


// Vision UI Dashboard PRO React examples
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// @mui material components
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { FaPaypal, FaLightbulb } from "react-icons/fa";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShipping';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ControllerCard from "examples/Cards/ControllerCard";

function Example() {
  const [menu, setMenu] = useState(null);
  const [dropdownLabel, setDropdownLabel] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = ({ currentTarget }) => {
    setMenu(null);
    setDropdownLabel(currentTarget.innerText || dropdownLabel);
  };

  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  const dropdownMenu = (
    <Menu
      anchorEl={menu}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Last 7 days</MenuItem>
      <MenuItem onClick={closeMenu}>Last week</MenuItem>
      <MenuItem onClick={closeMenu}>Last 30 days</MenuItem>
    </Menu>
  );

  return (
    <div>
    <div style={{display:"flex" ,flexWrap:"wrap" ,justifyContent:"space-between"}}>
    
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
                title="Loading Projection"
                description="suhana"
                value="10"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Loading Target"
                description="suhana"
                value="4"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Avg Loading This Week"
                description="suhana"
                value="65"
              />
            </Grid>
     <Grid item xs={12} md={3} lg={2} style={{marginBottom:"1vh"}}>
              <DefaultInfoCard
                icon={<LocalShippingIcon color="white" size="22px" />}
                title="Capacity Utilization"
                description="suhana"
                value="45"
              />
            </Grid>
            </div>
            <br/>
           
              <div style={{display:"flex" , flexWrap:"wrap",  justifyContent:"space-between"}}>
              <Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay1"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay2"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay3"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay4"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay5"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay6"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay7"
                onChange={handleSetLights}
              />
            </Grid><Grid item xs={12} md={6} lg={2} style={{marginBottom:"1vh"}}>
              <ControllerCard
                state={lights}
                icon={<LocalShippingIcon color={lights ? "yellow" : "success"} size="92px" />}
                title="Bay8"
                onChange={handleSetLights}
              />
            </Grid>
              </div>
          
            <div  style={{display:"flex" , justifyContent:"center"}}> <LiveStatusTable/>
                </div>
           
   
    </div>

  );
}

export default Example;