const boxEmoji = document.getElementById('box-emoji')
const boxText = document.getElementById('box-text')
const lastSpan = document.getElementById('last-span')


const emoji = ['🧑‍💻', '🖌️', '✍️', '🔥']
const text = ['Programmar', 'Designer', 'Content Writer', 'Motivator' ]
const skills = ['HTML', 'JavaScript', 'Express', 'Node']
const color = ['lighblue', 'green', 'wheat', 'magenta']
var count =0;


boxText.addEventListener('animationiteration', ()=> {
    if(count === 3){
        count = 0
    }
    count++;
    boxText.innerHTML = text[count]
    boxEmoji.innerHTML = emoji[count]
    lastSpan.innerHTML = skills[count]
    lastSpan.style.color = color[count]
})