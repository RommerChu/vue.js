<template>
    <b-container class="spacer box1">
            <h3>Add form</h3>
            <form>
                <!--First name-->
                <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Name" v-model="user.name">
                </div>
                <!--email address-->
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email Address" v-model="user.email">
                </div>
                <!--password-->
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password">
                </div>
                <!--confirm password-->
                <div class="form-group">
                    <input type="password" class="form-control" id="confirm_password" placeholder="Confirm Password" v-model="user.confirmpass">
                </div>
                <!--MODAL AND SUBMIT SECTION-->
                <div>
                   <!--<button v-b-modal.modal-1 type="button" class="btn btn-success p-lg-3 m-lg-3 w-25" @click="add">Add</button>-->
                    <button type="button" class="btn btn-success" @click="add">Add</button>
                    <!--<b-modal id="modal-1" title="You successfully added" hide-footer>
                        <h3>Name: {{user.name}}</h3>
                        <h3>Email: {{user.email}}</h3>

                    </b-modal>
                    <b-button class="p-lg-3 m-lg-3 w-25" type="reset">Reset</b-button>-->
                </div>
            </form>

    </b-container>
</template>
<style>

    /*.form-group {width:100%;}*/

</style>

<script>
    import axios from 'axios'

    export default{

        data(){
            return{
                user:{
                    name : "",
                    email : "",
                    password : "",
                    confirmpass : "",
                }
            }
        },

        methods:{
            add(){
                if(this.validate()) {
                   axios.post('http://vue.parthrai.ca/user/create',this.user).then(response => {
                       alert(this.users = response.data)
                       this.fetchUsers()
                    })
                }

            },
            validate(){
                if (this.user.name && this.user.email && this.user.password && this.user.confirmpass){
                    return true
                }
                if(this.user.name === ""){
                    alert("Name is required.");
                    return false
                }
                if(this.user.email === ""){
                    alert("Email is required.");
                    return false
                }
                if(this.user.password === ""){
                    alert("Password is required.");
                    return false
                }
                if(this.user.confirmpass === ""){
                    alert("Confirm password is required.");
                    return false
                }
            },
        },
    }

</script>