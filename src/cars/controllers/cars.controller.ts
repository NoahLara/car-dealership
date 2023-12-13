import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from '../services/cars.service';


@Controller('cars')
export class CarsController {


    constructor(private carService: CarsService){}


    @Get()
    getCars(){
        return this.carService.getAllCars();
    }


    @Get('/:id')
    async getCarById(@Param('id', ParseIntPipe) id: number){
        try{
            return await this.carService.getCarByID(id);
        }catch{
            throw new NotFoundException(`Car with id '${id}' not found `);
        }
    }

    @Post('/:id')
    createCar(
        @Body() bodyPayload: any
    ){
        console.log(bodyPayload);
        return { bodyPayload};

    }

    @Patch('/:id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() bodyPayload: any
    ){
        console.log(bodyPayload);
        return { bodyPayload};
    }

    @Delete('/:id')
    deleteCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() bodyPayload: any
    ){
        console.log(bodyPayload);
        return {bodyPayload};
    }

    

}
