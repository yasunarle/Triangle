<template>
  <div class="loggedin">
    <div class="row no-gutters">
      <!-- Clearedlist is sm8 -->
      <Clearedlist/>
      <div class="col-sm-4">
        <Userinfo/>
      </div>
    </div>
    <div class="row no-gutters">
      <Clearedlist/>
      <div class="col-sm-4">
        <Triangle/>
      </div>
    </div>
  </div>
</template>
<script>
import Clearedlist from '@/components/ClearedList.vue'
import Userinfo from '@/components/UserInfo.vue'
import Triangle from '@/components/Triangle.vue'
export default {
  name: 'loggedin',
  components: {
    Clearedlist,
    Userinfo,
    Triangle
  },
  data(){
    return{
      user:{
        name:"yasunari",
        email:"theman@gmail.com"
      }
    }
  },
  methods:{

  }
}
</script>
<style lang="scss">

  .loggedin{
    margin: 0;
    width: 100%;
    height: 100vh;
    background: black;
    text-align: center;
    .row{
      max-width: 1000px;
      margin: auto;

    }
    p{
      color: red;
      font-size:26px;
    }
  }
</style>
