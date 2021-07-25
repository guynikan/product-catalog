<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-between">
        <div class="container-fluid mt-5">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(storage, index) in storages" :key="index">
                    <td>{{ storage.attributes.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["storages"]),
  },
  methods: {
    ...mapActions(["getStorages"]),
  },
  created() {
    this.getStorages();
  },
};
</script>

<style></style>
