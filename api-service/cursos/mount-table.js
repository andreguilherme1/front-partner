function mountCursos(cursos) {
	let lista = ""
	for(let curso of cursos){
		lista +=
			`
          <div class="card" style="width: 18rem; display: inline-block; margin-right: 10px;">
            <img src="${curso.foto}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${curso.nome}</h5>
              <p class="card-text">${curso.descricao}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Duração: ${curso.duracao_semanas}</li>
              <li class="list-group-item">Número de aulas: ${curso.n_aulas}</li>
              <li class="list-group-item">Nível do curso: ${curso.nivel}</li>
            </ul>
            <div class="card-body">
              <button type="button" onclick="editCurso(${curso.id})" class="btn btn-warning btn-sm" style="color: white;">Editar</button>
              <button id="btn-deletar" type="button" onclick="deleteCurso(${curso.id}); tableShow('curso')" class="btn btn-danger btn-sm">Excluir</button>
            </div>
          </div>
      
					
				
			`
	}
	$("#table-curso").html(lista) 

}
