<template>
  <div class="expiration-tag" v-if="tagData.severity !== 'none'">
    <PrimeTag :value="tagData.value" :severity="tagData.severity"></PrimeTag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getExpirationTag, ExpirationTags } from '../composables/tagResolver';

export default defineComponent({
  props: {
    expirationDate: {
      type: Date,
      required: true,
    },
  },
  setup() {
    return {
      getExpirationTag,
    };
  },
  computed: {
    tagData() {
      let data = {
        severity: 'none',
        value: '',
      };

      switch (getExpirationTag(this.expirationDate)) {
        case ExpirationTags.Expired:
          data.severity = 'danger';
          data.value = 'Expired!';
          break;
        case ExpirationTags.Today:
          data.severity = 'danger';
          data.value = 'Expires Today';
          break;
        case ExpirationTags.Tomorrow:
          data.severity = 'warning';
          data.value = 'Expires Tomorrow';
          break;
        case ExpirationTags.Week:
          data.severity = 'info';
          data.value = 'Expires This Week';
          break;
      }

      return data;
    },
  },
});
</script>
