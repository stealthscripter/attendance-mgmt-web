<template>
    <div v-for="cls in classStudents.students" @click="toggleAttendance(cls.studentid)" :key="cls.studentid" class="attendance-list" :class="{'present' : cls.status}">
        <div class="name"><p>{{ cls.name }}</p></div>
        <div class="status"><p>{{ cls.status == true ? 'Present' : 'Absent' }}</p></div>
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
div{
    cursor: pointer;
    padding: 10px;
    width: fit-content;
    margin: 1rem auto;
}
.attendance-list{
    display: flex;
    color: black;
    justify-content: space-between;
    padding: 0;
    width: 30%;
    border: 1px solid red;
    border-radius: 1rem;
}
.attendance-list div{
    padding: 0;
    margin: 0;
}
p{
    margin: 0.5rem;
}
.present{
    border: 1px solid green;
}

</style>