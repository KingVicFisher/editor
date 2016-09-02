function Tag(name) {
	// ID denoted by "#"
	if (name[0] == "#") {
		this.main = document.getElementById(name.slice(1));
	}

	// class denoted by "."
	if (name[0] == ".") {
		this.main = document.getElementsByClassName(name.slice(1));
	}

	// Methods
	this.set = function(c) { this.main.innerHTML = c; }
	this.append = function(c) { this.main.innerHTML += c; }
	this.value = function() { return this.main.value; }
	this.show = function() { this.main.style.display = "block"; }
	this.hide = function() { this.main.style.display = "none"; }
	this.bug = function() { return this.main.style.display; }
	this.toggle = function() {
		if (this.main.style.display = "none"){
			this.main.style.display = "block";
		}

		else {
			this.main.style.display = "none";
		}
	}
}

function Variable(name) {
	this.name = name;
	this.set = function(v) { document.documentElement.style.setProperty(this.name, v) }
	this.get = function() { return document.documentElement.style.getPropertyValue(this.name); }
}

var $ = function(name) { return new Tag(name); }
var $v = function(name) { return new Variable(name); }
