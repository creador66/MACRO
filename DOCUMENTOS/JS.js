
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
var ju='#' 
var codigo='detallesxz' 
carrito =JSON.parse(localStorage.getItem('localArchivos')) ?? []
for (var i = 0; i < carrito.length; i++) { 
{      
var table = document.getElementById('correr_productos')
table.innerHTML += `
<tr>
<td>	
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
<a href="index2.html${ju+codigo+[i]}">DETALLES</a>
<button onclick="uno('flex',${[i]})"><li class="flex"><h5>AÑADIR</h5><i class="zmdi zmdi-menu zmdi-hc-fw"></i></li></button>
</div>
</div>
</div> 
</td>	
</tr>
 <!---------------  modal ------------ -->
<div>
<div id="modalid${[i]}" class="modal_uno">
<div class="contenido_modal">
<button onclick="uno('none',${[i]})">Cerrar</button>
<h1>${[i]}</h1>
</div>
</div>
</div>
<!---------------  modal ------------ -->
`
}
}
}

function uno(_valor,id){
document.getElementById('modalid'+id).style.display=_valor; 	
window.onclick = function(event) {
if (event.target == ('modalid'+id)) {
('modalid'+id).style.display = "none";
}
}
}




















// 	/*__________________________________________*/	
// function pintarcarro(){   
// var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {Total:0.0,Items:0,Data:[]};  
	
// 	$('#val_items').text(cart.Items);
// 	$("#alert_pedido").hide();
// 	$("#alert_carrito").hide();
// 	$("#alert_pedido_sucess").hide();               
// 	$("#alert_carrito_success").hide(); 
	
// 	  }
// /*__________________________________________*/	
// function find2(id){
// var value2 = JSON.parse(localStorage.getItem('localArchivos'));
// for (var i = 0; i < value2.length; i++) {             
// if([i]==id){
// var cant = document.getElementById('can'+[i]).value
// if (cant == 0){
// break;
// }
// 	var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
// 	Total:0.0,
// 	Items:0,
// 	Data:[]}; 
	
// 	var sub_total= parseFloat((cant * value2[i].precio)).toFixed(2);
// 	var total= parseFloat(sub_total)+parseFloat(cart.Total);
// 	cart.Total=parseFloat(total).toFixed(2);
// 	cart.Items=1+cart.Items;
// 	cart.Data.push({
// 			id:value2[i].id2,
// 			codi:value2[i].algo,
// 			producto:value2[i].producto,
// 			precio:value2[i].precio,
// 			imagen:value2[i].imagen,
// 			cantidad:parseInt(cant),
// 			subtotal:sub_total});
	
// 	localStorage.setItem('cart',JSON.stringify(cart)); 
// 	pintarcarro()

// 	document.getElementById('can'+[i]).value="1"
// 	$("#alerta_carrito").text("Se Agrego  Correctamente");
// 	$("#alerta_carrito").fadeTo(1000, 1).slideUp(0, function() {
// 	$("#alerta_carrito").slideUp(0);
// 	$("#alerta_carrito"). css("display", "none")
// 	 }); 
// 	break;
// 	}
// 	}
// 	}
// 	/*__________________________________________*/	
	
 	


	/*==================== busqueda ====================*/
function Buscar() {
var tabla = document.getElementById('correr_productos');
var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
var cellsOfRow="";
var found=false;
var compareWith="";
for (var i = 0; i < tabla.rows.length; i++) {
cellsOfRow = tabla.rows[i].getElementsByTagName('h4');
found = false;
for (var j = 0; j < cellsOfRow.length && !found; j++) { 
compareWith = cellsOfRow[j].innerHTML.toLowerCase();
if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
{
   
found = true;
}
}
if(found){	
tabla.rows[i].style.display = ''; 
} else {
tabla.rows[i].style.display = 'none';
}
}

if(found==false){	
console.log("verdad") 
} else {
console.log("falso")
$(document).ready(function(){
$('#myTable').pageMe({pagerSelector:'#myPagerhgfv',perPage:10});
});
}
}

// ]]>
/*==================================================*/	
		

   























$.fn.pageMe = function(opts){
var $this = this,
 defaults = {
 perPage: 7,
showPrevNext: false,
hidePageNumbers: false
},
settings = $.extend(defaults, opts);
var listElement = $this.find('tbody');
var perPage = settings.perPage; 
var children = listElement.children();
var pager = $('.pager');
if (typeof settings.childSelector!="undefined") {
children = listElement.find(settings.childSelector);
}
if (typeof settings.pagerSelector!="undefined") {
pager = $(settings.pagerSelector);
}
var numItems = children.size();
var numPages = Math.ceil(numItems/perPage);
pager.data("curr",0);
if (settings.showPrevNext){
$('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
}
var curr = 0;
while(numPages > curr && (settings.hidePageNumbers==false)){
$('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
curr++;
}
            
if (settings.showPrevNext){
$('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
}
pager.find('.page_link:first').addClass('active');
pager.find('.prev_link').hide();
if (numPages<=1) {
pager.find('.next_link').hide();
}
pager.children().eq(1).addClass("active");
children.hide();
children.slice(0, perPage).show();

pager.find('li .page_link').click(function(){
var clickedPage = $(this).html().valueOf()-1;
goTo(clickedPage,perPage);
return false;
});

pager.find('li .prev_link').click(function(){
previous();
return false;
});
pager.find('li .next_link').click(function(){
next();
return false;
});
            
function previous(){
var goToPage = parseInt(pager.data("curr")) - 1;
goTo(goToPage);
 }
             
function next(){
goToPage = parseInt(pager.data("curr")) + 1;
goTo(goToPage);
}
            
function goTo(page){
var startAt = page * perPage,
endOn = startAt + perPage;
children.css('display','none').slice(startAt, endOn).show();
if (page>=1) {
pager.find('.prev_link').show();
}
else {
pager.find('.prev_link').hide();
}
if (page<(numPages-1)) {
pager.find('.next_link').show();
}
else {
pager.find('.next_link').hide();
}
pager.data("curr",page);
pager.children().removeClass("active");
pager.children().eq(page+1).addClass("active");
}
};
$(document).ready(function(){
$('#myTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10});
});

















