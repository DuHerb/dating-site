$(document).ready(function(){

    $("form").submit(function(event) {
      event.preventDefault();
      var gender = $('input:radio[name=gender]:checked').val();

      var age = $('input:radio[name=age]:checked').val();

      var music = $('input:radio[name=music]:checked').val();
      console.log(gender+age+music);
    });


});
