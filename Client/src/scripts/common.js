import Enum from "./enum";
import Resource from "./resource";

class CommonJS {
    static Language = Resource.VI.LANGUAGE;

    /**
     * Định dạng dữ liệu
     * @param {String} value Dữ liệu muốn định dạng
     * @param {String} dataType kiểu dữ liệu
     * @return {String} Dữ liệu đã được định dạng
     * Author PTSON (20/7/23)
     * */
    static formatData(value, formatType) {
        let language = Resource[CommonJS.Language];
        switch (formatType) {
            case Enum.FORMAT_TYPE.DATE:
                if (value != null) {
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
                }
                break;
            case Enum.FORMAT_TYPE.MONEY:
                if (value != null) {
                    value = new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(value);
                }
                break;
            case Enum.FORMAT_TYPE.GENDER:
                if (value != null) {
                    switch (value) {
                        case Enum.GENDER.MALE:
                            value = language.GENDER.MALE;
                            break;
                        case 1:
                            value = language.GENDER.FEMALE;
                            break;
                        default:
                            value = language.GENDER.OTHER;
                            break;
                    }
                }
                break;
            case Enum.FORMAT_TYPE.WORK_STATUS:
                if (value != null) {
                    switch (value) {
                        case Enum.WORK_STATUS.WORKING:
                            value = language.WORK_STATUS.WORKING;
                            break;
                        case Enum.WORK_STATUS.QUIT:
                            value = language.WORK_STATUS.QUIT;
                            break;
                        case Enum.WORK_STATUS.INTERN:
                            value = language.WORK_STATUS.INTERN;
                            break;
                        case Enum.WORK_STATUS.RETIRED:
                            value = language.WORK_STATUS.RETIRED;
                            break;
                        default:
                            break;
                    }
                }
                break;
            default:
                break;
        }
        if (value == null || value == undefined) {
            value = "";
        }
        return value;
    }

    /**
     * Định dạng dữ liệu về tiền trong form input
     * @param {String} value Dữ liệu muốn định dạng
     * @returns {String} Dữ liệu đã được định dạng
     * Author PTSON (20/7/23)
     **/
    static formatInputMoney(value) {
        if (value != null) {
            value = new Intl.NumberFormat("vi-VN").format(value);
        }
        return value;
    }

    /**
     * Hủy dữ liệu về tiền trong form input
     * @param {String} value Dữ liệu muốn định dạng
     * @returns {String} Dữ liệu đã được định dạng
     * Author PTSON (20/7/23)
     **/
    static unformatInputMoney(value) {
        if (value != null) {
            //Chỉ giữ lại số
            value = value.replace(/\D/g, "");
        }
        return value;
    }
}

export default CommonJS;
