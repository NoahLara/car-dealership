import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDTO {
    
    @IsString()
    @IsOptional()
    @IsUUID()
    id?:        string;

    @IsString()
    model?:     string;

    @IsString()
    brand?:     string;
    
    @IsNumber()
    year?:      number;


}