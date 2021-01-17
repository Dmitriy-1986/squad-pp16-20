$(document).ready(function() {
	var oneAtTime = 1;
  var inDesignMode = 0; // replace zero with following string to make it look for edit mode in SharePoint environment: document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
  if (inDesignMode !== "1") {
	  $('.panel').hide();
	if (oneAtTime == 1) {
		$('.accordion').click(function() {
			if ($(this).hasClass("active")) {
			$('.accordion').removeClass('active');
			$('.panel').slideUp(200);
			} else {
			$('.accordion').removeClass('active');
			$('.panel').slideUp(200);
			$(this).addClass('active');
			$(this).next().slideDown(200);
			}
			return false;
    	});
	} else {
		$('.accordion').click(function() {
			if ($(this).hasClass("active")) {
			$(this).removeClass('active');
			$(this).next().slideUp(200);
			} else {
			$(this).addClass('active');
			$(this).next().slideDown(200);
			}
			return false;
		});
	}
  } else {
	  $('.panel').show();
  }
});