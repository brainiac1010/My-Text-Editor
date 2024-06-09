
//Bold function
function toggleBold() {
    const editor = document.getElementById('editor');
    if (editor.style.fontWeight === 'bold') {
        editor.style.fontWeight = 'normal';
    } else {
        editor.style.fontWeight = 'bold';
    }
}