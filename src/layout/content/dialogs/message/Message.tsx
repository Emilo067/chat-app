import React, {FC} from "react";
import styled from "styled-components";

type MessagePropsType = {
    text: string
}
export const Message: FC<MessagePropsType> = ({text}) => {
    return <StyledMessage>{text}</StyledMessage>
}

const StyledMessage = styled.div`
`
