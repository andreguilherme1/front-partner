$(document).ready(function(){
    token = localStorage.getItem('token');
    user = localStorage.getItem('user');
    if (user) {
      $("#userName").text('Usuário: ' + user.toUpperCase());
    }

    if (token) {
      $('#form-content').hide();
      $('#login-content').hide();
      $('#table-content').load('../pages/dashboard/dashboard.html');
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' });
      $(".text-body-secondary").show();
      $(".menu-logout").show();
      $(".menu-login").hide();
      $(".menu-nova-conta").hide();
      $(".text-body-secondary").show();
      $(".menu-logout").show();
      $(".tudo").hide(function() {
        $("footer").addClass("fixed-footer");
      });
      
    } else {
      $('#form-content').hide();
      $('#login-content').load('../pages/auth/login-form.html');
      setTimeout(function () {
        formConfig();
        $('#table-content').hide();
        $('.navbar-toggler').hide();
        $("#userName").hide();
      }, 0); // Alterado o valor de timeout para 0
    }
  });

  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }



