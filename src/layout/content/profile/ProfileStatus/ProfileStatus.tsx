import React from 'react';

type ProfileStatusProps = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false
    }

    activateEditMode  ()  {
        this.setState({editMode: true});
    }

    deactivateEditMode  ()  {
        this.setState({editMode: false});
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {
    }

    render() {
        return (
            this.state.editMode ? <div onBlur={() => {
                    this.setState({editMode: false})
                }}><input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} type="text"/></div> :
                <div onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</div>
        );
    }


}