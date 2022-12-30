<template>
  <div class="h-full bg-black">
    <v-form v-model="valid" class="h-full">
      <v-col class="flex flex-column align-center pt-16">
        <h1 class="text-3xl font-mono pt-16 animate-rotate">Login</h1>
        <v-col cols="12" sm="4" md="3" class="pt-8">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            class="font-mono"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <v-text-field
            v-model="password"
            :rules="password"
            label="Password"
            type="password"
            required
            hide-details="false"
            class="font-mono"
          ></v-text-field>
        </v-col>
        <v-btn @click="login()" class="font-mono mt-4">Login</v-btn>
      </v-col>
    </v-form>
    <v-snackbar v-model="isShowSnackbar" color="white" elevation="24">
      Kullanıcı bilgileri yanlış
      <template v-slot:actions>
        <v-btn color="black" variant="text" @click="isShowSnackbar = false">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data: () => ({
    valid: false,
    password: "",
    email: "",
    isShowSnackbar: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    login() {
      if (this.email == "admin" && this.password == "123456") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: this.email,
            password: this.password,
          })
        );
        this.$router.push({ path: "/homePage" });
      } else {
        this.isShowSnackbar = true;
      }
    },
  },
};
</script>
