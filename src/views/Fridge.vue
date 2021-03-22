<template>
  <PrimeToolbar>
    <template #left>
      <PrimeButton label="New" icon="pi pi-plus" @click="$router.push({ name: 'item', params: { id: '' } })"/>
    </template>
  </PrimeToolbar>
  <ViewContent>
    <ItemsList></ItemsList>
  </ViewContent>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ViewContent from '../components/ViewContent.vue';
import ItemsList from '../components/ItemsList.vue';

@Options({
  components: {
    ViewContent,
    ItemsList
  },
})
export default class Home extends Vue {}
</script>
