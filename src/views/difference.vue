<template>
  <post :methodName="`concat(array, [values])`">
    <template slot="explain">
      创建一个新数组，将array与任何数组 或 值连接在一起。
    </template>
    <template slot="selfCode">
      function concat(array, ...values) {
        let result = []
        let resultIndex = 0

        for (let i of array) {
          result[resultIndex++] = i
        }
        for (let j of values) {
          result = result.concat(j)
        }
        return result
      }
      let arr = [1]
      concat(arr, 2, [3], [[4]])      //[1, 2, 3, [4]]
    </template>
    <template slot="lodashCode">
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array(length - 1),
        array = arguments[0],
        index = length;

        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
    </template>
  </post>
</template>
