<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <!-- <button @click="closeModal" class="close-btn"><span class="material-symbols-outlined">close</span></button> -->
            <h3>Add Class</h3>
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

    .input-div{
        display: flex;
    }
    .btn-div{
        padding: 1rem;
    }
    .btn-div button{
        font-family: 'Open Sans';
        font-size: 1rem;
        cursor: pointer;
        border: none;
        border-radius: 30px;
        padding : 5px 20px;
        margin: 0.5rem;
    }
    .btn-div button:hover{
        background: rgb(72, 67, 67);
        color: white;
    }
    .input-div input{
        text-align: center;
        border: none;
        border-bottom: 1px solid black;
        font-size: 1rem;
        font-family: 'Open Sans';
        outline: none;
        padding: 3px 0;
        margin: 0 auto;
        display: block;
    }

    .close-btn{
        cursor: pointer;
        background: none;
        border: none;
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
        width: 450px;
        padding: 5px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .modal h3{
        font-weight: 600;
    }

</style>