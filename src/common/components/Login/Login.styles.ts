import styled from "styled-components";

const Login = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  margin-top: 100px;
  gap: 10px;
  
  h1 {
    font-size: 50px;
  }
`

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0 auto;
  max-width: 530px;
  width: 100%;
`

const Captcha = styled.img`
  height: 80px;
border-radius: 30px;
`

const CaptchaWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const S = {
    Login,
    StyledForm,
    Captcha,
    CaptchaWrapper,
}
