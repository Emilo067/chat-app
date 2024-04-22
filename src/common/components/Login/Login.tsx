import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators";
import {Navigate} from "react-router-dom";

export type FormDataType = {
    password: string
    email: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={"Email"} component={FormControl} tagName="input" validate={[required]}/>
            </div>
            <div>
                <Field type="password" placeholder={"Password"} name={'password'} component={FormControl} tagName="input" validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/> remember me
            </div>
            {props.error && <div style={{color: "red", border: "1px solid red"}}>{props.error}</div>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
        form: 'login'
    }
)(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void,
    isAuth: boolean
}

 export const Login = ({login, isAuth}: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

