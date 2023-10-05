// used to make header using MatrialUI  >> AppBar
import {AppBar,Toolbar,styled} from '@mui/material';
// styled used for changing css of the components used from matrialUI 
// import logo from "../public/logo.png";
import { purple } from '@mui/material/colors';
import {Link} from "react-router-dom";
import { routhPath } from '../routes/route';
// const StyledAppBar = styled(AppBar)({
//     background: 'black',


//     height: 64,

//     '& . div >*' :{
//         textDecpration :'none',
//         color: 'inherit',
//         marginRight: 20,
//         fontsize: 14
//     }
// })

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
})


// const logo = "/client/public/logo.png";
const Header =() => {
    const logo = "https://drive.google.com/file/d/1p1eAvli_digEPxyZE7L1EQ-gSPJ8B252/view?usp=sharing";
    return(
       <StyledAppBar>
        <Toolbar>
            <Link to = {routhPath.home}>
             <img src ={logo} alt ="logo" style = {{width :90, marginBottom:6}}/>
             </Link>
             
             <Link to ={routhPath.create}> Post a Job</Link>
             <Link to ={routhPath.post}> Find Job</Link>
             
        </Toolbar>
       </StyledAppBar>
    )  
}

export default Header;