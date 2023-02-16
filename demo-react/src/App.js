import logo from './logo.svg';
import './App.css';
import S1 from "./S1"
import Calculator from "./Calculator";
import Calculator1 from "./Calculator-1";
import FComponent from "./FComponent";
import {Outlet, Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import ListStudent from "./pages/students/ListStudent";
import CreateStudent from "./pages/students/CreateStudent";
import EditStudent from "./pages/students/EditStudent";
import DeleteStudent from "./pages/students/DeleteStudent";


function App() {
  return (
  <>
    {/*<Calculator></Calculator>*/}
    {/*<S1></S1>*/}
    {/*<Calculator1></Calculator1>*/}
    {/*<FComponent></FComponent>*/}

    <Routes>
      <Route path={'/'} element={<Home></Home>}>
        <Route path={''} element={<ListStudent></ListStudent>}></Route>
        <Route path={'create-student'} element={<CreateStudent></CreateStudent>}></Route>
        <Route path={'edit-student/:id'} element={<EditStudent></EditStudent>}></Route>
        <Route path={'delete-student/:id'} element={<DeleteStudent></DeleteStudent>}></Route>
      </Route>
      <Route path={'/admin'} element={<Admin></Admin>}></Route>
    </Routes>
  </>
  );
}

export default App;
