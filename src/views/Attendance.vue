<template>
    <h1>Yes Attendance</h1>
    <DatePick @updateDate="dateHandler"/>
    <p>Raw Date {{ myDate }}</p>
    <!-- <div class="main" v-for="cls in classStudents" :key="cls.id">
        <p class="name" @click="toggleAttendance(cls)">{{ cls.name }}</p>
    </div> -->
    <AttendanceList @toggleStatus="toggleAttendance" :classStudents="classStudents"/>
    <button @click="saveHandler">Save</button>
    <router-link :to="{name: 'attend' , params: {id: id}}">
        <button @click="viewHandler">View Attendance</button>
    </router-link>
</template>

<script>
import AttendanceList from '@/components/AttendanceList.vue'
import DatePick from '@/components/DatePick.vue';
import { onMounted, ref , computed } from 'vue';

export default {
    components: {DatePick , AttendanceList},
    props: ['id'],
    setup(props){
        const attendanceList = ref([]);
        const myDate = ref(new Date());
        const finalData = ref({ date: myDate.value, students: [] });

        onMounted(() => {
            fetch("http://localhost:3000/students")
                .then(res => res.json())
                .then(data => attendanceList.value = data)
                .catch(err => console.log(err.message))
        });

        const classStudents = computed(() => {
            return attendanceList.value.filter(student => student.classid == props.id);
        });

        const dateHandler = data => {
            myDate.value = data;
            finalData.value = {
                date: myDate.value,
                students: classStudents.value.map(student => ({
                    name: student.name,
                    status: false,
                    studentid: student.id
                }))
            };
            console.log(finalData.value);
        };

        const viewHandler = () => {

        }
        const toggleAttendance = (stud) => {
            const studentIndex = finalData.value.students.findIndex(student => student.studentid === stud.id);
            if (studentIndex !== -1) {
                finalData.value.students[studentIndex].status = !finalData.value.students[studentIndex].status;
            } else {
                finalData.value.students.push({
                    name: stud.name,
                    status: true,
                    studentid: stud.id
                });
            }
            console.log(finalData.value);
        };

        const saveHandler = () => {
            fetch("http://localhost:5000/attendance", {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(finalData.value)
            })
            .then(response => response.json())
            .then(responseData => {
                console.log('Success:', responseData);
            })
            .catch(err => console.log(err.message));
        };

        return { classStudents, dateHandler, myDate, saveHandler ,finalData, toggleAttendance };
    }
}
</script>

<style scoped>
.main{
    margin: 0 auto;
}
.name{
    border: 1px solid red;
    cursor: pointer;
}
</style>
