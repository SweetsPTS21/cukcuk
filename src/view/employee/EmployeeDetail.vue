<template>
    <div class="m-dialog m-add-modal" v-bind:class="{ isShowDialog: isShow }">
        <div class="m-add-modal-content">
            <div class="m-modal-close" id="btnClose" @click="btnCloseOnClick">
                <i class="fas fa-times"></i>
            </div>
            <div class="m-add-modal-header">
                <div class="m-modal-title">THÔNG TIN NHÂN VIÊN</div>
            </div>
            <div class="m-add-modal-body">
                <div class="m-add-modal-avatar">
                    <div class="avatar-img"></div>
                    <div class="avatar-info">
                        Vui lòng chọn ảnh có định dạng .jpg .jpeg .png .gif
                    </div>
                </div>
                <div class="m-add-modal-info">
                    <div class="info-title">A. THÔNG TIN CHUNG</div>
                    <div class="general-info">
                        <div class="info-item">
                            <p>Mã nhân viên(*)</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                id="txtEmployeeCode"
                                ref="txtEmployeeCode"
                                v-model="employee.EmployeeCode"
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
                            <select
                                value=""
                                class="m-select-box"
                                id="cbGender"
                                v-model="employee.Gender"
                            >
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                                <option value="2">Khác</option>
                            </select>
                        </div>
                        <div class="info-item">
                            <p>Số CMTND/Căn cước (*)</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                v-model="employee.IdentityNumber"
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
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                    </div>
                    <div class="info-title">B. THÔNG TIN CÔNG VIỆC</div>
                    <div class="work-info">
                        <div class="info-item">
                            <p>Vị trí</p>
                            <select
                                name=""
                                id="cbPositionName"
                                v-model="employee.PositionId"
                                class="m-select-box"
                            >
                                <option value="">Tất cả</option>
                                <option
                                    value="30d41e52-5e66-72bc-6c1c-b47866e0b131"
                                >
                                    Trưởng Phòng
                                </option>
                                <option
                                    value="589edf01-198a-4ff5-958e-fb52fd75a1d4"
                                >
                                    Nhân Viên
                                </option>
                                <option
                                    value="5bd71cda-209f-2ade-54d1-35c781481818"
                                >
                                    Trưởng Nhóm
                                </option>
                                <option
                                    value="548dce5f-5f29-4617-725d-e2ec561b0f41"
                                >
                                    Quản Trị Hệ Thống
                                </option>
                            </select>
                        </div>
                        <div class="info-item">
                            <p>Phòng ban</p>
                            <select
                                name=""
                                id="cbDepartmentName"
                                v-model="employee.DepartmentId"
                                class="m-select-box"
                            >
                                <option value="">Tất cả phòng ban</option>
                                <option
                                    value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7"
                                >
                                    Phòng nhân sự
                                </option>
                                <option
                                    value="45ac3d26-18f2-18a9-3031-644313fbb055"
                                >
                                    Phòng Hành Chính
                                </option>
                                <option
                                    value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c"
                                >
                                    Phòng Công Nghệ Thông Tin
                                </option>
                                <option
                                    value="7c4f14d8-66fb-14ae-198f-6354f958f4c0"
                                >
                                    Phòng Kế Toán
                                </option>
                            </select>
                        </div>
                        <div class="info-item">
                            <p>Mã số thuế cá nhân</p>
                            <input
                                type="text"
                                class="m-input m-modal-input"
                                placeholder="Nhập mã số thuế cá nhân"
                                v-model="employee.PersonalTaxCode"
                            />
                        </div>
                        <div class="info-item">
                            <p>Mức lương cơ bản</p>
                            <input
                                type="text"
                                id="txtSalary"
                                v-model="employee.Salary"
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
                            <select
                                name=""
                                id="cbWorkStatus"
                                v-model="employee.WorkStatus"
                                class="m-select-box"
                            >
                                <option value="0">Đang làm việc</option>
                                <option value="1">Đã nghỉ việc</option>
                                <option value="2">Đang thử việc</option>
                                <option value="3">Đã nghỉ hưu</option>
                            </select>
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
                        :class="{ isHideButton: formDetailMode == 1 }"
                    >
                        Xóa
                    </button>
                </div>
                <div class="m-modal-footer-right">
                    <button
                        class="m-btn m-btn-modal m-btn-cancel"
                        id="btnCancel"
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
        :isShowDelete="isDelete"
        :isShowWarning="isWarning"
        @confirmDelete="deleteEmployee"
        @isShowDialog="showDialogConfirmDelete"
    />
