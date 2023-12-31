import {Button, TextField, Typography} from "@mui/material";
import styles from "./AuthForm.module.scss";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginRoute, registration} from "../../redux/slices/auth.js";

// eslint-disable-next-line react/prop-types
const AuthForm = ({formType, handleModalClose}) => {
  const dispatch = useDispatch();
  const isRegisterFormType = formType === 'register';
  console.log("form type ", formType)
  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      mode: 'onChange'
    }
  });
  const onSubmit = async (values) => {
    console.log(values);

    const data = await dispatch(isRegisterFormType ? registration(values) : loginRoute(values));

    if (!data.payload){
      alert(`${isRegisterFormType ? 'Register' : 'Login'} failed`)
    }

    if('jwtToken' in data.payload){
      window.localStorage.setItem('jwtToken', data.payload.jwtToken)
    }

    handleModalClose()
  };


  return <>
    <Typography sx={{mb:"16px"}} variant={"h2"} className={styles.title}>
      {isRegisterFormType ? 'Registration' : 'Sign in'}
    </Typography>

    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField label={"Email"}
                 type={"email"}
                 {...register("email", {required: "email field is required", minLength: 5})}
                 error={Boolean(errors?.email?.message)}
                 helperText={errors.email ? "Email field is required" : ""}
      />

      <TextField label={"Password"}
                 type={"password"}
                 {...register("password", {required: "Password should be at least of 5 chars", minLength: 5})}
                 error={Boolean(errors?.email?.message)}
                 helperText={errors.password ? "Password should be at least of 5 chars" : ""}
      />
      <Button sx={{mt:"16px"}} disabled={!isValid} variant={"contained"} type={"submit"}>Submit</Button>

    </form>
  </>
};

export default AuthForm;