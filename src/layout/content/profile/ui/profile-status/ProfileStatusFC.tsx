import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector";
import {updateStatus} from "../../model/profile-reducer";

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
                    <input onChange={onChange} value={value} onBlur={editModeOff}
                           autoFocus={true} type="text"/>
                </div> :
                <div onDoubleClick={editModeOn}>
                    {status || "--------"}
                </div>
            }
        </>
    );
}