<script setup>

</script>

<template>
    <div class="flex flex-col mx-auto w-2/5 my-5">
        <h1 class="self-center">Зарегистрироваться</h1>
        <form class="flex flex-col gap-2" id="form_singin" action="post">
            <input id="login" type="text" placeholder="логин">
            <input id="password" type="password" placeholder="пароль">
            <input id="password2" type="password" placeholder="повтор пароля">
            <input class="border-2" id="send" type="submit" value="Войти">
        </form>
    </div>
</template>