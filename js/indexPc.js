// JavaScript Document
//2018-06-04
//var httpHead="http://huan55.e1.luyouxia.net:31031/YLERP"
/*var yyHead="http://172.17.0.153:8080/YLERP"*/
// var testHttp="http://106.15.60.123:8086/YLERP"
var testHttp="http://172.21.0.5:8080/manager";
/*var host = window.location.host;
var testHttp="http://"+host+"/manager";*/
function buriedPoint(eventnumberData,channelnameData,sourcepageData,houseidData,machinetypeData,sourceData,customeridData) {
    // 埋点开始
    var buriedPoint= {
        "eventnumber": eventnumberData,
        "channelname": channelnameData ,
        "sourcepage": sourcepageData,
        "houseid": houseidData,
        "machinetype":machinetypeData,
        "source": sourceData,
        "customerid": customeridData
    };
    console.log("传参",buriedPoint)
    $.ajax({
        url:testHttp+"/visitor/record",
        type:"POST",
        headers:{"Content-Type":"application/json;charset=UTF-8"},
        data:JSON.stringify(buriedPoint),
        success:function(data){
            if(data.code==="000000"){
                localStorage.setItem("customeridLos",data.data.customerid);
                console.log("获取表示1",localStorage.getItem("customeridLos"))
            }
        }
    });
    // 埋点结束
}
$(function(){
    /*百度统计开始*/
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?38d9eb11188d6e2a0f813bcdc5549007";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    /*百度统计结束*/
    $(".hLogin").on("click",function(){
        window.location.href="index.html";
    });
    $(".indexBanner").delegate("img","click",function(){
        window.location.href="houseLists.html";
    });

    $(".imgMattes").on("click",function(){
        window.location.href="hoteJh.html";
    });

    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
        $(".mask").removeClass("disHide");
        $(".browserHint").removeClass("disHide")
    }
   $(".goodHouse ul li:eq(2)").addClass('marr0');
   $(".goodHouse ul li:eq(5)").addClass('marr0');
   $(".mouseEwm").on("mouseover",function(){
    $(".ewmPop").addClass('disShow')
   });
   $(".mouseEwm").on("mouseout",function(){
    $(".ewmPop").removeClass('disShow')
   });
   $(".mouseLang").on("mouseover",function(){
    $(".languePop").addClass('disShow')
   });
   $(".mouseLang").on("mouseout",function(){
    $(".languePop").removeClass('disShow')
   });
    $(".commRight a").on("mouseover",function(){
        $(this).children("span").addClass("disShow");
    });
    $(".commRight a").on("mouseout",function(){
        $(this).children("span").removeClass("disShow");
    });


   $(".languePop ul li").on("click",function(){
    $(".languePop").removeClass('disShow');
    $(this).addClass("labgActive");
    $(this).siblings('li').removeClass('labgActive')
   });
    $(".hoverArea").on("mouseover",function(){
        $(".chooseArea").addClass('disShow');
        $(".area i:nth-child(3)").addClass("downIcos")
    });
    $(".hoverArea").on("mouseout",function(){
        $(".chooseArea").removeClass('disShow');
        $(".area i:nth-child(3)").removeClass("downIcos")
    });

    $(".hlLeft dl dd").on("mouseover",function(){
        $(this).children("span").addClass("cl-edc")
        /*var ylclass=$(this).children("i").attr("class");
        var hoverClass=$(this).children("i").attr("class")+'Hover'
        /!*alert(hoverClass)*!/
        $(this).children("i").addClass(hoverClass).removeClass(ylclass)*/

    });
    $(".hlLeft dl dd").on("mouseout",function(){

        $(this).children("span").removeClass("cl-edc")
       /* if($(this).children("i").find("downBtnHover")){
            $(this).children("i").removeClass('downBtnHover').addClass("downBtn")
        }else{
            $(this).children("i").removeClass('upBtnHover').addClass("upBtn")
        }*/

    });

    $(".goodHouse ul").delegate("li img","mouseover",function () {
        $(this).siblings(".imgMatte").addClass("disShow")
    });
    $(".goodHouse ul").delegate(".imgMatte","mouseout",function () {
        $(this).removeClass("disShow")
    });



    $(".hoverTy").on("mouseover",function(){
        $(".chooseHt").addClass('disShow');
        $(".houseType i:nth-child(3)").addClass("downIcos")
    });
    $(".hoverTy").on("mouseout",function(){
        $(".chooseHt").removeClass('disShow');
        $(".houseType i:nth-child(3)").removeClass("downIcos")
    });

    $(".chooseHt").delegate("dd","mouseover",function(){
        $(".chooseHt dd").removeClass("labgActive");
        $(this).addClass("labgActive")
    });
    $(".chooseArea").delegate("dd","mouseover",function(){
        $(".chooseArea dd").removeClass("labgActive");
        $(this).addClass("labgActive")
    });

   $(".closeIco").on("click",function(){
    $(".fbMes").remove();
    $(".blank120").remove();
   });
    $(".clickBro").on("click",function(){
        $(".browserHint").addClass("disHide");
        $(".mask").addClass("disHide")
    });
   $(".goodHouse ul li img").on("mouseover",function(){
    $(this).siblings(".imgMatte").addClass('disShow')
   });
   $(".imgMatte").on("mouseout",function(){
    $(this).removeClass('disShow')
   });
   $(".hcLeft").on("mouseover",function(){
    $(this).siblings(".imgMattes").addClass('disShow')
   });

    $(".shcLeft").on("mouseover",function(){
        $(this).siblings(".imgMattels").addClass('disShow')
    });
    $(".imgMattels").on("mouseout",function(){
        $(this).removeClass('disShow')
    });
    $(".imgMattels").on("click",function(){
        window.location.href="hoteYlgj.html";
    });

    $(".shcLeft").on("mouseover",function(){
        $(this).siblings(".imgMattes").addClass('disShow')
    });

   $(".imgMattes").on("mouseout",function(){
    $(this).removeClass('disShow')
   });
    if($(window).scrollTop()==0){
        $('.indexTop').addClass('disHide')
    }
    $(window).scroll(function () {
      if($(window).scrollTop()==0){
       $('.indexTop').addClass('disHide')
     }else{
      $('.indexTop').removeClass('disHide')
     }
    });


    $(window).scroll(function () {
        if($(window).scrollTop()<246){
            $(".hlRight").removeClass("scorrTypes").addClass("scorrType")
        }else{
            $(".hlRight").removeClass("scorrType").addClass("scorrTypes")
        }
    });


   $(".indexTop").on("click",function(){
       $('html,body').animate({scrollTop:0}, 500);
      $(this).addClass('disHide')
   });
   $(".indexPhone").on("mouseover",function(){
    $('.phoneMes').addClass('disShow')
   });
   $(".indexPhone").on("mouseout",function(){
    $('.phoneMes').removeClass('disShow')
   });
   $(".indexWechat").on("mouseover",function(){
    $('.wechatPop').addClass('disShow')
   });
   $(".indexWechat").on("mouseout",function(){
    $('.wechatPop').removeClass('disShow')
   });
   $(".indexEmail").on("mouseover",function(){
    $('.emailMes').addClass('disShow')
   });
   $(".indexEmail").on("mouseout",function(){
    $('.emailMes').removeClass('disShow')
   });
    $(".clickAll").on("click",function(){
        $(this).addClass("disHide");
        $('.allMes').removeClass("disHide");
        $(".clickNo").removeClass("disHide")
    });
    $(".clickNo").on("click",function(){
        $(this).addClass("disHide");
        $('.allMes').addClass("disHide");
        $(".clickAll").removeClass("disHide")
    });
    $(".clickHouse").on("click",function(){
        $(this).children("b").addClass("bgUP");
        $(".hebMes dl dd ul").removeClass('disHide')
    });
    $(".hebMes dl dd ul").delegate('li','click',function(){ //房源委托选择户型

        $(this).addClass("bgecc242");
        $('.hebMes dl dd ul').addClass("disHide");
        $(".clickHouse p").html($(this).html());
        $(this).siblings('li').removeClass("bgecc242");

        $(".clickHouse").children("b").removeClass("bgUP")
    });

    $(".hebMes dl dd ul").delegate('li','mouseover',function(){ //房源委托鼠标放上户型
        $(this).addClass("bgecc242");
        $(this).siblings('li').removeClass("bgecc242")

    });
    $(".heHouse").on('mouseleave',function(){ //房源委托鼠标放上户型
        $(this).addClass("disHide")

    });


    $(".closeIcos").on('click',function(){
        $(".orderPop").addClass("disHide");
        $('.mask').addClass("disHide")
    });

    $('.orderMes dt span').on("click",function(){
        $(this).children('i').addClass('radioIcos');
        $(this).siblings('span').children('i').removeClass('radioIcos')
    });

    $(window).scroll(function(){
        var windowHeight = $(window).height();        //获取浏览器窗口高度
        var scrollHeight=$(window).scrollTop();
        var xHeight=scrollHeight-windowHeight;
        if(xHeight>2840){
            $(".hdFix").css("z-index","1");
        }


        if($(window).scrollTop() >= 1000){
            $(".scrollNav").removeClass("disHide");
            $(".hdInter").addClass("disHide");
            $(".hdFix").addClass("hdmRightfix")
        } else{

            $(".hdInter").removeClass("disHide");
            $(".scrollNav").addClass("disHide");
            $(".hdFix").removeClass("hdmRightfix")
        }
    });






   $(".swiper-container dl dd").on("mouseover",function(){
        $(this).children(".blBtn").addClass('disShow')
    });
    $(".swiper-container dl dd").on("mouseout",function(){
        $(this).children(".blBtn").removeClass('disShow')
    });

    $(".closeIcos").on('click',function(){
        $(".orderPop").addClass("disHide");
        $('.mask').addClass("disHide")
    });

    $(".hylgjList dd").on("mouseover",function(){
        $(this).children(".blBtn").addClass('disShow')
    });
    $(".hylgjList dd").on("mouseout",function(){
        $(this).children(".blBtn").removeClass('disShow')
    });


    $(".hdInter ul li").on("click",function(){ // 不浮动     浮动 $('.scCenter ul li a')
        var index = $(this).index(); //
        $('.scCenter ul li').eq(index).addClass('action').siblings().removeClass('action');
        $(this).addClass('action').siblings().removeClass('action')
    });
    $(".scCenter ul li").on("click",function(){ // 不浮动     浮动 $('.scCenter ul li a')
        var index = $(this).index(); //
        $('.hdInter ul li').eq(index).addClass('action').siblings().removeClass('action');
        $(this).addClass('action').siblings().removeClass('action')
    })
});

