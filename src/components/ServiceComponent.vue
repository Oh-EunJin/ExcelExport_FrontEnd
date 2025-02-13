<template>
  <section class="page-section" id="services">
    <div class="container px-4 px-lg-5">
      <h2 class="text-center mt-0">사용해보기</h2>
      <hr class="divider" />

      <div class="row gx-4 gx-lg-5">
        <div class="text-left">
          <h3 class="h4 mb-2">최상위 폴더 경로</h3>
          <div class="mt-3">
            <label> 절대 경로 : <input type='text' v-model="dirPath" ref="dirPathCursor" style="min-width: 30rem;" /></label>
            <p style="margin-top: 0.5%;">* 파일 정보를 알고 싶은 최상위 폴더의 절대 경로를 입력해주세요. <br />
              ex) D:\Project\test
            </p>
          </div>
        </div>
      </div>

      <hr>

      <div class="row gx-4 gx-lg-5">
        <div class="col-lg-6 col-md-6 text-left">
          <h3 class="h4 mb-2">확장자</h3>
          <div class="mt-3 checkDiv" id="extCheckBox">
            <input type="checkbox" id="extJava" name="extension" value="java" />
            <label for="extJava"> java </label>
            
            <input type="checkbox" id="extJsp" name="extension" value="jsp" />
            <label for="extJsp"> jsp </label>

            <input type="checkbox" id="extJs" name="extension" value="js" />
            <label for="extJs"> js </label>

            <input type="checkbox" id="extVue" name="extension" value="vue" />
            <label for="extVue"> vue </label>

            <input type="checkbox" id="extEtc" name="extension" value="etc" />
            <label for="extEtc"> 기타 <input type="text" v-model="etcList" ref="etcListCursor" /></label>
          </div>
          <div class="mt-2">
            <p>* 기타 선택 시 검색하고자 하는 확장자를 입력해 주시고, 여러 개인 경우 아래 예시처럼 구분자(/)를 포함하여 입력해 주세요. <br />
                ex) css/xml/html</p>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 text-left">
          <h3 class="h4 mb-2">날짜</h3>
          <div class="mt-3">
            <!-- <label for="date"> 날짜 </label> -->
            <!-- <input type="date" id="date" :max="maxDate" /> -->
            
            <Datepicker class="datepicker" v-model="pickDate" :locale="locale" :weekStartsOn="0"
                        :disabledDates="{ predicate: isTodayOver }" placeholder="날짜를 선택하세요." :clearable="true" >
              <template v-slot:clear="{ onClear }">
                <button class="openBtn" type="button" @click="openCalendar">🗓️</button>
                <button class="clearBtn" type="button" @click="onClear">x</button>
              </template>
            </Datepicker>
          </div>
          <div class="mt-2">
            <p>* 날짜 선택 시 해당 날짜 이후에 수정된 파일의 정보를 불러옵니다.</p>
          </div>
        </div>
      </div>

      <hr>

      <div class="row gx-4 gx-lg-5">
        <div class="col-lg-6 col-md-6 text-left">
          <h3 class="h4 mb-2">엑셀 Header</h3>
          <div class="mt-3 checkDiv">
            <input type="checkbox" id="No" name="headerName" value="No" checked disabled />
            <label for="No"> No </label>

            <input type="checkbox" id="path" name="headerName" value="path" checked disabled />
            <label for="path"> 경로 </label>

            <input type="checkbox" id="fileName" name="headerName" value="fileName" checked disabled />
            <label for="fileName"> 파일명 </label>

            <input type="checkbox" id="exten" name="headerName" value="exten" />
            <label for="exten"> 확장자 </label>
            
            <input type="checkbox" id="updateDate" name="headerName" value="updateDate" />
            <label for="updateDate"> 수정일 </label>
          </div>
        </div>
      </div>

      <hr>

      <!-- css 관련 checkbox 영역
      TO-BE : css 관련 개발은 추후 개발 예정
      <div class="row gx-4 gx-lg-5">
        <div class="col-lg-6 col-md-6 text-left">
          <h3 class="h4 mb-2">Header CSS</h3>
          <div class="mt-3">
            <input type="checkbox" id="check3" name="checkName3" value="checkVal3" />
            <label for="check3"> 테두리 굵게 </label>
            
            <input type="checkbox" id="check33" name="checkName3" value="checkVal33" />
            <label for="check33"> 색상 </label>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 text-left">
          <h3 class="h4 mb-2">Body CSS</h3>
          <div class="mt-3">
            <input type="checkbox" id="check4" name="checkName4" value="checkVal4" />
            <label for="check4"> No </label>
          </div>
        </div>
      </div> -->

      <hr>

      <div class="text-center">
        <button class="btn btn-primary2 btn-xl" type="button" @click="downExcel()" :disabled="isDownBtnDisabled">Download</button>
      </div>

    </div>

    <AlertComponent v-if="isOpenAlert" :message="message" :isOpenAlert="isOpenAlert" :icon="iconState" />
    <LoadingComponent :isLoading="loadingStatus" />
