<template>
    <div v-for="attendance in dateFiltered" :key="attendance.date">
        <h4>Attendance Date {{ attendance.date }}</h4>
        <p v-for="student in attendance.students" :key="student.id">{{ student.name }} &nbsp; {{ student.status ? "present" : "Absent" }}</p>
    </div>
</template>

<script>
    import SingleDisplayList from '@/components/SingleDisplayList.vue'
    export default {
        components: {SingleDisplayList},
        props: ['dateFiltered'],
        setup(){
            
        }
    }
</script>

<style>

</style>