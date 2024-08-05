import React, {FC, memo} from 'react';
import styled from "styled-components";

type Avatar = {
    width?: string
    height?: string
    img?: string
    href?: string
    radius?: string
}

export const Avatar: FC<Avatar> = memo(({width, height, img, radius}) => {
    return (
        <StyledUserAvatar radius={radius} src={img} alt={'user Avatar'} img={img} height={height} width={width}/>
    );
});


const StyledUserAvatar = styled.img<Avatar>`
  width: ${props => props.width ? `${props.width}px` : '35px'};
  height:  ${props => props.height ? `${props.height}px` : '35px'};
  border-radius: ${props => props.radius ? `${props.radius}%` : null};
`
