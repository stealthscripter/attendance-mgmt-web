<template>
    <div>
        <p>{{students.name }} &nbsp; {{ students.status ? "present" : "Absent"}}</p>
    </div>
</template>

<script>
    export default{
        props: ['students'],
        setup(){

        }

    }
</script>

<style>


</style>