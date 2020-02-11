<template>
    <b-row class="spacer">
        <b-container>
            <h3>List of students</h3>
            <div class="spinner-border" v-if="users ==''">
                <span class="sr-only">Loading... Please wait.</span>
            </div>
            <h3 v-if="users == ''">Loading...Please wait.</h3>

            <b-list-group>
                <b-list-group-item v-for="(user,index) in users" :key="index" @click="fillInfo(user.id)">{{user.name}}
                    <b-btn-close v-b-popover.hover.right title="Delete this user?" @click="deleteUser(user.id)"></b-btn-close>
                </b-list-group-item>
            </b-list-group>
                <div v-if="info !== ''">
                <userdetails :details ="info"></userdetails>
            </div>
        </b-container>
    </b-row>
</template>


<script>
    /**import paste here**/
    import axios from 'axios'
    import userdetails from "./userdetails";

export default {
    components:{
        userdetails,
    },

        data(){
            return{
                info : '',
                users : "",
                id : [],
            }
        },

    created(){
            this.fetchUsers()
    },

        methods:{

            fillInfo(id){
                axios.get('http://vue.parthrai.ca/user/'+id).then(response =>{
                    this.info = response.data
                })
            },

           fetchUsers(){
                axios.get('http://vue.parthrai.ca/users').then(response =>{
                    this.users = response.data
                    this.fetchUsers()
                })
            },



            deleteUser(id){
                axios.post('http://vue.parthrai.ca/user/delete/'+id).then(response => {
                    alert(response.data);
                    this.fetchUsers()
                })
            },
        }

}

</script>