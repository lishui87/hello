<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>商户用户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data="tableData" border style="width: 100%" class="v-tab" >
      <el-table-column fixed prop="phone" label="手机号" width="140" class="v-th"></el-table-column>
      <el-table-column prop="id" label="序号" width="50" class="v-th"></el-table-column>
      <el-table-column prop="name" label="昵称" width="100" class="v-th"></el-table-column>
      <el-table-column prop="integral" label="积分" width="100" class="v-th"></el-table-column>
      <el-table-column prop="points" label="公分" width="100" class="v-th"></el-table-column>
      <el-table-column prop="grade" label="等级" width="80" class="v-th" ></el-table-column>
      <el-table-column prop="title" label="称号" width="100" class="v-th" ></el-table-column>
      <el-table-column prop="publish" label="发布任务" width="120" class="v-th" ></el-table-column>
      <el-table-column prop="resecive" label="接收任务" width="120" class="v-th" ></el-table-column>
      <el-table-column prop="completed" label="完成任务" width="120" class="v-th" ></el-table-column>
      <el-table-column prop="register" label="注册时间" width="120" class="v-th" ></el-table-column>
      <el-table-column fixed="right" label="操作" width="80" class="v-th">
        <template scope="scope">
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
        tableData: [
          { phone: '15010848312', id: 1, name: '王小虎', integral: 500, points: 160, grade: '4级', title: '徳孝知府', publish: 5, resevice: 4, completed: 3, register: '2017/6/16' },
          { phone: '15010848312', id: 2, name: '张小明', integral: 500, points: 160, grade: '4级', title: '徳孝知府', publish: 5, resevice: 4, completed: 3, register: '2017/6/16' },
          { phone: '15010848312', id: 3, name: '李小帅', integral: 500, points: 160, grade: '4级', title: '徳孝知府', publish: 5, resevice: 4, completed: 3, register: '2017/6/16' },
          { phone: '15010848312', id: 4, name: '王大虎', integral: 500, points: 160, grade: '4级', title: '徳孝知府', publish: 5, resevice: 4, completed: 3, register: '2017/6/16' }
        ]
      }
    },
    components: {
      page
    },
    methods: {
      del() {
        console.log(1)
      }
    }
  }
</script>
