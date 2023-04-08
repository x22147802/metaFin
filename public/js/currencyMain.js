$(document).ready(function(){

  function displayExchangeVal(info,amountPassed,currency)
  {
    console.log(info);
    var total= Math.imul(amountPassed,info);
    $('#exchangeResult').empty().append(amountPassed+' ETH is '+total+' currency');

  }

  $('#getExchange').on('click',function(e){
    e.preventDefault();

    const options = {method: 'GET', headers: {accept: 'text/plain'}};
    const currency= $('#currencySelected').val();
    const amount= $('#amountExchange').val();
    const apiUrl= "https://api.coingate.com/api/v2/rates/merchant/ETH/"+currency;

    fetch(apiUrl, options)
    .then(response => response.json())
    .then(response => displayExchangeVal(response,amount,currency))
    .catch(err => console.error(err));


  });




 

});