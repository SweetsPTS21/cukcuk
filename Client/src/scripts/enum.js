const Enum = {
    // Enum for the different types of messages
    LANGUAGE: {
        ENGLISH: 0,
        VIETNAMESE: 1,
    },
    FORM_MODE: {
        VIEW: 0,
        ADD: 1,
        UPDATE: 2,
    },
    GENDER: {
        MALE: 0,
        FEMALE: 1,
        OTHER: 2,
    },
    POPUP_TYPE: {
        DELETE: 0,
        WARNING: 1,
        INFO: 2,
    },
    TOAST_TYPE: {
        SUCCESS: 0,
        ERROR: 1,
        WARNING: 2,
        INFO: 3,
    },
    WORK_STATUS: {
        WORKING: 0,
        QUIT: 1,
        INTERN: 2,
        RETIRED: 3,
    },
    PAGING: {
        PAGE_SIZE: [10, 20, 50, 100],
    },
    FORMAT_TYPE: {
        DATE: 0,
        MONEY: 1,
        GENDER: 2,
        WORK_STATUS: 3,
    },
};

export default Enum;
