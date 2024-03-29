/*!
 * Copyright 2013 Justinmind. All rights reserved.
 */

(function (window, undefined) {
  var $simulation = jQuery("#simulation");
  $simulation
  .on("click", ".date .icon", function(event) {
    var $firer = jQuery(event.target || event.srcElement);
    if(typeof($firer.attr("readonly")) === "undefined") {
      $firer.prev().find("input").datepicker({"showOn": "button"}).next().click();
    }
  })
  .on("click", ".time .icon", function(event) {
    var $firer = jQuery(event.target || event.srcElement);
    if(typeof($firer.attr("readonly")) === "undefined") {
      $firer.prev().find("input").timepicker({"showOn": "button"}).next().click();
    }
  })
  .on("click", ".datetime .icon", function(event) {
    var $firer = jQuery(event.target || event.srcElement);
    if(typeof($firer.attr("readonly")) === "undefined") {
      $firer.prev().find("input").datetimepicker({"showOn": "button"}).next().click();
    }
  })
  .on("click", ".text, .password", function(event){
    var $firer = jQuery(event.target || event.srcElement);
    if(!$firer.is("[type='button'],[type='checkbox'],[type='file'],[type='hidden'],[type='image'],[type='password'],[type='radio'],[type='reset'],[type='submit'],[type='text'],select,textarea,button")) {
      $firer.find("input").focus();
    }
  })
  .bind("loadcomponent", function(event) {
	 var $target = jQuery(event.target || event.srcElement);
     if(typeof(jQuery.fn.jimTree) === "function") {
    	 $target.find(".tree").jimTree();
     }
          
     $target.find(".menu > .menunode > .submenu").each(function() {
         var $submenu = jQuery(this);
         $submenu.appendTo($submenu.parents(".template, .screen"));
     });
         
     if(typeof(jQuery.fn.datagrid) === "function") {
    	 $target.find(".datagrid").datagrid();
     }
     
     jimShapes.renderAll(jQuery(".non-processed-shape"));
  })
  .bind("preComponentLoading",function(event){
     jimShapes.renderAll(jQuery(".non-processed-shape"));
     layoutContent();
  })
  .on("change", "input[type='file']", function(event) {
    jQuery(this).prev().prev().find("input").val(this.value).parent().trigger("change");
  });

  function layoutContent() {
	var $screenAlignBox = jQuery(".screen:last > #alignmentBox"),
    $templateAlignBox = jQuery(".template:last > #alignmentBox"),
    $screen = jQuery(".screen:last"),
    $template = jQuery(".template:last");
	      
    var heightScreen = parseInt($screen.css("min-height")),
    widthScreen = parseInt($screen.css("min-width")),
    heightTemplate = parseInt($template.css("min-height")),
    widthTemplate = parseInt($template.css("min-width"));
	    
	if(heightTemplate > heightScreen) {
	  $screenAlignBox.css("min-height", heightTemplate + "px");
	  $screen.css("min-height", heightTemplate + "px");
	} else {
	  $templateAlignBox.css("min-height", heightScreen + "px");
	  $template.css("min-height", heightScreen + "px");
	}
	
	if(window.jimMobile) {
	  if(widthTemplate > widthScreen) {
  		$screen.css("min-width", widthTemplate + "px");
  	  } else {
  		$template.css("min-width", widthScreen + "px");
  	  }
	}

	/*both centered*/
    if($screenAlignBox.css("position")=="relative" && $templateAlignBox.css("position") == "relative"){   
      if(widthTemplate > widthScreen) {
    	$screenAlignBox.css("min-width", widthTemplate + "px");
      } else {
    	$templateAlignBox.css("min-width", widthScreen + "px");
      }
    }    
  }
})(window);
