import React from 'react'
import Box from '@mui/material/Box';

function SocialProof() {
  return <>
  
   <Box sx={{padding:"65px 40px"}}>

   <p style={{margin:"12px",color:"#667085",fontFamily:"Inter",fontWeight:500,textAlign:"center",fontSize:"14px"}}>Join 4,000+ companies already growing</p>

   <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:{xs:3.5,sm:"none"}}}>

   <Box
        component="img"
        sx={{
            margin:"30px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"130px",sm:"110px",md:"145px"}
        }}
        alt="The house from the offer."
        src="/images\layers.png"
        />

<Box
        component="img"
        sx={{
            margin:"30px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"130px",sm:"110px",md:"145px"}
        }}
        alt="The house from the offer."
        src="/images\sisyphus.png"
        />

<Box
        component="img"
        sx={{
            margin:"30px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"130px",sm:"110px",md:"145px"}
        }}
        alt="The house from the offer."
        src="/images\circooles.png"
        />

<Box
        component="img"
        sx={{
            margin:"30px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"130px",sm:"110px",md:"145px"}
        }}
        alt="The house from the offer."
        src="/images\catalog.png"
        />

<Box
        component="img"
        sx={{
            margin:"30px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"130px",sm:"110px",md:"145px"}
        }}
        alt="The house from the offer."
        src="/images\quotient.png"
        />

<Box
        component="img"
        sx={{
            margin:"30px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"130px",sm:"110px",md:"145px"},
          display:{xs:"block",sm:"none"}
        }}
        alt="The house from the offer."
        src="/images\hourglass.png"
        />

   </Box>

   </Box>

  </>
}

export default SocialProof