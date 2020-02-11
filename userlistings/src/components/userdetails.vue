<template>
    <div class="spacer  box1">
        <b-card-group deck>
            <b-card bg-variant="light" header="User detail" class="text-center">
                <b-card-text>Id: {{details.id}}</b-card-text>
                <b-card-text>Name:{{details.name}}</b-card-text>
                <b-card-text>Email:{{details.email}}</b-card-text>
                <b-card-text>Created:{{details.created_at}}</b-card-text>
                <b-card-text>Modified:{{details.updated_at}}</b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>
<style>
    p{text-align: left;}
    .card-header{font-size: 1.5rem; font-weight:bold;}
</style>

<script>


    export default {

        props:['details'],
        data(){

            return{

            }
        },

    }
</script>