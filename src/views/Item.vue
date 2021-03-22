<template>
  <ViewContent>
    <template v-slot:header>{{ title }}</template>
    <div class="p-input-filled p-fluid mb-4">
      <div class="p-field mb-4">
        <label for="name" class="text-gray-50">Name</label>
        <PrimeInputText id="name" type="text" v-model="form.name" />
      </div>

      <div class="p-field">
        <label for="expiration_date" class="text-gray-50">
          Expiration Date
        </label>
        <PrimeCalendar
          id="expiration_date"
          :showIcon="true"
          dateFormat="dd-mm-yy"
          v-model="form.expirationDate"
        />
      </div>
    </div>

    <div class="flex justify-between">
      <PrimeButton
        type="button"
        label="Cancel"
        @click="$router.push({ name: 'fridge' })"
        class="p-button-secondary"
      />
      <PrimeButton type="submit" label="Save" @click="save()" />
    </div>
  </ViewContent>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ViewContent from '../components/ViewContent.vue';
import { saveItem } from '../api/itemsManager';

@Options({
  components: {
    ViewContent,
  },
})
export default class Item extends Vue {
  public form = {
    name: '',
    expirationDate: '',
  };

  protected itemId: String | String[] = '';

  get title(): String {
    return this.itemId ? 'Edit' : 'New';
  }

  public save() {
    saveItem({
      name: this.form.name,
      expirationDate: this.form.expirationDate
    });
    this.$router.push('fridge');
  }

  created() {
    this.itemId = this.$route.params.id;
  }
}
</script>
