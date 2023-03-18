function saveTimetable() {
  var form = document.getElementById("timetable-form");
  var formData = new FormData(form);

  $.ajax({
    type: "POST",
    url: "/save_timetable.py",
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      // Handle the response from the server-side script here
    },
    error: function(xhr, status, error) {
      console.error("Error:", error);
    // get the timetable data from the form
    // var data = {
    //     'mon': $('#monday').val(),
    //     'tues': $('#tuesday').val(),
    //     'wed': $('#wednesday').val(),
    //     'thurs': $('#thursday').val(),
    //     'fri': $('#friday').val(),
    //     'sat':$('#saturday').val(),
    //     'sun':$('#sunday').val()
    // };

    // // send an AJAX request to the server to save the data
    // $.ajax({
    //     type: 'POST',
    //     url: '/save',
    //     data: {'timetable': JSON.stringify(data)},
    //     success: function(response) {
    //         // show a success message
    //         alert('Timetable saved successfully!');
    //     },
    //     error: function(response) {
    //         // show an error message
    //         alert('An error occurred while saving the timetable!');
        }
    });
}
