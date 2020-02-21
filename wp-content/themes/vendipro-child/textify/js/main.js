(function ($) {
    'use strict';

    // depends on textify engine (textify.js) in child-theme/textify/js
    var add_boxify = function () {

        var excludeClasses = [
            '.woocommerce-checkout',
            '.woocommerce-multistep-checkout',
            '.woocommerce-cart',
            '.blog'
        ],

            ignoreClasses = [
                'page-link'
            ]

        $('body').informify();
        $('body').textify(excludeClasses, ignoreClasses);
    }

    add_boxify();

})(jQuery)