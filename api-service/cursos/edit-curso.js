async function editCurso(id) {
	await fetch("https://api-fullstack-base.onrender.com/cursos/"+id,{
		method: "GET",
		headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			const curso = data[0]
			console.log(curso)

			formShow('curso')
			
			setTimeout(() => {
			$('#salvar-btn-curso').text("Editar") // muda o valor do botao "salvar" para "editar"
      $('#salvar-btn-curso, .btn-sm').css({
           'backgroundColor': '#ffc107',
           'border': 'none'  // Remove a borda
         });
			$("#index-curso").val(curso.id)
			$("#nome").val(curso.nome)
			$("#descricao").val(curso.descricao)
			$("#duracao_semanas").val(curso.duracao_semanas)
      $("#n_aulas").val(curso.n_aulas)
      $("#nivel").val(curso.nivel)
      $("#foto").val(curso.nivel)
			},1000)
		})
}