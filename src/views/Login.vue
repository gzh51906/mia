<template>
    <div>
        <div class = "login">
            <header>
                <div class = "logo">
                    <img src="https://m.mia.com/resources/img/login_logo.png" alt="">
                </div>
            </header>
            <section class = "wrapper">
                <div class= "userdiv">
                    <div class = "input_name login_con">
                        <input type="text"
                         placeholder="请输入手机号"
                         v-model="username"
                         
                         @blur="checkphone($event)"
                         >
                    </div>
                    
                     <div class = "login_con input_mess input_password borbNone">
                        <input type="text" 
                        placeholder="请输入密码"
                        v-model="password"
                        
                        @blur="checkpsw($event)"
                        >
                    </div>
                </div>
                <div class="btnArea">
                    <input type="button"
                     class = "btn_bg"
                     value="一键登录"
                     @click = "gologin"
                      >
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      phoneright: "",
      password: "",
      isok1: false,
      isok2: false
    };
  },
  methods: {
    //手机号码验证
    checkphone(e) {
      // console.log('e.relatedTarget',e.relatedTarget)
      // console.log('e.relatedTarget',e.relatedTarget.id)
      if (e.relatedTarget) {
        let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        this.phoneright = reg.test(this.username);
        if (this.username == "") {
          alert("手机号不能为空");
          this.isok1 = false;
        } else if (!this.phoneright) {
          alert("请输入正确的手机号");
          this.isok1 = false;
        } else {
          this.isok1 = true;
        }
      }
    },
    checkpsw(e) {
      // console.log('e',e)
      // console.log('e.relatedTarget',e.relatedTarget)
      // console.log('e.relatedTarget',e.relatedTarget.id)
      if(e.relatedTarget){
        if (!this.password) {
          alert("密码不能为空");
          this.isok2 = false;
      //     console.log('e.relatedTarget',e.relatedTarget)
      // console.log('e.relatedTarget',e.relatedTarget.id)
        } else {
          this.isok2 = true;
        }
      }
    },
    gologin() {
      if (this.isok1 == true && this.isok2 == true) {
        this.$axios
          .post("http://localhost:1906/user/login", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res.data);
            if (res.data.code == 1) {
              //保存token到本地
              this.$store.commit("login", res.data.data.authorization);
              localStorage.setItem("username", this.username);
              //   let targetUrl = this.$route.query.targetUrl
              this.$router.push({
                name: "home"
              });
            } else {
              alert("用户名或者密码错误");
            }
          });
      }
    }
  }
};
</script>



<style scoped>
*:focus {
  outline: none;
}
* {
  margin: 0;
  padding: 0;
}
.logo {
  text-align: center;
}
.logo img {
  width: 40px;
  height: 49px;
}
header {
  padding-top: 10px;
}
.wrapper {
  padding-top: 0;
  padding: 0 30px;
}
.wrapper .userdiv {
  border: none;
  padding: 0;
  margin-top: 0.09rem;
  border-radius: 0;
  overflow: hidden;
}
.wrapper .userdiv .login_con {
  overflow: hidden;
  padding: 0.51rem 0 0.12rem;
  border-bottom: 1px solid #d7d7d7;
}
.wrapper .userdiv .login_con input {
  font-size: 16px;
  font-family: Helvetica;
  float: left;
  color: #999;
}
.wrapper .userdiv .login_con input {
  border: none;
  vertical-align: middle;
  background: #fff;
}
.wrapper .userdiv .input_mess {
  padding: 20px 0 10px 0;
}
.btnArea {
  margin-top: 50px;
}
.btnArea .btn_bg {
  background: #cacaca;
}
.btnArea .btn_bg {
  height: 44px;
  line-height: 44px;
  border-radius: 50px;
  font-size: 16px;
  display: inline-block;
  color: #fff;
  width: 100%;
  text-align: center;
  border: none;
}
</style>

