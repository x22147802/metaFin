$(document).ready(function(){


    $('#getExchange').on('click',function(e){
        e.preventDefault();
        var from= $('#fromCurrency').val();
        var to= $('#toCurrency').val();
        var amount= $('#amountExchange').val();

        var myHeaders = new Headers();
        myHeaders.append("apikey", "Yy22yhevHR41o487QhEZOP9RmU7RshNI");
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };

        var url= "https://api.apilayer.com/exchangerates_data/convert?to="+to+"&from="+from+"&amount="+amount+"";

        fetchData(url,requestOptions,from,to,amount);

    });


    async function fetchData(url,requestOptions,from,to,amount) {
        const response = await fetch(url,requestOptions,from,to,amount);
        const jsonData = await response.json();
        $('#exchangeResult').empty().append(amount+ ' ' + from +' to '+ to +' is '+ jsonData.result);
      }

   


});