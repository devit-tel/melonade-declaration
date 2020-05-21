[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["utils/common"](_utils_common_.md)

# External module: "utils/common"

## Index

### Variables

* [ajv](_utils_common_.md#const-ajv)
* [enumToList](_utils_common_.md#const-enumtolist)
* [taskDefinitionSchema](_utils_common_.md#const-taskdefinitionschema)
* [workflowDefinitionSchema](_utils_common_.md#const-workflowdefinitionschema)

### Functions

* [concatArray](_utils_common_.md#const-concatarray)
* [jsonTryParse](_utils_common_.md#const-jsontryparse)
* [toObjectByKey](_utils_common_.md#const-toobjectbykey)
* [validate](_utils_common_.md#const-validate)

## Variables

### `Const` ajv

• **ajv**: *Ajv* =  new AJV({
  useDefaults: true,
})

*Defined in [src/utils/common.ts:7](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L7)*

___

### `Const` enumToList

• **enumToList**: *Object* =  R.compose(R.map(R.prop('1')), R.toPairs)

*Defined in [src/utils/common.ts:19](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L19)*

___

### `Const` taskDefinitionSchema

• **taskDefinitionSchema**: *any* =  require('../taskDefinition.schema.json')

*Defined in [src/utils/common.ts:4](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L4)*

___

### `Const` workflowDefinitionSchema

• **workflowDefinitionSchema**: *any* =  require('../workflowDefinition.schema.json')

*Defined in [src/utils/common.ts:5](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L5)*

## Functions

### `Const` concatArray

▸ **concatArray**(`target`: any[], `items`: any[] | any): *any[]*

*Defined in [src/utils/common.ts:21](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`target` | any[] |  [] |
`items` | any[] &#124; any | - |

**Returns:** *any[]*

___

### `Const` jsonTryParse

▸ **jsonTryParse**(`jsonString`: string, `defaultValue`: any): *any*

*Defined in [src/utils/common.ts:27](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`jsonString` | string | - |
`defaultValue` | any |  {} |

**Returns:** *any*

___

### `Const` toObjectByKey

▸ **toObjectByKey**(`targets`: object[], `key`: string): *object*

*Defined in [src/utils/common.ts:35](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`targets` | object[] |
`key` | string |

**Returns:** *object*

___

### `Const` validate

▸ **validate**(`schema`: object, `data`: any): *any*

*Defined in [src/utils/common.ts:11](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/common.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | object |
`data` | any |

**Returns:** *any*
