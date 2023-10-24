import Logo from "../public/icon_ukraine_flag.png";
import "./App.css";

const App = () => {
  return (
    <div className={"card"}>
      <h1>You are welcome!</h1>
      <a href="#">
        <img src={Logo} alt={"Ukraine"}/>
      </a>
    </div>
  );
};

export default App;
