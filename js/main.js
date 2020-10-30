Object.prototype.sidebar = function (width,selecter) {
    $('head').append('<style>.sidebar{left:0px !important;transform: translateX(0px) !important;opacity: 1 !important;}.sidebar-invisible{transition: 400ms all;opacity: 0;top: 0;position: fixed;height: 100vh !important;border-right: 1px solid black;}.sidebar-body{transition: 400ms all;padding-left: 300px;}</style>')
    $(selecter).addClass('sidebar-invisible');
    const invisibleSidebar = $('.sidebar-invisible')
    invisibleSidebar.css('width' , width + 'px')
    invisibleSidebar.css('transform' , 'translate(-' + width + 'px)')
    this.click(function(){
        if($('body').hasClass('sidebar-body')){
            $('body').removeClass('sidebar-body')
            invisibleSidebar.removeClass('sidebar')
        }else{
            $('body').addClass('sidebar-body')
            invisibleSidebar.addClass('sidebar')
        }
    });
}
