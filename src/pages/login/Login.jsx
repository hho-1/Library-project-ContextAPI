import React, { useContext, } from "react";
import {
  FormContainer,
  LoginContainer,
  LoginHeader,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [user,setUser] = useState(false)
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setUser(true);//! göstermelik login işlemi yaptığımız için state e sadece true bilgisi geçtik
    navigate(-1); //! kullanıcıyı geldiği sayfaya geri yönlendiriyoruz
    // if (
    //   username.toLowerCase() === "admin" &&
    //   password.toLowerCase() === "12345"
    // ) {
    //   setUser(true);
    //   navigate(-1);
    // } else {
    //   alert("Username ve Password bilgisini doğru giriniz.");
    // }
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <LoginHeader>Login Here</LoginHeader>
          <StyledInput
            type="text"
            placeholder="Username"
            // value={username}
            // onChange={e => setUserName(e.target.value)}
            required
          />
          <StyledInput
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
