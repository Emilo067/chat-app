import {DialogsPageType, sendMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

// type DialogPropsType = {
//     // store: any
// }
//
// const DialogsContainer: FC<DialogPropsType> = () => {
//
//     // debugger
//
//     // const state = store.getState().dialogsPage;
//     //
//     // const onSendMessageClick = () => {
//     //         store.dispatch(addMessageAC())
//     // }
//     //
//     //    const onNewMessageChange = (newMessage: string) => {
//     //         store.dispatch(updateNewMessageTextAC(newMessage))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState().dialogsPage;
//
//                 const onSendMessageClick = () => {
//                     store.dispatch(addMessageAC())
//                 }
//
//                 const onNewMessageChange = (newMessage: string) => {
//                     store.dispatch(updateNewMessageTextAC(newMessage))
//                 }
//                 return <Dialogs sendMessage={onSendMessageClick}
//                                 dialogsPage={state}
//                                 updateNewMessageBody={onNewMessageChange}/>
//             }}
//         </StoreContext.Consumer>
//         )
//
// };


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
    return {
        updateNewMessageBody: (body: string)=>dispatch(updateNewMessageTextAC(body)),
        sendMessage: ()=>dispatch(sendMessageAC())
    }
}

// let AuthRedirectComponent = WithAuthRedirect(Dialogs)
//
// const DialogsContainer =connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);