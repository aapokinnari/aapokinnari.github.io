    var player = {
        x: 180,
        y: 180,
        w: 40,
        h: 40,
        speed: 5
    };

 var keysDown = {};

function movePlayer(direction){
        var oldX = player.x
        var oldY = player.y
        switch (direction){
            case "left":
                player.x -= player.speed;
                if(player.x<0){
                    player.x = 0
                }
                if(player.x == enemies[0].x+enemies[0].w){
                  console.log(player.x)    
                }
                for(k = 0; k < enemies.length; k++){
                     var distanceX = player.x-enemies[k].x
                     if(distanceX< enemies[k].w&&distanceX>0&&player.y+player.h>enemies[k].y&&player.y<enemies[k].y+enemies[k].h){
                        player.x = oldX;
                         console.log(player.y)
                     }
                }
                break;
            case "right":
                player.x += player.speed;
                if(player.x>360){
                    player.x = 360
                }
                for(k = 0; k < enemies.length; k++){
                     var distanceX = enemies[k].x - player.x
                     if(distanceX <player.w && distanceX>0&&player.y+player.h>enemies[k].y&&player.y<enemies[k].y+enemies[k].h){
                        player.x = oldX;
                     }
                }
                break;
            case "up":
                player.y -= player.speed;
                if(player.y<0){
                    player.y = 0
                }
                for(k = 0; k < enemies.length; k++){
                     var distanceY = player.y - enemies[k].y
                     if(distanceY < enemies[k].h&&distanceY>0&&player.x>enemies[k].x-player.w&&player.x<enemies[k].x+enemies[k].w){
                        player.y =  oldY;
                     }
                }
                break;
            case "down":
                player.y += player.speed;
                if(player.y>360){
                    player.y = 360
                }
                for(k = 0; k < enemies.length; k++){
                     var distanceY = enemies[k].y - player.y
                     if(distanceY < enemies[k].h&&distanceY>0&&player.x>enemies[k].x-player.w&&player.x<enemies[k].x+enemies[k].w){
                        player.y = oldY;
                     }
                }
                break;
        }
    }

function drawPlayer(context) {
    //    var x = player.x - (player.w/2);
      //  var y = player.y - (player.h/2);
        context.fillStyle = '#ff0000';
        context.fillRect(player.x,player.y,player.w,player.h);
    };

function changeSpeed() {
    player.speed = player.speed-1;
};

function reset() {
    player.x = 200;
    player.y = 200;
    player.w = 40;
    player.h = 40;
    player.speed = 10;
};