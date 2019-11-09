
var image;
var produit=function(x,y){
document.write("le produit est de"+" "+x+"x"+" "+y+ "est egale à "+x*y) ;//il va afficher le produit de x et y
}
var cube=function(x){document.write("le cube de"+" "+x+" "+"est egale à"+" "+x*x*x );}//on va afficher le cube de x

var afficheImg=function(image){  
document.write('<img src="assets/js/papillon.jpg">');//il va permettre d'afficher une image
}
produit(3,4);
document.write("<br>");
cube(3);
document.write("<br>");
afficheImg(image);