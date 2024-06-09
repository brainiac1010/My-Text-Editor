
//Bold function
function toggleBold() {
    const editor = document.getElementById('editor');
    if (editor.style.fontWeight === 'bold') {
        editor.style.fontWeight = 'normal';
    } else {
        editor.style.fontWeight = 'bold';
    }
}

//italic function add

function toggleItalic() {
    const editor = document.getElementById('editor');
    if (editor.style.fontStyle === 'italic') {
        editor.style.fontStyle = 'normal';
    } else {
        editor.style.fontStyle = 'italic';
    }
}