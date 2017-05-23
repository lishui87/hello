<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-message"></i> 文档管理</el-breadcrumb-item>
        <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <button class="btn"><router-link to='/newsadd'>添加</router-link></button>
    <el-table :data="newslist" border style="width: 100%">
      <el-table-column prop="id" label="序号" sortable width="80"></el-table-column>
      <el-table-column prop="title" label="标题" width="150"></el-table-column>
      <el-table-column prop="main" label="内容" width="300"></el-table-column>
      <el-table-column prop="time" label="时间" width="120"></el-table-column>
      <el-table-column prop="picture" label="图片" width="100"></el-table-column>
      <el-table-column label="操作" width="120">
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
          { id: 1, title: '北京某敬老院', picture: '图片125', main: '发生一件...', time: '2017/06/20' },
          { id: 2, title: '北京某敬老院', picture: '图片126', main: '发生一件...', time: '2017/06/25' },
          { id: 3, title: '北京某敬老院', picture: '图片127', main: '发生一件...', time: '2017/06/22' }
        ]
      }
    },
    components: {
      page
    },
    methods: {
      edite() {
        this.$router.push({ path: '/newsedite' })
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
