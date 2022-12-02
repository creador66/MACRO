
corre()
cargaPro()
/*__________________________________________*/	
function cargaPro(){
let url ="https://script.google.com/macros/s/AKfycbx4Mn-KqB7ILaG4LfPp8GIrkqwms-dxXPZwMAv0G5MCQl61m0CEtr6-RQuIa5XLUzC1/exec";
fetch(url)
.then( response => response.json() )
.then( data => mostrarData(data) )
.catch( error => console.log(error) )
const mostrarData = (data) => {
localStorage.setItem('localArchivos', JSON.stringify(data))	
}
}
/*__________________________________________*/	




/*__________________________________________*/	
function corre() {



	
	
var URLhash = window.location.hash.replace(/\/?#/, "");
carrito =JSON.parse(localStorage.getItem('localArchivos')) ?? []
for (var i = 0; i < carrito.length; i++) { 
if(URLhash=='detallesxz'+[i])
{      
var table = document.getElementById('correr_productos')
table.innerHTML += `

<tr>
<td>
<h1>${[i]}</h1>	
<div class="fondo-tarjeta-pro"> 
<h4 class="tar-etiq-cont"><span>${carrito[i].codi}</span></h4>
<div class="imagen">
<img src="img/PRO-1.jpg" alt="">
</div>
<div class="padding10px">
<div class="eti-pre">
<h5>${carrito[i].catego1}</h5> 
<h4>$MXN${carrito[i].precio}</h4> 
</div>
<h4>${carrito[i].producto}</h4>
<div class="right">	
<button onclick="uno('flex',${[i]})"><li class="flex"><h5>AÑADIR</h5><i class="zmdi zmdi-menu zmdi-hc-fw"></i></li></button>
</div>
</div>
</div> 
</td>	
</tr>
`
}
}
}














