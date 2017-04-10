
 var enemies = Array();
    
    var newInt = function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
    function newEnemy(){
        var coordx = newInt(20, 360);
        var coordy = newInt(20, 360);
        var Esped = 3;
     //   var newY = checkCoords(coordy)
        var a = {
        x: coordx,
        y: coordy,
        w: 40,
        h: 40,
        speed: Esped,
        suunta1: true,
        suunta2: false
        }; 
    enemies.push(a);
}

    function checkCoords(y){
    var ok = true
    if(y<player.y+10 && y > player.y-10){
    ok = false;
    }
    for(var s = 0; s < enemies.length;){
        if(y<enemies[s].y+10 && y>enemies[s].y-10){
        ok=false;
        s++;
        };
    };
        if(ok==true){return y}
        else{
            var a = newInt(10, 180)
            return arguments.callee(a)}
    };


    function moveEnemies() {
        for(var i = 0; i < enemies.length;){
        enemies[i].x = enemies[i].x - enemies[i].speed;
        i++;
        };
    }

    function moveEnemy(target) {
    if (target.suunta1) {
        target.x += target.speed;
        if (target.x > 360) {
            target.suunta1 = false;
            target.suunta2 = true;
        }
        if(target.x==player.x-target.w&&target.y-target.h<player.y&&target.y>player.y-target.h){
         target.suunta1 = false;
         target.suunta2 = true;   
        }
    }
    if (target.suunta2) {
        target.x -= target.speed;
        if (target.x < 0) {
            target.suunta1 = true;
            target.suunta2 = false;
        };
        if(target.x==player.x+target.w&&target.y>player.y-target.h&&target.y<player.y+target.h){
         target.suunta1 = true;
         target.suunta2 = false;   
        }   
    };
};

function drawEnemies(context) {
        while(enemies.length<4){
        newEnemy();
        };
        for(var s = 0; s<enemies.length;){
        context.fillStyle = '#fff';
        context.fillRect(enemies[s].x,enemies[s].y,enemies[s].w,enemies[s].h);
        s++;
        }
    };