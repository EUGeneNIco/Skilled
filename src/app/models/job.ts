import { EmploymentType } from "../enums/employmentType";
import { Setup } from "../enums/setup";

export interface Job {
    id: number,
    location: string,
    jobDescription: string,
    title: string,
    requirements: string,
    salary: string,
    postedDate: Date,
    setup: Setup,
    employmentType: EmploymentType,
}