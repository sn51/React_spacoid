import { makeStyles } from "tss-react/mui";
import Image from "../../images/background.png";

export const useStyles = makeStyles()((theme) => {
    return {
      paperContainer: {
        backgroundImage: `url(${Image})`,
        width: "100%",
        height: "100%",
      },
      footerMail: {
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "24px",
        letterSpacing: "0.03rem",
        padding: "50px 20px",
        borderBottom: "1px solid #9A9A9A",
        [theme.breakpoints.down("md")]: {
            padding: "25px 10px",
            fontSize: "12px",
            letterSpacing: "0.01rem",
            fontWeight: "200",
        },
      },
      listText: {
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "24px",
        letterSpacing: "0.03rem",
        padding: "50px 20px",
        borderBottom: "1px solid #9A9A9A",
        [theme.breakpoints.down("md")]: {
            padding: "25px 10px",
            fontSize: "12px",
            letterSpacing: "0.01rem",
            fontWeight: "200",
        },
      },
      submitBtnBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      },
      content : {
        //font-family: Switzer;
        display:"flex",
         padding: "50px 20px",
         //marginTop:"20px",
         fontSize: "15px",
         fontWeight: "400",
         lineHeight: "32px",
         justifyContent: "center",
         color: "#FFFFFF",
         lineSpacing: "0.03rem",

      },
      submitBtn: {
        background: "transparent",
        borderRadius: "25px",
        marginTop: "60px",
        backgroundColor: "#F2F2F2",
        padding: "18px 60px",
        color: "#151514",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "14px",
        [theme.breakpoints.down("md")]: {
            margin: "50px 12px",
            fontSize: "12px",
            padding: "8px 35px",
        },
        '&:hover': {
            backgroundColor: '#151514',
            color: '#F2F2F2',
        },
      },
      bottomBox: {
        borderRadius: "20px",
        margin: "100px 25px",
        padding: "100px 60px",
        background: "linear-gradient(152.97deg, rgba(216, 216, 216, 0.14) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(17.5px)",
        [theme.breakpoints.down("md")]: {
            margin: "50px 12px",
            padding: "40px 30px",
            backdropFilter: "blur(8.25px)",
        },

      },
      headingBoxInner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        },
      },
      headingBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "50px 50px",
        [theme.breakpoints.down("md")]: {
            padding: "10px",
        },
      },
      headingBox1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        padding: "10px 50px",
        [theme.breakpoints.down("md")]: {
            padding: "10px",
        },
      },
      btnBox: {
        margin: "auto 15px",
        [theme.breakpoints.down("md")]: {
            margin: "auto 5px",
        },
      },
      logoIcon:{
        height: '68px',
        width: '68px',
        [theme.breakpoints.down("md")]: {
            height: '49px',
            width: '49px',
        },
      },
      vectorIcon:{
        display:"flex",
        justifyContent:"center",
        margin:"50px"
      },
      mainHeading: {
        margin: "auto 50px",
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "40px",
        lineHeight: "14px",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px",
            margin: "auto 5px",
        },
        [theme.breakpoints.between("md", "lg")]: {
            fontSize: "25px",
            margin: "auto 5px",
        },
      },
      Heading: {
        //margin:"auto 50px",
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "30px",
        lineHeight: "14px",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px",
            margin: "auto 5px",
        },
        [theme.breakpoints.between("md", "lg")]: {
            fontSize: "25px",
            margin: "auto 5px",
        },
      },
      statusBtn: {
        background: "transparent",
        borderRadius: "25px",
        padding: "15px 25px",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "14px",
        color: "#F2F2F2",
        backgroundColor: "transparent",
        border: "2px solid grey",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
            padding: "11px 13px",
        },
        '&:hover': {
            backgroundColor: '#ffff',
            color: 'black',
        },
      },
    };
  });