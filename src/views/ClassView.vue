<template>
<section class="sec-class">
    <div class="class">
        <h1>Add Class</h1>
        <div v-if="showModal">
            <ClassModal @close="toggleModal" @add="addClass"/>
        </div>
        <button class="add-btn" @click="toggleModal"><PhPlusCircle :size="32" weight="light"/></button>
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
                const request = new XMLHttpRequest()
                
                request.addEventListener('readystatechange',()=>{
                    if(request.readyState == 4){
                        classList.value = JSON.parse(request.responseText)
                        console.log(request.responseText)
                    }
                })
                

                request.open('GET',"http://localhost:4000/classes")
                request.send()

            })
   
            return {toggleModal , showModal , addClass , classList}
        }
    }
</script>


<style scoped>
.sec-class {
  border: 1px solid slateblue;
  margin: 0;
  padding: 0;
  height: 100vh;
  text-align: center;
}

.add-btn {
  cursor: pointer;
  background: none;
  border: none;
}

.class {
  margin: 3rem;
}
</style>