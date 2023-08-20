const Enum = {
    // Enum for the different types of messages
    LANGUAGE: {
        ENGLISH: 0, //Tiếng Anh
        VIETNAMESE: 1, //Tiếng Việt
    },
    FORM_MODE: {
        VIEW: 0, //Mặc đinh
        ADD: 1, //Thêm mới
        UPDATE: 2, //Sửa
    },
    GENDER: {
        MALE: 1, //Nam
        FEMALE: 2, //Nữ
        OTHER: 3, //Khác
    },
    POPUP_TYPE: {
        DELETE: 0, //Xóa
        WARNING: 1, //Cảnh báo
        INFO: 2, //Thông tin
    },
    TOAST_TYPE: {
        SUCCESS: 0, //Thành công
        ERROR: 1, //Lỗi
        WARNING: 2, //Cảnh báo
        INFO: 3, //Thông tin
    },
    WORK_STATUS: {
        WORKING: 1, //Đang làm việc
        QUIT: 2, //Đã nghỉ việc
        INTERN: 3, //Đang thử việc
        RETIRED: 4, //Đã nghỉ hưu
    },
    PAGING: {
        PAGE_SIZE: [10, 20, 50, 100],
    },
    FORMAT_TYPE: {
        DATE: 0, //Định dạng ngày tháng
        MONEY: 1, //Định dạng tiền tệ
        GENDER: 2, //Định dạng giới tính
        WORK_STATUS: 3, //Định dạng tình trạng công việc
    },
    STATUS_CODE: {
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        INTERNAL_SERVER: 500,
    },
};

export default Enum;
