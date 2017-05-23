<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-message"></i> 文档管理</el-breadcrumb-item>
        <el-breadcrumb-item>图片列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3>首页轮播</h3>
    <el-table :data="indexlist" border style="width: 100%">
      <el-table-column prop="id" label="序号" sortable width="100"></el-table-column>
      <el-table-column prop="picture" label="图片" width="200"></el-table-column>
      <el-table-column label="操作" width="120">
        <template scope="scope">
          <el-button @click="edite" type="text" size="small">编辑</el-button>
          <el-button @click="del" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>新闻管理轮播</h3>
    <el-table :data="newslist" border style="width: 100%">
      <el-table-column prop="id" label="序号" sortable width="100"></el-table-column>
      <el-table-column prop="picture" label="图片" width="200"></el-table-column>
      <el-table-column label="操作" width="120">
        <template scope="scope">
          <el-button @click="edite" type="text" size="small">编辑</el-button>
          <el-button @click="del" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>新闻内广告</h3>
    <el-table :data="guanggao" border style="width: 100%">
      <el-table-column prop="id" label="序号"  width="100"></el-table-column>
      <el-table-column prop="picture" label="图片" width="200"></el-table-column>
      <el-table-column label="操作" width="120">
        <template scope="scope">
          <el-button @click="edite" type="text" size="small">编辑</el-button>
          <el-button @click="del" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        indexlist: [
          { id: 1, picture: '图片225' },
          { id: 2, picture: '图片226' },
          { id: 3, picture: '图片227' },
          { id: 4, picture: '图片227' }
        ],
        newslist: [
          { id: 1, picture: '图片125' },
          { id: 2, picture: '图片126' },
          { id: 3, picture: '图片127' }
        ],
        guanggao: [
          { id: 1, picture: '图片125' },
          { id: 2, picture: '图片126' },
          { id: 3, picture: '图片127' }
        ]
      }
    },
    methods: {
      edite() {
        this.$router.push({ path: '/pictureedite' })
      },
      del() {
        console.log(1)
      }
    }
  }

</script>
<style>
</style>
