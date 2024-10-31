<script setup lang="ts">
  useHead({
    title: 'Login'
  })

  const emailRef = ref('')
  const passwordRef = ref('')
  const nameRef = ref('')
</script>

<template>
<div class="flex items-center justify-center min-h-screen w-full">
  <div class="rounded bg-sidebar w-1/4 p-5">
    <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
    <form>
      <UiInput placeholder="Email" v-model="emailRef" type="email" class="mb-3"/>
      <UiInput placeholder="Password" v-model="passwordRef" type="password" class="mb-3"/>
      <UiInput placeholder="Name" v-model="nameRef" type="text" class="mb-3"/>
      <div class="flex items-center justify-center gap-5">
        <UiButton type="button">Login</UiButton>
        <UiButton type="button">Register</UiButton>
      </div>
    </form>
  </div>
</div>Name
</template>

<style scoped>

</style>