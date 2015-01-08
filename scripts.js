var a = document.getElementById('about');
var t = document.getElementById('tagline');
a.style.display = 'none';

function vis() {
	if(t.style.display == 'none') {
		t.style.display = 'block';
		a.style.display = 'none';
	} else {
		t.style.display = 'none';
		a.style.display = 'block';
	}
}
