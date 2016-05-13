$(document).ready(init);

function init(){

$('.nav-link').on('click',function(event){
var target=$($(this).attr('href'));
console.log($(window).scrollTop())
if(target.length){
event.preventDefault();
$('html, body').animate({scrollTop:target.offset().top},1000);}});}