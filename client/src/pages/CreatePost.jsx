import {useState} from "react";
import Header from "../component/header";
import {Box,Typography,styled,TextField,Button} from '@mui/material'
import Dropdown from "../component/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";

const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})

const Container = styled(Box)({
   display: 'flex',
   background: '#FFFFFF',
   borderRadius: 20,
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '0 70px',
   '& > p' :{
    fontsize: 35,
    fontWeight: 700,
    opacity: 0.7 
   }

})

const FromWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,

     '& > *' :{
        marginTop: '20px  !important'
     }
     
})

const defaultObj = {
    profile: '',
    type: '',
    description: '',
    experience: '',
    technology: [],
    salary: ''
}

const options = {
    type: ["Online", "Offline","Hybrid"],
    experience:["0-2 Years","3-5 Years","5-8 Years" ,"8 or more Years"],
    technology: ["Java","JavaScript","Angular","React","Node.js","Docker","AWS","HTML","CSS","SQL","DataBases","Computer Networks","Operating Systems","Data Structures","Algorithms","NoSql Databases","Application Programming Interface","c","C++","Python","Ruby","PHP","R"],
    salary: ["Rs 200000","Rs. 300000-500000","Rs 500000-1000000","Rs. 800000-1000000","Rs. 1200000-1500000","Rs 1500000-2000000"] 
}

const CreatePost =() => {
    const [data,setData] = useState({defaultObj});
    const naviagte = useNavigate();
    const image ="https://drive.google.com/file/d/1p1eAvli_digEPxyZE7L1EQ-gSPJ8B252/view?usp=sharing";
    
    const handleChange =(e) => {
        setData({...data,[e.target.name]: e.target.value});
    }

    const saveJob =async () =>{
          await savePost(data);
          naviagte(routhPath.posts);
    }
    return (
      <>
        <Header />

        <Component>
          <Container>
            <Typography>Create a Job</Typography>
            <img src={image} alt="create" />
          </Container>

          <FromWrapper>
            <TextField
              placeholder="Job Title"
              name="profile"
              onChange={handleChange}
            />

            <Dropdown
              label="Job Type"
              id="job-type-label"
              value={data.type}
              handleChange={handleChange}
              name="type"
              options={options.type}
            />
            <TextField
              placeholder="Job Description "
              name="description"
              onChange={handleChange}
            />

            <Dropdown
              label="Experience"
              id="experience-label"
              value={data.experience}
              handleChange={handleChange}
              name="experience"
              options={options.experience}
              // multiple
            />

            {/* <Dropdown 
                        label="Technology"
                        id='technology-label'
                        value={data.technology}
                        handleChange={handleChange}
                        name="technology"
                        
                        options={options.technology}
                       // multiple
                    /> */}

            <Dropdown
              id="technology-label"
              //  Array.isArray() function to check whether data.technology 
              //is an array. If it is an array, it uses data.technology as the value. 
              //If it's not an array (or undefined), it uses an empty array ([]) as the
              // value to ensure that the Dropdown component receives an array value.
              value={Array.isArray(data.technology) ? data.technology : []}
              handleChange={handleChange}
              name="technology"
              label="Technology"
              options={options.technology}
              multiple
            />

            <Dropdown
              label="Salary"
              id="salary-label"
              value={data.salary}
              handleChange={handleChange}
              name="salary"
              options={options.salary}
            />
            <Button onClick={() => saveJob()} variant="contained">
              Save
            </Button>
          </FromWrapper>
        </Component>
      </>
    );
}

export default CreatePost;