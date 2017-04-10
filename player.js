    var player = {
        x: 180,
        y: 180,
        w: 40,
        h: 40,
        speed: 1
    };

 var keysDown = {};

function movePlayer(direction){
        switch (direction){
            case "left":
                player.x -= player.speed;
                if(player.x<20){
                    player.x = 20
                }
                break;
            case "right":
                player.x += player.speed;
                if(player.x>380){
                    player.x = 380
                }
                break;
            case "up":
                player.y -= player.speed;
                if(player.y<20){
                    player.y = 20
                }
                break;
            case "down":
                player.y += player.speed;
                if(player.y>380){
                    player.y = 380
                }
                break;
        }
        console.log(player.x)
    console.log(player.y)
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