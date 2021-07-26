export interface WeatherSearch {
    id: number;
    city: string;
    country: string;
    temperature: string;
    description: string;
    humidity: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
}

export interface SummaryResult{
    city: string;
    total: number;
}

export interface LogResult{
    city: string;
}

