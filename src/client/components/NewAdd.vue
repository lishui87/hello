<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-upload"></i> 商城管理</el-breadcrumb-item>
        <el-breadcrumb-item>新品上市</el-breadcrumb-item>
        <el-breadcrumb-item>商品添加</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公分">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <div class="picture">
          <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
          <el-button size="small" type="primary">商品图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <el-form-item >
          <el-button type="primary" @click="onSubmit" >提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        form: {
          name: '',
          price: ''
        },
        fileList2: [
          {name: 'food.jpeg', url: 'images/2.jpg'},
          {name: 'food2.jpeg', url: 'images/2.1.jpg'}
        ]
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({ path: '/new' })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      }
    }
  }
</script>
<style scoped>
  .picture {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
