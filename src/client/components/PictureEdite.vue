<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-message"></i> 文档管理</el-breadcrumb-item>
        <el-breadcrumb-item>图片管理</el-breadcrumb-item>
        <el-breadcrumb-item>图片编辑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
          <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
          name: ''
        },
        fileList2: [
          {name: 'food.jpeg', url: 'images/2.jpg'},
          {name: 'food2.jpeg', url: 'images/2.1.jpg'}
        ],
        content: '<p>Hello BBK</p>',
        editorOption: {
          // something config
        }
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({path: '/picture'})
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
</style>
