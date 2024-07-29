import React, { FC } from 'react';
import { ContactsType } from "../../../model/profile-reducer";
import styled from "styled-components";

type Props = {
    contacts: ContactsType;
}

export const Contacts: FC<Props> = ({ contacts }) => {
    return (
        <div>
            <h3 style={{color: "blue"}}>Contacts</h3>
            {Object.keys(contacts).map((key) => (
                <StyledContactItem key={key}>
                    <b>{key}</b>: {contacts[key as keyof ContactsType]}
                </StyledContactItem>
            ))}
        </div>
    );
};


const StyledContactItem = styled.div`
    padding-left: 15px;
`