//订单列表页面开始
function exeData(num, type) {
    //页数
    numInfo(num);
    apartmentListInfo();
    loadData(num);
    loadpage();
}
function loadpage() {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    if(myPageCount=="0"){
        countindex=1;
    }
    $("#countindex").val(countindex);
    // alert(countindex);
    if(countindex>=2){
        $.jqPaginator('#pagination', {
            totalPages: parseInt($("#countindex").val()),
            visiblePages: parseInt($("#visiblePages").val()),
            currentPage: 1,
            first: '<li class="first bg"><a href="javascript:;">首页</a></li>',
            prev: '<li class="prev bg"><a href="javascript:;"><i class="arrow arrow2"></i></a></li>',
            next: '<li class="next bg"><a href="javascript:;"><i class="arrow arrow3"></i></a></li>',
            last: '<li class="last bg"><a href="javascript:;">尾页</a></li>',
            page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
            onPageChange: function (num, type) {
                if (type == "change") {
                    //选择页数刷新地图标点
                    remove_overlay();
                    //刷新列表信息
                    $("#listInfo").empty();
                    exeData(num, type);
                }
            }
        });
    }else{
        $("#pagination").empty();
    }





}

var areaData='';
var htypeData='';
var maxData='';
var minData='';
var sortData='';
var ascData='';
var plateId='';

