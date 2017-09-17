window.onload = function(){
    var wrap = document.getElementById('wrap');
    var Img = document.getElementsByTagName('img');
    var imgLength = Img.length;
    var deg = 360/imgLength;
    
    var x,y,x_,y_,xL,yL;
    var rotX = -10,rotY = -0;
    
    var timer;
    
    for(var i = 0;i < imgLength;i++){
        Img[i].style.cssText = 'transform:rotateY('+ i*deg +'deg) translateZ(350px);transition:.8s ' + (imgLength-i)*0.1 +'s;';
        Img[i].setAttribute('ondragstart','return false');/*设置图片不可拖动*/
    }
    
    document.onmousedown = function(e){
        clearInterval(timer);
        var e = e || window.Event;
        x_ = e.clientX;
        y_ = e.clientY;
        this.onmousemove = function(e){
            var event = e || window.Event;/*浏览器兼容*/
            x = event.clientX;
            y = event.clientY;
            
            xL = x - x_;/**/
            yL = y - y_;
            rotY = rotY + xL/10
            rotX = rotX - yL/10;
            wrap.style.cssText = "transform: perspective(1000px) rotateX("+rotX+"deg) rotateY("+rotY+"deg) ; ";
            
            x_ = event.clientX;
            y_ = event.clientY;
        };
        this.onmouseup = function(){
            
            this.onmousemove = null;                     /*滑动惯性效果*/
            timer = setInterval(function(){
                xL *= 0.95;
                yL *= 0.95;
                if(Math.abs(xL) < 0.5 && Math.abs(yL) < 0.5){
                    clearInterval(timer);
                };
                rotY += xL * 0.1;
                rotX -= yL * 0.1;
                wrap.style.cssText = "transform: perspective(1000px) rotateX("+rotX+"deg) rotateY("+rotY+"deg) ; ";
                
            },30);               
        };
    };
    var autoplay = function(){
        rotY += .2;
        wrap.style.cssText = "transform: perspective(1000px) rotateX("+rotX+"deg) rotateY("+rotY+"deg) ; ";
    };
    
    setInterval(autoplay,30);
    
    
    
    
    
    
    
    
    
};