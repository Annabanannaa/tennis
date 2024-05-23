<script lang="ts" setup>
import { ref } from "vue";
import { LayoutHeader, Row, Col, Button, Modal } from "ant-design-vue";
import ModalAuth from "./ModalAuth.vue";


const open = ref(false);

const showModal = () => {
  open.value = true;
};

</script>

<template>
  <LayoutHeader class="">
    <Row type="flex" :gutter="16">
      <Col flex="0 0 120px" class="flex items-center">
        <img
            :src="'src/assets/logo.svg'"
            alt=""
            role="presentation"
            class="max-w-full"
        />
      </Col>
      <Col flex="auto">
        <Button @click="showModal">Войти</Button>
        <Button @click="showModal">Войти</Button>

        <ModalAuth v-model:is-open="open"/>

      </Col>
    </Row>
  </LayoutHeader>
</template>
