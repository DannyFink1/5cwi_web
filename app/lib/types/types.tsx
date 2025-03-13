export interface Motor{
    horsepower: number;
    serialNumber: number;
}

export interface Car{
    name: string;
    type: string;
    color: string;
    motor: Motor;
}