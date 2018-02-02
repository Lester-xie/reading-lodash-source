<template>
  <post :methodName="`difference(array, [values])`">
    <template slot="explain">
      创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
    </template>
    <template slot="selfCode">
      function difference(array, values) {
        let index = 0
        let result = []
      if (!Array.isArray(array) || !Array.isArray(values)) {
          return array
        }
        for (let i of array) {
          if (!values.includes(i)) {
            result[index++] = i
          }
        }
        return result
      }

      difference([1, 2, 3], [3])  //[1, 2]
    </template>
    <template slot="lodashCode">
      var difference = baseRest(function(array, values) {
        return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
      });

      function baseDifference(array, values, iteratee, comparator) {
        var index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valuesLength = values.length;

        if (!length) {
          return result;
        }
        if (iteratee) {
          values = arrayMap(values, baseUnary(iteratee));
        }
        if (comparator) {
          includes = arrayIncludesWith;
          isCommon = false;
        }
        else if (values.length >= LARGE_ARRAY_SIZE) {
          includes = cacheHas;
          isCommon = false;
          values = new SetCache(values);
        }
        outer:
        while (++index < length) {
          var value = array[index],
          computed = iteratee == null ? value : iteratee(value);

          value = (comparator || value !== 0) ? value : 0;
          if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === computed) {
                continue outer;
              }
            }
            result.push(value);
          }
          else if (!includes(values, computed, comparator)) {
            result.push(value);
          }
        }
        return result;
      }
    </template>
    <template slot="lodashComment">
      我发现我思维似乎有点没转换过来，lodash 用了函数式编程的概念来写，我依然在保持着过程式编程
    </template>
  </post>
</template>
