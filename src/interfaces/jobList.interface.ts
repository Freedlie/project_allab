export interface ILocation{
    lat: number,
    long:number
}

export interface IJobList{
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: [],
    location: ILocation[],
    pictures: [],
    createdAt: string,
    updatedAt: string,
    description : string,
    employment_type: string,
}

export interface IJobListInitialState{
    jobList: IJobList[]
}

export interface IJobListService{
    results : IJobList[]
}