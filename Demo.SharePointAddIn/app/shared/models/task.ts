export interface ITask {
    Id: number,
    Title: string,
    Status: string
}

export interface ITaskPage {
    tasks: ITask[]
}
