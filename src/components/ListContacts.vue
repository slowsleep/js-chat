<script setup lang="ts">

defineProps<{ 
    contacts: [] 
}>()


function selectContact(event) {
    console.log(event.currentTarget);
    event.currentTarget.classList.toggle("border-4");
    event.currentTarget.classList.toggle("border-green-600");

    event.currentTarget.classList.toggle("hover:border-4");
    event.currentTarget.classList.toggle("hover:border-l-pink-300");
}

</script>

<template>
    <div class="p-3">
        <div class="w-full flex justify-between">
            <input class="w-full" type="text" placeholder="@...">
            <button class="p-2 rounded-lg text-slate-200 bg-slate-900 ">поиск</button>
        </div>
        <ul>
            <li v-for="contact in contacts">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 flex m-2 rounded-md hover:shadow-lg p-2 hover:border-4  hover:border-l-pink-300" @click="selectContact">
                    <div class="w-3/12">
                        <img class="rounded-lg m-2" :src="contact.avatar" alt="empty avatar">
                    </div>
                    <div class="w-9/12">
                        <div class="flex justify-between p-2">
                            <p>{{ contact.name }}</p>
                            <p class="text-slate-600">{{ contact.datetime_msg }}</p>
                        </div>
                        <div class="p-2">
                            <p>{{ contact.last_message }}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
