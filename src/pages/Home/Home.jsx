import styles from "./Home.module.scss";
import {Box, Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Modals} from "../../components";


const Home = () => {
  const auth = false;
  const userEmail = "efdf@gmail.com";

  const [showModalType, setShowModalType] = useState(null);

  return (
    <Box className={styles.container}>
      {auth ?
        (<>
          <Typography variant={"h3"}>You are logged in!</Typography>
          <Typography variant={"h3"}>User Email: {userEmail}</Typography>
        </>) :
        (<>
          <Typography variant={"h3"}>You not Authorization</Typography>
        </>)
      }
      <Box className={styles.buttonsContainer}>
        {auth ?
          <Button variant={"contained"} onClick={() => console.log("User is exit")}>
            Logout</Button> :
          (<>
            <Button variant={"contained"} onClick={() => {
              setShowModalType("login")
              console.log(showModalType)
            }
            }>
              Log In
            </Button>
            <Button variant={"contained"} onClick={
              () => {setShowModalType("register")
                console.log(showModalType)}
            }>
              Register
            </Button>
          </>)
        }

        <Modals type={showModalType} handleModalClose={setShowModalType}/>
      </Box>

    </Box>
  );
};

export default Home;