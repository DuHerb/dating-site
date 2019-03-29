$(document).ready(function(){

  //createID builds a string that can be used to select the
  function createID(gender, age, music) {
    var imgID = "#";

    if (music === "rock") {
      imgID = imgID + "r";
    } else if (music === "techno") {
      imgID = imgID + "t";
    } else {
      imgID = imgID + "o";
    }

    if (gender === "male") {
      imgID = imgID + "m";
    } else {
      imgID = imgID + "f";
    }

    if (age === "18") {
      imgID = imgID + "1";
    } else if (age === "25") {
      imgID = imgID + "2";
    } else {
      imgID = imgID + "3";
    }

    return imgID
  };

  $("form").submit(function(event) {
    event.preventDefault();

    var gender = $('input:radio[name=gender]:checked').val();
    var age = $('input:radio[name=age]:checked').val();
    var music = $('input:radio[name=music]:checked').val();

    var imgID  = createID(gender, age, music);

    console.log(imgID);

    $(imgID).removeClass('hidden');
  });

});
