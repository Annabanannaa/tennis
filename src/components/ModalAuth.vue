<script setup lang="ts">
import { computed } from "vue";
import {
  Modal,
} from "ant-design-vue";


const props = defineProps<{
  isOpen: boolean;
}>()

const emit = defineEmits(['update:isOpen'])

const isModalOpen = computed<boolean>({
  get () {
    return props.isOpen
  },
  set (open) {
    emit('update:isOpen', open)
  }
});

</script>

<template>
    <Modal
        v-model:open="isModalOpen"
        title="Basic Modal"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
</template>
