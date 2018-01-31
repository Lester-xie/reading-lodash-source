<template>
  <post :methodName="`compact(array)`">
    <template slot="explain">
      创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
    </template>
    <template slot="selfCode">
      function compact(array) {
        if (Array.isArray(array)) {
          return array.filter(i => i)
        }
      }

      compact([1,2,3, NaN, undefined, 0, '', null, false, -1, {}, []])
      // [ 1, 2, 3, -1, {}, [] ]
    </template>
    <template slot="lodashCode">
      function compact(array) {
        let resIndex = 0
        const result = []

        if (array == null) {
          return result
        }

        for (const value of array) {
          if (value) {
            result[resIndex++] = value
          }
        }
        return result
      }
    </template>
    <template slot="lodashComment">
      应该是出于兼容性的考虑，lodash 使用的方法都尽量避免使用API
    </template>
  </post>
</template>
