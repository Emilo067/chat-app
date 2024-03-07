import React, {FC} from "react";
import StoreContext from "./StoreContext";
import {StoreType} from "./redux/store";

const storeContext = React.createContext<any>(null)

type ProvidePropsType = {
    children: React.ReactNode
    store: StoreType
}

export const Provide: FC<ProvidePropsType> = (props: ProvidePropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default storeContext