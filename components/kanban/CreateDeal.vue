<script setup lang="ts">
import {v4 as uuidv4} from "uuid";
import {useMutation} from "@tanstack/vue-query";
import {COLLECTION_DEALS, DB_ID} from "~/app.constants";
import type {IDeal} from "~/types/deals.types";

const isOpenForm = ref(false);

interface IDealFormState extends Pick<IDeal, 'name' | 'price'> {
  customer: {
    email: string
    name: string
  }
  status: string
}

const props = defineProps({

})
</script>

<template>
  <div class="text-center mb-2">
    <button class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]" @click="isOpenForm = !isOpenForm">
      <Icon v-if="isOpenForm"
            name="material-symbols:arrow-upward-alt"
            class="fade-in-100 fade-out-0"
            size="25"
      />
      <Icon v-else
            name="mdi:plus-circle-outline"
            class="fade-in-100 fade-out-0"
            size="25"
      />
    </button>
  </div>
  <form>

  </form>
</template>

<style scoped>
.input {
  @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}

.btn {
  @apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white;
}

form {
  @apply mb-3 block;
  animation: show 0.3s ease-in-out;
}

@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: translateY(-35px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d]
  }

  to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

