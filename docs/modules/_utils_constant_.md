[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["utils/constant"](_utils_constant_.md)

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

*Defined in [src/utils/constant.ts:3](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/utils/constant.ts#L3)*

#### Type declaration:

▸ <**L**>(...`args`: Cast‹L, Gaps‹Parameters‹F›››): *GapsOf<L, Parameters<F>> extends infer G ? Length<Cast<G, List>> extends infer L ? L extends 0 ? Return<F> : L extends 1 ? Curry<function> & function : Curry<function> : never : never*

**Type parameters:**

▪ **L**: *List*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Cast‹L, Gaps‹Parameters‹F››› |
