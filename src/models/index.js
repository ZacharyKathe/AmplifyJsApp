// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Trip, GearItem, Pack, User, GearTypeOption } = initSchema(schema);

export {
  Trip,
  GearItem,
  Pack,
  User,
  GearTypeOption
};