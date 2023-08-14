<template>
    <div class="page-content">
        <div class="m-page-header">
            <div class="m-page-title">Danh sách nhân viên</div>
            <button
                class="m-btn m-btn-icon m-btn-icon-add"
                id="btnAdd"
                @click="btnAddOnClick"
            >
                Thêm thành viên
            </button>
        </div>
        <div class="m-page-toolbar">
            <div class="m-page-toolbar-left">
                <div class="m-page-toolbar-item">
                    <input
                        type="text"
                        class="m-input m-input-icon m-icon-search m-icon-16"
                        placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
                        v-model="searchEmployee"
                    />
                </div>
                <div class="m-page-toolbar-item">
                    <select
                        name=""
                        id=""
                        class="m-select-box m-box-custom"
                        @change="filterDepartment($event.target.value)"
                    >
                        <option value="">Tất cả phòng ban</option>
                        <option value="14697e7f-2c2a-11ee-9c96-00d861883544">
                            Phòng nhân sự
                        </option>
                        <option value="1468ce1f-2c2a-11ee-9c96-00d861883544">
                            Phòng Hành Chính
                        </option>
                        <option value="1469aa1d-2c2a-11ee-9c96-00d861883544">
                            Phòng Công Nghệ Thông Tin
                        </option>
                        <option value="1469e5f4-2c2a-11ee-9c96-00d861883544">
                            Phòng Kế Toán
                        </option>
                    </select>
                    <div class="m-select-box-icon">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="m-page-toolbar-item">
                    <select
                        name=""
                        id=""
                        class="m-select-box m-box-custom"
                        @change="filterPosition($event.target.value)"
                    >
                        <option value="">Tất cả</option>
                        <option value="d770ef72-2c29-11ee-9c96-00d861883544">
                            Trưởng Phòng
                        </option>
                        <option value="b03276b9-2c29-11ee-9c96-00d861883544">
                            Nhân Viên
                        </option>
                        <option value="c1168093-2c29-11ee-9c96-00d861883544">
                            Trưởng Nhóm
                        </option>
                        <option value="d7716916-2c29-11ee-9c96-00d861883544">
                            Giám đốc
                        </option>
                    </select>
                    <div class="m-select-box-icon">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div class="m-page-toolbar-right">
                <div class="m-page-toolbar-item">
                    <button
                        class="m-btn-refresh"
                        id="btnRefresh"
                        @click="btnRefreshOnClick"
                    ></button>
                </div>
            </div>
        </div>
        <div class="m-page-grid">
            <table
                class="m-table"
                id="tblEmployee"
                keyId="EmployeeCode"
                aria-label=""
            >
                <thead>
                    <tr>
                        <th
                            class="text-align-left"
                            fieldName="EmployeeCode"
                            style="width: 40px"
                        >
                            Mã nhân viên
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="FullName"
                            style="width: 60px"
                        >
                            Họ và tên
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="Gender"
                            formatType="gender"
                            style="width: 10px"
                        >
                            Giới tính
                        </th>
                        <th
                            class="text-align-center"
                            fieldName="DateOfBirth"
                            formatType="ddmmyyyy"
                            style="width: 50px"
                        >
                            Ngày sinh
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="PhoneNumber"
                            style="width: 50px"
                        >
                            Điện thoại
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="Email"
                            style="width: 50px"
                        >
                            Email
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="PositionName"
                            style="width: 40px"
                        >
                            Chức vụ
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="DepartmentName"
                            style="width: 50px"
                        >
                            Phòng ban
                        </th>
                        <th
                            class="text-align-right"
                            fieldName="Salary"
                            formatType="money"
                            style="width: 50px"
                        >
                            Mức lương cơ bản
                        </th>
                        <th
                            class="text-align-left"
                            fieldName="WorkStatus"
                            style="width: 50px"
                        >
                            Tình trạng công việc
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Dữ liệu lấy từ API -->
                    <!-- Truyền vào DOM thông qua jquery -->
                    <tr
                        v-for="employee in filterList"
                        :key="employee.EmployeeId"
                        @dblclick="rowOnDblClick(employee)"
                    >
                        <td class="text-align-left">
                            {{ employee.EmployeeCode }}
                        </td>
                        <td class="text-align-left">{{ employee.FullName }}</td>
                        <td class="text-align-center">
                            {{ formatGender(employee.Gender) }}
                        </td>
                        <td class="text-align-center">
                            {{ formatDate(employee.DateOfBirth) }}
                        </td>
                        <td class="text-align-left">
                            {{ employee.PhoneNumber }}
                        </td>
                        <td class="text-align-left">{{ employee.Email }}</td>
                        <td class="text-align-left">
                            {{ employee.PositionName }}
                        </td>
                        <td class="text-align-left">
                            {{ employee.DepartmentName }}
                        </td>
                        <td class="text-align-right">
                            {{ formatSalary(employee.Salary) }}
                        </td>
                        <td class="text-align-left">
                            {{ formatWorkStatus(employee.WorkStatus) }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="m-paging">
                <div class="m-paging-left">Hiển thị 1-100 lao động</div>
                <div class="m-paging-center">
                    <button class="m-btn-first"></button>
                    <button class="m-btn-prev"></button>
                    <div class="m-page-number-group">
                        <button
                            class="m-page-number m-page-1 m-page-number-selected"
                        >
                            1
                        </button>
                        <button class="m-page-number m-page-2">2</button>
                        <button class="m-page-number m-page-3">3</button>
                    </div>
                    <button class="m-btn-next"></button>
                    <button class="m-btn-last"></button>
                </div>
                <div class="m-paging-right">
                    <select class="m-select-box m-box-custom">
                        <option value="10">10 nhân viên/trang</option>
                        <option value="20">20 nhân viên/trang</option>
                        <option value="50">50 nhân viên/trang</option>
                    </select>
                    <div class="m-select-box-icon">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <EmployeeDetail
        :employeeSelected="employeeSelected"
        :employeeSelectedId="employeeSelectedId"
        :isShow="isShowDialog"
        @isShowDialog="showDialogEmployeeDetail"
        :formDetailMode="formDetailMode"
        @childMethodCall="loadData"
    />
    <div class="m-loading" :class="{ isLoading: isLoading }">
        <div class="m-loading-icon"></div>
    </div>
</template>
<!-- v-bind: binding 1 chiều, thay đổi khi dữ liệu gốc thay đổi
    v-model: binding 2 chiều, thay đổi cả khi dữ liệu gốc hoặc dữ liệu bind thay đổi -->
<script>
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail.vue";
export default {
    name: "EmployeeList",
    components: {
        EmployeeDetail,
    },
    //Vòng đời của Vue component
    beforeCreate() {
        //"1. beforeCreate"
        //Không thể truy cập DOM/data ở đây'
        //console.log(this.name); //undefined
    },
    created() {
        //Có thể truy cập data, event, method ở đây
        // không thể truy cập DOM
        // Chỉ chạy 1 lần, dùng để load dữ liệu
        //Gọi API để lấy dữ liệu - Dùng axios (giống ajax)
        this.isLoading = true;
        this.loadData();
        this.formatDate();
    },
    beforeMount() {
        //Có thể truy cập data, event, method ở đây
        //Chưa có DOM
        //Chỉ chạy 1 lần
    },
    mounted() {
        //Có thể truy cập DOM/data ở đây
        //console.log(this.name); //Thanh Son
    },
    beforeUpdate() {
        //thay đổi style -> update dữ liệu -> render lại DOM
        //*Nên dùng để update dữ liệu vào DOM */
    },
    updated() {
        //update dữ liệu -> thay đổi state -> render lại DOM
        //*Cũng có thể dùng để update dữ liệu vào DOM */
    },
    beforeUnmount() {
        //Chưa bị hủy
    },
    unmounted() {
        //Đã bị hủy, không thể truy cập data, event, method ở đây
        //Ít khi dùng
    },
    methods: {
        btnAddOnClick() {
            this.showDialogEmployeeDetail(true);
            this.employeeSelected = {};
            this.employeeSelectedId = null;
            this.formDetailMode = 1;
        },
        rowOnDblClick(employee) {
            this.employeeSelected = employee;
            this.employeeSelectedId = employee.EmployeeId;
            this.showDialogEmployeeDetail(true);
            this.formDetailMode = 2;
        },
        btnRefreshOnClick() {
            this.loadData();
        },
        //Hiển thị dialog chi tiết nhân viên
        showDialogEmployeeDetail(isShow) {
            this.isShowDialog = isShow;
        },
        formatDate(value) {
            //value != null && value != undefined && value != ""
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
        formatSalary(value) {
            try {
                if (value) {
                    value = new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(value);
                }
                return value;
            } catch (error) {
                console.log(error);
            }
        },
        formatGender(value) {
            try {
                switch (value) {
                    case 0:
                        value = "Nam";
                        break;
                    case 1:
                        value = "Nữ";
                        break;
                    case 2:
                        value = "Khác";
                        break;
                    default:
                        break;
                }
                return value;
            } catch (error) {
                console.log(error);
            }
        },
        formatWorkStatus(value) {
            try {
                switch (value) {
                    case 0:
                        value = "Đang làm việc";
                        break;
                    case 1:
                        value = "Đã nghỉ việc";
                        break;
                    case 2:
                        value = "Đang thử việc";
                        break;
                    case 3:
                        value = "Đã nghỉ hưu";
                        break;
                    default:
                        break;
                }
                return value;
            } catch (error) {
                console.log(error);
            }
        },
        loadData() {
            this.isLoading = true;
            axios
                .get("https://localhost:7159/api/v1/Employee")
                .then((res) => {
                    this.employeeList = res.data;
                    this.isLoading = false;
                })
                .catch((err) => {
                    this.isLoading = false;
                    alert("Không thể lấy dữ liệu từ server");
                    console.log(err);
                });
        },
        /**
         * Lọc dữ liệu theo tên phòng ban
         * @param {String} value
         * CreatedBy: PTSON (08/14/2023)
         */
        filterDepartment(value) {
            this.searchDepartment = value;
        },
        /**
         * Lọc dữ liệu theo tên chức vụ
         * @param {String} value
         * CreatedBy: PTSON (08/14/2023)
         */
        filterPosition(value) {
            this.searchPosition = value;
        },
    },
    watch: {},
    computed: {
        filterList() {
            let key = this.searchEmployee.toLowerCase();

            return this.employeeList.filter(
                (employee) =>
                    employee.FullName.toLowerCase().includes(key) &&
                    employee.DepartmentId.includes(this.searchDepartment) &&
                    employee.PositionId.includes(this.searchPosition) ||
                    employee.EmployeeCode.toLowerCase().includes(key) &&
                    employee.DepartmentId.includes(this.searchDepartment) &&
                    employee.PositionId.includes(this.searchPosition) ||
                    employee.PhoneNumber.toLowerCase().includes(key) &&
                    employee.DepartmentId.includes(this.searchDepartment) &&
                    employee.PositionId.includes(this.searchPosition)
            );
        },
    },
    data() {
        return {
            searchEmployee: "",
            searchDepartment: "",
            searchPosition: "",
            employeeList: [],
            isShowDialog: false,
            employeeSelectedId: null,
            employeeSelected: {},
            isLoading: false,
            formDetailMode: 0,
        };
    },
};
</script>
<style>
@import url("../../style//layout/content.css");
</style>
