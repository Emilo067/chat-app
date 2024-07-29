import {DialogsPageType, sendMessageAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/store/store-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../common/hoc/WithAuthRedirect";
import {ComponentType} from "react";


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
    return {
        sendMessage: (newMessage: string)=>dispatch(sendMessageAC(newMessage))
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
