import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { useStyles } from "./css/HomeCss";
import Icon from "../images/LOGO.png";
import vector from "../images/Vector.png"
import "./Home.css";
import SocialFollow from "./SocialFollow";
import {getCurrentDate} from "./getDate"; 
import { getCurrentTime } from "./getTime";

function Hey(){
  const { classes } = useStyles();
  return(

    <Container maxWidth={false} className={classes.paperContainer}>
    <Grid className={classes.headingBox}>
      <Grid className={classes.headingBoxInner}>
        <img className={classes.logoIcon} src={Icon} alt="icon" />
        <Typography className={classes.mainHeading}>
          SPACEOID APPLICATION STATUS
        </Typography>
      </Grid>
    </Grid>
    <Grid className={classes.headingBox1}>
        <Typography className={classes.Heading}>
          Today's date is {getCurrentDate()} and Time is {getCurrentTime()}
          </Typography>
        </Grid>
      <Grid className={classes.bottomBox}>
        <Grid className={classes.vectorIcon}> 
        <img src={vector} alt="img"/>
        </Grid>
        <Typography className={classes.Heading}>
          YOUR FORM HAS BEEN SUBMITTED!
        </Typography>
        <Typography className={classes.content}>
        We are reviewing your application at the moment, return in few days to know your application status.
        </Typography>
        
         
        
        </Grid>
        <Grid>
        <Typography className={classes.footerMail}>
          <div class="flex-container">
            <div class="flex-child">
              SUPPORT@SPACEOID
            </div>
            <div class="flex-child">
              <SocialFollow />

            </div>
            
          </div>
        </Typography>

      </Grid>
      </Container>
  );

}
export default Hey;