async function getUsers(){
	let token = localStorage.getItem('token')

	if (!token) {
		logout()	
		$(".usertable").hide()
	  return;
	}

	console.log('ele', token)
	await fetch("https://api-fullstack-base.onrender.com/users",{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then((response) => {
		return response.json()
	}).then((data) => {
	const users = data
		console.log(users)
		mountUsers(users)
		return users
	
	}).catch(()=>{
		// $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>")
	})
}

getUsers()