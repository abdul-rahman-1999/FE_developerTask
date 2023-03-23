import React,{ useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function FAQSection() {

  const [open,setOpen] = useState(true)
  return <>

  {/* FAQ */}
  
  <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",width:{xs:"85%",sm:"65%",md:"50%"},margin:"0px auto",padding:{xs:"40px 0px 0px 0px",sm:"60px 0px 0px 0px"}}}>

  <Typography sx={{fontSize:{xs:"30px",sm:"30px"},fontWeight:600,color:"black",lineHeight:{xs:"40px",sm:"44px"},margin:"0px auto",textAlign:"center",fontFamily:"Inter",width:{xs:"85%",sm:"80%"}}}>Frequently asked questions</Typography>
  <Typography sx={{fontSize:{xs:"14px",sm:"14px",md:"16px"},fontWeight:400,color:"#667085",lineHeight:"24px",width:{xs:"85%",sm:"60%"},margin:"10px auto",textAlign:"center",fontFamily:"Inter"}}>Everything you need to know about the product and billing.</Typography>


  <Box sx={{padding:"10px 0px 30px 0px",borderBottom:"1px solid #F2F2F2",width:"95%"}}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"30px 0px 0px 0px"}}>
  <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:600,color:"black",fontFamily:"Inter"}}>Is there a free trial available?</Typography>
  {
    open === true ? <Typography><RemoveCircleOutlineIcon sx={{color:"#7F56D9",cursor:"pointer"}} onClick={() => setOpen(!open)}/></Typography>
    :
    <Typography><AddCircleOutlineIcon sx={{color:"#7F56D9",cursor:"pointer"}} onClick={() => setOpen(!open)}/></Typography>
  }
  </Box>
  {
    open === true ? <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:400,color:"#667085",lineHeight:"26px",fontFamily:"Inter",mt:2}}>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</Typography>
    :
    null
  }
  </Box>
  
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"95%",padding:"30px 0px",borderBottom:"1px solid #F2F2F2"}}>
  <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:600,color:"black",fontFamily:"Inter"}}>What is your cancellation policy?</Typography>
  <Typography><AddCircleOutlineIcon sx={{color:"#7F56D9",cursor:"pointer"}}/></Typography>
  </Box>

  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"95%",padding:"30px 0px",borderBottom:"1px solid #F2F2F2"}}>
  <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:600,color:"black",fontFamily:"Inter"}}>Can other info be added to an invoice?</Typography>
  <Typography><AddCircleOutlineIcon sx={{color:"#7F56D9",cursor:"pointer"}}/></Typography>
  </Box>

  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"95%",padding:"30px 0px",borderBottom:"1px solid #F2F2F2"}}>
  <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:600,color:"black",fontFamily:"Inter"}}>How does billing work?</Typography>
  <Typography><AddCircleOutlineIcon sx={{color:"#7F56D9",cursor:"pointer"}}/></Typography>
  </Box>

  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"95%",padding:"30px 0px"}}>
  <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:600,color:"black",fontFamily:"Inter"}}>How do I change my account email?</Typography>
  <Typography><AddCircleOutlineIcon sx={{color:"#7F56D9",cursor:"pointer"}}/></Typography>
  </Box>

  </Box>

  {/* still have questions */}

  <Box sx={{backgroundColor:"#F9FAFB",width:{xs:"80%",sm:"75%",margin:"30px auto 0px auto",textAlign:"center"},padding:"30px 10px",mb:{xs:"40px",sm:"60px"}}}>

   <Box
      component="img"
      sx={{
          margin:"0px",
        objectFit:'cover',
        objectPosition:'center',
        width: "120px",
      }}
      alt="The house from the offer."
      src="/images\getintouch.png"
      />

<Typography sx={{fontSize:{xs:"16px",sm:"18px"},fontWeight:600,color:"black",margin:"0px auto",textAlign:"center",fontFamily:"Inter",width:"90%",mt:"12px"}}>Still have questions?</Typography>
    <Typography sx={{fontSize:{xs:"14px",sm:"16px"},fontWeight:400,color:"#667085",lineHeight:{xs:"26px",sm:"28px"},margin:"10px auto",textAlign:"center",fontFamily:"Inter",width:{xs:"80%",sm:"100%"}}}>Can’t find the answer you’re looking for? Please chat to our friendly team.</Typography>
    <Button variant="contained" sx={{backgroundColor:"#7F56D9",width:{xs:"55%",sm:"25%",md:"18%"},padding:"08px 20px",mt:"12px","&:hover" : {backgroundColor:"#7F56D9"},textTransform:"none"}}>Get in Touch</Button>

     </Box>

  

  </>
}

export default FAQSection