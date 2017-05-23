<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-upload"></i> 商城管理</el-breadcrumb-item>
        <el-breadcrumb-item>商家推荐</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <button class="btn"><router-link to='/selleradd'>添加</router-link></button>
    <el-table :data="newslist" border style="width: 100%">
      <el-table-column prop="id" label="序号" sortable width="100"></el-table-column>
      <el-table-column prop="title" label="产品名称" width="150"></el-table-column>
      <el-table-column prop="price" label="公分" width="120"></el-table-column>
      <el-table-column prop="picture" label="图片" width="150"></el-table-column>
      <el-table-column label="操作" width="130">
        <template scope="scope">
          <el-button @click="edite" type="text" size="small">编辑</el-button>
          <el-button @click="del" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page></page>
  </div>
</template>
<script>
  import page from './Page.vue'
  export default {
    data() {
      return {
        newslist: [
          { id: 1, title: '手机', picture: '图片125', price: 2000 },
          { id: 2, title: '相机', picture: '图片126', price: 1500 },
          { id: 3, title: '耳机', picture: '图片127', price: 40 }
        ]
      }
    },
    components: {
      page
    },
    methods: {
      edite() {
        this.$router.push({ path: '/selleredite' })
      },
      del() {
        console.log(1)
      }
    }
  }

</script>
<style>
  .table .btn{
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 15px;
    width: 50px;
    height: 25px;
    font-size: 16px;
    line-height: 20px;
    color: blue;
  }
</style>
