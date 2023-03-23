import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function QuoteSection() {
  return <>
  
<Box sx={{padding:{xs:"40px 15px",sm:"65px"},backgroundColor:"#F9FAFB"}}  >

<Box sx={{textAlign:"center"}}>

     <Box
        component="img"
        sx={{
            margin:"0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"100px",sm:"100px",md:"145px"}
        }}
        alt="The house from the offer."
        src="/images\sisyphus.png"
        />

     <Typography sx={{fontSize:{xs:"27px",sm:"30px"},fontWeight:600,color:"black",lineHeight:{xs:"39px",sm:"40px"},width:"85%",margin:"30px auto",textAlign:"center",fontFamily:"Inter"}}>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</Typography>

    <Box
        component="img"
        sx={{
            margin:"0px",
          objectFit:'cover',
          objectPosition:'center',
          width: {xs:"70px",sm:"70px"}
        }}
        alt="The house from the offer."
        src="/images\avatar.png"
        />

        <Typography sx={{fontSize:"18px",fontFamily:"Inter",fontWeight:500,color:"black",margin:"16px 0px"}}>Candice Wu</Typography>
        <Typography sx={{fontSize:"16px",fontFamily:"Inter",fontWeight:500,color:"#667085"}}>Product Manager, Sisyphus</Typography>

</Box>

</Box>

  </>
}

export default QuoteSection