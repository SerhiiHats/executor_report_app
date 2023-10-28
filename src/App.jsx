import {Route, Routes} from "react-router";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";


const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<Home/>}/>

        </Route>
      </Routes>
    </>
  );
};

export default App;
