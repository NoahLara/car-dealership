import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Car } from '../interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from '../dtos/CreateCar.dto';
import { UpdateCarDTO } from '../dtos';

@Injectable()
export class CarsService {
  private cars: Array<Car> = [];

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

    if (!resultCar)
      throw new NotFoundException(`Car with id '${id}' does not existing`);

    return resultCar;
  }

  /**
   * Creates a new car based on the provided car information.
   * @param {CreateCarDTO} carInfo - Information for creating the new car.
   * @returns An object containing a success message, status code, and the newly created car.
   */
  createCar(carInfo: CreateCarDTO) {
    const newCar: Car = {
      id: uuid(),
      ...carInfo,
    };

    this.cars.push(newCar);

    return {
      message: 'Car created successfully',
      status: 200,
      data: newCar,
    };
  }

  /**
   * Updates the information of an existing car based on its unique identifier.
   * @param {string} id - The unique identifier of the car to be updated.
   * @param {UpdateCarDTO} updateCarDTO - Information for updating the car.
   * @throws {BadRequestException} Throws an exception if the provided car ID in the body is not valid.
   */
  updateCar(id: string, updateCarDTO: UpdateCarDTO) {
    // Check if the provided ID in the body is form a car already existed
    let carDB: Car = this.getCarByID(id);

    // Check if the provided ID in the body is not valid
    if (updateCarDTO.id && updateCarDTO.id !== id)
      throw new BadRequestException('Car id is not valid inside body');

    this.cars = this.cars.map((car) => {
      /**
       * If the current iteration matches the car to be updated:
       * - Spread the existing carDB properties
       * - Spread the properties from updateCarDTO, potentially overwriting existing properties
       * - Explicitly set the id property, so we make sure don't replace original id
       */
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDTO,
          id,
        };

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
  deleteCar(id: string) {
    const carDB = this.getCarByID(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return { message: `Car ${carDB.brand} with id ${id} deleted successfully` };
  }

  fillCarsWithSeed(cars: Array<Car>) {
    this.cars = cars;
  }
}
