<template>
    <div
        class="m-popup-dialog m-dialog-warning"
        :class="{ isShowDialog: dialogType == Enum.POPUP_TYPE.WARNING }"
    >
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">Chú ý</div>
                <div class="m-dialog-close" @click="btnCloseOnClick">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="m-dialog-body">
                <div class="m-dialog-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="m-dialog-text">
                    {{ message }}
                </div>
            </div>
            <div class="m-dialog-footer">
                <button
                    class="m-btn m-dialog-button-negative"
                    id=""
                    @click="btnCloseOnClick"
                >
                    Đóng
                </button>
            </div>
        </div>
    </div>
    <div
        class="m-popup-dialog m-dialog-delete"
        :class="{ isShowDialog: dialogType == Enum.POPUP_TYPE.DELETE }"
    >
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">Xoá</div>
                <div class="m-dialog-close" @click="btnCloseOnClick">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="m-dialog-body">
                <div class="m-dialog-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="m-dialog-text">
                    {{ message }}
                </div>
            </div>
            <div class="m-dialog-footer">
                <button
                    class="m-btn m-dialog-button-negative"
                    @click="btnCloseOnClick"
                >
                    Hủy
                </button>
                <button
                    class="m-btn m-dialog-button-positive"
                    @click="btnConfirmDelete"
                >
                    Xóa
                </button>
            </div>
        </div>
    </div>
    <div
        class="m-popup-dialog m-dialog-info"
        :class="{ isShowDialog: dialogType == Enum.POPUP_TYPE.INFO }"
    >
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">Pop-up thông báo</div>
                <div class="m-dialog-close" id="dialogInfo-btnClose">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="m-dialog-body">
                <div class="m-dialog-text">
                    {{ message }}
                </div>
            </div>
            <div class="m-dialog-footer">
                <button class="m-btn m-dialog-button-positive" id="">
                    Đóng
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Enum from "@/scripts/enum";

export default {
    name: "ThePopup",
    data() {
        return {};
    },
    emits: ["confirmDelete", "closePopup"],
    props: {
        message: {
            type: String,
            default: "",
        },
        dialogType: {
            type: Number,
            default: Enum.POPUP_TYPE.INFO,
        },
    },
    methods: {
        btnConfirmDelete() {
            this.$emit("confirmDelete");
        },
        btnCloseOnClick() {
            this.$emit("closePopup");
        },
    },
    data() {
        return {
            Enum,
        };
    }
};
</script>
