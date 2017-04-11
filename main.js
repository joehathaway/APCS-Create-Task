var decc = true;
var WIDTH = 400;
var HEIGHT = 400;
setSize(WIDTH, HEIGHT);

var WINNING_LINE_WIDTH = 10;
var WINNING_LINE_COLOR = Color.red;

function start(){
    
    
    

    
     mouseClickMethod(add);
}

function grid(){
    
    var a = new Rectangle(getWidth(),2);
    a.setColor(Color.black);
    a.setPosition(0, 2 * getWidth() / 3);
    add(a);
    
    var b = new Rectangle(getWidth(),2);
    b.setColor(Color.black);
    b.setPosition(0, getWidth() / 3);
    add(b);
    
    var c = new Rectangle(2, getHeight());
    c.setColor(Color.black);
    c.setPosition(getHeight() / 3, 0);
    add(c);
    
    var d = new Rectangle(2, getHeight());
    d.setColor(Color.black);
    d.setPosition(2 * getHeight() / 3, 0);
    add(d);
}

function add(e) {
    if(decc == true){
        var x = new Text("X", "Arial 70pt");
        decc = false;
    }else{
        var x = new Text("O", "Arial 70pt");
        decc = true;
    }
    
}
