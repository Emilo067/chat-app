import React, {FC} from 'react';
import styled from "styled-components";
import {DialogsItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../common/utils/validators";
import {FormControl} from "../../../common/components/FormsControls/FormsControls";

type DialogPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessage: string) => void
}

type FormDialogType = {
    updateNewMessageBody: string
}

const maxLength100 = maxLength(100)

const FormDialog: React.FC<InjectedFormProps<FormDialogType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field component={FormControl}
               tagName="input"
               name={"updateNewMessageBody"}
               validate={[required, maxLength100]}
               placeholder={"Enter your message"}
        />
        <button style={{display: 'block', float: 'right'}}>Send</button>
    </form>
}

const FormReduxDialog = reduxForm<FormDialogType>({
    form: "dialog"
})(FormDialog)

const Dialogs: FC<DialogPropsType> = ({dialogsPage, sendMessage}) => {


    const dialogsItems = dialogsPage.dialogs.map(d => {
        return <DialogsItem key={d.id} id={d.id} name={d.name}/>
    })


    const messages = dialogsPage.messages.map(m => {
        return <Message key={m.id} text={m.message}/>
    })
    const onSendMessage = (formValues: FormDialogType) => {
        sendMessage(formValues.updateNewMessageBody)
    }

    return (
        <StyledDialogs>
            <StyledDialogsNames>
                {dialogsItems}
            </StyledDialogsNames>
            <StyledMessages>
                {messages}
                <div>
                    <FormReduxDialog onSubmit={onSendMessage}/>
                </div>
            </StyledMessages>
        </StyledDialogs>
    );
};

export default Dialogs;

const StyledDialogs = styled.div`
  display: grid;

  grid-template-columns: 4fr 10fr;
`

const StyledDialogsNames = styled.div`
  width: 250px;
  border-right: 1px solid gray;
`


const StyledMessages = styled.div`

`

