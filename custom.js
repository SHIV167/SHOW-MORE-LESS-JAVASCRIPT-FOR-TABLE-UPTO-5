$('#trid tr').hide();
$('#trid tr:lt(5)').show();
$('button').text('Show More');

function mostrarRegistros() {
  if ($('#trid tr:visible').length <= 5) {
    $('#trid tr').show();
    $('button').text('Show Less');
  } else {
    $('#trid tr').hide();
    $('#trid tr:lt(5)').show();
    $('button').text('Show More');
  }
}