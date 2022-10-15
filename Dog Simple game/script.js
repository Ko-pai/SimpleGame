let playerstate ="fall"
const dropDown = document.getElementById("animation")
dropDown.addEventListener('change',(e) =>{
    playerstate = e.target.value
})


const canvas =document.getElementById("canvas1")
const ctx = canvas.getContext('2d')
const  CANVAS_WIDTH = canvas.width = 600 ;
const  CANVAS_HEIGHT = canvas.height = 600;


const playerImage =new Image()
playerImage.src = "shadow_dog.png";
let spirteWidth = 575;
let spriteHeight = 523;



window.addEventListener('load',() =>{
    playerstate = "idle"
})
let gameFrame = 0 ;
let straggerFrames = 6;
const spriteAnimations = []
const animationStates =[
    {
        name : "idle",
        frame : 7,
    },
    {
        name:"jump",
        frame : 5,
    },
    {
        name:"fall",
        frame : 5,
    },
    {
        name:"run",
        frame : 7,
    },
    {
        name:"dizzy",
        frame : 10,
    },
    {
        name:"sit",
        frame : 5,
    },
    {
        name:"roll",
        frame : 7,
    },
    {
        name:"bite",
        frame : 7,
    },
    {
        name:"Cute",
        frame :12 ,
    },
    
    {
        name:"gethit",
        frame : 4,
    }, 
    
    
    
];
animationStates.forEach((state,index)=>{
    let frames = {
        loc:[]
    }
    for(let j = 0 ; j < state.frame ; j++ ){
        let positionX = j * spirteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x : positionX , y : positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations)

function animate(){
    ctx.clearRect( 0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    // ctx.fillRect(50,50,100,100)
    //ctx.drawImage(playerImage,sx,xy,sw,sh,dx,dy,dw,dh)
    let position = Math.floor(gameFrame / straggerFrames) % spriteAnimations[playerstate].loc.length;
     let frameX= spirteWidth * position ;
    let frameY = spriteAnimations[playerstate].loc[position].y;
    ctx.drawImage(playerImage, frameX ,frameY, spirteWidth ,  spriteHeight , 0, 0,spirteWidth,spriteHeight)
    /* sx=source x
        sy =source y
        sw =source width
        sh =source height

        dx = destination x
        dy
        dw
        dh
    */
   
    
    gameFrame++;
    requestAnimationFrame(animate)
};
animate()