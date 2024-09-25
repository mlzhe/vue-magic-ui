<script setup lang="ts">
import { useClassName } from '../useClassName'

const { gc, gcx, gce, gcm } = useClassName('button')
</script>

<template>
  <div :class="gc('primary')">
    {{ gc('primary') }}

    {{ gc(['primary', 'E']) }}
    {{ gc(['primary', 'M']) }}
    {{ gc(gce('primary')) }}
    {{ gc(gcm('primary')) }}
    {{ gcx(() => {
      return {
        a: true,
        b: false,
      }
    }) }}
  </div>
  <div :class="gc(['primary', 'B'])">
    {{ gc('primary', 'B') }}
  </div>
</template>

<style scoped>

</style>
