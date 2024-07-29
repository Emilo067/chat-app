import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, FormControl} from "../FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {login} from "../../../redux/auth-reducer";
import {S} from "./Login.styles"
import {Button} from "../Button/Button";
import s from './Login.module.css'
import './CheckBox.css'

export type FormDataType = {
    password: string
    email: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    const captchaUrl = useAppSelector<null | string>(state => state.auth.captchaUrl)

    return (
        <S.StyledForm onSubmit={props.handleSubmit}>
            <Field placeholder={'Email'} name={'email'} validate={[required]} component={FormControl}/>
            <Field placeholder={'Password'} type={'password'} name={'password'} validate={[required]} component={FormControl}/>

            <div className="checkbox-wrapper-46">
                <Field id={'cbx-46'} className={'inp-cbx'} type={'checkbox'} name={'rememberMe'} validate={[]}
                       component={'input'}/>
                <label className="cbx" htmlFor="cbx-46">
                <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
                </span><span>Remember me</span>
                </label>
            </div>

            {captchaUrl && <S.CaptchaWrapper>
                <S.Captcha src={captchaUrl} alt="captcha"/>
                <Field placeholder={'Symbols from image'} name={'captcha'} validate={[required]}
                       component={FormControl}/>
            </S.CaptchaWrapper>}

            {props.error && <div style={{color: "red", border: "1px solid red"}}>{props.error}</div>}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button style={{minWidth: '250px'}}>Login</Button>
            </div>
        </S.StyledForm>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
        form: 'login'
    }
)(LoginForm)


export const Login = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (<S.Login>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </S.Login>
    );
};

