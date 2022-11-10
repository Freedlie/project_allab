import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {jobListService} from "../../service";
import {AxiosError} from "axios";
import {IJobListInitialState, IJobListService} from "../../interfaces";

const initialState: IJobListInitialState = {
    jobList: [],
}

const getJobList = createAsyncThunk<IJobListService, void>(
    'jobListSlice/getJobList',
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await jobListService.getAll();
            console.log(data);
            return data
        }
        catch (e){
            return rejectWithValue((e as AxiosError).message);
        }
    }
)

const jobListSlice = createSlice({
    name: 'jobListSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getJobList.fulfilled , (state, action)=>{
                state.jobList = action.payload
            })

})

const{reducer: jobListReducer} = jobListSlice

const jobListActions = {
    getJobList
}

export {
    jobListReducer,
    jobListActions
}