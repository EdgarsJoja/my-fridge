<template>
  <div class="items-list">
    <ul>
      <li
        v-for="item in context.items"
        :key="item.id"
        class="text-gray-50 p-4 shadow-md rounded-lg mb-4 flex justify-between"
      >
        <div>
          <div class="text-2xl">{{ item.name }}</div>
          {{ context.formatDate(new Date(item.expirationDate)) }}
        </div>
        <div>
          <expiration-tag :expirationDate="new Date(item.expirationDate)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { getItems, ItemInterface } from '../api/itemsManager';
import { formatDate } from '../composables/dateFormatter';
import { sortByExpirationDate } from '../composables/itemSorter';
import ExpirationTag from '../components/ExpirationTag.vue';

@Options({
  components: {
    ExpirationTag,
  },
})
export default class ItemsList extends Vue {
  context = setup(() => {
    const items: ItemInterface[] = sortByExpirationDate(getItems());

    return {
      items,
      getItems,
      formatDate,
      sortByExpirationDate,
    };
  });
}
</script>
