<template>
    <div :class="{present: status}" @click="attendToggle">
        <p>{{ students.name }}</p>
        <p>{{ students.id }}</p>
        <p>{{ students.classid }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default{
        emits: ['attendToggle'],
        props: ['students'],
        setup(props ,{emits}){
            const status = ref(false)
            const attendToggle = () => {
                status.value = !status.value
                props.students.status = status.value
                console.log(props.students)
            }
            return {status , attendToggle}
        }
    }
</script>

<style scoped>
    div{
        cursor: pointer;
        padding: 10px;
        margin: 0 auto;
        width: fit-content;
        border: 1px solid black;
    }
    .present {
        border: 2px solid green;
    }
    .absent {
        border: 2px solid red;
    }

</style>