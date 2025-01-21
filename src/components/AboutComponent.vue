<template>
  <div id="about">

    <section class="page-section bg-primary">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-black font-weight-bold mt-0">폴더의 파일 정보를 한눈에 보고 싶지 않으신가요?</h2>
            <hr class="divider divider-light" />
            <p class="text-black-75 mb-4">
              보고 싶은 형식을 선택하면 특정 폴더의 파일 정보를 한눈에 보기 쉽게 정리하여 엑셀로 자동 생성해줍니다.
              <br> 이제부턴 직접 하나하나 작성하며 소요되는 시간을 줄여보세요!
            </p>

            <div class="container px-4 px-lg-8" id="howToService">
              <h2 class="text-center mt-0">서비스 이용방법</h2>
              
              <div class="row gx-4 gx-lg-5">
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="mt-5">
                    <div class="mb-4"><img class="img-sm" src="../assets/img/icon/icon-folder.png" alt="..." /></div>
                    <h3 class="h4 mb-2">최상위 폴더 선택</h3>
                    <p class="text-muted mb-0">파일 정보를 알고 싶은 최상위 폴더를 선택해 주세요!</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="mt-5">
                    <div class="mb-4"><img class="img-sm" src="../assets/img/icon/icon-checkbox.png" alt="..." /></div>
                    <h3 class="h4 mb-2">원하는 형식 선택</h3>
                    <p class="text-muted mb-0">알고 싶은 정보의 형식을 선택해 주세요.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="mt-5">
                    <div class="mb-4" style="margin-top: 3.5rem;"><img class="img-sm" src="../assets/img/icon/icon-upload.png" alt="..." /></div>
                    <h3 class="h4 mb-2">경로 지정</h3>
                    <p class="text-muted mb-0">추출한 엑셀을 저장할 경로를 지정해 주세요.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="mt-5">
                    <div class="mb-4"><img class="img-sm" src="../assets/img/icon/icon-template.png" alt="..." /></div>
                    <h3 class="h4 mb-2">템플릿 선택</h3>
                    <p class="text-muted mb-0">엑셀을 원하는 템플릿 형태로 꾸며보세요!</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="startBtn">
              <a class="btn btn-light btn-xl" href="#services">Get Started!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {

  },
}
</script>

<style scoped>
#howToService {
  margin-top: 15%;
}

.startBtn {
  margin-top: 10%;
}
</style>