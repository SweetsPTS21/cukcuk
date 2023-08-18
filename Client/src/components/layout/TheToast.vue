<template>
    <div
        class="m-toast-box"
        :class="{
            'is-show-toast': true,
            'fade-in': showToast,
            'fade-out': !showToast,
        }"
    >
        <div
            class="m-toast-item m-toast-success"
            :class="{ 'is-show-toast': messageType == Enum.TOAST_TYPE.SUCCESS }"
        >
            <div class="m-toast-icon"><i class="fas fa-check"></i></div>
            <div class="m-toast-text">{{ message }}</div>
            <div class="m-toast-close" @click="closeToast">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div
            class="m-toast-item m-toast-error"
            :class="{ 'is-show-toast': messageType == Enum.TOAST_TYPE.ERROR }"
        >
            <div class="m-toast-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="m-toast-text">{{ message }}</div>
            <div class="m-toast-close" @click="closeToast">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div
            class="m-toast-item m-toast-warning"
            :class="{ 'is-show-toast': messageType == Enum.TOAST_TYPE.WARNING }"
        >
            <div class="m-toast-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="m-toast-text">{{ message }}</div>
            <div class="m-toast-close" @click="closeToast">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div
            class="m-toast-item m-toast-info"
            :class="{ 'is-show-toast': messageType == Enum.TOAST_TYPE.INFO }"
        >
            <div class="m-toast-icon"><i class="fas fa-info"></i></div>
            <div class="m-toast-text">{{ message }}</div>
            <div class="m-toast-close" @click="closeToast">
                <i class="fas fa-times"></i>
            </div>
        </div>
    </div>
</template>
<script>
import Enum from "@/scripts/enum";

export default {
    props: ["message", "messageType", "showToast"],
    emits: ["closeToast"],
    methods: {
        /**
         * Hàm xử lý khi click vào nút đóng toast
         * CreatedBy: PTSON (08/14/2023)
         */
        closeToast() {
            this.$emit("closeToast");
        },
    },
    watch: {
        /**
         * Theo dõi sự thay đổi của prop showToast
         * @param {*} val
         * CreatedBy: PTSON (08/14/2023)
         */
        showToast: function (val) {
            if (val) {
                setTimeout(() => {
                    this.$emit("closeToast");
                }, 3000);
            }
        },
    },
    data() {
        return {
            Enum,
        };
    },
};
</script>
