import { Injectable } from '@nestjs/common';
import { Car } from '../interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars : Array<Car>= [{
        "id": 1,
        "carModel": "Yukon XL 1500",
        "carBrand": "GMC",
        "carYear": 2003
      }, {
        "id": 2,
        "carModel": "8 Series",
        "carBrand": "BMW",
        "carYear": 1993
      }, {
        "id": 3,
        "carModel": "M-Class",
        "carBrand": "Mercedes-Benz",
        "carYear": 2005
      }, {
        "id": 4,
        "carModel": "Cayenne",
        "carBrand": "Porsche",
        "carYear": 2004
      }, {
        "id": 5,
        "carModel": "Protege",
        "carBrand": "Mazda",
        "carYear": 1996
      }, {
        "id": 6,
        "carModel": "Fillmore",
        "carBrand": "Fillmore",
        "carYear": 1960
      }, {
        "id": 7,
        "carModel": "LS",
        "carBrand": "Lexus",
        "carYear": 2008
      }, {
        "id": 8,
        "carModel": "300M",
        "carBrand": "Chrysler",
        "carYear": 1999
      }, {
        "id": 9,
        "carModel": "Prelude",
        "carBrand": "Honda",
        "carYear": 2000
      }, {
        "id": 10,
        "carModel": "LX",
        "carBrand": "Lexus",
        "carYear": 2008
      }, {
        "id": 11,
        "carModel": "Ram 1500 Club",
        "carBrand": "Dodge",
        "carYear": 1998
      }, {
        "id": 12,
        "carModel": "Rio",
        "carBrand": "Kia",
        "carYear": 2008
      }, {
        "id": 13,
        "carModel": "Lancer",
        "carBrand": "Mitsubishi",
        "carYear": 2005
      }, {
        "id": 14,
        "carModel": "TT",
        "carBrand": "Audi",
        "carYear": 2009
      }, {
        "id": 15,
        "carModel": "Starion",
        "carBrand": "Mitsubishi",
        "carYear": 1987
      }];


    getAllCars():Array<Car>{
        return this.cars;
    }

    getCarByID(id: number): Promise<Car>{

        return new Promise((resolve, reject) => {

            const resultCar: Car | undefined = this.cars.find((car) => car.id === id);

            if(!resultCar){
                reject()
            }

            resolve(resultCar);

        });

    }

}
