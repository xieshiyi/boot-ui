$(function(){
  var mobile=$('#tel').val();
  var nick=$('#name').val();
  var email=$('#email').val();
  var password=$('#password').val();
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
