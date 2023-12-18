import {
  Body,                 // Body se utiliza para extraer el cuerpo de la solicitud en los métodos POST y PATCH.
  Controller,           // Controller se utiliza para definir controladores en NestJS.
  Delete,               // Delete se utiliza para definir un punto final que maneja las solicitudes DELETE.
  Get,                  // Get se utiliza para definir un punto final que maneja las solicitudes GET.
  Patch,                // Patch se utiliza para definir un punto final que maneja las solicitudes PATCH.
  Post,                 // Post se utiliza para definir un punto final que maneja las solicitudes POST.
  NotFoundException,    // NotFoundException se lanza cuando no se encuentra un recurso.
  Param,                // Param se utiliza para extraer parámetros de la solicitud, como los presentes en los path params.
  ParseUUIDPipe,
  ParseIntPipe,        // ParseUUIDPipe nos ayuda a validar la estructura del ID en los path params, permitiendo personalizar el status y el mensaje de error en caso de una estructura incorrecta del ID. 
} from '@nestjs/common';

import { CarsService } from '../services/cars.service';
import { CreateCarDTO, UpdateCarDTO } from '../dtos';


@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  getCars() {
    return this.carService.getAllCars();
  }

  @Get('/:id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.getCarByID(id);
  }

  @Post()
  createCar(@Body() createCar: CreateCarDTO) {
    return this.carService.createCar(createCar);
  }

  @Patch('/:id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDTO: UpdateCarDTO) {
    return this.carService.updateCar(id, updateCarDTO);
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.deleteCar(id);
  }
}
