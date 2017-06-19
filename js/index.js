/**
 * Created by LiH on 2016/6/20.
 */
$(function () {
    var isMobile=function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }();
    console.log(isMobile?"mobile":"pc");

    window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };

    var deg,
        target=$("#rotateTest"),
        targetDeg,
        rotateSpeed,
        acceleration,
        rotateNum=0,
        step,
        RAFContant,
        rotateElm=function () {
            rotateNum+=1;
            rotateSpeed-=acceleration;
            target.css("transform","rotateZ("+(deg+=rotateSpeed)+"deg)");
            if(rotateNum<=step){
                RAFContant=requestAnimationFrame(rotateElm);
            }else{
                cancelAnimationFrame(RAFContant);
            }
        };

    function gameStart() {
        deg=rotateNum=0;
        rotateSpeed=20;
        targetDeg=3600+90;
        step=targetDeg/rotateSpeed*2;
        acceleration=rotateSpeed/step;
        requestAnimationFrame(rotateElm);
        console.log(targetDeg,step,acceleration);
    }

    target.on(isMobile?"touchend":"click",gameStart);


      /*
      var guagua={
        stage:null,
        stageX:0,
        stageY:0,
        stageWith:0,
        stageHeight:0,
        stageCtx:null,
        controller:function (width,height) {
            this.stage=$("#stage");
            this.stageX=this.stage.offset().left;
            this.stageY=this.stage.offset().top;
            this.stageWith=this.stage[0].width=width;
            this.stageHeight=this.stage[0].height=height;
            this.stageCtx=this.stage[0].getContext('2d');
            this.stageCtx.fillStyle = "#ddd";
            this.stageCtx.fillRect(0, 0, width, height);
            this.stageCtx.globalCompositeOperation = 'destination-out';
            this.getStageXY();
            this.bindEvent();
        },
        getStageXY:function () {
            guagua.stageX=guagua.stage.offset().left;
            guagua.stageY=guagua.stage.offset().top;
        },
        drawPoint:function (pointX,pointY) {
            guagua.stageCtx.beginPath();
            guagua.stageCtx.arc(pointX,pointY,30,0,Math.PI*2,true);
            guagua.stageCtx.closePath();
            guagua.stageCtx.fillStyle="#000";
            guagua.stageCtx.fill();
        },
        bindEvent:function () {
            var pointX,pointY;
            guagua.stage
                .on(isMobile?"touchstart":"mousedown",function () {
                    guagua.stage.drawn=true;
                })
                .on(isMobile?"touchmove":"mousemove",function (e) {
                    e.preventDefault();
                    isMobile?e=e.originalEvent.touches[0]:"";
                    if(guagua.stage.drawn){
                        pointX=e.clientX-guagua.stageX;
                        pointY=e.clientY-guagua.stageY;
                        guagua.drawPoint(pointX,pointY);
                    }
                })
                .on(isMobile?"touchend":"mouseup",function () {
                    guagua.stage.drawn=false;
                    if(guagua.howMuchLeft()>55){
                        guagua.stage.fadeOut();
                    }
                    console.log(guagua.howMuchLeft());
                });

            $(window).resize(guagua.getStageXY);
        },
        howMuchLeft:function () {
            var pixles = guagua.stageCtx.getImageData(0, 0, guagua.stageWith, guagua.stageHeight).data,
                transPixs = 0;
            for (var i = 0; i<pixles.length; i += 4) {
                var a = pixles[i + 3];
                if (a < 255) {
                    transPixs+=1;
                }
            }
            return ((transPixs / pixles.length)  * 400).toFixed(1);
        }
    };
    guagua.controller(414,288);
*/
});