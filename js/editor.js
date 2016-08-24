function formatText(tag) {
	replaceSelectedText("<" + tag + ">" + getText() + "</" + tag + ">");
}

function getText() {
	var selectedText;

	if (window.getSelection) {
		selectedText = window.getSelection();	
	}

	else if (document.selection) {
		selectedText = document.selection.createRange().text;
		
	}

	else {
		return "";
		console.log("error");
	}
	
	return selectedText;
}

function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}
