

var $form = $('#checkout-form');

$form.submit(function(event){

$form.find('button').prop('disabled', true);
    
stripe.source.create({
      type: 'card',
      card: {
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
      },
      owner: {
        address: {
          postal_code: $('#address').val()
        }
      }
}, stripeResponseHandler);
    
    return false;
  
});


function stripeResponseHandler(status, response){
    
     if (response.error) { // Problem!

    // Show the errors on the form
    $('#charge-error').text(response.error.message);
    $('#charge-error').removeClass('hidden');
    $form.find('button').prop('disabled', false); // Re-enable submission

  } else { // Source was created!

    // Get the source ID:
    var source = response.id;

    // Insert the source into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="source" />').val(source));

    // Submit the form:
    $form.get(0).submit();

  }
}