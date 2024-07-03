<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <button @click="closeModal" class="close-btn"><span class="material-symbols-outlined">close</span></button>
            <!--Input div-->
            <div class="input-div">
                <input v-model="section" type="text" placeholder="Section">
                <input v-model="course" type="text" placeholder="Course">
            </div>
            <!--Button div-->
            <div class="btn-div">
                <button @click="closeModal" class="btn-cancle">Cancle</button> 
                <button @click="addClass" class="btn-add">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default{
        props: [],
        emits: ['close' , 'add'],
        setup(props,{emit}){

            const section = ref("")
            const course = ref("")
            
            const closeModal = () => {
                emit('close')
            }
            const addClass = () => {
                emit('add' , {section : section.value , course: course.value})
            }
            return {closeModal , section , course , addClass}
        }

    }
</script>



<style scoped>

    .close-btn{
        cursor: pointer;
        border: none;
        background: none;
        float: right;
    }
    .backdrop{
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

</style>