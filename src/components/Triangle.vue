<template>
  <div class="triangle-container">
    <p>yasunari</p>
    <div class="triangle">
      <div class="circle algo"></div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'triangle',
  components: {
    
  },
  methods:{

  }
}
</script>
<style lang="scss">
  .triangle-container{
    width: 100%;
    height: 230px;
    text-align: center;
    .triangle{
      width: 200px;
      height: 200px;
      border: 1px solid #2ecc71;
      margin: auto;
      .circle{    
        width: 20px;
        height: 20px;
        margin: auto;
        border-radius: 50%;
        // background: #2ecc71;
        border: 1px solid #2ecc71;
        box-shadow: 0px 0px 10px #2ecc71;
        cursor: pointer;
      }
    }

  }


</style>
