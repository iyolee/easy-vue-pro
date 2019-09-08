<template>
  <a-layout id="components-layout-side" style="min-height: 100vh">
    <a-layout-sider
      v-if="navLayout === 'left'"
      :theme="navTheme"
      :trigger="null"
      collapsible
      v-model="collapsed"
      width="256px"
    >
      <div
        :class="[navTheme === 'dark' ? 'dark-theme-word' : 'light-theme-word']"
      >
        Easy Vue Pro
      </div>
      <!-- <div class="logo" /> -->
      <SiderMenu :theme="navTheme" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          v-auth="['admin']"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
  </a-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";
export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  }
};
</script>

<style>
#components-layout-side .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-side .trigger:hover {
  color: #1890ff;
}

#components-layout-side .dark-theme-word {
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}

#components-layout-side .light-theme-word {
  color: #222;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}
</style>
