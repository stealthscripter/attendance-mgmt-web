<template>
    <h1>Student</h1>
    <router-link :to="{name: 'attendance' , params: {id: id}}" >
        <button>Take Attendance</button>
    </router-link>
    <!-- <DatePick @updateDate="dateMeth"/> -->
    <!-- <h1>date {{ mydate }}</h1> -->
    <br>
    <div v-if="showModal">
        <StudentModal @close="toggleModal" @add="addStudent"/>
        <!-- <ClassModal @close="toggleModal" @add="addClass"/> -->
    </div>
    <button @click="toggleModal">Open</button>
    <StudentList :studentList="classStudents"/>
    <!-- <ClassList :classList="classList"/> -->
</template>

<script>
import DatePick from '@/components/DatePick.vue'
import StudentModal from '@/components/StudentModal.vue'
import StudentList from '@/components/StudentList.vue'
import { computed, onMounted,ref } from 'vue';

export default {
    components: { StudentModal , StudentList , DatePick},
    props: ['id'],
    setup(props) {
        const showModal = ref(false);
        const studentList = ref([]);
        const mydate = ref("")
        const id = ref(null)
        const dayAttendance = ref([])

        const toggleModal = () => {
            showModal.value = !showModal.value;
        };

        const dateMeth = (data) => {
            mydate.value = data
        }

        const addStudent = (data) => {
            showModal.value = !showModal.value;
            data.classid = props.id
            fetch("http://localhost:3000/students",{
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(newStudent => {
                studentList.value.push(newStudent);
                id.value = props.id
            })
            .catch(err => console.log(err.message));
        };

        onMounted (() => {
                fetch("http://localhost:3000/students")
                .then(res => res.json())
                .then(data => studentList.value = data)
                .catch(err => console.log(err.message))

                id.value = props.id
            })

            const classStudents = computed(() => {
                return studentList.value.filter(student => student.classid == props.id);
            });
        return { toggleModal, showModal, studentList, addStudent , classStudents , mydate , dateMeth , id};
    }
};
</script>

<style>

    button{
        margin: 20px;
    }
    
    .date-pick{
        margin: 20px;
    }
</style>
