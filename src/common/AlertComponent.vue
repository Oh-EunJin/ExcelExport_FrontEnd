<template>
  <div class="custom-alert">
    <div class="custom-alert-content">
      <div class="warnIcon">{{ icon == 'warn' ? '⚠️' : '✔️' }}</div>
      <div id="alertMessage"  v-html="message"></div>
      <!-- <div class="close" v-if="icon != 'success'" @click="closeAlert">&times;</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    message: String,
    isOpenAlert: Boolean,
    icon: String,
    iconState: String,
  },
  data() {
    return {
      
    };
  },
  mounted() {
    setTimeout(() => {
      this.closeAlert();
    }, 1500);
  },
  methods: {
    closeAlert() {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
      this.$store.dispatch("closeAlertComponent");
    },
  },
}
</script>

<style scoped>
.custom-alert {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.custom-alert-content {
  background-color: #fefefe;
  padding-top: 10px;
  padding-bottom: 30px;
  border: 1px solid #888;
  width: 70%;
  max-width: 300px;
  border-radius: 8px;
  /* position: relative; */
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  position: fixed;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.warnIcon {
  font-size: 35px;
  padding-bottom: 5px;
}

#alertMessage {
  flex: 1;
  padding: 0px 25px 0px 25px; /* 상 우 하 왼 */
  color: #000000;
}

.close {
  color: #aaa;
  position: absolute;
  top: 0;
  right: 3%;
  /* position: absolute;
  float: right;
  margin-left: 21.5rem; */
  font-size: 30px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>