$(document).ready(function(){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);

    var keysDown = {};
    
    window.addEventListener('keydown', function(e){
        e.preventDefault();
        keysDown[e.keyCode] = true;
    });
    
    window.addEventListener('keyup', function(e){
        e.preventDefault();
        delete keysDown[e.keyCode];
    })

    var render = function(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,400,400);
    
    drawEnemies(ctx);
    drawPlayer(ctx);
    };
    
    function update(){
        if(38 in keysDown){
            movePlayer('up');
        }
        if(40 in keysDown){
            movePlayer('down');
        }
        if(37 in keysDown){
            movePlayer('left');
        }
        if(39 in keysDown){
            movePlayer('right');
        }
        moveEnemy(enemies[0]);
        moveEnemy(enemies[1]);
        moveEnemy(enemies[2]);
        moveEnemy(enemies[3]);
    };
    
    function main(){
        render();
        update();
        requestAnimationFrame(main);
    }
    main();
                      })