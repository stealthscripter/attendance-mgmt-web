<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <h3>Add Class</h3>
            <!--Input div-->
            <div class="input-div">
                <input v-model="section" type="text" placeholder="Section">
                
                <input v-model="course" type="text" placeholder="Course">
                <div><p v-show="sectionValid">Please write section</p></div>
                <div><p v-show="courseValid">Please write course</p></div>
            </div>
            <!--Button div-->
            <div class="btn-div">
                <button @click="closeModal" class="btn-cancel">Cancel</button> 
                <button @click="addClass" class="btn-add">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: [],
    emits: ['close', 'add'],
    setup(props, { emit }) {
        const section = ref("");
        const course = ref("");
        const courseValid = ref(false);
        const sectionValid = ref(false);

        const closeModal = () => {
            emit('close');
        };

        const addClass = () => {
            sectionValid.value = !section.value.length;
            courseValid.value = !course.value.length;
            
            if (!sectionValid.value && !courseValid.value) {
                emit('add', { section: section.value, course: course.value });
            }
        };

        return { closeModal, section, course, addClass, sectionValid, courseValid };
    }
};
</script>

<style scoped>
.input-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.btn-div {
    padding: 1rem;
}
p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-top: 0.2rem;
    font-size: 12px;
    color: red;
}
.btn-div button {
    font-family: 'Open Sans';
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    padding: 5px 20px;
    margin: 0.5rem;
}
.btn-div button:hover {
    background: rgb(72, 67, 67);
    color: white;
}
.input-div input {
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
.close-btn {
    cursor: pointer;
    background: none;
    border: none;
    float: right;
}
.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal {
    text-align: center;
    width: 450px;
    padding: 5px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.modal h3 {
    font-weight: 600;
}
</style>
