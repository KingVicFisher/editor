function update_cookie(key, value) {
	try	{
		cke = JSON.parse(document.cookie);
	}

	catch (err) {
		cke = {};
	}

	cke[key] = value;
	document.cookie = JSON.stringify(cke);
}

function get_cookie() {
	try	{
		cke = JSON.parse(document.cookie);
	}

	catch (err) {
		cke = {};
	}

	return cke;
}