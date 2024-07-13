<template>
<section class="sec-class">
    <div class="header">
        <p>Class Management</p>
    </div>
    <div class="class">
        <div v-if="showModal">
            <ClassModal @close="toggleModal" @add="addClass"/>
        </div>
        <button class="btn" @click="toggleModal">Add</button>
        <ClassList :classList="classList"/>
    </div>
</section>
</template>


<script>
    import ClassList from '@/components/ClassList.vue';
    import ClassModal from '@/components/ClassModal.vue';
    import { onMounted, onUpdated, ref } from 'vue';
    export default {
        components: {ClassModal , ClassList},
        setup(){
            const showModal = ref(false)
            const classList = ref([])
            const toggleModal = () =>{
                showModal.value = !showModal.value
            }
            const addClass = data => {
                showModal.value = !showModal.value
                // classList.value.push(data)
                // console.log(classList.value)
                
                fetch("http://localhost:4000/classes",{
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify(data)                    
                })
                .then(response => response.json())
                .then(newClass => {
                    classList.value.push(newClass);
                })
            
            }

            onMounted (() => {
                fetch("http://localhost:4000/classes")
                .then(res => res.json())
                .then(data => classList.value = data)
                .catch(err => console.log(err.message))
            })
   
            return {toggleModal , showModal , addClass , classList}
        }
    }
</script>


<style scoped>
    .sec-class{
        border: 1px solid black;
    }
    .header{
        margin: 2rem auto;
        border: 1px solid blue;
        text-align: center;
    }
    .class{
        margin: 5rem;
        border: 1px solid saddlebrown;
    }
    
</style>