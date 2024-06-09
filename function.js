
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