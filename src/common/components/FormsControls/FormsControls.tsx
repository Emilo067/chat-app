import React from 'react';
import styled from "styled-components";
import {Field, WrappedFieldProps} from "redux-form";
import { S } from './Input.styles';

type FormControlProps = WrappedFieldProps & {
    tagName?: 'textarea' | 'input'
}

export const FormControl: React.FC<FormControlProps> = ({input, meta, tagName, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <StyledFormWrapper error={hasError}>
            <S.Field {...input} {...props} />
            {hasError ? <span>{meta.error}</span> : null}
        </StyledFormWrapper>
    );
};


const StyledFormWrapper = styled.div<{ error: boolean }>`
  textarea {
    border: ${props => props.error ? '1px solid red' : ''};
  }

  span {
    color: red;
  }
`

export const createField = (placeholder: string, name: string, validators: any, tagName: 'input' | 'textarea', props?: React.HTMLProps<HTMLInputElement>, label?: string) => {
    return (<div style={{display: 'flex', gap: '3px'}}>
            <Field name={name} placeholder={placeholder} validate={validators}
                   component={(fieldProps: WrappedFieldProps) => (
                       <FormControl {...fieldProps} tagName={tagName} {...props} />
                   )}/>
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    )
}
