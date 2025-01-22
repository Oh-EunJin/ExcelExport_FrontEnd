<template>
  <section class="page-section" id="services">
    <div class="container px-4 px-lg-5">
      <h2 class="text-center mt-0">사용해보기</h2>
      <hr class="divider" />

      <div class="text-center">
        <button class="btn btn-primary2 btn-xl" type="button" v-on:click="downBtn">Download</button>
      </div>

      <div class="row gx-4 gx-lg-5">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
            <h3 class="h4 mb-2">dd</h3>
            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
            <h3 class="h4 mb-2">Up to Date</h3>
            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
            <h3 class="h4 mb-2">Ready to Publish</h3>
            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
            <h3 class="h4 mb-2">Made with Love</h3>
            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'ServiceComponent',
  data() {
    return {
      
    };
  },
  methods: {
    downBtn() {
      this.$axios.get("/api/excel", { responseType: 'blob' }).then((res) => {
        const url = window.URL.createObjectURL(
          new Blob([res.data], 
          { type: res.headers["content-type"] })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "생성하고 싶은 파일명" + ".xlsx");
        document.body.appendChild(link);
        link.click();
      });
    }
  },
  mounted() {

  },
}
</script>
