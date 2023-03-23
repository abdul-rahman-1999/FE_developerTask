import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FeatureSection() {
  return <>

  {/* Features Heading */}

  <Box sx={{padding:{xs:"40px 20px",sm:"60px 20px"},borderBottom:"1px solid #F2F2F2"}}>
  
   <Box sx={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>

   <p style={{fontSize:"14px",color:"#6941C6",fontWeight:600,backgroundColor:"#F9F5FF",borderRadius:"16px",padding:"8px 12px",width:"70px"}}>Features</p>
   <Typography sx={{fontSize:{xs:"30px",sm:"30px"},fontWeight:600,color:"black",lineHeight:{xs:"40px"},margin:"0px auto",textAlign:"center",fontFamily:"Inter"}}><p style={{margin:0}}>Cutting-edge features for advanced analytics</p></Typography>
   <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:400,color:"#667085",lineHeight:"24px",margin:"10px auto",textAlign:"center",fontFamily:"Inter"}}><p style={{margin:0}}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p></Typography>

   <Box
        component="img"
        sx={{
            margin:"40px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '100%', md: '80%' },
          display:{xs:"none",sm:"block"}
        }}
        alt="The house from the offer."
        src="/images\mobile.png"
        />

<Box
        component="img"
        sx={{
            margin:"40px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '90%', md: '80%' },
          display:{xs:"block",sm:"none"}
        }}
        alt="The house from the offer."
        src="/images\mob.png"
        />

   </Box>

   {/* Features */}

   <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",mt:{xs:"20px",sm:"40px"},justifyContent:"space-between",width:"90%",margin:"0px auto"}}>

    <Box sx={{width:{xs:"100%",sm:"31%",md:"30%"},textAlign:"center"}}>
 
    <Box
    component="img"
    sx={{
       margin:"25px 0px 0px 0px",
     objectFit:'cover',
     objectPosition:'center',
 width: {xs:"48px",sm:"50x",md:"50px"}
    }}
    alt="The house from the offer."
    src="/images\inbox.png"
    />

    <Typography sx={{fontSize:{xs:"14px",sm:"15px"},fontWeight:600,color:"black",margin:"0px auto",textAlign:"center",fontFamily:"Inter",width:"100%",mt:"12px"}}>Share team inboxes</Typography>
    <Typography sx={{fontSize:{xs:"12px",sm:"14px"},fontWeight:400,color:"#667085",lineHeight:{xs:"24px",sm:"26px"},margin:"10px auto",textAlign:"center",fontFamily:"Inter"}}>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</Typography>
    <p style={{fontSize:"14px",color:"#6941C6",fontWeight:600,cursor:"pointer"}}>Learn More <ArrowForwardIcon sx={{color:"#6941C6",verticalAlign:"middle",ml:1,cursor:"pointer"}}/></p>

    </Box>

    <Box sx={{width:{xs:"100%",sm:"31%",md:"30%"},textAlign:"center"}}>
 
    <Box
    component="img"
    sx={{
        margin:"25px 0px 0px 0px",
      objectFit:'cover',
      objectPosition:'center',
      width: {xs:"48px",sm:"50x",md:"50px"}
    }}
    alt="The house from the offer."
    src="/images\report.png"
    />

    <Typography sx={{fontSize:{xs:"14px",sm:"15px"},fontWeight:600,color:"black",margin:"0px auto",textAlign:"center",fontFamily:"Inter",width:"100%",mt:"12px"}}>Deliver instant answers</Typography>
    <Typography sx={{fontSize:{xs:"12px",sm:"14px"},fontWeight:400,color:"#667085",lineHeight:{xs:"24px",sm:"26px"},margin:"10px auto",textAlign:"center",fontFamily:"Inter"}}>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</Typography>
    <p style={{fontSize:"14px",color:"#6941C6",fontWeight:600,cursor:"pointer"}}>Learn More <ArrowForwardIcon sx={{color:"#6941C6",verticalAlign:"middle",ml:1,cursor:"pointer"}}/></p>

        </Box>

     <Box sx={{width:{xs:"100%",sm:"31%",md:"30%"},textAlign:"center"}}>
 
     <Box
    component="img"
    sx={{
        margin:"25px 0px 0px 0px",
      objectFit:'cover',
      objectPosition:'center',
      width: {xs:"48px",sm:"50x",md:"50px"}
    }}
    alt="The house from the offer."
    src="/images\deliver.png"
    />

    <Typography sx={{fontSize:{xs:"14px",sm:"15px"},fontWeight:600,color:"black",margin:"0px auto",textAlign:"center",fontFamily:"Inter",width:"100%",mt:"12px"}}>Manage your team with reports</Typography>
    <Typography sx={{fontSize:{xs:"12px",sm:"14px"},fontWeight:400,color:"#667085",lineHeight:{xs:"24px",sm:"26px"},margin:"10px auto",textAlign:"center",fontFamily:"Inter"}}>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</Typography>
    <p style={{fontSize:"14px",color:"#6941C6",fontWeight:600,cursor:"pointer"}}>Learn More <ArrowForwardIcon sx={{color:"#6941C6",verticalAlign:"middle",ml:1,cursor:"pointer"}}/></p>

    </Box>

    </Box>

    </Box>


  </>
}

export default FeatureSection