<script setup lang="ts">
import Chat from "./components/Chat.vue";
import Header from "./components/Header.vue";
import ListContacts from "./components/ListContacts.vue";
import MainPage from './pages/MainPage.vue';

const contactsArr = [
    {name: "Alex", last_message:"Go away!", datetime_msg:"02-12-2023 14-46", avatar:""},
    {name: "Lily", last_message:"Hiii", datetime_msg:"02-12-2023 12-19", avatar:"https://images.pexels.com/photos/1554740/pexels-photo-1554740.jpeg"},
    {name: "Denis", last_message:"I will be later", datetime_msg:"01-12-2023 07-31", avatar:""},
];

</script>

<template>
    <Header title="BoopChat"></Header>

    <!-- if auth -->

    <div class="flex h-screen">
        <div class="w-2/6 overflow-auto bg-emerald-300">
            <ListContacts :contacts='contactsArr'></ListContacts>
        </div>
        <div class="w-4/6 overflow-auto bg-emerald-700">
            <Chat msg="Vite + Vue" />
        </div>
    </div>

    <!-- else -->

    <div class="flex h-screen">
        <MainPage />
    </div>
</template>
