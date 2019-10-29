(function ($) {
    // .to(@target, @length, @object)
    // var controller = new ScrollMagic.Controller();
    $(document).on("svg.loaded", (e, id) => {

        if(id === "template") {

            var tmpl = document.getElementById(id);
            var tween = TweenMax.to(tmpl, 5, {
                stroke: '#ff0000',
                drawSVG: "20% 100%",
                ease: Power2.easeInOut
            })

            console.log(tmpl)
        }

    })

        //  Scene
        // var scene = new  ScrollMagic.Scene({
        //   triggerElement: '#trigger', duration: 3000
        // })
        // .setTween(tween)
        // .addTo(controller)

})(jQuery)

