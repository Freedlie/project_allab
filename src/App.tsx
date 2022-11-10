import React, {FC, useEffect} from 'react';
import {useAppSelector} from "./hooks";
import {useDispatch} from "react-redux";
import {jobListActions} from "./redux";

const App:FC = () => {
    // const {jobList} = useSelector(state => (state as any).jobListReducer)
    console.log(useAppSelector(state => state.jobListReducer));

    const dispatch = useDispatch();

    useEffect(()=>{
        // @ts-ignore
        dispatch(jobListActions.getJobList());
    },[])

    return (
        <div>
        </div>
    );
};

export default App;