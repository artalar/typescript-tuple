import assert from 'static-type-assert'
import compare = assert.compare
import { FillTuple } from '..'

compare<FillTuple<[], 'x'>, []>('equal')
compare<FillTuple<[0, 1, 2], 'x'>, ['x', 'x', 'x']>('equal')
compare<FillTuple<number[], 'x'>, 'x'[]>('equal')
compare<FillTuple<[0, ...number[]], 'x'>, 'x'[]>('equal')
