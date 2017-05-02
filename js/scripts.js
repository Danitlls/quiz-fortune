// back-end
var compare = function(a, b){
  if (a.length > b.length) {
    return true;
  }else{
    return false;
  }
};



$(function() {
  $("#fortune-quiz").submit(function(event){
    event.preventDefault();
    // create empty arrays for comparison
    var arrayA = [];
    var arrayB = [];

    // collect checked values, each are either "a" or "b"
    $("input:checkbox[name=occurance]:checked").each(function(){
    // use branching to push current "this" value into arrays
      if ($(this).val() === "a") {

        arrayA.push("a");
      } else {
        arrayB.push("b");
      }
    });

    // use expression to compare lengths of arrays and branching to show correct fortune
    if (compare(arrayA, arrayB) === true){
      $("#good").show();
    }else {
      $("#bad").show();
    }

  });
});
