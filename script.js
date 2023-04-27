$(function () {

    //función para el smooth scroll//
        $("a").click(function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                var gato = this.hash;

                $("html, body").animate({
                    scrollTop: $(gato).offset().top
                }, 800, function () {
                    window.location.hash = gato;
                
                });
            }
        });

        //se habilitan los tooltip//
        $('[data-toggle="tooltip"]').tooltip();

        //se habilitan los popover//
        $('[data-toggle="popover"]').popover();
});