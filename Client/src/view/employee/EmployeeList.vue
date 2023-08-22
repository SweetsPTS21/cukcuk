<template>
    <div class="page-content">
        <div class="m-page-header">
            <div class="m-page-title">Danh sách nhân viên</div>
            <MISAButton
                :text="this.language.BUTTON.ADD"
                classValue="m-btn m-btn-icon m-btn-icon-add m-btn-add"
                :clickFunction="btnAddOnClick"
            ></MISAButton>
        </div>
        <div class="m-page-toolbar">
            <div class="m-page-toolbar-left">
                <div class="m-page-toolbar-item">
                    <input
                        type="text"
                        class="m-input m-input-icon m-icon-search m-icon-16"
                        placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
                        v-model="filterObj.Search"
                        @input="handleSearchInput"
                    />
                </div>
                <div class="m-page-toolbar-item">
                    <MISASelect
                        v-model="filterObj.DepartmentId"
                        :options="departmentList"
                        display-prop="DepartmentName"
                        value-prop="DepartmentId"
                        find-all="true"
                    ></MISASelect>
                </div>
                <div class="m-page-toolbar-item">
                    <MISASelect
                        v-model="filterObj.PositionId"
                        :options="positionList"
                        display-prop="PositionName"
                        value-prop="PositionId"
                        find-all="true"
                    ></MISASelect>
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
                            style="width: 50px; overflow-wrap: break-word"
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
                    <tr
                        v-for="employee in employeeList"
                        :key="employee.EmployeeId"
                        @dblclick="rowOnDblClick(employee)"
                    >
                        <td class="text-align-left">
                            {{ employee.EmployeeCode }}
                        </td>
                        <td class="text-align-left">{{ employee.FullName }}</td>
                        <td class="text-align-center">
                            {{
                                formatData(
                                    employee.Gender,
                                    Enum.FORMAT_TYPE.GENDER
                                )
                            }}
                        </td>
                        <td class="text-align-center">
                            {{
                                formatData(
                                    employee.DateOfBirth,
                                    Enum.FORMAT_TYPE.DATE
                                )
                            }}
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
                            {{
                                formatData(
                                    employee.Salary,
                                    Enum.FORMAT_TYPE.MONEY
                                )
                            }}
                        </td>
                        <td class="text-align-left">
                            {{
                                formatData(
                                    employee.WorkStatus,
                                    Enum.FORMAT_TYPE.WORK_STATUS
                                )
                            }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="m-paging">
                <div class="m-paging-left">Hiển thị 1-10 nhân viên</div>
                <div class="m-paging-center">
                    <button class="m-btn-first"></button>
                    <button
                        class="m-btn-prev"
                        @click="pageOnClick(this.filterObj.Page - 1)"
                    ></button>
                    <div class="m-page-number-group">
                        <button
                            class="m-page-number m-page-1"
                            :class="{
                                'm-page-number-selected': filterObj.Page == 1,
                            }"
                            @click="pageOnClick(1)"
                        >
                            1
                        </button>
                        <button
                            class="m-page-number m-page-2"
                            :class="{
                                'm-page-number-selected': filterObj.Page == 2,
                            }"
                            @click="pageOnClick(2)"
                        >
                            2
                        </button>
                        <button
                            class="m-page-number m-page-3"
                            :class="{
                                'm-page-number-selected': filterObj.Page == 3,
                            }"
                            @click="pageOnClick(3)"
                        >
                            3
                        </button>
                    </div>
                    <button
                        class="m-btn-next"
                        @click="pageOnClick(this.filterObj.Page + 1)"
                    ></button>
                    <button class="m-btn-last"></button>
                </div>
                <div class="m-paging-right">
                    <MISASelect
                        v-model="filterObj.PageSize"
                        :options="pagingList"
                        display-prop="Name"
                        value-prop="Value"
                        find-all="false"
                    ></MISASelect>
                </div>
            </div>
        </div>
    </div>
    <EmployeeDetail
        v-if="isShowDialog"
        :departmentList="departmentList"
        :positionList="positionList"
        :employeeSelected="employeeSelected"
        :employeeSelectedId="employeeSelectedId"
        :isShow="isShowDialog"
        @isShowDialog="showDialogEmployeeDetail"
        :formDetailMode="formDetailMode"
        @loadData="loadData"
        @update:show-toast="showToast"
    />
    <TheToast
        :showToast="isShowToast"
        @closeToast="closeToast"
        :message="toastMessage"
        :messageType="toastType"
    ></TheToast>
    <div class="m-loading" :class="{ isLoading: isLoading }">
        <div class="m-loading-icon"></div>
    </div>
