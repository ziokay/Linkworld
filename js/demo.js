$(document).ready(function () {

    $('.parallax').parallax();

    var h = $(window).height();
    var w = $(window).width();
    $("#index-banner").css("height", h);

    $("#check").click(function(){
        var name=$("#name").value;
        var email=$("#email").value;
        var ret=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if((!name&&email)||(name==null||email==null)){
            alert("请填写正确的信息");
        }
        return false;
    })
})