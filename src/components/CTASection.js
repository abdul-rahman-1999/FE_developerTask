import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CTASection() {
  return <>
  
  <Box sx={{padding:{xs:"40px 15px",sm:"65px"},backgroundColor:"#F9FAFB"}}  >

<Box sx={{textAlign:"center",width:{xs:"80%",sm:"100%"},margin:"0px auto",}}>

        <Typography sx={{fontSize:{xs:"30px",sm:"30px"},fontFamily:"Inter",fontWeight:600,color:"black",margin:"16px 0px"}}>Start your free trial</Typography>
        <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:400,color:"#667085",lineHeight:{xs:"24px"},textAlign:"center",fontFamily:"Inter"}}>Join over 4,000+ startups already growing with Untitled.</Typography>

        <Box sx={{display:"flex",alignItems:"center",gap:{xs:2,sm:3},flexDirection:{xs:"column-reverse",sm:"row"},justifyContent:"center",mt:"25px"}}>

         <Button variant="contained" sx={{border:"1px solid #D0D5DD",backgroundColor:"white",color:"#344054",width:{xs:"100%",sm:"25%",md:"15%"},padding:"08px 20px",textTransform:"none","&:hover" : {backgroundColor:"white"}}}>Learn More</Button>
         <Button variant="contained" sx={{backgroundColor:"#7F56D9",width:{xs:"100%",sm:"25%",md:"15%"},padding:"08px 20px",textTransform:"none","&:hover" : {backgroundColor:"#7F56D9"}}}>Get Started</Button>

         </Box>

</Box>

</Box>

  </>
}

export default CTASection