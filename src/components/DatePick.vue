<template>
        <p>Choose Attendance Day</p>
        <input v-model="date" @input="updateDate" type="date" name="" id="">
</template>

<script>
    import { ref } from 'vue';
    export default{
        emits: ['updateDate'],
        setup(props , {emit}){
            const date = ref("")

            const updateDate = () => {
                emit('updateDate', date.value)
            }
            return {date , updateDate}
        }
    }

</script>

<style>

</style>