</template>
<!-- v-bind: binding 1 chiều, thay đổi khi dữ liệu gốc thay đổi
    v-model: binding 2 chiều, thay đổi cả khi dữ liệu gốc hoặc dữ liệu bind thay đổi -->
<script>
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail.vue";
import TheToast from "@/components/layout/TheToast.vue";
import MISASelect from "@/components/base/MISASelect.vue";
import MISAButton from "@/components/base/MISAButton.vue";
import Enum from "@/scripts/enum";
import Resource from "@/scripts/resource";
import Default from "@/scripts/default";
import CommonJS from "@/scripts/common";
export default {
    name: "EmployeeList",
    components: {
        EmployeeDetail,
        TheToast,
        MISASelect,
        MISAButton,
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
        //Get dữ liệu về phòng ban và vị trí
        this.getDepartment();
        this.getPosition();
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
        /**
         * Hàm xử lý khi click vào nút thêm mới
         * @returns
         * CreatedBy: PTSON (08/03/2023)
         */
        btnAddOnClick() {
            this.showDialogEmployeeDetail(true);
            this.employeeSelectedId = null;
            this.employeeSelected = this.employeeDefault;
            this.formDetailMode = Enum.FORM_MODE.ADD;
        },
        /**
         * Hàm xử lý khi double click vào 1 dòng trong bảng
         * @param {Employee} employee
         * CreatedBy: PTSON (08/03/2023)
         */
        rowOnDblClick(employee) {
            this.employeeSelected = employee;

            //Format lại ngày tháng
            this.employeeSelected.DateOfBirth = this.formatData(
                employee.DateOfBirth,
                Enum.FORMAT_TYPE.DATE
            );

            this.employeeSelected.IdentityDate = this.formatData(
                employee.IdentityDate,
                Enum.FORMAT_TYPE.DATE
            );

            this.employeeSelected.JoinDate = this.formatData(
                employee.JoinDate,
                Enum.FORMAT_TYPE.DATE
            );

            this.employeeSelectedId = employee.EmployeeId;
            this.showDialogEmployeeDetail(true);
            this.formDetailMode = Enum.FORM_MODE.UPDATE;
        },
        /**
         * Hàm xử lý khi nhập vào ô tìm kiếm
         * CreatedBy: PTSON (08/03/2023)
         */
        handleSearchInput() {
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(() => {
                //Quay về trang 1 trước khi tìm kiếm
                this.filterObj.Page = 1;
                this.filterData();
            }, this.delay);
        },
        /**
         * Hàm xử lý khi click vào nút refresh
         * CreatedBy: PTSON (08/03/2023)
         */
        btnRefreshOnClick() {
            this.loadData();
        },
        //Hiển thị dialog chi tiết nhân viên
        /**
         * Hiển thị dialog chi tiết nhân viên
         * @param {Boolean} isShow
         * CreatedBy: PTSON (08/14/2023)
         */
        showDialogEmployeeDetail(isShow) {
            this.isShowDialog = isShow;
        },
        /**
         * Định dạng dữ liệu theo kiểu
         * @param {String} value
         * @param {String} type
         * @returns {String}
         * CreatedBy: PTSON (08/14/2023)
         */
        formatData(value, type) {
            return CommonJS.formatData(value, type);
        },
        /**
         * Hàm gọi API để lấy về danh sách phòng ban
         * CreatedBy: PTSON (08/14/2023)
         */
        getDepartment() {
            axios
                .get("https://localhost:7159/api/v1/Department")
                .then((res) => {
                    this.departmentList = res.data;
                })
                .catch((err) => {
                    this.isLoading = false;
                    if (err.code === "ERR_NETWORK") {
                        this.showToast(
                            this.language.STATUS_CODE.INTERNAL_SERVER,
                            Enum.TOAST_TYPE.ERROR
                        );
                        return;
                    } else {
                        let response = err.response;
                        switch (response.status) {
                            case 400:
                                var userMsg = err.response.data["userMsg"];
                                this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                                break;
                            case 500:
                                var userMsg = err.response.data["userMsg"];
                                this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                                break;
                            default:
                                break;
                        }
                        console.log(userMsg);
                    }
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
                    this.positionList = res.data;
                })
                .catch((err) => {
                    this.isLoading = false;
                    if (err.code === "ERR_NETWORK") {
                        this.showToast(
                            this.language.STATUS_CODE.INTERNAL_SERVER,
                            Enum.TOAST_TYPE.ERROR
                        );
                        return;
                    } else {
                        let response = err.response;
                        switch (response.status) {
                            case 400:
                                var userMsg = err.response.data["userMsg"];
                                this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                                break;
                            case 500:
                                var userMsg = err.response.data["userMsg"];
                                this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                                break;
                            default:
                                break;
                        }
                        console.log(userMsg);
                    }
                });
        },
        /**
         * Lọc dữ liệu theo điều kiện
         * @returns
         * CreatedBy: PTSON (08/14/2023)
         */
        filterData() {
            this.isLoading = true;
            axios
                .post(
                    `https://localhost:7159/api/v1/Employee/filter`,
                    this.filterObj
                )
                .then((res) => {
                    this.employeeList = res.data;
                    this.isLoading = false;
                })
                .catch((err) => {
                    this.isLoading = false;
                    if (err.code === "ERR_NETWORK") {
                        this.showToast(
                            this.language.STATUS_CODE.INTERNAL_SERVER,
                            Enum.TOAST_TYPE.ERROR
                        );
                        return;
                    } else {
                        let response = err.response;
                        switch (response.status) {
                            case 400:
                                var userMsg = err.response.data["userMsg"];
                                this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                                break;
                            case 500:
                                var userMsg = err.response.data["userMsg"];
                                this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                                break;
                            default:
                                break;
                        }
                        console.log(userMsg);
                    }
                });
        },
        loadData() {
            this.isLoading = true;
            axios
                .get(
                    `https://localhost:7159/api/v1/Employee/page?pageSize=${this.filterObj.PageSize}&pageIndex=${this.filterObj.Page}`
                )
                .then((res) => {
                    this.employeeList = res.data;
                    this.isLoading = false;
                })
                .catch((err) => {
                    this.isLoading = false;
                    if (err.code === "ERR_NETWORK") {
                        this.showToast(
                            this.language.STATUS_CODE.INTERNAL_SERVER,
                            Enum.TOAST_TYPE.ERROR
                        );
                        console.log(err.message);
                        return;
                    }
                    let response = err.response;
                    switch (response.status) {
                        case 400:
                            var userMsg = err.response.data["userMsg"];
                            this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                            break;
                        case 500:
                            var userMsg = err.response.data["userMsg"];
                            this.showToast(userMsg, Enum.TOAST_TYPE.ERROR);
                            break;
                        default:
                            break;
                    }
                    console.log(userMsg);
                });
        },
        /**
         * Lấy dữ liệu phân trang
         * @returns {Array}
         * CreatedBy: PTSON (08/14/2023)
         */
        getPageingData() {
            let start = (this.filterObj.Page - 1) * this.filterObj.PageSize;
            let end = start + this.filterObj.PageSize;
            return this.employeeList.slice(start, end);
        },
        /**
         * Xử lý sự kiện khi click vào phân trang
         * @param {Number} Page
         * CreatedBy: PTSON (08/14/2023)
         */
        pageOnClick(page) {
            if (page < 1 || page > this.filterObj.TotalPage) return;
            this.filterObj.Page = page;
        },
        /**
         * Lọc dữ liệu theo tên phòng ban
         * @param {String} value
         * CreatedBy: PTSON (08/14/2023)
         */
        filterDepartment(value) {
            this.filterObj.DepartmentId = value;
        },
        /**
         * Lọc dữ liệu theo tên chức vụ
         * @param {String} value
         * CreatedBy: PTSON (08/14/2023)
         */
        filterPosition(value) {
            this.filterObj.PositionId = value;
        },
        /**
         * Show toast thông báo
         * @param {String} message
         * @param {String} messageType
         * CreatedBy: PTSON (08/14/2023)
         */
        showToast(message, messageType) {
            this.isShowToast = true;
            this.toastMessage = message;
            this.toastType = messageType;
        },
        /**
         * Ẩn toast thông báo
         * CreatedBy: PTSON (08/14/2023)
         */
        closeToast() {
            this.isShowToast = false;
        },
    },
    watch: {
        "filterObj.PageSize": function (oldValue, newValue) {
            this.filterData();
        },
        "filterObj.Page"() {
            this.filterData();
        },
        "filterObj.DepartmentId"() {
            this.filterObj.Page = 1;
            this.filterData();
        },
        "filterObj.PositionId"() {
            this.filterObj.Page = 1;
            this.filterData();
        },
    },
    computed: {},
    data() {
        return {
            language: Resource[CommonJS.Language],
            filterObj: {
                ...Default.Filter,
            },
            employeeList: [],
            departmentList: [],
            positionList: [],
            pagingList: [...Default.PAGING],
            isShowDialog: false,
            employeeSelectedId: null,
            employeeSelected: {},
            employeeDefault: {
                ...Default.Employee,
            },
            isLoading: false,
            formDetailMode: Enum.FORM_MODE.ADD,
            isShowToast: false,
            toastMessage: "",
            toastType: 0,

            typingTimer: null,
            delay: 1000,

            Enum,
            Resource,
        };
    },
};
</script>
<style>
@import url("../../style//layout/content.css");
</style>
