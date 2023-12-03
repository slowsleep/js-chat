<script setup lang="ts">

defineProps<{ 
    contacts: [] 
}>()

</script>

<template>
    <div class="p-3">
        <div class="w-full flex justify-between">
            <input class="w-full" type="text" placeholder="@...">
            <button class="p-2 rounded-lg text-slate-200 bg-slate-900 ">поиск</button>
        </div>
        <ul>
            <li v-for="contact in contacts">
                <p>{{ contact.name }}</p>
                <p>{{ contact.last_message }}</p>
                <p>{{ contact.datetime_msg }}</p>
            </li>
        </ul>
    </div>
</template>
