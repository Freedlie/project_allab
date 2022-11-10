import {AxiosRes, axiosService} from "./axios.service";
import {access_token, urls} from "../configs";
import {IJobList, IJobListService} from "../interfaces";

const jobListService = {
    getAll : (): AxiosRes<IJobList[]>=> axiosService.get(`${urls.data}?access_token=${access_token}`)
}

export {
    jobListService
}