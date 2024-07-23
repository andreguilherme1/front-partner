async function getCursos() {
	let token = localStorage.getItem('token');
  
	if (!token) {
		logout()	
		$(".cursotable").hide()
	  return;
	}
  
	try {
	  const response = await fetch("https://api-fullstack-base.onrender.com/cursos", {
		method: "GET",
		headers: {
		  "Content-Type": "application/json",
		  "Authorization": `Bearer ${token}`
		}
	  });
  
	  if (!response.ok) {
		throw new Error(`Erro na requisição: ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  console.log(data);
	  mountCursos(data);
	} catch (error) {
	  document.getElementById("error-message").innerHTML = "<div class='alert alert-danger'>Erro ao montar a tabela. Faça login novamente.</div>";
	  console.log(error);
	}
  }
  

  