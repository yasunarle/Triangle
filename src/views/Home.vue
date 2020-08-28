<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <p>
      1110111 1100101 1101100 1100011 1101111 1101101 1100101 100000 1110100 1101111 100000 1101101 1111001 100000 1110111 1101111 1110010 1101100 1100100 101100 100000 100000 1110100 1101000 1100101 100000 1100011 1101100 1110101 1100101 100000 1101001 1110011 100000 1001000 1010100 1001101 1001100 100000 1110100 1100001 110111 101110 101110 101110 100000 1111001 1101111 1110101 100000 1110011 1101000 1101111 1110101 1101100 1100100 100000 1110101 1110011 1100101 100000 110<span class="loginbtn" @click="tologin">0</span>100 1100101 1110110 1100101 1101100 1101111 1110000 1100101 1110010 100000 1110100 1101111 1101111 1101100 101110 100000 1000100 1100101 1110000 1110010 1100101 1110011 1110011 100000 1110100 1101000 1100101 100000 110<span class="loginbtn" @click="tosignup">0</span>010 1110101 1110100 1110100 1101111 1101110 1110011 100000 1101001 1101110 100000 1101110 1110101 1101101 1100101 1110010 1101001 1100011 1100001 1101100 100000 1101111 1110010 1100100 1100101 1110010 101110 100000
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import NotLoggedin from '@/components/NotLoggedin.vue'
// import Loggedin from '@/components/Loggedin.vue'
export default {
  name: 'home',
  data(){
    return{
      user: {
        name:"yasunari"
      },
      test:[1, 2, 3]
    }
  },
  methods:{
    tologin: function(){
      this.$router.push('/login')
    },    
    tosignup: function(){
      // const correct = 
      if(this.test == [1, 2, 3]){
        this.$router.push('/signup')
      }else{
        console.log(this.test)
        console.log([1, 2, 3])
      } 
    }
  }
}
</script>
<style lang="scss">
  .home{
    width: 100%; 
    min-height: 100vh; 
    background: black;    
    -webkit-font-smoothing: none;
    font-family: Comic Sans MS;
    p, span{
      font-size: 26px;
    }
    .loginbtn{
      color: 	#00FF00;      
      cursor: pointer;
    }
  }

</style>
