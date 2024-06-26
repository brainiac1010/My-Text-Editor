
//Bold function
function toggleBold() {
    const editor = document.getElementById('editor');
    if (editor.style.fontWeight === 'bold') {
        editor.style.fontWeight = 'normal';
    } else {
        editor.style.fontWeight = 'bold';
    }
}

//italic function

function toggleItalic() {
    const editor = document.getElementById('editor');
    if (editor.style.fontStyle === 'italic') {
        editor.style.fontStyle = 'normal';
    } else {
        editor.style.fontStyle = 'italic';
    }
}

// underline function 
function toggleUnderline() {
    const editor = document.getElementById('editor');
    if (editor.style.textDecoration === 'underline') {
        editor.style.textDecoration = 'none';
    } else {
        editor.style.textDecoration = 'underline';
    }
}

// alingment function 
function alignText(alignment) {
    const editor = document.getElementById('editor');
    editor.style.textAlign = alignment;
}

//font size function
function setFontSize() {
    const fontSize = document.getElementById('fontSize').value + 'px';
    const editor = document.getElementById('editor');
    editor.style.fontSize = fontSize;
}

//text colore function
function setFontColor() {
    const fontColor = document.getElementById('fontColor').value;
    const editor = document.getElementById('editor');
    editor.style.color = fontColor;
}