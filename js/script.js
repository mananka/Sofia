;(function($,window,document,undefined){

    function wpc_add_img_bg( img_sel, parent_sel){
    
   if (!img_sel) {
      console.info('no img selector');
      return false;
    }

   var $parent, _this;

   $(img_sel).each(function(){
      _this = $(this);
      $parent = _this.closest( parent_sel );
      $parent = $parent.length ? $parent : _this.parent();
      $parent.css( 'background-image' , 'url(' + this.src + ')' );
      _this.hide()
    });
 }
    $(window).on('load', function (){
        wpc_add_img_bg('.s-img-switch');
    });
    
})(jQuery,window,document);



