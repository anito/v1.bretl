jQuery(document).ready( ($) => {

    // .to(@target, @length, @object)
    $(document).on("svg.loaded", (e, id) => {
        
        console.log('svg with id ' + id + ' loaded')
        
        var svg = $('#'+id),
        path = $('path, polyline, circle, ellipse, rect', svg), controller,
            tween, parallaxTween1, parallaxTween2, timeline;

        console.log(svg)
        console.log(path)
        
        // #### ScrollMogic Controller to add the scenes to ####
        controller = new ScrollMagic.Controller({
            addIndicators: true
        });

        // #### SVG Scene ####
        tween = TweenMax.fromTo(path, 8, {
            drawSVG: "50% 50%",
            ease: Ease.easeOut
        },
        {
            drawSVG: "0 100%",
            ease: Ease.easeOut
        })

        //  Scene
        var svgScene = new ScrollMagic.Scene({
            triggerElement: '#trigger',
            triggerHook: 0.2,
            duration: 200

        })
        .addIndicators({
            name: "pin scene",
            colorStart: "#f30",
            colorEnd: "#f3f"
        })
        .setTween(tween)
        .addTo(controller)

        // #### Parallax Scene ####

        // tween for parallax
        parallaxTween1 = TweenMax.to('.parallax-wrapper', 1, {
            css: {
                backgroundPositionY: 0,
                opacity: 0
            },
            ease: Power0.easeNone
        });
        parallaxTween2 = TweenMax.to('.parallax-bg', 2, {
            css: {
                backgroundColor: '#ff0a0a',
            },
            ease: Power0.easeNone
        });
        // var parallaxTween = new TweenMax('.parallax-bg', 1, {y: '-20%', ease: Power0.easeNone});

        // Timeline
        timeline = new TimelineLite()
            .add([parallaxTween1, parallaxTween2])

        // parallax scene
        parallaxScene = new ScrollMagic.Scene({
            triggerElement: '#parallax-trigger',
            triggerHook: .5,
            duration: 300
        })
            .addIndicators({
                name: "parallax scene",
                colorStart: "#000",
                colorEnd: "#ff0"
            })
            .setTween(timeline)
            .addTo(controller)

    })
    

})