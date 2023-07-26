<template>
    <div class="navbar">
        <div class="menu-item">
            <div class="menu-icon m-icon m-icon-dashboard"></div>
            <div class="menu-text">Tổng quan</div>
        </div>
        <router-link to="/report" class="menu-item">
            <div class="menu-icon m-icon m-icon-report"></div>
            <div class="menu-text">Báo cáo</div>
        </router-link>
        <div class="menu-item">
            <div class="menu-icon m-icon m-icon-sale"></div>
            <div class="menu-text">Mua hàng</div>
        </div>
        <router-link to="/employee" class="menu-item">
            <div class="menu-icon m-icon m-icon-employee"></div>
            <div class="menu-text">Danh mục nhân viên</div>
        </router-link>
        <div class="menu-item">
            <div class="menu-icon m-icon m-icon-setting"></div>
            <div class="menu-text">Thiết lập hệ thống</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheNavBar",
    components: {},
};
</script>
<style scoped>
@import url("../../style/layout/navbar.css");
</style>