</template>
<script>
import ThePopup from "@/components/layout/ThePopup.vue";
import axios from "axios";
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
    mounted() {},
    beforeUpdate() {
        this.employee.DateOfBirth = this.formatDate(this.employee.DateOfBirth);
        this.employee.IdentityDate = this.formatDate(
            this.employee.IdentityDate
        );
        this.employee.JoinDate = this.formatDate(this.employee.JoinDate);

        if (this.isShow) {
            this.$nextTick(() => {
                this.$refs.txtEmployeeCode.focus();
            });
        }
    },
    updated() {
        this.v$.$touch();
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
    emits: ["isShowDialog", "childMethodCall"],
    methods: {
        //Những hàm xử lý sự kiện
        submitForm() {
            if (this.v$.$errors.length > 0) {
                for (const error of this.v$.$errors) {
                    alert(error.$message);
                }
            } else {
                this.saveData();
            }
            console.log(this.v$.$errors);
        },
        btnCloseOnClick() {
            this.$emit("isShowDialog", false);
        },
        //1. Validate dữ liệu
        //2. Build object employee
        //2. Gọi API lưu dữ liệu
        // Thêm mới thành công, hiển thị toast msg
        btnSaveOnClick() {
            this.submitForm();
        },
        btnDeleteOnClick() {
            this.isDelete = true;
        },
        showDialogConfirmDelete(value) {
            this.isDelete = value;
        },
        formatDate(value) {
            value = new Date(value);
            //Lấy ra ngày
            let day = value.getDate();
            day = day < 10 ? `0${day}` : day;
            //Lấy ra tháng + 1 vì tháng trong JS tính từ 0
            let month = value.getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            //Lấy ra năm
            let year = value.getFullYear();
            //Định dạng ngày tháng năm
            value = `${year}-${month}-${day}`;
            return value;
        },
        saveData() {
            //Gọi API lưu dữ liệu
            if (this.formDetailMode == 1) {
                this.addNewEmployee();
            } else {
                this.updateEmployee();
            }
        },
        addNewEmployee() {
            axios
                .post(
                    "https://cukcuk.manhnv.net/api/v1/Employees",
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
                    console.log(res);
                    this.$emit("isShowDialog", false);
                    this.$emit("childMethodCall");
                })
                .catch((err) => {
                    let userMsg = err.response.data["userMsg"];
                    console.log(userMsg);
                    alert(userMsg);
                });
        },
        updateEmployee() {
            axios
                .put(
                    `https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`,
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
                    console.log(res);
                    this.$emit("isShowDialog", false);
                    this.$emit("childMethodCall");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteEmployee() {
            axios
                .delete(
                    `https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`
                )
                .then((res) => {
                    //Thành công, hiển thị toast msg
                    console.log(res);
                    this.isDelete = false;
                    this.$emit("isShowDialog", false);
                    this.$emit("childMethodCall");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
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
    },
    watch: {
        //Những property theo dõi sự thay đổi
        employeeSelected: function (val) {
            this.employee = val;
        },
        employeeSelectedId: function (val) {
            if (val) {
                //Gọi API lấy dữ liệu nhân viên theo id
                axios
                    .get(
                        `https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`
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
                                "https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode"
                            )
                            .then((res) => {
                                this.employee.EmployeeCode = res.data;
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    });
            }
        },
    },
    data() {
        return {
            employee: {
                EmployeeCode: "",
                FullName: "",
                DateOfBirth: "",
                Gender: "",
                Email: "",
                PhoneNumber: "",
                PositionName: "",
                DepartmentName: "",
                IdentityNumber: "",
                IdentityDate: "",
                IdentityPlace: "",
                JoinDate: "",
                PersonalTaxCode: "",
            },
            v$: useVuelidate(),
            isDelete: false,
            isWarning: false,
        };
    },
    components: { ThePopup },
};
</script>
<style>
@import url("../../style/layout/add.css");
</style>
