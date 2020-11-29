$(document).ready(function() {
  $("#appointment").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const description = $("#description").val();
    const dateInput= $("input#date").val();
    const startTimeInput = $("input#startTime").val();
    const endTimeInput = $("input#endTime").val();

    $(".name").text(nameInput);
    $(".description").text(description);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#confirmation").show();
  });
});