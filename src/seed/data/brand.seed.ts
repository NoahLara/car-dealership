import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Array<Brand> = [
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: 1684017489,
  },
  {
    id: uuid(),
    name: 'Mitsubishi',
    createdAt: 1678048129,
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: 1691917656,
  },
  {
    id: uuid(),
    name: 'Dodge',
    createdAt: 1690334572,
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: 1675336081,
  },
  {
    id: uuid(),
    name: 'Buick',
    createdAt: 1678266422,
  },
  {
    id: uuid(),
    name: 'GMC',
    createdAt: 1698576279,
  },
  {
    id: uuid(),
    name: 'Dodge',
    createdAt: 1683654714,
  },
  {
    id: uuid(),
    name: 'Infiniti',
    createdAt: 1675632577,
  },
  {
    id: uuid(),
    name: 'Lexus',
    createdAt: 1697008621,
  },
];