</section>
</template>

<script>
import { ref, reactive } from 'vue';
import Datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';

import { mapState } from 'vuex';

export default {
  name: 'ServiceComponent',
  components: {
    Datepicker,
  },
  data() {
    return {
      dirPath: '',
      etcList: '',
      pickDate: ref(),
      locale: reactive(ko),

      sendData: {},

      isDownBtnDisabled: false,
    };
  },
  methods: {
    // TO-BE : custom alert도 해보기......
    // 달력 선택 호출
    openCalendar() {
      document.querySelector('.datepicker').focus();
    },
    // 어제 날짜까지 선택 가능
    isTodayOver(date) {
      return date > new Date(new Date().setDate(new Date().getDate()-1));
    },
    // 유효성 체크
    checkValidation() {
      this.sendData = {};

      // 절대 경로 유효성 체크
      if(this.dirPath.length < 1) {
        this.openAlert('폴더 경로를 입력해 주세요.', 'warn');
        // alert('폴더 경로를 입력해 주세요.')
        this.$refs.dirPathCursor.focus();
        return false;
      } else {
        const lastVal = this.dirPath[this.dirPath.length - 1];
        if(lastVal == '\\') {
          this.dirPath = this.dirPath.substring(0, this.dirPath.length-1);
        }
        this.sendData.dirPath = this.dirPath;
      }

      // 확장자 유효성 체크
      const checkBoxes = document.querySelectorAll('input[name="extension"]:checked');
      var extCnt = checkBoxes.length;
      // 최소 1개 선택 체크
      if(extCnt < 1) {
        this.openAlert('확장자를 최소 1개 선택해 주세요.', 'warn');
        return false;
      }
      // 기타 선택 시 input 값 유효성 체크 및 값 저장
      let isCheckValidation = true;
      checkBoxes.forEach(item => {
        if(item.value != 'etc') {
          if(this.sendData.etcList) {
            this.sendData.etcList = this.sendData.etcList + "/" + item.value;
          } else {
            this.sendData.etcList = item.value;
          }
        } else {
          if(this.etcList.length < 1) {
            this.openAlert('확장자를 입력해 주세요.', 'warn');
            this.$refs.etcListCursor.focus();
            isCheckValidation = false;
          } else {
            // check된 item 리스트 저장
            if(this.sendData.etcList) {
              this.sendData.etcList = this.sendData.etcList + "/" + this.etcList;
            } else {
              this.sendData.etcList = this.etcList;
            }
          }
        }
      });

      if(!isCheckValidation) {
        return false;
      }

      // 날짜 선택 시 값 저장
      if(this.pickDate) {
        const year = this.pickDate.getFullYear();
        const month = String(this.pickDate.getMonth() + 1).padStart(2, "0");
        const day = String(this.pickDate.getDate()).padStart(2, "0");
        this.sendData.pickDate = `${year}-${month}-${day}`;
      }

      // 엑셀 Header 값 저장
      const headerChkList = document.querySelectorAll('input[name="headerName"]:checked');
      headerChkList.forEach(item => {
        if(this.sendData.headerList) {
          this.sendData.headerList = this.sendData.headerList + "/" + item.nextElementSibling.outerText;
        } else {
          this.sendData.headerList = item.nextElementSibling.outerText;
        }
      });

      return true;
    },
    openAlert(msg, icon) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      this.$store.dispatch("openAlertComponent", { msg: msg, icon: icon });
    },
    // 엑셀 다운로드
    downExcel() {
      if(this.checkValidation()) {
        this.isDownBtnDisabled = true;

        this.$axios.get("/api/excel",{ params: this.sendData, responseType: 'blob' }).then(async (res) => {
          
          const contentType = res.headers["content-type"];
          if (contentType.includes("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            const url = window.URL.createObjectURL(
              new Blob([res.data], 
              { type: res.headers["content-type"] })
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "이행목록" + ".xlsx");
            document.body.appendChild(link);
            link.click();
  
            // 성공 메시지
            this.openAlert('다운로드 성공', 'success');
          } else {
            const errorMessage = await res.data.text();
            this.openAlert(errorMessage, "warn");
          }
        }).catch(() => {
          this.openAlert("다운로드 중 오류 발생", 'warn');
        }).finally(() => {
          this.$store.commit('loadingComponent', false);
          this.isDownBtnDisabled = false;
        });
      }
    }
  },
  watch: {
    dirPath(newVal) {
      this.dirPath = newVal.replace(/[\s/]/g, "");    // 특수문자(띄어쓰기, /)입력 방지
    },
    etcList(newValue) {
      const allowedPattern = /^[A-Za-z/]*$/;

      if (!allowedPattern.test(newValue)) {
        this.etcList = newValue.replace(/[^A-Za-z/]/g, "");
      }

      if (this.etcList.length > 0) {
        document.querySelector("#extEtc").checked = true;
      } else {
        document.querySelector("#extEtc").checked = false;
      }
    },
    pickDate: function() {
      document.querySelector('.datepicker').blur();
    }
  },
  computed: {
    ...mapState(["isOpenAlert", "message", "iconState", "loadingStatus"]),

    /**
    * input 에서 datepicker로 수정하여 해당 부분 주석 처리
    // 오늘 날짜 이후는 비활성화 처리
    maxDate() {
      const today = new Date(Date.now() - new Date().getTimezoneOffset()*60000);
      return new Date(today.setDate(today.getDate()-1)).toISOString().split("T")[0];
    }
    */
  },
}
</script>

