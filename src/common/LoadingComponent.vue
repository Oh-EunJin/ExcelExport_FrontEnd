<template>
  <div class="spinner-container" v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      
    };
  }
}
</script>

<style scoped>
.spinner-container {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  border-bottom: 5px solid #fff200;
  animation: spin 1s linear infinite;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>