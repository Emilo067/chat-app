import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    password: string
    login: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={"login"} component={'input'}/>
            </div>
            <div>
                <Field type="password" placeholder={"password"} name={'password'} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
        form: 'login'
    }
)(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        alert(JSON.stringify(formData, null, 2))
    }

    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};