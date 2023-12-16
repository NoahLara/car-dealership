import { IsNumber, IsString } from 'class-validator';

export class CreateCarDTO{

    @IsString()
    model:          string;

    @IsString()
    brand:          string;
    
    @IsNumber()
    year:           number;
    
}