// fetch('./api/some.json')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

$(document).ready(function () {
    fetchTypeAheadResult();
});

function fetchTypeAheadResult() {
    $('#searchBusiness').typeahead({
        source: function (request, response) {
          var formData = {
            'product' : $('#searchBusiness').val()
          }
          // var formData = $('form').serialize();
          $.ajax({
                url: "/search",
                dataType: "json",
                type: "POST",
                data: formData,
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    var items = [];
                    response($.map(result, function (item) {                            
                        items.push(item.name);
                    }))
                    response(items);
                }
            });
        }
        });
    };
