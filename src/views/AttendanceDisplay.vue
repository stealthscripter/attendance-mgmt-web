<template>
  <DatePick @update-date="dateHandler"/>
    <div>
          <DisplayList :dateFiltered="dateFiltered"/>
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
        view,
        dateHandler,
        myDate
      };
    },
  };
  </script>
  