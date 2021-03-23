<template>
  <div class="items-list">
    <div class="controls mb-8">
      <div class="search p-fluid">
        <span class="p-input-icon-right">
          <PrimeInputText type="text" v-model="search" />
          <i class="pi pi-search" />
        </span>
      </div>
    </div>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        class="text-gray-50 p-4 shadow-md rounded-lg mb-4 flex justify-between"
      >
        <div>
          <div class="text-2xl">{{ item.name }}</div>
          {{ formatDate(new Date(item.expirationDate)) }}
        </div>
        <div>
          <expiration-tag :expirationDate="new Date(item.expirationDate)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getItems, ItemInterface } from '../api/itemsManager';
import { formatDate } from '../composables/dateFormatter';
import { sortByExpirationDate } from '../composables/itemSorter';
import ExpirationTag from '../components/ExpirationTag.vue';
import { defineComponent } from '@vue/runtime-core';
import { searchFilter } from '@/composables/itemFilters';

export default defineComponent({
  components: {
    'expiration-tag': ExpirationTag,
  },
  data() {
    return {
      search: '',
    };
  },
  setup() {
    // @todo: Make this property readonly.
    const allItems: ItemInterface[] = sortByExpirationDate(getItems());
    const items: ItemInterface[] = allItems;

    return {
      allItems,
      items,
      getItems,
      formatDate,
      sortByExpirationDate,
      searchFilter
    };
  },
  watch: {
    search(newValue) {
      if (newValue) {
        this.items = searchFilter(this.items, newValue);
      } else {
        this.items = this.allItems;
      }
    }
  }
});
</script>
