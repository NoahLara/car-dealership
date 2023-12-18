import { BadRequestException, Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { Car } from '../interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from '../dtos/CreateCar.dto';
import { UpdateCarDTO } from '../dtos';

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

  /**
   * Retrieves an array of all cars.
   * @returns {Array<Car>} An array containing all cars.
   */
  getAllCars(): Array<Car> {
    return this.cars;
  }

  /**
   * Retrieves a car based on its unique identifier.
   * @param {string} id - The unique identifier of the car.
   * @returns {Car} The car with the specified ID.
   * @throws {NotFoundException} Throws an exception if the car with the specified ID is not found.
   */
  getCarByID(id: string): Car {

    const resultCar: Car | undefined = this.cars.find((car) => car.id === id);

    if (!resultCar) throw new NotFoundException(`Car with id '${id}' does not existing`);

    return resultCar;

  }


  /**
   * Creates a new car based on the provided car information.
   * @param {CreateCarDTO} carInfo - Information for creating the new car.
   * @returns An object containing a success message, status code, and the newly created car.
   */
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

  /**
   * Updates the information of an existing car based on its unique identifier.
   * @param {string} id - The unique identifier of the car to be updated.
   * @param {UpdateCarDTO} updateCarDTO - Information for updating the car.
   * @throws {BadRequestException} Throws an exception if the provided car ID in the body is not valid.
   */
  updateCar(id: string, updateCarDTO: UpdateCarDTO){

    // Check if the provided ID in the body is form a car already existed
    let carDB: Car = this.getCarByID(id);

    // Check if the provided ID in the body is not valid
    if(updateCarDTO.id && updateCarDTO.id !== id) throw new BadRequestException('Car id is not valid inside body');

    this.cars = this.cars.map((car) => {
      
      /**
       * If the current iteration matches the car to be updated:
       * - Spread the existing carDB properties
       * - Spread the properties from updateCarDTO, potentially overwriting existing properties
       * - Explicitly set the id property, so we make sure don't replace original id
       */
      if(car.id === id){
        carDB = { 
          ...carDB,
          ...updateCarDTO,
          id
        }

        return carDB;
      }

      return car;
    });


    return carDB;
  }


  /**
   * Deletes a car based on its unique identifier.
   * @param {string} id - The unique identifier of the car to be deleted.
   * @throws {BadRequestException} Throws an exception if the provided car ID in the body is not valid.
   */
  deleteCar(id: string){
    const carDB  = this.getCarByID(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return { message: `Car ${carDB.brand} with id ${id} deleted successfully` };

  }

}
