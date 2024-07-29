import React, {FC} from 'react';
import {ContactsType} from "../../../model/profile-reducer";
import styled from "styled-components";
import {createField} from "../../../../../../common/components/FormsControls/FormsControls";

type Props = {
    contacts: ContactsType;
}

export const ContactsForm: FC<Props> = ({contacts}) => {
    return (
        <div>
            <h3 style={{color: "blue"}}>Contacts</h3>
            {Object.keys(contacts).map((key) => (
                <StyledContactItem key={key}>
                    <b>{key}</b>: {createField(key, 'contacts.' + key, [], 'input')}
                </StyledContactItem>
            ))}
        </div>
    );
};


const StyledContactItem = styled.div`
  padding-left: 15px;
`