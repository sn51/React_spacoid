import React from "react";

import { Grid, Button, Container, Typography } from "@mui/material";
import Icon from "../images/LOGO.png";
import { useNavigate } from "react-router-dom";
import { listData } from "./Common";
import { useStyles } from "./css/HomeCss";
import SocialFollow from "./SocialFollow";
//import { style } from "@mui/system";
import "./Home.css"


export default function Home() {
  const navigate = useNavigate();
  
  const { classes } = useStyles();
 

  return (
    <Container maxWidth={false} className={classes.paperContainer}>
      <Grid className={classes.headingBox}>
        <Grid className={classes.headingBoxInner}>
          <img className={classes.logoIcon} src={Icon} alt="icon" />
          <Typography className={classes.mainHeading}>
            SPACEOID EARLY ACCESS FORM 
          </Typography>
        </Grid>
        <Grid className={classes.btnBox}>
          <Button variant="contained" className={classes.statusBtn}>
            Status
          </Button>
        </Grid>
      </Grid>

      <Grid className={classes.bottomBox}>
        
        <Typography className={classes.Heading}>
          Please give answer of following {listData.length} questions
        </Typography>
        
        {listData.map((item, index) => ( // here on listData we are having map metho of array
          <Grid key={item.heading}>
            <Typography className={classes.listText}>
              {index + 1}. {item.heading}
            </Typography>
          </Grid>
        ))}
        <Grid className={classes.submitBtnBox}>
        
          
          <Button variant="contained" onClick={() => navigate("/nextpage")} className={classes.submitBtn}>
            submit
          </Button>
         
        
          
        </Grid>
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

