import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from '../interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from '../dtos/CreateCar.dto';

@Injectable()
export class CarsService {
  private cars: Array<Car> = [
    {
      id: uuid(),
      model: 'Yukon XL 1500',
      brand: 'GMC',
      year: 2003,
    },
    {
      id: uuid(),
      model: '8 Series',
      brand: 'BMW',
      year: 1993,
    },
    {
      id: uuid(),
      model: 'M-Class',
      brand: 'Mercedes-Benz',
      year: 2005,
    },
    {
      id: uuid(),
      model: 'Cayenne',
      brand: 'Porsche',
      year: 2004,
    },
    {
      id: uuid(),
      model: 'Protege',
      brand: 'Mazda',
      year: 1996,
    },
    {
      id: uuid(),
      model: 'Fillmore',
      brand: 'Fillmore',
      year: 1960,
    },
    {
      id: uuid(),
      model: 'LS',
      brand: 'Lexus',
      year: 2008,
    },
    {
      id: uuid(),
      model: '300M',
      brand: 'Chrysler',
      year: 1999,
    },
    {
      id: uuid(),
      model: 'Prelude',
      brand: 'Honda',
      year: 2000,
    },
    {
      id: uuid(),
      model: 'LX',
      brand: 'Lexus',
      year: 2008,
    },
    {
      id: uuid(),
      model: 'Ram 1500 Club',
      brand: 'Dodge',
      year: 1998,
    },
    {
      id: uuid(),
      model: 'Rio',
      brand: 'Kia',
      year: 2008,
    },
    {
      id: uuid(),
      model: 'Lancer',
      brand: 'Mitsubishi',
      year: 2005,
    },
    {
      id: uuid(),
      model: 'TT',
      brand: 'Audi',
      year: 2009,
    },
    {
      id: uuid(),
      model: 'Starion',
      brand: 'Mitsubishi',
      year: 1987,
    },
  ];

  getAllCars(): Array<Car> {
    return this.cars;
  }

  getCarByID(id: string): Car {

    const resultCar: Car | undefined = this.cars.find((car) => car.id === id);

    if (!resultCar) throw new NotFoundException(`Car with id '${id}' does not existing`);

    return resultCar;

  }


  createCar(carInfo: CreateCarDTO){

    const newCar: Car = {
      id: uuid(),
      ...carInfo
    };

    this.cars.push(newCar);
    
    return { 
      message: 'Car created successfully',
      status: 200,
      data: newCar
    }
  
  }

}
