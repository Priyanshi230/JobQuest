import CreatePost from "./pages/CreatePost";
import Home from "./pages/home";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { routhPath } from "./routes/route";
function App() { 
  return (
<Router>
  <Routes>
    <Route path = {routhPath.home} element={<Home />}/>
    <Route path = {routhPath.create} element={<CreatePost />}/>
   
  </Routes>
</Router>
  );
}

export default App;
