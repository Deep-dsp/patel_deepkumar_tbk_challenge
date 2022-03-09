jQuery(function($){

   // Variables 
   var timeout = 3000;

   // Modal close var
   var modal_close = false;

   // Connect Elements
   var modal = $("#modal");
   var close_button = $("#close-button");
   var shave = $("#wood-shave");
   var chisle = $("#chisle");

   // Modal - open after 3 sec and not open once it is closed
   if(localStorage.getItem("restrict_modal") != 'true'){
      interval = setInterval(() => 
      {
         modal.addClass("open-modal");
      }, timeout);
   }

   // Close Modal
   function closeModal(){
      modal.removeClass("open-modal");
      clearInterval(interval);
      // save the value in localstorage
      localStorage.setItem("restrict_modal", 'true');
   }

   //  Close Modal when Clicks on Close Button
   close_button.on("click", closeModal);

   // Close Modal on hitting Esc Key
   $(window).keyup((e) => {
      if( e.keyCode == 27){
         closeModal();
      }
   })

   //if you click on anything except the modal itself or the "open modal" link, close the modal
   $(document).click(function(event) {
      if (!$(event.target).closest("#modal .modal-content-container").length) {
        closeModal();
      }
    });
   
   //  Form label animation on focus
   $('form input').on('focusin', function() {
      $(this).parent().find('label').addClass('active-label');
    });
     
    $('form input').on('focusout', function() {
      if (!this.value) {
        $(this).parent().find('label').removeClass('active-label');
      }
    });


   //  Main visuals scroll
   var position = modal.scrollTop(); 

   // should start at 0

   modal.scroll(function() {
      var scroll = modal.scrollTop();
      
      shave.css({
         'top': scroll
      })

      chisle.css({
         'bottom': scroll
      })
   });
});