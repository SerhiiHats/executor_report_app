import styles from "./Secondary.module.scss";
import {Box, Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Modals} from "../../components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData, isAuthSelector, logout} from "../../redux/slices/auth.js";

const SecondaryMenu = () => {
  const auth = useSelector(isAuthSelector);
  const userEmail = useSelector(state => state.auth.userEmail);
  const dispatch = useDispatch();

  const [showModalType, setShowModalType] = useState(null);

  const handleLogoutClick = () => {
    if (confirm("Are you sure that you want to logout?")) {
      dispatch(logout());
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('jwtToken')) {
      dispatch(fetchUserData())
    }
  }, [])

  return (
    <>
      <Box className={styles.container}>
        {auth ?
          <Typography className={styles.userName} variant={"h5"}>користувач: {userEmail}</Typography>
          :
          <Typography className={styles.userName} variant={"h5"}>користувач: не зареєстрований</Typography>
        }
        <Box className={styles.buttonsContainer}>
          {auth ? <Button variant={"contained"} onClick={handleLogoutClick}>Вийти</Button>
            :
            (<>
              <Button className={styles.buttonEnter} variant={"contained"} onClick={() => {
                setShowModalType("login")
                console.log(showModalType)
              }
              }>
                Вхід
              </Button>
              <Button variant={"contained"} onClick={
                () => {
                  setShowModalType("register")
                  console.log(showModalType)
                }
              }>
                Зареєструватися
              </Button>
            </>)
          }
          <span className={styles.test}> ! </span>
          <Modals type={showModalType} handleModalClose={setShowModalType}/>
        </Box>
      </Box>
    </>
  );
};

export default SecondaryMenu;