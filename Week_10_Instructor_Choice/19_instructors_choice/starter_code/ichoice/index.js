$(document).ready(function() {

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });

});

$.ajax({
        url: 'data/shoes.json',
        type: 'GET'
    })

    .done(function(response)
        .fail(function(error) {
            console.log(error);

        });

        function displayShoes(response) {
            var releases = response.releases;
            var html = '';

    //smooth scroll
    $("nav a").click(function(e) {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 2000);

        e.preventDefault();
    });
});

            $(releases).each(function(i, shoe) {
                var name = shoe.name;
                var date = shoe.date;
                var image = shoe.image;
                var price = shoe.price;

                html += `
		<div class="tiles">
      <div class="tile">
        <img src="img/releases/AA1253-400.jpg" alt="">
        <div class="overlay">
          <div class="details">
            <p class="name"> `+name+` </p>
            <p class="date">RELEASE DATE: `+date+`</p>
            <p class="price"> `+price+` </p>
          </div>
        </div>
      </div>
		`;
		$('tiles').html(html);

            });



        }