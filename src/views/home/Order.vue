<template>
  <div class="order">
    <div class="oimg"></div>
    <OrderCard></OrderCard>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard'
export default {
  name: 'order',
  components: {
    OrderCard
  }
}
</script>

<style lang="scss">
.order{
  height: 100%;
  background: #eee;
  .oimg{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 300px;
    padding-top: 20%;
    background: url("../../assets/1.png") no-repeat;
    background-size: 100% 100%;
    margin: auto;
  }
}
</style>
