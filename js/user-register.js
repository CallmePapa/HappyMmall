!function(e){function t(t){for(var r,s,u=t[0],a=t[1],l=t[2],c=0,m=[];c<u.length;c++)s=u[c],i[s]&&m.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(t);m.length;)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={7:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=a;o.push([19,0]),n()}({19:function(e,t,n){n(68),n(5);let r=n(0),i=n(4),o=function(e){$(".error-item").show().find(".err-msg").text(e)},s=function(){$(".error-item").hide().find(".err-msg").text("")},u={init:function(){this.bindEvent()},bindEvent:function(){let e=this;$("#username").blur(function(){let e=$.trim($(this).val());e&&i.checkUsername(e,function(e){s()},function(e){o(e)})}),$("#submit").click(function(){e.submit()}),$(".user-content").keyup(function(t){13===t.keyCode&&e.submit()})},submit:function(){let e={username:$.trim($("#username").val()),password:$.trim($("#password").val()),passwordConfirm:$.trim($("#password-confirm").val()),phone:$.trim($("#phone").val()),email:$.trim($("#email").val()),question:$.trim($("#question").val()),answer:$.trim($("#answer").val())},t=this.formValidate(e);t.status?i.register(e,function(e){window.location.href="./result.html?type=register"},function(e){o(e)}):o(t.msg)},formValidate:function(e){let t={status:!1,msg:""};return r.validate(e.username,"require")?r.validate(e.password,"require")?e.password.length<6?(t.msg="密码长度至少６位",t):e.password!==e.passwordConfirm?(t.msg="两次输入的密码不一致",t):r.validate(e.phone,"phone")?r.validate(e.email,"email")?r.validate(e.question,"require")?r.validate(e.answer,"require")?(t.status=!0,t.msg="验证通过",t):(t.msg="密码提示问题答案不能为空",t):(t.msg="密码提示问题不能为空",t):(t.msg="邮箱格式不正确",t):(t.msg="手机号格式不正确",t):(t.msg="密码不能为空",t):(t.msg="用户名不能为空",t)}};$(function(){u.init()})},68:function(e,t){}});