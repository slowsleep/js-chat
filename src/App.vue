<script setup lang="ts">
import Chat from "./components/Chat.vue";
import Header from "./components/Header.vue";
import ListContacts from "./components/ListContacts.vue";

const contactsArr = [
    {name: "Alex", last_message:"Go away!", datetime_msg:"02-12-2023 14-46"},
    {name: "Lily", last_message:"Hiii", datetime_msg:"02-12-2023 12-19"},
    {name: "Denis", last_message:"I will be later", datetime_msg:"01-12-2023 07-31"},
];

</script>

<template>
    <Header title="Дорова!!!"></Header>

    <div class="flex overflow-auto">
        <div class="w-2/6">
            <ListContacts :contacts='contactsArr'></ListContacts>
        </div>
        <div class="w-4/6">
            <Chat msg="Vite + Vue" />
        </div>
    </div>
</template>
