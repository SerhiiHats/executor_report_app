import {Box, Modal} from "@mui/material";
import styles from "./Modals.module.scss";
import AuthForm from "../AuthForm/AuthForm.jsx";


// eslint-disable-next-line react/prop-types
const Modals = ({type, handleModalClose}) => {
  return (
    <>
      <Modal open={type === "login"} onClose={handleModalClose}>
        <Box className={styles.formContainer}><AuthForm formType={type} handleModalClose={handleModalClose} /></Box>
      </Modal>

      <Modal open={type === "register"} onClose={handleModalClose}>
        <Box className={styles.formContainer}><AuthForm formType={type} handleModalClose={handleModalClose} /></Box>
      </Modal>
    </>
  );
};

export default Modals;