$(document).ready(function(){
  $("#form-filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#reports-table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});