<template>
    <TheHeader />
    <div class="main">
        <TheNavBar />
        <router-view></router-view>
        
    </div>
    
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavBar from "./components/layout/TheNavBar.vue";

export default {
    name: "App",
    components: {
        TheHeader,
        TheNavBar,

    },
};
</script>

<style>
@import url("./style/main.css");
</style>
