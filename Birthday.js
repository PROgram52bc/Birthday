var screenWidth = screen.width;
var screenHeight = screen.height;
var pages = document.getElementsByClassName("page");
console.log(pages);
console.log(pages.length);
for (var n=0; n<pages.length; n++)
{
	console.log("entered loop");
	pages[n].setAttribute('style',"width:"+screenWidth+"px;height:"+screenHeight+"px");
	pages[n].setAttribute('style',"margin:auto;");
	pages[n].style.width=screenWidth+"px";
	pages[n].style.height=screenHeight+"px";
	console.log("Screenwidth: "+screenWidth);
}