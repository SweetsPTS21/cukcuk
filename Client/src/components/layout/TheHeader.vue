<template>
    <div class="header">
        <div class="header-left">
            <div class="sidebar" @click="toggleNavbar"></div>
            <div class="header-logo"></div>
        </div>
        <div class="header-right">
            <div class="header-right-left">
                <div class="header-company-logo"></div>
                <div class="header-company-name">Chi nhánh miền bắc</div>
                <div class="header-company-select">
                    <i icon="fas fa-chevron-down"></i>
                </div>
            </div>
            <div class="header-right-right">
                <div class="header-notify"><i class="fas fa-bell"></i></div>
                <div class="header-user-img"></div>
                <div class="header-user-name">Nguyễn Văn A</div>
                <div class="header-option"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    components: {},
};
</script>
<style>
@import url("../../style/layout/header.css");
</style>
