const b = document.body;
const onTriggers = document.getElementsByClassName("header__toggle-on");
const offTriggers = document.getElementsByClassName("header__toggle-off");
const lastOffset = 0;

for (let onTrigger of onTriggers) {
	onTrigger.addEventListener("click", function(){
		b.classList.add("header-panel--on");
	})
}

for (let offTrigger of offTriggers) {
	offTrigger.addEventListener("click", function(){
		b.classList.remove("header-panel--on");
	})
}

window.addEventListener("scroll", function(){

   	let currentOffset = window.pageYOffset || document.documentElement.scrollTop;

   	if (currentOffset < lastOffset && window.pageYOffset > 200){
		b.classList.add("header-onscroll--on"); 
   	} else if (currentOffset > (lastOffset + 10) || window.pageYOffset < 200) {
    	b.classList.remove("header-onscroll--on");
   	}

   	lastOffset = currentOffset;
}, false);


