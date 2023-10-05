 
 import Header from "../component/header";
//Box used a s a wrapper similar to div
// Typography used as a replacement of Typography tag
 import {Box,Typography,Button,styled} from '@mui/material';
//  import homeimg from "../../public/h.png";
 import{routhPath} from "../routes/route";
 import{useNavigate} from "react-router-dom";
 const Component = styled(Box)({
   
    display: 'flex',
    height: '100vh',   
    alignItems: 'center',
    margin: '0 150px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p' : {
             fontSize: 56,
             lineHeight: 1.25,
             letterSpacing: -1
        },

        '& > button':{
         width:220,
         height: 60,
         background: 'black',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 700,
        marginTop: 48
        }
    }
 })
 
 const Home = () => {

    const navigate = useNavigate();
  
    return( 
        <div>
        <Header />
        <Component>
          
            {/* for left side of page */}
            <Box>
                <Typography> Let's Make Your <br></br> Job Search Fast.</Typography>
                <Button variant="contained" onClick ={() => navigate(routhPath.create)}>Post a Job</Button>
            </Box>

            {/* for right side of page  */}
            <Box>
                 {/* <img src = {homeimg} alt = "home" style ={{width:600}} />  */}
            </Box>
          

          </Component>
        </div>
    )
 }

 export default Home; 