<template>
  <div>
    <h4 v-text="methodName"></h4>
    <div class="explain">
      <slot name="explain"></slot>
    </div>
    <div class="divider"></div>
    <h3>Myself</h3>
    <div>
      <pre v-highlightjs>
        <code class="javascript">
          <slot name="selfCode"></slot>
        </code>
      </pre>
      <slot name="selfComment"></slot>
    </div>
    <div class="divider"></div>
    <h3>Lodash</h3>
    <div>
      <pre v-highlightjs>
        <code class="javascript">
          <slot name="lodashCode"></slot>
        </code>
      </pre>
      <slot name="lodashComment"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post',
    props: {
      methodName: String
    }
  }
</script>
