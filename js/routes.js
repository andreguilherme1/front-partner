function formShow(form){
  $('#loader').show()
  $('#table-content').hide()
  $('#login-content').hide()
	$('.navbar-toggler').show()
  setTimeout(()=>{
    $('#loader').hide()
  }, 500)
	
		if(form === "user"){
			$('#form-content').load('../pages/user/user-form.html')
			setTimeout(()=>{
			formConfig()
      $(".tudo").hide(function() {
      $("footer").addClass("fixed-footer");
        });
      
    	$('#form-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			},700)
		}

  if(form === "curso"){
    $('#form-content').load('../pages/curso/curso-form.html');
    setTimeout(()=>{
    formConfig()
     
    $('#form-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
    },700);
  }

  
}



function tableShow(table) {
  $('#loader').show();
  $('#form-content').hide();
  $('#login-content').hide();
  $('.navbar-toggler').show();
  $('.navbar-dark').show();
  setTimeout(() => {
    $('#loader').hide();
  }, 500);

  if (table === "user") {
    setTimeout(() => {
      $('#table-content').load('../pages/user/user-table.html');
      $("form").removeClass("was-validated");
      $("form").trigger("reset");
  
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' });
    }, 700);
  }

  if (table === "dashboard") {
    setTimeout(() => {
      $('#table-content').load('../pages/dashboard/dashboard.html');
      $("form").removeClass("was-validated");
      $("form").trigger("reset");
      $(".tudo").hide(function() {
        $("footer").addClass("fixed-footer");
      });
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' });
    }, 700);
  }

  if (table === "curso") {
    $('#table-content').load('../pages/curso/curso-table.html');
    setTimeout(() => {
      $("form").removeClass("was-validated");
      $("form").trigger("reset");
      $(".tudo").hide(function() {
        $("footer").addClass("fixed-footer");
      });
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' });
    }, 700);
  }

  if (table === "contato") {
    $('#table-content').load('../pages/contato/contato.html');
    setTimeout(() => {
      $("form").removeClass("was-validated");
      $("form").trigger("reset");
      $(".tudo").hide(function() {
        $("footer").addClass("fixed-footer");
      });
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' });
    }, 700);
  }

  if (table === "sobre") {
    $('#table-content').load('../pages/sobre/sobre.html');
    setTimeout(() => {
      $("form").removeClass("was-validated");
      $("form").trigger("reset");
      $(".tudo").hide(function() {
        $("footer").addClass("fixed-footer");
      });
      $('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' });
    }, 700);
  }

  

  
}



function loginShow(){
  $('#loader').show()
  $('#table-content').hide()
  $('#form-content').hide()
	$('.navbar-toggler').hide()
  $('#login-content').load( '../pages/auth/login-form.html');
	
  setTimeout(()=>{
    $('#loader').hide()
  },500)
	
	setTimeout(()=>{
		formConfig()
   	$('#login-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
	},700)
  $('#tudo').hide()
  $(".tudo").hide(function() {
  $("footer").addClass("fixed-footer");
  $("table").hide()
  });
}


function formConfig(){
	const forms = $('.needs-validation')
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			event.preventDefault()
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})
}