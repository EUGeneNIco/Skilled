import { EmploymentType } from "../enums/employmentType";
import { Setup } from "../enums/setup";

export interface Job {
    id: number,
    title: string,
    location: string,
    companyName: string,
    jobDescription: string,
    requirements: string,
    salary: string,
    postedDate: Date,
    postedDateString: string,
    setup: Setup,
    employmentType: EmploymentType,
}