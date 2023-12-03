<script setup lang="ts">

defineProps<{ title: string }>()

</script>

<template>
    <div class="bg-emerald-900 p-2 flex justify-between">
        <h1><a href="/">{{ title }}</a></h1>
        <div class="flex space-x-10">
          <a href="/signin">Войти</a>
          <a href="/signup">Зарегистрироваться</a>
        </div>
    </div>
</template>
