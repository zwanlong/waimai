<template>
  <div class="sbox">
    <van-nav-bar
      title="地址列表"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <div class="simg"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: []
    }
  },

  methods: {
    onAdd () {
      this.$router.push('/addSite')
    },
    onEdit (item, index) {
      // console.log(item, index)
      alert('删除成功')
      this.list.splice(index, 1)
      let list = JSON.parse(localStorage.getItem('sign'))
      list.splice(index, 1)
      localStorage.setItem('sign', JSON.stringify(list))
    },
    onClickLeft () {
      this.$router.push('/My')
    },
    loads () {
      let lists = JSON.parse(localStorage.getItem('sign'))
      lists.map(item => {
        let kkk = {
          id: item.id,
          name: item.usr,
          tel: item.tel,
          address: `${item.area}${item.adr}`
        }
        this.list.push({ ...kkk })
      })
    }
  },
  created () {
    this.loads()
  }
}
</script>

<style lang="scss">
.sbox {
  .van-button--danger {
    background: #fff;
    color: rgb(51, 43, 43);
    border: 2px solid #ccc;
    border-radius: 30px;
    margin-bottom: 30px;
  }
  .van-nav-bar {
    border-bottom: 2px solid #ccc;
  }
  .van-nav-bar .van-icon {
    color: #aaa;
  }
}
</style>
