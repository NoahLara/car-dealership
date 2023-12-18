import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDTO {
    
    @IsString()
    @IsOptional()
    @IsUUID()
    id?:        string;

    @IsOptional()
    @IsString()
    model?:     string;

    @IsOptional()
    @IsString()
    brand?:     string;
    
    @IsOptional()
    @IsNumber()
    year?:      number;


}