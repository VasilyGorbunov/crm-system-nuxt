<script setup lang="ts">
import {account} from "~/utils/appwrite";
import {useAuthStore, useIsLoadingStore} from "~/store/auth.store";

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore()
const router = useRouter()
</script>

<template>
  <section class="grid" style="min-height: 100vh">
    <LayoutSidebar/>
    <div>
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 2fr 6fr;
}
</style>
