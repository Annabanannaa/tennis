<script setup lang="ts">
import { computed, reactive } from "vue";
import {
  Form,
  FormItem,
  Input,
} from "ant-design-vue";

interface FormState {
  email: string;
  password: string;
}

const formState = reactive<FormState>({
  email: '',
  password: '',
});


const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>

<template>
  <Form
      class="border p-4 px-auto"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <FormItem
        label="Email"
        name="email"
        :rules="[
                    { required: true, message: 'Введите, пожалуйста, email' },
                ]"
    >
      <Input
          size="large"
          v-model:value="formState.email"
          type="email"
          placeholder="Введите email"
          autocomplete="username email"
      />
    </FormItem>
    <FormItem
        label="Password"
        name="password"
        :rules="[
                    { required: true, message: 'Введите, пожалуйста, password' },
                ]"
    >
      <Input
          size="large"
          v-model:value="formState.password"
          type="password"
          placeholder="Введите пароль"
          autocomplete="password"
      />
    </FormItem>
  </Form>
</template>
