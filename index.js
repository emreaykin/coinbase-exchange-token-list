var t = $("#example").DataTable();
$(".dataTables_filter input").addClass("search-query");

fetch("https://api.exchange.coinbase.com/currencies")
  .then((response) => response.json())
  .then(function (data) {
    for (var k in data) {
      t.row
        .add([k,
          data[k].id,
          data[k].name,
          data[k].default_network,
          data[k].details.type,
          data[k].status,
        ])
        .draw(false);
    }
  })
  .catch((error) => {});
