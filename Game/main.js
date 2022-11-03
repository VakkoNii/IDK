var matrix = [	
    [0, 0, 1, 0, 0,0,0,0],
    [0, 0, 1, 0, 0,0,0,0],
    [0, 0, 0, 0, 0,0,0,0],
    [0, 0, 0, 0, 0,0,0,0],
    [0, 0, 0, 0, 0,0,0,0],
    [0, 0, 0, 0, 0,0,0,0],
    [0, 0, 0, 0, 0,0,0,0],
    [0, 0, 1, 0, 0,0,0,0],
    [0, 0, 1, 0, 0,0,0,0],

    
 ];
 

var side = 50
const grassArr = [];
 

    function setup() {
        // frameRate(10);
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');
      
        // var gr = new Grass(1,2);
        // var emptyCells = gr.chooseCell(0);
        // console.log(emptyCells);
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
            
                if (matrix[y][x] == 1) {
                    grassArr.push(new Grass(x,y))
                }
                   
            }
            
        }
      
    }   

 
 function draw(){
     
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
             if(matrix[y][x] == 1){
                 fill("green")
             }
             else{
                 fill("white")
             }
             rect(x * side, y * side, side, side)
        
        }
        
    }
    for (let i = 0; i< grassArr.length;i++){
        grassArr[i].mul();
    }
     
 }
