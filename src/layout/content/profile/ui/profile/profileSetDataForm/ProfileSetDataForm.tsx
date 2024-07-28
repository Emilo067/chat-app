import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField} from "../../../../../../common/components/FormsControls/FormsControls";
import {useAppSelector} from "../../../../../../common/hooks/useAppSelector";
import {ProfileType} from "../../../model/profile-reducer";
import {ContactsForm} from "../../profileDescription/contacts/contactsForm";

export type FormProfileData = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

const ProfileSetDataForm: FC<InjectedFormProps<FormProfileData>> = (props) => {

    const profile = useAppSelector<ProfileType>(state => state.profilePage.profile)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div>
                <b>Full name</b>: {profile?.fullName}
                {createField('Full name', 'fullName', [], 'input')}
            </div>
            {/*<div>About me: {profile?.aboutMe}</div>*/}
            <div>
                <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], 'input',
                {type: 'checkbox'})}
            </div>

            <div>
                <b>My professional skills</b>: {profile?.lookingForAJobDescription}
                {createField('', 'lookingForAJobDescription', [], 'textarea')}
            </div>

            <div>
                <b>About me</b>: {profile?.aboutMe}
                {createField('About me', 'aboutMe', [], 'textarea')}
            </div>
            {
                profile && <ContactsForm contacts={profile?.contacts}/>
            }

            {props.error && <div style={{color: "red", border: "1px solid red"}}>{props.error}</div>}

        </form>
    );
};

const ProfileDataReduxForm = reduxForm<FormProfileData>({form: 'edit-profile'})(ProfileSetDataForm)

export default ProfileDataReduxForm