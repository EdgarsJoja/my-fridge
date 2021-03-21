<template>
  <PrimeToolbar>
    <template #left>
      <PrimeButton label="New" icon="pi pi-plus" @click="$router.push({ name: 'item', params: { id: '' } })"/>
    </template>
  </PrimeToolbar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>
