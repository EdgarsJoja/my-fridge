<template>
  <div class="home">
    <PrimeToolbar>
      <template #left>
        <PrimeButton
          label="Open Fridge"
          @click="$router.push({ name: 'fridge' })"
        />
      </template>

      <template #right>
        <PrimeButton
          label="Export"
          icon="pi pi-download"
          class="p-button-secondary mr-2"
        />
        <PrimeButton
          label="Import"
          icon="pi pi-upload"
          class="p-button-secondary"
        />
      </template>
    </PrimeToolbar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>
