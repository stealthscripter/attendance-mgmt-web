<template>
    <h3>Attendance List</h3>
    <div v-for="cls in classStudents" :key="cls.studentid">
        <p @click="toggleAttendance(cls)">{{ cls.name }}</p>
    </div>
</template>

<script>
    import DatePick from '@/components/DatePick.vue';
    export default {
        components: {DatePick},
        props: ['classStudents'],
        emits: ['toggleStatus'],
        setup(props, {emit}){
            const toggleAttendance = (cls) => {
                emit('toggleStatus' , cls)
            }
            return {toggleAttendance}
        }
    }
</script>

<style scoped>
p{
    cursor: pointer;
    border: 1px solid rebeccapurple;
}

</style>