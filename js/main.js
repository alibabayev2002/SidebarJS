Object.prototype.sidebar = function (width,selecter) {
    $(selecter).addClass('sidebar-invisible');
    $('.sidebar-invisible').css('width' , width + 'px')
    $('.sidebar-invisible').css('left' , '-' + width + 'px')
    this.click(function(){
        if($('body').hasClass('sidebar-body')){
            $('body').removeClass('sidebar-body')
            $('.sidebar-invisible').removeClass('sidebar')
        }else{
            $('body').addClass('sidebar-body')
            $('.sidebar-invisible').addClass('sidebar')
        }
    });
}



