<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <td scope="col" v-for="(header, index) in headers" :key="index">
          {{ header }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.attributes.name }}</td>
        <td>{{ item.attributes.price }}</td>
        <td>{{ item.attributes.description }}</td>
        <td>{{ item.attributes.amount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    ...mapState(["getStorages"]),
  },
  created() {
    this.getStorages();
  },
};
</script>

<style></style>
