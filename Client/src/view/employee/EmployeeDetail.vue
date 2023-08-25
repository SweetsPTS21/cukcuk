<template>
    <div class="m-dialog m-add-modal" v-bind:class="{ isShowDialog: isShow }">
        <div class="m-add-modal-content">
            <div class="m-modal-close" id="btnClose" @click="btnCloseOnClick">
                <i class="fas fa-times"></i>
            </div>
            <div class="m-add-modal-header">
                <div class="m-modal-title">
                    {{ this.language.TITLE.FORM_ADD }}
                </div>
            </div>
            <div class="m-add-modal-body">
                <div class="m-add-modal-avatar">
                    <div class="avatar-img"></div>
                    <div class="avatar-info">
                        {{ this.language.TITLE.AVATAR_INFO }}
                    </div>
                </div>
                <div class="m-add-modal-info">
                    <div class="info-title">
                        {{ this.language.TITLE.GENERAL_INFO }}
                    </div>
                    <div class="general-info">
                        <div class="info-item">
                            <p>Mã nhân viên(*)</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                ref="txtEmployeeCode"
                                v-model="employee.EmployeeCode"
                                @blur="v$.employee.EmployeeCode.$touch()"
                                placeholder="Nhập mã nhân viên"
                                :class="{
                                    'm-input-error':
                                        v$.employee.EmployeeCode.$error,
                                }"
                                required
                            />
                        </div>
                        <div class="info-item">
                            <p>Họ và tên</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                id="txtFullName"
                                v-model="employee.FullName"
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>
                        <div class="info-item">
                            <p>Ngày sinh</p>
                            <input
                                type="date"
                                class="m-input m-input-date m-modal-input"
                                id="txtDateOfBirth"
                                v-model="employee.DateOfBirth"
                            />
                        </div>
                        <div class="info-item">
                            <p>Giới tính</p>
                            <MISASelect
                                v-model="employee.Gender"
                                :options="genderList"
                                display-prop="Name"
                                value-prop="Value"
                                find-all="true"
                            ></MISASelect>
                        </div>
                        <div class="info-item">
                            <p>Số CMTND/Căn cước (*)</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                v-model="employee.IdentityNumber"
                                @blur="v$.employee.IdentityNumber.$touch()"
                                :class="{
                                    'm-input-error':
                                        v$.employee.IdentityNumber.$error,
                                }"
                                placeholder="Nhập mã CMTND/CCCD"
                                required
                            />
                        </div>
                        <div class="info-item">
                            <p>Ngày cấp</p>
                            <input
                                type="date"
                                class="m-input m-modal-input"
                                placeholder="Nhập ngày cấp"
                                v-model="employee.IdentityDate"
                            />
                        </div>
                        <div class="info-item">
                            <p>Nơi cấp</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                placeholder="Nhập nơi cấp"
                                v-model="employee.IdentityPlace"
                            />
                        </div>
                        <div class="info-item">
                            <p>Email (*)</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                id="txtEmail"
                                :class="{
                                    'm-input-error': v$.employee.Email.$error,
                                }"
                                @blur="v$.employee.Email.$touch()"
                                v-model="employee.Email"
                                placeholder="Nhập Email"
                                required
                            />
                        </div>
                        <div class="info-item">
                            <p>Số điện thoại (*)</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                id="txtPhoneNumber"
                                v-model="employee.PhoneNumber"
                                :class="{
                                    'm-input-error':
                                        v$.employee.PhoneNumber.$error,
                                }"
                                @blur="v$.employee.PhoneNumber.$touch()"
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                    </div>
                    <div class="info-title">
                        {{ this.language.TITLE.WORK_INFO }}
                    </div>
                    <div class="work-info">
                        <div class="info-item">
                            <p>Vị trí</p>
                            <MISASelect
                                v-model="employee.PositionId"
                                :options="positionList"
                                display-prop="PositionName"
                                value-prop="PositionId"
                                find-all="true"
                            ></MISASelect>
                        </div>
                        <div class="info-item">
                            <p>Phòng ban</p>
                            <MISASelect
                                v-model="employee.DepartmentId"
                                :options="departmentList"
                                display-prop="DepartmentName"
                                value-prop="DepartmentId"
                                find-all="true"
                            ></MISASelect>
                        </div>
                        <div class="info-item">
                            <p>Mã số thuế cá nhân</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                placeholder="Nhập mã số thuế cá nhân"
                                v-model="employee.TaxCode"
                            />
                        </div>
                        <div class="info-item">
                            <p>Mức lương cơ bản</p>
                            <input
                                type="text"
                                id="txtSalary"
                                v-model="employee.Salary"
                                style="direction: rtl"
                                class="m-input m-modal-input"
                                placeholder="Nhập mức lương cơ bản"
                            />
                        </div>
                        <div class="info-item">
                            <p>Ngày gia nhập công ty</p>
                            <input
                                type="date"
                                class="m-input m-modal-input"
                                v-model="employee.JoinDate"
                            />
                        </div>
                        <div class="info-item">
                            <p>Tình trạng công việc</p>
                            <MISASelect
                                v-model="employee.WorkStatus"
                                :options="workStatusList"
                                display-prop="Name"
                                value-prop="Value"
                                find-all="true"
                            ></MISASelect>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-add-modal-footer">
                <div class="m-modal-footer-left">
                    <button
                        class="m-btn m-btn-modal m-btn-detele"
                        id="btnDelete"
                        @click="btnDeleteOnClick"
                        :class="{
                            isHideButton: formDetailMode == Enum.FORM_MODE.ADD,
                        }"
                    >
                        Xóa
                    </button>
                </div>
                <div class="m-modal-footer-right">
                    <button
                        class="m-btn m-btn-modal m-btn-cancel"
                        id="btnCancel"
                        @click="btnCloseOnClick"
                    >
                        Hủy
                    </button>
                    <button
                        class="m-btn m-btn-modal m-btn-save"
                        id="btnSave"
                        @click="btnSaveOnClick"
                    >
                        <i class="far fa-save"></i>Lưu
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ThePopup
        :dialogType="dialogType"
        v-if="dialogType != null"
        :message="message"
        @confirmDelete="deleteEmployee"
        @closePopup="closePopup"
    />
