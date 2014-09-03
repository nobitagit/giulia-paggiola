+(function(){

	var hero = document.getElementById('hero'),
		squared = document.getElementById('squared'),
		wH;

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	function getHeight(){
		wH = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
	}

	function setSizes(){
		getHeight();
		squared.style.height = wH + 'px';
		hero.style.height = (wH / 100 * 130) + 'px';
	}

	var resizer = debounce(function() {
		setSizes();
	}, 500);

	window.addEventListener('resize', resizer);

	setSizes();

	console.log("%cHi! Interested in how this site is made? \nCheck out the public source on Github @ https://github.com/nobitagit/giulia-paggiola", "color: blue; font-size: x-large");

})();