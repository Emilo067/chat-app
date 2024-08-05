import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector";
import {updateStatus} from "../../model/profile-reducer";
import {Field} from "../../../../../common/components/FormsControls/Input.styles";

export const ProfileStatus = () => {
    const status = useAppSelector<string>(state => state.profilePage.status)

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(status)


    const dispatch = useAppDispatch()

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
        dispatch(updateStatus(value))
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            {editMode ? <div>
                    <Field onChange={onChange} value={value} onBlur={editModeOff}
                           autoFocus={true} type="text"/>
                </div> :
                <div onDoubleClick={editModeOn}>
                    {status || "--------"}
                </div>
            }
        </>
    );
}
