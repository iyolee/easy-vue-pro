<template>
  <div>
    <v-form :model="model" :rules="rules" ref="loginForm">
      <v-form-item label="用户名" prop="username">
        <v-input v-model="model.username"></v-input>
      </v-form-item>
      <v-form-item label="密码" prop="password">
        <v-input type="password" v-model="model.password"></v-input>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
import VInput from "../../components/Form/VInput";
import VFormItem from "../../components/Form/VFormItem";
import VForm from "../../components/Form/VForm";
export default {
  components: {
    VInput,
    VFormItem,
    VForm
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: {
          required: true
        },
        password: {
          required: true
        }
      }
    };
  }
};
</script>
<style></style>
