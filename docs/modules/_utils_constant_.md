[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["utils/constant"](_utils_constant_.md)

# External module: "utils/constant"

## Index

### Variables

* [getPrevState](_utils_constant_.md#const-getprevstate)

## Variables

### `Const` getPrevState

• **getPrevState**: *function* =  R.curry(
  (States: { [state: string]: string[] }, nextState: string) => {
    return Object.keys(States).filter((state: string) => {
      return States[state].includes(nextState);
    });
  },
)

*Defined in [src/utils/constant.ts:3](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/utils/constant.ts#L3)*

#### Type declaration:

▸ <**T**>(...`args`: Cast‹T, Gaps‹Parameters‹F›››): *GapsOf<T, Parameters<F>> extends infer G ? Cast<G, Tuple<any>>["length"] extends infer L ? L extends 0 ? Return<F> : L extends 1 ? (...args: Cast<G, Tuple<any>>) => Return<...> : Curry<...> : never : never*

**Type parameters:**

▪ **T**: *Tuple*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Cast‹T, Gaps‹Parameters‹F››› |