</template>
<script>
import ThePopup from "@/components/layout/ThePopup.vue";
import TheToast from "@/components/layout/TheToast.vue";
import MISASelect from "@/components/base/MISASelect.vue";
import axios from "axios";
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Enum from "@/scripts/enum";
import Resource from "@/scripts/resource";
import CommonJS from "@/scripts/common";
import Default from "@/scripts/default";
export default {
    setup: () => ({ v$: useVuelidate() }),
    components: { ThePopup, TheToast, MISASelect },
    props: {
        //Những property nhận được từ component cha
        isShow: {
            type: Boolean,
            default: false,
        },
        employeeSelected: {
            type: Object,
            default: {},
        },
        employeeSelectedId: {
            type: String,
            default: "",
        },
        formDetailMode: {
            type: Number,
            default: 1,
        },
        positionList: {
            type: Array,
            default: [],
        },
        departmentList: {
            type: Array,
            default: [],
        },
    },
    emits: ["isShowDialog", "loadData", "update:show-toast"],
    created() {
        //format dữ liệu trước khi bind lên form
        if (this.employee.Salary != null) {
            this.employee.Salary = this.common.formatData(
                this.employee.Salary,
                Enum.FORMAT_TYPE.MONEY
            );
        }
    },
    mounted() {
        if (this.isShow) {
            this.$nextTick(() => {
                this.$refs.txtEmployeeCode.focus();
            });
        }
    },
    beforeUpdate() {},
    updated() {
        // this.v$.$touch();
    },
    validations() {
        return {
            employee: {
                EmployeeCode: {
                    required,
                },
                FullName: {
                    required,
                },
                Email: {
                    required,
                    email,
                },
                PhoneNumber: {
                    required,
                },
                IdentityNumber: {
                    required,
                },
            },
        };
    },
    methods: {
        //Những hàm xử lý sự kiện
        /**
         * Hàm xử lý sự kiện khi click vào nút Lưu trên dialog
         * CreatedBy: PTSON (08/01/2023)
         */
        submitForm() {
            //Format lại dữ liệu trước khi gửi lên server
            if (this.employee.Salary != null) {
                this.employee.Salary = this.common.unformatInputMoney(
                    this.employee.Salary
                );
            }
            //Kiểm tra dữ liệu hợp lệ
            //Vuelidate for all input
            this.v$.$touch();

            if (this.v$.$errors.length > 0) {
                this.$emit(
                    "update:show-toast",
                    this.v$.$errors[0].$message,
                    Enum.TOAST_TYPE.WARNING
                );
            } else {
                this.saveData();
            }
            console.log(this.v$.$errors);
        },
        /**
         * Hàm xử lý sự kiện khi click vào nút Hủy/Close trên dialog
         * CreatedBy: PTSON (08/01/2023)
         */
        btnCloseOnClick() {
            this.$emit("isShowDialog", false);
        },
        //1. Validate dữ liệu
        //2. Build object employee
        //2. Gọi API lưu dữ liệu
        // Thêm mới thành công, hiển thị toast msg

        /**
         * Hàm xử lý sự kiện khi click vào nút Lưu
         * CreatedBy: PTSON (08/14/2023)
         */
        btnSaveOnClick() {
            this.submitForm();
        },
        /**
         * Hàm xử lý sự kiện khi click vào nút xóa
         * CreatedBy: PTSON (08/14/2023)
         */
        btnDeleteOnClick() {
            this.showPopup(
                this.language.DELETE.DELETE_CONFIRM,
                Enum.POPUP_TYPE.DELETE
            );
        },
        /**
         * Hiển thị popup kèm theo message
         * @param {String} message
         * @param {Enum} type
         * CreatedBy: PTSON (08/14/2023)
         */
        showPopup(message, type) {
            this.dialogType = type;
            this.message = message;
        },
        /**
         * Hàm xử lý sự kiện khi click vào nút close popup
         * CreatedBy: PTSON (08/14/2023)
         */
        closePopup() {
            this.dialogType = null;
        },
        /**
         * Hàm xử lý khi lưu thông tin nhân viên
         * Để xác định là thêm mới hay cập nhật
         * CreatedBy: PTSON (08/14/2023)
         */
        saveData() {
            //Gọi API lưu dữ liệu
            if (this.formDetailMode == Enum.FORM_MODE.ADD) {
                this.addNewEmployee();
            } else {
                this.updateEmployee();
            }
        },
        /**
         * Hàm gọi API để lấy về danh sách phòng ban
         * CreatedBy: PTSON (08/14/2023)
         */
        getDepartment() {
            axios
                .get("https://localhost:7159/api/v1/Department")
                .then((res) => {
                    this.departments = res.data;
                })
                .catch((err) => {
                    let response = err.response;
                    var userMsg = err.response.data["userMsg"];
                    switch (response.status) {
                        case 400:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        case 500:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        default:
                            break;
                    }
                    console.log(userMsg);
                });
        },
        /**
         * Hàm gọi API để lấy về danh sách vị trí
         * CreatedBy: PTSON (08/14/2023)
         */
        getPosition() {
            axios
                .get("https://localhost:7159/api/Position")
                .then((res) => {
                    this.positions = res.data;
                })
                .catch((err) => {
                    let response = err.response;
                    var userMsg = err.response.data["userMsg"];
                    switch (response.status) {
                        case 400:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        case 500:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        default:
                            break;
                    }
                    console.log(userMsg);
                });
        },
        /**
         * Hàm gọi API để thực hiện thêm mới nhân viên
         * CreatedBy: PTSON (08/02/2023)
         */
        addNewEmployee() {
            axios
                .post(
                    "https://localhost:7159/api/v1/Employee",
                    JSON.stringify(this.employee),
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Data-Type": "json",
                        },
                    }
                )
                .then((res) => {
                    //Thành công, hiển thị toast msg
                    this.$emit(
                        "update:show-toast",
                        Resource.VI.SUCCESS.SUCCESS_SAVE,
                        Enum.TOAST_TYPE.SUCCESS
                    );
                    console.log(res);
                    this.$emit("isShowDialog", false);
                    this.$emit("loadData");
                })
                .catch((err) => {
                    let response = err.response;
                    var userMsg = err.response.data["userMsg"];
                    switch (response.status) {
                        case 400:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        case 500:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        default:
                            break;
                    }
                    console.log(userMsg);
                });
        },
        /**
         * Hàm gọi API để thực hiện cập nhật nhân viên
         * CreatedBy: PTSON (08/02/2023)
         */
        updateEmployee() {
            axios
                .put(
                    `https://localhost:7159/api/v1/Employee/${this.employeeSelectedId}`,
                    JSON.stringify(this.employee),
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Data-Type": "json",
                        },
                    }
                )
                .then((res) => {
                    console.log(
                        "🚀 ~ file: EmployeeDetail.vue:408 ~ .then ~ res:",
                        res
                    );
                    //Thành công, hiển thị toast msg
                    this.$emit(
                        "update:show-toast",
                        Resource.VI.SUCCESS.SUCCESS_SAVE,
                        Enum.TOAST_TYPE.SUCCESS
                    );
                    this.$emit("isShowDialog", false);
                    this.$emit("loadData");
                })
                .catch((err) => {
                    let response = err.response;
                    var userMsg = err.response.data["userMsg"];
                    switch (response.status) {
                        case 400:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        case 500:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        default:
                            break;
                    }
                    console.log(userMsg);
                });
        },
        /**
         * Hàm gọi API để thực hiện xóa nhân viên
         * CreatedBy: PTSON (08/02/2023)
         */
        deleteEmployee() {
            axios
                .delete(
                    `https://localhost:7159/api/v1/Employee/${this.employeeSelectedId}`
                )
                .then((res) => {
                    //Thành công, hiển thị toast msg
                    this.$emit(
                        "update:show-toast",
                        Resource.VI.SUCCESS.SUCCESS_DELETE,
                        Enum.TOAST_TYPE.SUCCESS
                    );
                    console.log(res);
                    this.closeDialog();
                    this.$emit("isShowDialog", false);
                    this.$emit("loadData");
                })
                .catch((err) => {
                    let response = err.response;
                    var userMsg = err.response.data["userMsg"];
                    switch (response.status) {
                        case 400:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        case 500:
                            this.$emit(
                                "update:show-toast",
                                userMsg,
                                Enum.TOAST_TYPE.ERROR
                            );
                            break;
                        default:
                            break;
                    }
                    console.log(userMsg);
                });
        },
    },
    watch: {
        //Những property theo dõi sự thay đổi
        isShow: function (val) {
            if (val) {
                this.$nextTick(() => {
                    this.$refs.txtEmployeeCode.focus();
                });
            }
        },
        employeeSelected: function (val) {
            this.employee = val;
        },
        employeeSelectedId: function (val) {
            if (val) {
                //Gọi API lấy dữ liệu nhân viên theo id
                axios
                    .get(
                        `https://localhost:7159/api/v1/Employee/${this.employeeSelectedId}`
                    )
                    .then((res) => {
                        this.employee = res.data;
                    })
                    .catch((err) => {
                        //Nếu có lỗi, gán employee = {} và gọi api để lấy mã nhân viên mới
                        console.log(err);
                        this.employee = {};
                        axios
                            .get(
                                "https://localhost:7159/api/v1/Employee/NewEmployeeCode"
                            )
                            .then((res) => {
                                this.employee.EmployeeCode = res.data;
                            })
                            .catch((err) => {
                                let response = err.response;
                                var userMsg = err.response.data["userMsg"];
                                switch (response.status) {
                                    case 400:
                                        this.$emit(
                                            "update:show-toast",
                                            userMsg,
                                            Enum.TOAST_TYPE.ERROR
                                        );
                                        break;
                                    case 500:
                                        this.$emit(
                                            "update:show-toast",
                                            userMsg,
                                            Enum.TOAST_TYPE.ERROR
                                        );
                                        break;
                                    default:
                                        break;
                                }
                                console.log(userMsg);
                            });
                    });
            }
        },
    },
    computed: {},
    data() {
        return {
            language: Resource[CommonJS.Language],
            common: CommonJS,
            employee: {
                ...this.employeeSelected,
            },
            genderList: [...Default.Gender],
            workStatusList: [...Default.WorkStatus],
            dialogType: null,
            message: "",
            Enum,
            Resource,
        };
    },
};
</script>
<style>
@import url("../../style/layout/add.css");
</style>
