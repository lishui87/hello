<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="[item.icon]"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i class="el-icon-star-on"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          index: 'readme',
          title: '自述'
        },
        {
          index: '2',
          title: '用户管理',
          icon: 'el-icon-menu',
          subs: [
            {
              index: 'user',
              title: '普通用户'
            },
            {
              index: 'userVip',
              title: '会员用户'
            },
            {
              index: 'userShop',
              title: '商户用户'
            }
          ]
        },
        {
          index: '3',
          title: '任务管理',
          icon: 'el-icon-document',
          subs: [
            {
              index: 'completed',
              title: '已完成任务'
            },
            {
              index: 'unfinished',
              title: '未完成任务'
            }
          ]
        },
        {
          index: '4',
          title: '文档管理',
          icon: 'el-icon-message',
          subs: [
            {
              index: 'news',
              title: '新闻管理'
            },
            {
              index: 'picture',
              title: '图片管理'
            }
          ]
        },
        {
          index: '5',
          title: '商城管理',
          icon: 'el-icon-upload',
          subs: [
            {
              index: 'new',
              title: '新品上市'
            },
            {
              index: 'seller',
              title: '商家推荐'
            }
          ]
        },
        {
          index: '6',
          title: '系统管理',
          icon: 'el-icon-setting',
          subs: [
            {
              index: 'password',
              title: '密码管理'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 150px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
