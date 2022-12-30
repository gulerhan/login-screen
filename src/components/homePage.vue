<template>
  <headerComp />
  <div class="h-full bg-black">
    <p
      class="flex flex-column align-center relative top-1/2 text-4xl animate-bounce"
    >
      WELCOME
    </p>
  </div>
</template>

<script>
import headerComp from "./headerComp.vue";
export default {
  name: "homePage",
  components: {
    headerComp,
  },
  beforeCreate() {
    const user = localStorage.getItem("user");
    if (user == null) {
      this.$router.push({ path: "/login" });
    }
  },
};
</script>
