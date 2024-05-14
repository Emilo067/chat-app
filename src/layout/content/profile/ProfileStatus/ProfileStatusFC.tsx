import React, {ChangeEvent, FC, useState} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusFC: FC<ProfileStatusProps> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        debugger
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode ? <div>
                    <input onChange={onChange} value={status} onBlur={editModeOff}
                           autoFocus={true} type="text"/>
                </div> :
                <div onDoubleClick={editModeOn}>
                    {status || "--------"}
                </div>
            }
        </>
    );
}