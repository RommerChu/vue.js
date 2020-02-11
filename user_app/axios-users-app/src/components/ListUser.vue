<template>

        <b-container>
            <b-row>
                <div class="col-4">
                    <b-button @click="fetchUsers">Load user</b-button>
                    <br><br>
                    <b-list-group>
                        <b-list-group-item v-for="(user, index) in users" :key="index" @click="fillInfo(user)">{{user.name}}</b-list-group-item>
                    </b-list-group>
                </div>
                <div class="col-8">
                    <users-detail :details="info"></users-detail>

                </div>
            </b-row>
        </b-container>

</template>

<script>
    import axios from 'axios'
    import UsersDetail from "./UsersDetail";

  export default{
      components: {UsersDetail},
      data(){
          return{
              info:'',
              users:[]
          }
      },

      /*******LIFE CYCLE HOOK*** document ready version of Jquery*******/
      created() {
        this.fetchUsers()
      },

      methods:{
          fillInfo(user){
              this.info = user
          },

          fetchUsers(){
              axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                  this.users = response.data
              })
          }
      }
  }
</script>