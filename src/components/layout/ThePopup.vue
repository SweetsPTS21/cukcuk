<template>
    <div
        class="m-popup-dialog m-dialog-warning"
        :class="{ isShowDialog: isShowWarning }"
    >
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">Đóng form thông tin chung</div>
                <div class="m-dialog-close">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="m-dialog-body">
                <div class="m-dialog-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="m-dialog-text">
                    Bạn có chắc chắn muốn đóng form thông tin chung?
                </div>
            </div>
            <div class="m-dialog-footer">
                <button class="m-btn m-dialog-button-negative" id="">
                    Tiếp tục nhập
                </button>
                <button class="m-btn m-dialog-button-positive" id="">
                    Đóng
                </button>
            </div>
        </div>
    </div>
    <div
        class="m-popup-dialog m-dialog-delete"
        :class="{ isShowDialog: isShowDelete }"
    >
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">Xoá bản ghi A</div>
                <div class="m-dialog-close"
                @click="btnCloseOnClick">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="m-dialog-body">
                <div class="m-dialog-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="m-dialog-text">
                    Bạn có chắc chắn muốn xóa bản ghi A
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
        :class="{ isShowDialog: isShowInfo }"
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
                    Hiện bạn chưa thiết lập USB Token. Vui lòng thiết lập kết
                    nối với USB Token để ký nộp các hồ sơ
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
export default {
    name: "ThePopup",
    data() {
        return {};
    },
    emits: ['confirmDelete', 'isShowDialog'],
    props: {
        isShowWarning: {
            type: Boolean,
            default: false,
        },
        isShowDelete: {
            type: Boolean,
            default: false,
        },
        isShowInfo: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        btnConfirmDelete() {
            this.$emit("confirmDelete");
        },
        btnCloseOnClick() {
            this.$emit("isShowDialog", false);
        }
    },
};
</script>
