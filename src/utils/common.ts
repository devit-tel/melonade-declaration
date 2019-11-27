import * as AJV from 'ajv';
import * as R from 'ramda';

export const schema = require('../schema.json');

export const ajv = new AJV({
  schemas: [schema],
  useDefaults: true,
  allErrors: true,
  removeAdditional: 'all',
});

export const validate = (schemaRef: string, data: any): any => {
  if (ajv.validate(schemaRef, data)) {
    console.log(JSON.stringify(data));
    return data;
  }

  console.log(JSON.stringify(ajv.errors));
  throw ajv.errors;
};

export const isString = R.is(String);

export const isNumber = R.is(Number);

export const isValidName = (name: string): boolean =>
  isString(name) && /^[a-zA-Z0-9-_]{1,64}$/.test(name);

export const isValidRev = (rev: string): boolean =>
  isString(rev) && /^[a-zA-Z0-9-_]{1,64}$/.test(rev);

export const enumToList = R.compose(R.map(R.prop('1')), R.toPairs);

export const concatArray = (target: any[] = [], items: any[] | any): any[] => {
  if (R.isNil(items)) return target;
  if (R.is(Array, items)) return target.concat(items);
  return [...target, items];
};

export const jsonTryParse = (jsonString: string, defaultValue: any = {}) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return defaultValue;
  }
};

export const toObjectByKey = (targets: object[], key: string) => {
  return targets.reduce((result: object, target: object) => {
    result[target[key]] = target;
    return result;
  }, {});
};
