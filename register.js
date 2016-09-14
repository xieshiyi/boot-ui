$(function(){

  new Vue({
    el:'#reg_content',
    data:{
      items:[
        {name:'手机号：'},
        {name:'验证码：'},
        {name:'手机验证码：'},
        {name:'用户名：'},
        {name:'常用邮箱：'},
        {name:'输入密码：'}
      ]
    }
  });



  var mobile=$('input').eq(0).val();
  var nick=$('input').eq(3).val();
  var email=$('input').eq(4).val();
  var password=$('input').eq(5).val();
  $('#btn_reg').click(function(event) {
    /* Act on the event */

    $.ajax({
          url: "http://192.168.0.4:8080/api/users/register",
          type:'post',
              data: {
                 'mobile':$('#tel').val(),
                 'nick':$('#name').val(),
                 'email':$('#email').val(),
                 'password':$('#password').val()
              },
          success: function() {
             alert("注册成功！");
          }
        });
  });


});
