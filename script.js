const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j']

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
    console.log("!!key",key)
  })

document.addEventListener('keydown', e => {
    // This line of code checks if the key is held down if it is it returns out of the function
    // If the line was not here and a key i held down it sounds bad
    if (e.repeat) return
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}