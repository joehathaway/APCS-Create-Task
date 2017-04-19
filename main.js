var dec = true;
var WIDTH = 400;
var HEIGHT = 400;
setSize(WIDTH, HEIGHT);

var WINNING_LINE_WIDTH = 10;
var WINNING_LINE_COLOR = Color.red;

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];





function start(){
    init();
    mouseClickMethod(check);
}

function init(){
    var a = new Rectangle(2, getWidth());
    var b = new Rectangle(2, getWidth());
    var c = new Rectangle(getHeight(), 2);
    var d = new Rectangle(getHeight(), 2);
    a.setPosition(getWidth() / 3, 0);
    b.setPosition(2 * getWidth() / 3, 0);
    c.setPosition(0, getHeight() / 3);
    d.setPosition(0, 2 * getHeight() / 3);
    add(a);
    add(b);
    add(c);
    add(d);
}

function check(e){
    if(dec == true){
        var x = new Text("X", "80pt Arial");
        dec = false;
        var y = 1;
    }else if(dec == false){
        var x = new Text("O", "80pt Arial");
        dec = true;
        var y = 2;
    }
    
    if(e.getX() > 0 && e.getX() < getWidth() / 3){
        if(e.getY() > 0 && e.getY() < getHeight() / 3 && board[0] == 0){
            x.setPosition(30, 100);
            add(x);
            board[0] = y;
        } 
        if(e.getY() > getHeight() /3 && e.getY() < 2 * getHeight() / 3 && board[3] == 0){
            x.setPosition(30, 225);
            add(x);
            board[3] = y;
        } 
        if(e.getY() > 2 * getHeight() / 3 && e.getY() < 3 * getHeight() / 3 && board[6] == 0){
            x.setPosition(30, 375);
            add(x);
            board[6] = y;
        } 
    } 
    if(e.getX() > getWidth() / 3 && e.getX() < 2 * getWidth() / 3){
        if(e.getY() > 0 && e.getY() < getHeight() / 3 && board [1] == 0){
            x.setPosition(170, 100);
            add(x);
            board[1] = y;
        } 
        if(e.getY() > getHeight() /3 && e.getY() < 2 * getHeight() / 3 && board[4] == 0){
            x.setPosition(165, 225);
            add(x);
            board[4] = y;
        } 
        if(e.getY() > 2 * getHeight() / 3 && e.getY() < 3 * getHeight() / 3 && board[7] == 0){
            x.setPosition(170, 375);
            add(x);
            board[7] = y;
        } 
        
        
    } 
    if(e.getX() > 2 * getWidth() / 3 && e.getX() < 3 * getWidth() / 3){
        if(e.getY() > 0 && e.gestY() < getHeight() / 3 && board [2] == 0){
            x.setPosition(290, 100);
            add(x);
            board[2] = y;
        } 
        if(e.getY() > getHeight() /3 && e.getY() < 2 * getHeight() / 3 && board[5] == 0){
            x.setPosition(290, 225);
            add(x);
            board[5] = y;
        } 
        if(e.getY() > getHeight() / 3 * 2 && e.getY() < getHeight() && board [8] == 0){
            x.setPosition(290, 375);
            add(x);
            board[8] = y;
        } 
        
        
    } 
    
   
    
}
s