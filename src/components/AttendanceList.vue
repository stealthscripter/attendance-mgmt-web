<template>
    <h3>Attendance List</h3>
    <div v-for="cls in classStudents.students" :key="cls.studentid">
        <p @click="toggleAttendance(cls.studentid)">{{ cls.name }}</p>
        <p>{{ cls.status }}</p>
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
    display: inline-block;
}

</style>