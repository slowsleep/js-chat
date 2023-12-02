<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <div class="p-3 bg-emerald-700">
        <h1>{{ msg }}</h1>

        <h1 class="text-3xl font-bold underline text-lime-300">Hello world!</h1>

        <div class="flex justify-between w-20">
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img
                    src="./../assets/vue.svg"
                    class="logo vue"
                    alt="Vue logo"
                />
            </a>
        </div>

        <div class="card">
            <button
                class="bg-blue-300 p-3 rounded-lg m-2"
                type="button"
                @click="count++"
            >
                count is {{ count }}
            </button>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test HMR
            </p>
        </div>

        <p>
            Check out
            <a
                class="text-green-600 visited:text-purple-600"
                href="https://vuejs.org/guide/quick-start.html#local"
                target="_blank"
                >create-vue</a
            >, the official Vue + Vite starter
        </p>
        <p>
            Install
            <a
                class="text-green-600 visited:text-purple-600"
                href="https://github.com/vuejs/language-tools"
                target="_blank"
                >Volar</a
            >
            in your IDE for a better DX
        </p>
        <p class="text-gray-400">
            Click on the Vite and Vue logos to learn more
        </p>
    </div>
</template>