function apartmentListInfo(){
    remove_overlay();
    //刷新列表信息
    $("#listInfo").empty();
    if(areaData=="000000"){
        areaData='';
    }
    if(htypeData=="000001"){
        htypeData='';
    }
    //alert("apartmentListInfo"+page);
    var params ={
        houseFindType:"yuezu",
        page:page,
        pagesize:"16",
        area:areaData,//areaData, //"310400",
        plate:plateId,//"INIT_IO_20180507_112",
        layout_shi:htypeData, //"one_shi",
        sortType:sortData,//"builtarea",
        maxPrice:maxData,//30000,
        minPrice:minData,//10000,
        orderBy:ascData,//"asc"
    };

    console.log(params);

    $.ajax({
        type:"post",
        dataType :"json",
        url:testHttp+"/apartment/apartmentList",
        async:false,
        data:JSON.stringify(params),
        headers:{"Content-Type":"application/json; charset=utf-8"},
        success:function(data){

            //判断code是否为成功。
            var code = data.code ;
            if(code=="000000"){
                //alert(data.data.apartmentList.length)
                   /*$(".pitera").addClass("disHide")*/
                    var dataInfo = data.data ;
                    //总数量
                    var total = dataInfo.totalResult;
                    //当前页数
                    var page = dataInfo.currentPage;
                    //区域
                    var area = dataInfo.area ;
                    //板块
                    var plate = dataInfo.plate;
                    //最大金额
                    var maxPrice = dataInfo.maxPrice;
                    //最小金额
                    var minPrice = dataInfo.minPrice;
                    //房型
                    var layout_shi = dataInfo.layout_shi ;
                    //排序
                    var sortType = dataInfo.sortType ;
                    //排序方式
                    var orderBy = dataInfo.orderBy ;
                    /*alert("total:"+total+";"+"page:"+page+";"+"area:"+area+";"+
                        "plate:"+plate+";"+"maxPrice:"+maxPrice+";"+"minPrice:"+minPrice+";"+
                        "layout_shi:"+layout_shi+";"+"sortType:"+sortType+";"+"orderBy:"+orderBy);*/
                    //改变全局变量总数量
                    totalResult = total;

                    //存放经纬度集合
                    var localhostList=[];
                    //地图开始
                   //每页的结果集合
                   var apartmentList = dataInfo.apartmentList;
                   if(apartmentList!=null&&apartmentList!=undefined&&apartmentList.length>0){
                       $(".noMes").addClass("disHide");
                       $(".hasMes").removeClass("disHide");
                       $(".pageModule").removeClass("disHide");
                       for(var i=0;i<apartmentList.length;i++){
                           //经度
                           var longitude =  apartmentList[i].longitude ;
                           //纬度
                           var latitude = apartmentList[i].latitude ;
                           //判断是否有相同的经纬度
                           var longlatTude=longitude+","+latitude;
                           //console.log("原来值："+longlatTude);
                           for(j=0;j<localhostList.length;j++){
                               if(localhostList[j]==longlatTude){
                                   var suiji = Math.random()/1000;
                                   //console.log("随机值："+suiji);
                                   longitude = Number(longitude)+Number(suiji);
                                   latitude = Number(latitude)+Number(suiji);
                                   longlatTude = longitude+","+latitude ;
                                  // console.log("现在值："+longlatTude);
                               }
                           }
                           localhostList.push(longlatTude);
                           var listImg="";
                           if(!(apartmentList[i].picturesImgUrl)){
                               listImg='<img src="img/noList.png">'
                           }else{
                               listImg='<img src="'+apartmentList[i].picturesImgUrl+'">'
                           }

                          var hs=apartmentList[i].houseStatus;
                          var _houseStatus='';
                           if(hs=="配置中"){
                               _houseStatus='<div class="hdSign">'+apartmentList[i].houseStatus+'</div>'
                           }

                           var liList='<li name="'+longitude+','+latitude+'" ><a href="houseDetail.html?houseid='+apartmentList[i].houseId+'"><div class="hlImg">'+_houseStatus+''+listImg+'<div class="housePrice"><span>'+apartmentList[i].price+'</span><label>/月</label></div></div><div class="houseMes"><span class="hmName"><label>'+apartmentList[i].area+'</label><label>'+apartmentList[i].plate+'</label>'+apartmentList[i].neighbourhood+apartmentList[i].shi+'</span><p class="hsDetail"><i class="hareaIco"></i><span class="hsMes"><label>'+apartmentList[i].shi+apartmentList[i].ting+apartmentList[i].wei+'</label><b>|</b><label>'+apartmentList[i].builtarea+'</label><b>|</b><label>'+apartmentList[i].floor+'/'+apartmentList[i].totalfloor+'层</label></span></p><p class="hsDetail"><i class="hplaceIco"></i><label class="hsMes">'+apartmentList[i].trafficsituation+'</label></p> </div></a></li>';
                           $("#listInfo").append(liList);

                           var imgWith=$("#listInfo li img").width();
                           var imgHeight=imgWith*1333/2000;

                           $("#listInfo li img").height(imgHeight);


                           //经度纬度判断后添加标注
                           if(longitude!=null&&longitude!=undefined&&longitude!=''
                               &&latitude!=null&&latitude!=undefined&&latitude!=''){
                               //点击图片展示信息
                              // var sContent ='<a href="houseDetail.html?houseid='+apartmentList[i].houseId +'" class="mapHouse"><img src="'+apartmentList[i].picturesImgUrl+'"><p class="marp"><span>'+apartmentList[i].area+apartmentList[i].plate+apartmentList[i].neighbourhood+apartmentList[i].shi+'</span><span>'+apartmentList[i].price+'/月</span></p><p><label><b>'+apartmentList[i].area+'<!--长宁--></b><b>'+apartmentList[i].plate+'<!--中山公园--></b></label><label><b>'+apartmentList[i].shi+apartmentList[i].ting+apartmentList[i].wei+'</b><b>'+apartmentList[i].builtarea+'</b></label></p></a>';
                               var imgUrl='';
                               if(!(apartmentList[i].picturesImgUrl)){
                                 imgUrl='img/noList.png'
                               }else{
                                   imgUrl=apartmentList[i].picturesImgUrl
                               }
                               var sContent='<div class="mapModule"><a href="houseDetail.html?houseid='+apartmentList[i].houseId +'"><img src="'+imgUrl+'"><span class="mmMoney">'+apartmentList[i].price+'<label>/月</label></span><div class="mmInfo"><span class="mmiName"><label>'+apartmentList[i].area+'</label><label>'+apartmentList[i].plate+'</label>'+apartmentList[i].neighbourhood+apartmentList[i].shi+'</span><div class="mmiPlace"><label>'+apartmentList[i].area+'</label><label>'+apartmentList[i].plate+'</label><span>'+apartmentList[i].builtarea+'</span><span>'+apartmentList[i].shi+apartmentList[i].ting+apartmentList[i].wei+'</span></div></div></a></div>';

                               var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象

                               var point = new BMap.Point(longitude,latitude);
                               var name =longitude+","+latitude;
                               addMarker(point,infoWindow,name);
                           }

1
                       }

                   }else{
                       $(".noMes").removeClass("disHide");
                       $(".hasMes").addClass("disHide");
                       $(".pageModule").addClass("disHide")
                   }
                    //地图结束
                    //嵌入列表数据结束
            }
        }
    })
}


function numInfo(num){
    //改变全局变量页数
    page = num ;
    console.log(page);
}
//订单列表页面结束