import React, {ChangeEvent} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode   = () =>  {
        this.setState({editMode: true});
    }

    deactivateEditMode =  () =>  {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler  =(e:ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        console.log(this.state)
        return (
            this.state.editMode ? <div onBlur={() => {
                    this.setState({editMode: false})
                }}><input onChange={this.onChangeHandler} value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true} type="text"/></div> :
                <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
        );
    }


}