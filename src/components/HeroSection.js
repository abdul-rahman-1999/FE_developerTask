import React from 'react'
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';


function HeroSection() {
  return <>
  
  <Box sx={{backgroundColor:"#F9F5FF",display:"flex",gap:2,borderRadius:"16px",padding:"4px",width:"325px",alignItems:"center",margin:{xs:"50px auto 0px auto",sm:"70px auto 0px auto"},textAlign:"center",justifyContent:"center"}}>

   <Box sx={{backgroundColor:"#FFFFFF",borderRadius:"16px",padding:"8px 12px"}}><p style={{margin:0,fontSize:"12px",color:"#6941C6",fontWeight:600}}>New feature</p></Box>
   <Box><p style={{margin:0,fontSize:"12px",gap:2,color:"#6941C6",fontWeight:600}}>Check out the team dashboard <ArrowForwardIcon sx={{color:"#6941C6",verticalAlign:"middle",ml:1,cursor:"pointer"}}/></p></Box>

  </Box>

  <Typography sx={{fontSize:{xs:"30px",sm:"50px"},fontWeight:700,color:"black",lineHeight:"40px",width:{xs:"85%",sm:"85%"},margin:"30px auto",textAlign:"center",fontFamily:"Inter"}}>Beautiful analytics to grow smarter</Typography>
  <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:400,color:"#667085",lineHeight:"26px",width:{xs:"85%",sm:"70%"},margin:"30px auto",textAlign:"center",fontFamily:"Inter"}}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</Typography>

  <Box sx={{display:"flex",alignItems:"center",gap:{xs:2,sm:3},flexDirection:{xs:"column-reverse",sm:"row"},justifyContent:"center",width:{xs:"90%",sm:"70%"},margin:"0px auto"}}>

  <Button variant="contained" sx={{border:"1px solid #D0D5DD",backgroundColor:"white",color:"#344054",width:{xs:"90%",sm:"25%",md:"15%"},padding:"08px 20px","&:hover" : {backgroundColor:"white"},textTransform:"none"}}><PlayCircleOutlineOutlinedIcon sx={{color:"#344054",mr:1}}/>Demo</Button>
  <Button variant="contained" sx={{backgroundColor:"#7F56D9",width:{xs:"90%",sm:"25%",md:"15%"},padding:"08px 20px","&:hover" : {backgroundColor:"#7F56D9"},textTransform:"none"}}>Sign up</Button>

  </Box>

   <Box sx={{display:"flex",justifyContent:"center"}}>

      <Box
        component="img"
        sx={{
            margin:"60px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '90%', md: '70%' },
        }}
        alt="The house from the offer."
        src="/images\mac.png"
        />

   </Box>

  </>
}

export default HeroSection