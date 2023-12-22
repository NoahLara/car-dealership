import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/services/brands.service';
import { CarsService } from 'src/cars/services/cars.service';
import { CARS_SED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandService: BrandsService,
  ) {}

  pupoluteDB() {
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);
    this.carsService.fillCarsWithSeed(CARS_SED);

    return { message: '.:| Seed Executed|:.' };
  }
}
