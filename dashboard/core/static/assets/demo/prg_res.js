$('#int_sig').on('change', function(){
  var val = parseInt($(this).val());
  var $circle = $('#svg #bar_int');
  
  if (isNaN(val)) {
   val = 100; 
  }
  else{
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
   
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    
    $circle.css({ strokeDashoffset: pct});
    
    $('#cont_int').attr('data-pct',val);
  }
});

$('#rad_sig').on('change', function(){
  var val = parseInt($(this).val());
  var $circle = $('#svg #bar_rad');
  
  if (isNaN(val)) {
   val = 100; 
  }
  else{
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
   
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    
    $circle.css({ strokeDashoffset: pct});
    
    $('#cont_rad').attr('data-pct',val);
  }
});

