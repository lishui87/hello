<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-message"></i> 文档管理</el-breadcrumb-item>
        <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
        <el-breadcrumb-item>新闻编辑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="新闻标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <div class="picture">
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
        </div>
        <div class="edbtn">
          <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
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
  import { quillEditor } from 'vue-quill-editor'
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
    components: {
      quillEditor
    },
    methods: {
      onSubmit() {
        this.$router.push({ path: '/news' })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      onEditorChange({ editor, html, text }) {
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quillEditor
      }
    }
  }
</script>
<style scoped>
  .picture {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .edbtn{
    margin-bottom: 20px;
  }
</style>
