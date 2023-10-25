import {Button, TextField, Typography} from "@mui/material";
import styles from "./AuthForm.module.scss";
import {useForm} from "react-hook-form";

const AuthForm = (formType, handleModalClose) => {
  const isRegisterFormType = formType === 'register';
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isValid}
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      mode: 'onChange'
    }
  });
  const onSubmit = data => console.log(data);


  return <>
    <Typography variant={"h2"} className={styles.title}>{isRegisterFormType ? 'Register' : 'Login'}</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label={"Email"}
                 type={"email"}
                 {...register("email", {required: "email field is required"})}
                   error={Boolean(error?.email?.message)}
                 helperText={errors.email ? "Email field is requirsd" : ""}
                 />

      <TextField label={"Password"}
                      type={"password"}
                      {...register("password", {required: "Password field is required"})}
                      error={Boolean(error?.email?.message)}
                      helperText={errors.password ? "Password field is requirsd" : ""}
      />
      <Button variant={"contained"} type={"submit"}>Submit</Button>

    </form>
  </>
};

export default AuthForm;