<style scoped>
label, input[type="checkbox"] {
  cursor: pointer;
}
.checkDiv > input {
  margin-right: 0.5%;
}
.checkDiv > label {
  margin-right: 2%;
}

input[type="text"] {
  padding-left: 5px;
}

.openBtn {
  background-color:transparent;
  border: none;
  margin-left: -9rem;
}
.clearBtn {
  background-color:transparent;
  border: none;
  color: red;
  margin-left: 6.3rem;
}

input[type="checkbox"] {
  appearance: none; /* 기본 스타일 제거 */
  width: 16px;
  height: 16px;
  border: 2px solid gray; /* 기본 테두리 */
  border-radius: 4px;
  background-color: white; /* 배경색은 흰색 유지 */
  position: relative;
}
input[type="checkbox"]:disabled {
  border: 2px solid rgb(118, 154, 21);
  background-color: rgb(223, 223, 223);
}
input[type="checkbox"]:checked::after {
  content: ''; 
  position: absolute;
  width: 10px;
  height: 5px;
  border: solid red; /* 체크 표시 색상 */
  border-width: 0 0 2px 2px; 
  transform: rotate(-45deg);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%) rotate(-45deg);
}
input[type="checkbox"]:disabled, input[type="checkbox"]:disabled + label {
  cursor: default;
}

</style>