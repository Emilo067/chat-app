import React from 'react';
import styled from "styled-components";
import {WrappedFieldProps} from "redux-form";

type FormControlProps = WrappedFieldProps & {
    tagName: 'textarea' | 'input'
}

export const FormControl: React.FC<FormControlProps> = ({ input, meta, tagName, ...props }) => {
    const hasError = meta.touched && meta.error;
    const Tag = tagName;

    return (
        <StyledFormWrapper error={hasError}>
            <Tag {...input} {...props} />
            {hasError ? <span>{meta.error}</span> : null}
        </StyledFormWrapper>
    );
};



const StyledFormWrapper = styled.div<{error: boolean}>`
  textarea {
    border: ${props => props.error ? '1px solid red' : '' };
  }
  
  span {
    color: red;
  }
`