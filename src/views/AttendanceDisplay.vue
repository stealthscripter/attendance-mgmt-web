<template>
  <DatePick @update-date="dateHandler"/>
    <div>
      <button @click="view">View Attendance for {{ myDate }}</button>
      <div v-if="showAttendance">
          <DisplayList :dateFiltered="dateFiltered"/>
          <!-- <div v-for="attendance in dateFiltered">
            <h3>Attendance Date {{ attendance.date }}</h3>
            <p v-for="student in attendance.students">{{student.name }} &nbsp; {{ student.status ? "present" : "Absent"}}</p>
          </div> -->
      </div>
      <p v-else>There is No Attendance</p>
    </div>
  </template>
  
  <script>
  import DisplayList from '@/components/DisplayList.vue'
  import DatePick from '@/components/DatePick.vue';
  import { onMounted, ref, computed } from 'vue';
  
  export default {
    props: ['id'],
    components: {DatePick , DisplayList},
    setup(props) {
      const attendanceList = ref([]);
      const showAttendance = ref(false);
      const myDate = ref("")
      
      const dateHandler = (date) => {
          myDate.value = date
      }

      const fetchData = () => {
        fetch("http://localhost:5000/attendance")
          .then(res => res.json())
          .then(data => {
            attendanceList.value = data;
          })
          .catch(err => console.error(err));
      };
  
      const dateFiltered = computed(() => {
        return attendanceList.value.filter(attendance => attendance.date === myDate.value && attendance.classid == props.id);
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
        dateHandler,
        myDate
      };
    },
  };
  </script>
  