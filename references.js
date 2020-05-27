var myapp1 = new Vue({
    el: '#my-app-1',
    data:{
       fname: "Prasant",
       lname: "dash"

    },
    methods:{
        testMethod: function(){
            this.name = "test method";
            return this.name;
        },
        submitdata: function(){
            console.log(this.$refs.txtname.value);
            console.log(this.$refs.txtemail.value);
        }
    },
    computed: {
        fullname: function(){
            return this.fname + " " + this.lname;
        }
    }

});
