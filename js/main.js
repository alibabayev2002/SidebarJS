Object.prototype.sidebar = function (width,selecter) {
    $(selecter).addClass('sidebar-invisible');
    const invisibleSidebar = $('.sidebar-invisible')
    invisibleSidebar.css('width' , width + 'px')
    invisibleSidebar.css('left' , '-' + width + 'px')
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



