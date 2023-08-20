<template>
    <button :class="classValue" @click="clickFunction">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "MISAButton",
    props: ["text", "classValue", "clickFunction"],
};
</script>
