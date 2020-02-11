<template>

    <b-row>
        <b-container>
            <h1>My name is {{name}}</h1>
            <br><br>
            <div class="col" v-if="showAlert==true">
            <b-alert show variant="success">Default Alert</b-alert>
            <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="warning"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
            >
                <p>task : {{task}} added</p>
                <b-progress
                        variant="warning"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px"
                ></b-progress>
            </b-alert>
            </div>
            <div class="col">
                <h3 v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">This is the list you've ordered</h3>
                <input type="text" v-model="task"><button @click="add">add</button>
                <b-button v-model="task" @click="add">add</b-button>
                <br><br>
                <div>item
                    <ul>
                        <li v-for="(t,index) in tasklist" :key="t" @click="remove(index)">
                            {{t}}
                        </li>
                    </ul>
                </div>
            </div>
        </b-container>
    </b-row>




</template>

<script>
    /****** TASK ADDING *****/
    export default {
        data(){
            return{
                name : "Rommer",
                dismissSecs: 2,
                dismissCountDown:2,
                task : "",
                tasklist : [],
                showAlert : false

            }
        },
        methods:{
            add(){
                this.tasklist.push(this.task)
                this.task=""
                this.showAlert=true
            },
            remove(index){
                this.tasklist.splice(index, 1)
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
                if(this.dismissCountDown == 0){
                    this.dismissCountDown=2
                    this.showAlert=false
                    this.task = ""
                }
            }
        }
    }

    /****** NAME ****
     export default {
        data(){
            return{
                name : "Rommer"
            }
        }
    }*****/
 </script>
<style>
    li{color:red; display: block; text-align: center;}
</style>