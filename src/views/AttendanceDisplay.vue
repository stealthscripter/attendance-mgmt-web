<template>
    <div>
      <button @click="view">View Attendance for 2024-07-03</button>
      <ul v-if="showAttendance">
        <li v-for="attendance in dateFiltered" :key="attendance.id">
          <p>Date: {{ attendance.date }}</p>
          <ul>
            <li v-for="student in attendance.students" :key="student.studentid">
              {{ student.name }} - {{ student.status ? 'Present' : 'Absent' }}
            </li>
          </ul>
        </li>
      </ul>
      <p v-else>No attendance records found for 2024-07-03.</p>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, computed } from 'vue';
  
  export default {
    name: 'AttendanceView',
    setup() {
      const attendanceList = ref([]);
      const showAttendance = ref(false);
  
      const fetchData = () => {
        fetch("http://localhost:5000/attendance")
          .then(res => res.json())
          .then(data => {
            attendanceList.value = data;
          })
          .catch(err => console.error(err));
      };
  
      const dateFiltered = computed(() => {
        return attendanceList.value.filter(attendance => attendance.date === '2024-07-16');
      });
  
      const view = () => {
        showAttendance.value = true;
      };
  
      onMounted(() => {
        fetchData();
      });
  
      return {
        dateFiltered,
        showAttendance,
        view,
      };
    },
  };
  </script>
  