import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassView from '@/views/ClassView.vue'
import StudentView from '@/views/StudentView'
import Attendance from '@/views/Attendance.vue'
import AttendanceDisplay from '@/views/AttendanceDisplay.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/class',
    name: 'classView',
    component: ClassView
  },
  {
     path: '/class/:id',
     name: 'StudentView',
     component: StudentView,
     props: true
  },
  {
    path: '/attendance/:id',
    name: 'attendance',
    component: Attendance,
    props: true
  },
  {
    path: '/attend/:id',
    name: 'attend',
    component: AttendanceDisplay,
    props: true
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
