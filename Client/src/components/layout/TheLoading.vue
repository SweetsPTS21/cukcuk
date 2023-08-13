<template>
    <div class="m-loading" :class="{isLoading: showLoading}">
        <div class="m-loading-icon"></div>
    </div>
</template>
<script>
export default {
    props: {
        showLoading: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        showLoading: function (val) {
            if (val) {
                alert("Loading...");
            }
        },
    },
    data() {
        return {
            
        }
    },
}
</script>
