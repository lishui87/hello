<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 任务管理</el-breadcrumb-item>
        <el-breadcrumb-item>未完成任务</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data="relist" border style="width: 100%" class="v-tab" >
      <el-table-column fixed prop="phone" label="手机号" width="140" class="v-th"></el-table-column>
      <el-table-column prop="id" label="序号" width="50" class="v-th"></el-table-column>
      <el-table-column prop="title" label="标题" width="150" class="v-th"></el-table-column>
      <el-table-column prop="address" label="地址" width="100" class="v-th"></el-table-column>
      <el-table-column prop="main" label="内容" width="200" class="v-th"></el-table-column>
      <el-table-column prop="gongFen" label="奖励公分" width="120" class="v-th" ></el-table-column>
      <el-table-column prop="publisher" label="发布者" width="120" class="v-th" ></el-table-column>
      <el-table-column prop="publishTime" label="发布时间" width="120" class="v-th" ></el-table-column>
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
        relist: [
          { phone: 15010848312, id: 1, title: '打扫敬老院', address: '北京', main: '星期天打扫敬老院...', gongFen: 300, publisher: '张三', publishTime: '2017/06/16' },
          { phone: 15010848312, id: 2, title: '打扫敬老院', address: '北京', main: '星期天打扫敬老院...', gongFen: 300, publisher: '张三', publishTime: '2017/06/16' },
          { phone: 15010848312, id: 3, title: '打扫敬老院', address: '北京', main: '星期天打扫敬老院...', gongFen: 300, publisher: '张三', publishTime: '2017/06/16' }
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

