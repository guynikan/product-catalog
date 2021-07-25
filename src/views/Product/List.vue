<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-between">
        <div class="form-group col-md-2">
          <select class="form-control" :value="types" @change="updateType">
            <option disabled :value="null">{{ "Choose an option" }}</option>
            <option value="clothes">{{ "Clothes" }}</option>
            <option value="books">{{ "Books" }}</option>
            <option value="kitchenwares">{{ "Kitchenware" }}</option>
            <option value="decors">{{ "Decor" }}</option>
          </select>
        </div>

        <div class="form-group col-md-2">
          <router-link type="button" class="btn btn-primary" to="/product/new"
            >Insert
            <font-awesome-icon icon="plus" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <table v-if="!isEmpty" class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in getProducts" :key="product.id">
                <td>{{ product.attributes.name }}</td>
                <td>{{ product.attributes.price }}</td>
                <td>{{ product.attributes.description }}</td>
                <td>{{ product.attributes.amount }}</td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'ProductEdit',
                        params: { id: product.id, type: product.type },
                      }"
                      type="button"
                      class="btn btn-outline-dark"
                    >
                      <font-awesome-icon icon="edit" />
                    </router-link>
                    <button
                      @click="deleteData(product)"
                      class="btn btn-outline-dark"
                      type="button"
                    >
                      <font-awesome-icon icon="trash-alt" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",

  data() {
    return {
      produto: "clothes",
    };
  },

  computed: {
    ...mapState(["products", "types"]),
    ...mapGetters(["getProducts"]),

    isEmpty() {
      return this.products.some((product) => {
        return product.length <= 0 && product.type === this.type;
      });
    },
  },

  methods: {
    ...mapActions(["getData", "deleteData", "setData"]),

    updateType(e) {
      const type = e.target.value;
      this.$store.commit("SET_TYPE", type);
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style></style>
