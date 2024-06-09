document.getElementById('boldBtn').addEventListener('click', toggleBold);
document.getElementById('italicBtn').addEventListener('click', toggleItalic);
document.getElementById('underlineBtn').addEventListener('click', toggleUnderline);
document.getElementById('alignLeftBtn').addEventListener('click', () => alignText('left'));
document.getElementById('alignCenterBtn').addEventListener('click', () => alignText('center'));
document.getElementById('alignRightBtn').addEventListener('click', () => alignText('right'));
document.getElementById('fontSize').addEventListener('input', setFontSize);
document.getElementById('fontColor').addEventListener('input', setFontColor);