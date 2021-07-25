<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/storages">Storages</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss"></style>
