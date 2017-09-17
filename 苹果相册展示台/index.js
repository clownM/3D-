(function(){
    var img = document.getElementsByTagName('img');
    var imgLen = img.length;
    var midindex = 4;
    
    for(var i = 0;i <= imgLen;i++){
        
        img[i].index = i;
        var leftv =130+100*i;
        img[i].style.cssText = "left:"+leftv+"px;";
        img[i].onclick = function(){
            var nindex = this.index;
            for(var j = 0;j < imgLen;j++){
                img[j].style.left = img[j].offsetLeft-100*(nindex-midindex) +'px';
                if(j < nindex){
                    img[j].className = "left";
                }else if(j == nindex){
                    img[j].className = "middle";
                }else{
                    img[j].className = "right";
                }
            }
            midindex = nindex;
        };
    };
    
    
})();