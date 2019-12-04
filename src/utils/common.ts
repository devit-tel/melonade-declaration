import * as AJV from 'ajv';
import * as R from 'ramda';

export const taskDefinitionSchema = require('../taskDefinition.schema.json');
export const workflowDefinitionSchema = require('../workflowDefinition.schema.json');

export const ajv = new AJV({
  useDefaults: true,
});

export const validate = (schema: object, data: any): any => {
  if (ajv.validate(schema, data)) {
    return data;
  }

  throw JSON.stringify(ajv.errors);
};

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
