<template>
  <Modal>
    <form @submit.prevent="save">
      <div class="mb-3" v-for="(product, index) in products" :key="index">
        <div class="form-group">
          <label for="type">{{ "Type" }}</label>
          <input
            class="form-control"
            v-model="product.type"
            type="text"
            id="type"
          />
        </div>
        <div class="form-group">
          <label for="name">{{ "Name" }}</label>
          <input
            class="form-control"
            v-model="product.attributes.name"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label for="amount">{{ "Amount" }}</label>
          <input
            class="form-control"
            v-model="product.attributes.amount"
            type="number"
            id="amount"
          />
        </div>
      </div>
      <button
        v-if="!isEdit"
        @click="addItem()"
        class="btn btn-outline-dark mb-3"
        type="button"
      >
        <font-awesome-icon icon="plus-circle" /> Add new item
      </button>
      <div class="modal-footer">
        <div class="col p-0">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
        <router-link to="/" class="btn btn-light" type="button"
          >Cancel</router-link
        >
      </div>
    </form>
  </Modal>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "@/components/Modal.vue";
export default {
  name: "ProductForm",

  components: {
    Modal,
  },

  data() {
    return {
      products: [],
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const { id, type } = to.params;
      if (id) {
        vm.products.push(vm.product(id, type));
      } else {
        vm.addItem();
      }
    });
  },

  computed: {
    ...mapGetters(["product"]),

    isEdit() {
      return !!this.$route.params.id;
    },
  },

  methods: {
    ...mapActions(["setData"]),

    save() {
      try {
        this.setData(this.products);
      } finally {
        this.$router.push({ name: "Home" });
      }
    },

    addItem() {
      this.products.push({ attributes: {} });
    },
  },
};
</script>

<style></style>
