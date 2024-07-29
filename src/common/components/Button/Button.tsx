import React, {ButtonHTMLAttributes, FC} from 'react';
import {S} from './Button.styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({children, ...restProps}) => {
    return (
        <S.Button {...restProps}>
            {children}
        </S.Button>
    );
};