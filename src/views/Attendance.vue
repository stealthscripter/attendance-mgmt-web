<template>
    <h3>Attendance Taker</h3>
    <p>Choose Attendance Date First !</p>
    <DatePick @updateDate="dateHandler"/>
    <p v-if="showAttendance">{{ myDate }}</p>
    <AttendanceList v-if="showAttendance" @toggleStatus="toggleAttendance" :classStudents="finalData"/>
    <button class="btn" @click="saveHandler">Save</button>
    <router-link :to="{name: 'attend' , params: {id: id}}">
        <button class="btn" @click="viewHandler">View Attendance</button>
    </router-link>
</template>

<script>
import AttendanceList from '@/components/AttendanceList.vue';
import DatePick from '@/components/DatePick.vue';
import { onMounted, ref, computed } from 'vue';

export default {
    components: { DatePick, AttendanceList },
    props: ['id'],
    setup(props) {
        const attendanceList = ref([]);
        const myDate = ref(new Date());
        const finalData = ref({ date: myDate.value, students: [] });
        const showAttendance = ref(false)

        onMounted(() => {
            fetch("http://localhost:3000/students")
                .then(res => res.json())
                .then(data => attendanceList.value = data)
                .catch(err => console.log(err.message));
        });

        const classStudents = computed(() => {
            return attendanceList.value.filter(student => student.classid == props.id);
        });

        const dateHandler = data => {
            showAttendance.value = true
            myDate.value = data;
            finalData.value = {
                date: myDate.value,
                classid: props.id,
                students: classStudents.value.map(student => ({
                    name: student.name,
                    status: false,
                    studentid: student.id,
                }))
            };
            console.log(finalData.value);
        };


        const toggleAttendance = (studentID) => {
            const studentIndex = finalData.value.students.findIndex(student => student.studentid === studentID);
            if (studentIndex !== -1) {
                finalData.value.students[studentIndex].status = !finalData.value.students[studentIndex].status;
            }
            console.log(finalData.value);
        }

        const checkDate = async (date, classid) => {
            const response = await fetch("http://localhost:5000/attendance");
            const data = await response.json();
            return data.some(record => 
                new Date(record.date).toDateString() === new Date(date).toDateString() && record.classid === classid
            );
        }

        const saveHandler = async () => {
            const dateExists = await checkDate(finalData.value.date, props.id);
            console.log('Date and ClassID exist:', dateExists);

            if (!dateExists) {
                fetch("http://localhost:5000/attendance", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(finalData.value)
                })
                .then(response => response.json())
                .then(responseData => {
                    console.log('Success:', responseData);
                })
                .catch(err => console.log(err.message));
            } else {
                console.log('Date and ClassID already exist. Attendance not saved.');
            }
        };

        return { classStudents, dateHandler, myDate, saveHandler, finalData, toggleAttendance ,showAttendance};
    }
}
</script>

<style scoped>
.main {
    margin: 0 auto;
}
.name {
    border: 1px solid red;
    cursor: pointer;
}
</style>
