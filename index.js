/**
 * Created by 夏天亦温暖 on 2017/8/8.
 */
window.onload=function () {

//定义计时器变量，以及计数变量，因为一开始显示的是索引为0的图片，所以count起始值为1;
    var timer;
    var count=1;
    var carousel=document.getElementsByClassName('carousel')[0];
    var div=carousel.getElementsByTagName('div');
    var span=document.getElementsByTagName('span');
    //起始轮播器状态
    span[0].style.color='#666';
    div[0].style.display='block';


    //遍历按钮和要轮播的元素,手动轮播，鼠标点击时清楚计时器，鼠标弹起时调用自动播放函数
    function handPlay(node) {
        var children=node[0].parentNode.children;
        for(var i=0;i<children.length;i++){
            (function (i) {
                span[i].onmousedown=function () {
                    clearInterval(timer);
                    for(var j=0;j<node.length;j++){
                       if(i==j){
                           node[j].style.display='block';
                           span[j].style.color='#666';
                       }else{
                           node[j].style.display='none';
                           span[j].style.color='#999';
                       }
                   }
                };
                span[i].onmouseup=function () {
                    count=i+1;//若是不加1，点击之后要计数器的二倍事件才开始自动轮播；
                    autoPlay(node);
                }
            })(i);
        }
    }
    //调用手动轮播函数
    handPlay(div);

  //传入需要显示的图片索引，并隐藏其他索引图片；
    function show(obj,control) {
        for(var i=0;i<obj.length;i++){
            control[i].style.color='#999';
            obj[i].style.display='none';
             control[count].style.color='#666';
            obj[count].style.display='block';
        }
    }

//自动轮播器
    function autoPlay(obj) {
        timer=setInterval(function () {
            if(count>=obj.length){
                count=0;
            }
            show(div,span);
            count++;

        },3000);
    }
    //调用自动轮播器函数
    autoPlay(div);
};

