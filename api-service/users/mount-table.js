function mountUsers(users) {

	let lista = ""
	for(let user of users){
		lista +=
			`
				<tr>
					<th scope="row">${user.id}</th>
					<td>${user.username}</td>
					<td>${user.email}</td>
					<td>
						<button ${verifyAdmin(user) ? 'disabled' : ''}  type="button" onclick="editUser(${user.id})" class="btn btn-warning btn-sm" style="color: white;">Editar</button>
						<button id="btn-deletar" ${verifyAdmin(user) ? 'disabled' : ''}  type="button" onclick="deleteUser(${user.id}); tableShow('user')" class="btn btn-danger btn-sm">Excluir</button>
					</td>
				</tr>
			`
	}
	$("#table-user").html(lista) 
}

function verifyAdmin(user){
	if(user.username === 'admin'){
		return true
	}else{
	return false	
	}
}