import { TopLevelCategory } from "../top-page.model";

export class CreateTopPageDto {
    firstCategory: TopLevelCategory;
    secondCategory: string;
    title: string;
    category: string;
    hh?: {
        conut: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number
    };
    advantages: {
        title: string,
        description: string
    }[];
    seoText: string;
    tagsTitle: string;
    tagst: string[];
}