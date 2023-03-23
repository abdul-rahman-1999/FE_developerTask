import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box
        component="img"
        sx={{
            margin:"0px auto",
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '50px', md: '50px' },
          display:{xs:"block",md:"none"},
          padding:"15px"
        }}
        alt="The house from the offer."
        src="/images\avatar1.png"
        />
      <Divider />
      <List>
      <Box sx={{ display: { xs: 'flex', sm: 'none' },gap:3,flexDirection:"column",justifyContent:"center",alignItems:"center" }}>

      <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer" }}
          >
            Home
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer"}}
          >
            Products <KeyboardArrowDownIcon sx={{color:"#667085",ml:1,verticalAlign:"middle"}}/>
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer"}}
          >
            Resources <KeyboardArrowDownIcon sx={{color:"#667085",ml:1,verticalAlign:"middle"}}/>
          </Typography>


          <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer"}}
          >
            Pricing
          </Typography>

          </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{backgroundColor:"#FFFFFF",width:"100%",borderBottom:"1px solid #F2F2F2"}}>

        <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:"row",padding:"16px",width:{sm:"85%"},margin:{sm:"0px auto"},alignItems:"center"}}>

        <Box sx={{ display: {xs:'flex'},justifyContent:{xs:"space-between",sm:"start"},gap:3,alignItems:"center",width:{xs:"100%"} }}>
        <Box
        component="img"
        sx={{
            margin:"5px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '120px', md: '120px' },
        }}
        alt="The house from the offer."
        src="/images\logo.png"
        />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:"black",width:"30px",height:"30px"}}/>
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' },gap:3 }}>

        <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer",mt:"2px" }}
          >
            Home
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer"}} onClick={() => setOpen(!open)}
          >
            Products <KeyboardArrowDownIcon sx={{color:"#667085",ml:0.5,verticalAlign:"middle"}}/>
          </Typography>

{
  open === true ?           <Box>
  <Typography
    variant="p"
    sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer",mt:"2px" }}
  >
    Home
  </Typography>
  <Typography
    variant="p"
    sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer",mt:"2px" }}
  >
    Home
  </Typography>
  <Typography
    variant="p"
    sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer",mt:"2px" }}
  >
    Home
  </Typography>
  </Box>
  :
  null
}

          <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer"}}
          >
            Resources <KeyboardArrowDownIcon sx={{color:"#667085",ml:0.5,verticalAlign:"middle"}}/>
          </Typography>


          <Typography
            variant="p"
            sx={{ fontWeight:600,color:"#667085",fontSize:"14px",cursor:"pointer",mt:"2px"}}
          >
            Pricing
          </Typography>


          </Box>
        </Box>

        <Box >
        <Box
        component="img"
        sx={{
            margin:"10px 0px 0px 0px",
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '50px', md: '50px' },
          display:{xs:"none",sm:"block",md:"block"}
        }}
        alt="The house from the offer."
        src="/images\avatar1.png"
        />
        </Box>

        </Box>

      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;