<template>
    <div
        class="select-item"
        @click="toggleSelect"
        :class="{ active: isActive }"
    >
        <div class="select-btn">
            <span>{{ this.selectedValue }}</span>
            <div class="m-select-box-icon">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div class="content">
            <ul class="options">
                <li v-if="findAll" @click="$emit('update:modelValue', '')">
                    Tất cả
                </li>
                <li
                    v-for="option in options"
                    :value="option[valueProp]"
                    :class="{ selected: option[valueProp] == modelValue }"
                    @click="$emit('update:modelValue', option[valueProp])"
                >
                    {{ option[displayProp] }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.bindData();
    },
    props: ["modelValue", "options", "displayProp", "valueProp", "findAll"],
    emits: ["update:modelValue"],
    watch: {
        modelValue: function (val) {
            this.bindData();
            //Nếu là số thì chuyển sang kiểu số
            if (typeof val === "string" && val != "" && !isNaN(val)) {
                this.$emit("update:modelValue", Number(val));
            }
        },
    },
    methods: {
        /**
         * Hàm xử lý khi click vào combobox
         * CreatedBy: PTSON (08/03/2023)
         */
        toggleSelect() {
            this.isActive = !this.isActive;
        },
        /**
         * Hàm bind dữ liệu cho combobox
         * CreatedBy: PTSON (08/19/2023)
         */
        bindData() {
            let value = this.options.find(
                (item) => item[this.valueProp] == this.modelValue
            );
            if (value) {
                this.selectedValue = value[this.displayProp];
            }
            else {
                this.selectedValue = "Tất cả";
            }
        },
    },
    data() {
        return {
            isActive: false,
            selectedValue: "Tất cả",
        };
    },
};
</script>
