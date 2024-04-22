import React, {FC} from 'react';
import styled from "styled-components";

type Avatar = {
    width?: string
    height?: string
    img: string
}

export const Avatar: FC<Avatar> = ({width, height, img}) => {
    return (
        <StyledUserAvatar src={img} alt={'user Avatar'} img={img} height={height} width={width}/>
    );
};


const StyledUserAvatar = styled.img<Avatar>`
  width: ${props => props.width ? `${props.width}px` : '35px'};
  height:  ${props => props.height ? `${props.height}px` : '35px'};
`