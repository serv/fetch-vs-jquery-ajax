var suite = new Benchmark.Suite;

suite.add('fetch', function() {
  fetch("http://api.napster.com/v2.2/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(function(response) {
    return;
  });
})
  .add('jquery ajax', function() {
    var request = $.ajax({
      type: 'GET',
      url: "http://api.napster.com/v2.2/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4",
      async: true,
      success: function() {
        return;
      }
    });
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });
