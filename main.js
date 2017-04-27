var dec = true;
var WIDTH = 400;
var HEIGHT = 400;
var menu = [];
var dec2 = true;
var dec3 = 0;
var dec4 = true;
var moveCount = 0;
setSize(WIDTH, HEIGHT);

var WINNING_LINE_WIDTH = 10;
var WINNING_LINE_COLOR = Color.red;

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function start(){
    initMenu();
    mouseClickMethod(check);
    
}

function move(){
    var x = new Text("O", "80pt Arial");
    if(dec4 == true){
        if(board[0] == 2 && board[1] == 2 || board[5] == 2 && board[8] == 2 || board[6] == 2 && board[4] == 2){
            if(board[2] == 0){
                add2(x);
                dec4 = false;
            }
        }else if(board[2] == 2 && board[1] == 2 || board[3] == 2 && board[6] == 2 || board[6] == 2 && board[4] == 2){
            if(board[0] == 0){
                add0(x);
                dec4 = false;
            }
        }else if(board[6] == 2 && board[7] == 2 || board[2] == 2 && board[5] == 2 || board[0] == 2 && board[4] == 2){
            if(board[8] == 0){
                add8(x);
                dec4 = false;
            }
        }else if(board[0] == 2 && board[3] == 2 || board[7] == 2 && board[8] == 2 || board[2] == 2 && board[4] == 2){
            if(board[6] == 0){
                add6(x);
                dec4 = false;
            }
        }else if(board[0] == 2 && board[2] == 2 || board[4] == 2 && board[7] == 2){
            if(board[1] == 0){
                add1(x);
                dec4 = false;
            }
        }else if(board[3] == 2 && board[5] == 2 || board[1] == 2 && board[7] == 2){
            if(board[4] == 0){
                add4(x);
                dec4 = false;
            }
        }else if(board[6] == 2 && board[8] == 2 || board[1] == 2 && board[4] == 2){
            if(board[7] == 0){
                add7(x);
                dec4 = false;
            }
        }else if(board[0] == 2 && board[6] == 2 || board[4] == 2 && board[5] == 2){
            if(board[3] == 0){
                add3(x);
                dec4 = false;
            }
        }else if(board[2] == 2 && board[8] == 2 || board[3] == 2 && board[4] == 2){
            if(board[5] == 0){
                add5(x);
                dec4 = false;
            }
        }
    }
    
    if(dec4 == true){
        if(board[0] == 1 && board[1] == 1 || board[5] == 1 && board[8] == 1 || board[6] == 1 && board[4] == 1){
            if(board[2] == 0){
                add2(x);
                dec4 = false;
            }
        }else if(board[2] == 1 && board[1] == 1 || board[3] == 1 && board[6] == 1 || board[8] == 1 && board[4] == 1){
            if(board[0] == 0){
                add0(x);
                dec4 = false;
            }
        }else if(board[6] == 1 && board[7] == 1 || board[2] == 1 && board[5] == 1 || board[0] == 1 && board[4] == 1){
            if(board[8] == 0){
                add8(x);
                dec4 = false;
            }
        }else if(board[0] == 1 && board[3] == 1 || board[7] == 1 && board[8] == 1 || board[2] == 1 && board[4] == 1){
            if(board[6] == 0){
                add6(x);
                dec4 = false;
            }
        }else if(board[0] == 1 && board[2] == 1 || board[4] == 1 && board[7] == 1){
            if(board[1] == 0){
                add1(x);
                dec4 = false;
            }
        }else if(board[3] == 1 && board[5] == 1 || board[1] == 1 && board[7] == 1){
            if(board[4] == 0){
                add4(x);
                dec4 = false;
            }
        }else if(board[6] == 1 && board[8] == 1 || board[1] == 1 && board[4] == 1){
            if(board[7] == 0){
                add7(x);
                dec4 = false;
            }
        }else if(board[0] == 1 && board[6] == 1 || board[4] == 1 && board[5] == 1){
            if(board[3] == 0){
                add3(x);
                dec4 = false;
            }
        }else if(board[2] == 1 && board[8] == 1 || board[3] == 1 && board[4] == 1){
            if(board[5] == 0){
                add5(x);
                dec4 = false;
            }
            
            }else if(board[0] == 1 && board[8] == 1){
            if(board[5] == 0){
                add5(x);
                dec4 = false;
            }
            
            }else if(board[0] == 1 && board[8] == 1){
            if(board[5] == 0){
                add5(x);
                dec4 = false;
            }
            
            }else if(board[6] == 1 && board[2] == 1){
            if(board[5] == 0){
                add5(x);
                dec4 = false;
            }
            
            
        }
    
    }
    
    if(dec4 == true){
        if(moveCount == 1){
            if(board[4] != 1){
                add4(x);
            }else{
                var a = Randomizer.nextInt(1,4);
                if(a == 1){
                    add0(x);
                }else if(a == 2){
                    add2(x);
                }else if(a == 3){
                    add6(x);
                }else{
                    add8(x);
                }
            }
        }
        if(moveCount == 2){
            if(board[0] == 1 && board[5] == 1 && board[4] == 2){
                add2(x);
            }else if(board[0] == 1 && board[8] == 1 && board[4] == 2){
                add2(x);
            }
            
            
        }
        if(moveCount == 3){
            
        }
        if(moveCount == 4){
            if(board[0] == 1 && board[1] == 1 && board[2] == 2 && board[3] == 2 && board[4] == 2 && board[5] == 1 && board[6] == 1){
                if(Randomizer.nextBoolean() == true){
                    add7(x);
                }else{
                    add8(x);
                }
            }else if(board[0] == 1 && board[1] == 0 && board[2] == 1 && board[3] == 1 && board[4] == 2 && board[5] == 2 && board[6] == 2 && board[8] == 1){
                if(Randomizer.nextBoolean() == true){
                    add1(x);
                }else{
                    add7(x);
                }
            }
        }
    }
    checkWin();
    dec4 = true;
    stopTimer(move);
}

