<template>
  <div>
    <h4>chunk方法</h4>
    <p>将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。</p>
    <h3>self</h3>
    <pre v-highlightjs>
      <code class="javascript">
        function chunk(array, size) {
          let data = []
          do
            {
              data.push(array.splice(0, size))
            }
          while (array.length > 0)

          return data
        }
      </code>
    </pre>
    <p>简单实现了分块功能，但该方法具有倾入性，会改变原数组（可以使用深复制来操作clone出的数组），且没有参数判断。</p>
    <p>那么，从下一个起，我会加上参数的边界值判断，保证健壮性。</p>
    <h3>lodash</h3>
    <pre v-highlightjs>
      <code class="javascript">
        function chunk(array, size) {
          size = Math.max(size, 0)
          const length = array == null ? 0 : array.length
          if (!length || size < 1) {
            return []
          }
          let index = 0
          let resIndex = 0
          const result = new Array(Math.ceil(length / size))

          // 这个地方我觉得可以使用后测试循环do-while，这样会减少一层循环
          while (index < length) {
            result[resIndex++] = slice(array, index, (index += size))
          }
          return result
        }
      </code>
    </pre>
  </div>
</template>
