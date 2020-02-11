<template>
    <div style="text-align:left;">
        <h1 class="bold">Name: {{details.name}}</h1>
        <p><span class="bold">Email:</span> {{details.email}}</p>
        <p><span class="bold">Username:</span> {{details.username}}</p>
        <p><span class="bold">Address:</span> {{details.address.street}}, {{details.address.city}}, {{details.address.zipcode}}</p>
        <p><span class="bold">Phone:</span> {{details.phone}}</p>
        <p><span class="bold">Website:</span> {{details.website}}</p>
        <p><span class="bold">Company Name:</span> {{details.company.name}}</p>

    </div>

</template>

<script>

    export default {
        props:['details'],
        data(){

        }
    }
</script>
<style>
    .bold{font-weight: bold;}

</style>