function initMenu(){
    var computer1 = new Rectangle(200, 50);
    var computer2 = new Rectangle(196, 46);
    var computer3 = new Text("2 PLAYER", "20pt Arial");
    computer1.setPosition(getWidth() / 2 - 100, 100);
    computer2.setPosition(computer1.getX() + 2, computer1.getY() + 2);
    computer3.setPosition(computer2.getX() + 33, computer2.getY() + 32);
    computer2.setColor(Color.white);
    add(computer1);
    add(computer2);
    add(computer3);
    menu.push(computer1);
    menu.push(computer2);
    menu.push(computer3);
    
    var welcome = new Text("Welcome, Please choose 1 Player or 2 Player", "12pt arial");
    welcome.setPosition(35, 50);
    add(welcome);
    menu.push(welcome);
    
    var player1 = new Rectangle(200, 50);
    var player2 = new Rectangle(196, 46);
    var player3 = new Text("1 PLAYER", "20pt Arial");
    player1.setPosition(getWidth() / 2 - 100, 200);
    player2.setPosition(player1.getX() + 2, player1.getY() + 2);
    player3.setPosition(player2.getX() + 33, player2.getY() + 32);
    player2.setColor(Color.white);
    add(player1);
    add(player2);
    add(player3);
    menu.push(player1);
    menu.push(player2);
    menu.push(player3);
    
    var start1 = new Rectangle(200, 50);
    var start2 = new Rectangle(196, 46);
    var start3 = new Text("START", "20pt Arial");
    start1.setPosition(getWidth() / 2 - 100, 300);
    start2.setPosition(start1.getX() + 2, start1.getY() + 2);
    start3.setPosition(start2.getX() + 55, start2.getY() + 33);
    start2.setColor(Color.white);
    add(start1);
    add(start2);
    add(start3);
    menu.push(start1);
    menu.push(start2);
    menu.push(start3);
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

function delay(){
    dec2 = false;
    stopTimer(delay);
}

function add0(x){
    x.setPosition(30, 100);
    add(x);
    board[0] = 2;
}

function add1(x){
    x.setPosition(170, 100);
                add(x);
                board[1] = 2;
}
function add2(x){
    x.setPosition(290, 100);
                add(x);
                board[2] = 2;
}
function add3(x){
    x.setPosition(30, 225);
    add(x);
    board[3] = 2;
}
function add4(x){
    x.setPosition(165, 225);
    add(x);
    board[4] = 2;
}

function add5(x){
    x.setPosition(290, 225);
                add(x);
                board[5] = 2;
}

function add6(x){
    x.setPosition(30, 375);
                add(x);
                board[6] = 2;
}

function add7(x){
    x.setPosition(170, 375);
                add(x);
                board[7] = 2;
}

function add8(x){
    x.setPosition(290, 375);
                add(x);
                board[8] = 2;
}

function check(e){
    if(dec2  == true){
        if(e.getX() > getWidth() / 2 - 98 && e.getX() < getWidth() / 2 + 98 && e.getY() > 300 && e.getY() < 350){
            for(var i = 0; i < menu.length; i++){
                remove(menu[i]);
                init();
                setTimer(delay, 100);
            }
        }
        if(e.getX() > getWidth() / 2 - 98 && e.getX() < getWidth() / 2 + 98 && e.getY() > 100 && e.getY() < 150){
            menu[1].setColor(Color.green);
            menu[5].setColor(Color.white);
            dec3 = 1;
        }
        if(e.getX() > getWidth() / 2 - 98 && e.getX() < getWidth() / 2 + 98 && e.getY() > 200 && e.getY() < 250){
            menu[5].setColor(Color.green);
            menu[1].setColor(Color.white);
            dec3 = 2;
        }
    }
    
    if(dec2 == false){
        if(dec == true){
            var x = new Text("X", "80pt Arial");
            if(dec3 == 1){
                dec = false;
            }
            var y = 1;
        }else if(dec == false && dec3 == 1){
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
            if(e.getY() > 0 && e.getY() < getHeight() / 3 && board [2] == 0){
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
        moveCount++;
        if(dec3 == 2){
            setTimer(move, 100);
        }
    }
}

function checkWin(){
        if(board[0] == 1 && board[1] == 1 && board[2] == 1 || board[0] == 2 && board[1] == 2 && board[2] == 2){
            var z = new Rectangle(380, 20);
            z.setColor(Color.red);
            z.setPosition(10, 50);
            add(z);
        }
        
        if(board[0] == 2 && board[1] == 2 && board[2] == 2 || board[0] == 1 && board[1] == 1 && board[2] == 1){
            var z = new Rectangle(380, 20);
            z.setColor(Color.red);
            z.setPosition(10, 50);
            add(z);
        }
        
        if(board[3] == 1 && board[4] == 1 && board[5] == 1 || board[3] == 2 && board[4] == 2 && board[5] == 2){
            var z = new Rectangle(380, 20);
            z.setColor(Color.red);
            z.setPosition(10, getHeight() / 2 - 25);
            add(z);
        }
        
        if(board[3] == 2 && board[4] == 2 && board[5] == 2 || board[3] == 1 && board[4] == 1 && board[5] == 1){
            var z = new Rectangle(380, 20);
            z.setColor(Color.red);
            z.setPosition(10, getHeight() / 2 - 25);
            add(z);
        }
        
        if(board[6] == 1 && board[7] == 1 && board[8] == 1 || board[6] == 2 && board[7] == 2 && board[8] == 2){
            var z = new Rectangle(380, 20);
            z.setColor(Color.red);
            z.setPosition(10, 2 * getHeight() / 2 - 75);
            add(z);
        }
        
        if(board[6] == 2 && board[7] == 2 && board[8] == 2 || board[6] == 1 && board[7] == 1 && board[8] == 1){
            var z = new Rectangle(380, 20);
            z.setColor(Color.red);
            z.setPosition(10, 2 * getHeight() / 2 - 75);
            add(z);
        }
        
        if(board[0] == 1 && board[3] == 1 && board[6] == 1 || board[0] == 2 && board[3] == 2 && board[6] == 2){
            var z = new Rectangle(20, 380);
            z.setColor(Color.red);
            z.setPosition(55 ,15) ;
            add(z);
        }
        
        if(board[0] == 2 && board[3] == 2 && board[6] == 2 || board[0] == 1 && board[3] == 1 && board[6] == 1){
            var z = new Rectangle(20, 380);
            z.setColor(Color.red);
            z.setPosition(55 ,15) ;
            add(z);
        }
        
        if(board[1] == 1 && board[4] == 1 && board[7] == 1 || board[1] == 2 && board[4] == 2 && board[7] == 2){
            var z = new Rectangle(20, 380);
            z.setColor(Color.red);
            z.setPosition(195 ,15) ;
            add(z);
        }
        
        if(board[1] == 2 && board[4] == 2 && board[7] == 2 || board[1] == 1 && board[4] == 1 && board[7] == 1){
            var z = new Rectangle(20, 380);
            z.setColor(Color.red);
            z.setPosition(195 ,15) ;
            add(z);
        }
        
        if(board[2] == 1 && board[5] == 1 && board[8] == 2 || board[2] == 2 && board[5] == 2 && board[8] == 2){
            var z = new Rectangle(20, 380);
            z.setColor(Color.red);
            z.setPosition(315 ,15) ;
            add(z);
        }
        
        if(board[2] == 2 && board[5] == 2 && board[8] == 2 || board[2] == 1 && board[5] == 1 && board[8] == 1){
            var z = new Rectangle(20, 380);
            z.setColor(Color.red);
            z.setPosition(315 ,15) ;
            add(z);
        }
        
        if(board[0] == 1 && board[4] == 1 && board[8] == 1 || board[0] == 2 && board[4] == 2 && board[8] == 2){
            var z = new Rectangle(20, 440);
            z.setRotation(138);
            z.setColor(Color.red);
            z.setPosition(185 ,-25) ;
            add(z);
        }
        
        if(board[0] == 2 && board[4] == 2 && board[8] == 2 || board[0] == 1 && board[4] == 1 && board[8] == 1){
            var z = new Rectangle(20, 440);
            z.setRotation(138);
            z.setColor(Color.red);
            z.setPosition(185 ,-25) ;
            add(z);
        }
        
        if(board[6] == 1 && board[4] == 1 && board[2] == 2 || board[6] == 2 && board[4] == 2 && board[2] == 2){
            var z = new Rectangle(20, 440);
            z.setRotation(45);
            z.setColor(Color.red);
            z.setPosition(185 ,-25) ;
            add(z);
        }
    }