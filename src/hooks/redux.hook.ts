import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";

const useAppSelector: TypedUseSelectorHook<RootState<any, any, any>> = useSelector;

export {
    useAppSelector
}