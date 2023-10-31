import {Route, Routes} from "react-router";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import OperativeReport from "./pages/OperativeReport/OperativeReport.jsx";


const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={"/operative-information"} element={<OperativeReport/>}/>

        </Route>
      </Routes>
    </>
  );
};

export default App;
