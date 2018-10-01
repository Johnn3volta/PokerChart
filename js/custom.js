(function () {
    'use strict';
    var app = {
        initialize: function () {
            this.iso();
            this.rfi();
            this.cc();
            this.ep();
            this.mp();
            this.hj();
            this.co();
            this.bu();
            this.sb();
        },
        iso: function () {
            var iso = jQuery('.place-iso'),
                cc = jQuery('.place-cc'),
                rfi = jQuery('.place-rfi');
            jQuery('#btn-iso').click(function () {
                if (!rfi.hasClass('d-none')) {
                    rfi.addClass('d-none');
                }
                if (!cc.hasClass('d-none')) {
                    cc.addClass('d-none');
                }
                iso.removeClass('d-none')
            })
        },
        rfi: function () {
            var iso = jQuery('.place-iso'),
                cc = jQuery('.place-cc'),
                rfi = jQuery('.place-rfi');
            jQuery('#btn-rfi').click(function () {

                if (!iso.hasClass('d-none')) {
                    iso.addClass('d-none');
                }
                if (!cc.hasClass('d-none')) {
                    cc.addClass('d-none');
                }
                rfi.removeClass('d-none')
            })
        },
        cc: function () {
            var iso = jQuery('.place-iso'),
                cc = jQuery('.place-cc'),
                rfi = jQuery('.place-rfi');
            jQuery('#btn-cc').click(function () {

                if (!iso.hasClass('d-none')) {
                    iso.addClass('d-none');
                }
                if (!rfi.hasClass('d-none')) {
                    rfi.addClass('d-none');
                }
                cc.removeClass('d-none')
            })
        },
        ep: function () {

            jQuery('#ep').click(function () {
                jQuery('.rfi').addClass('d-none');
                jQuery('#rfiEp').removeClass('d-none');
            })
        },
        mp: function () {

            jQuery('#mp').click(function () {
                jQuery('.rfi').addClass('d-none');
                jQuery('#rfiMp').removeClass('d-none');
            })
        },
        hj: function () {

            jQuery('#hj').click(function () {
                jQuery('.rfi').addClass('d-none');
                jQuery('#rfiHj').removeClass('d-none');
            })
        },
        co: function () {

            jQuery('#co').click(function () {
                jQuery('.rfi').addClass('d-none');
                jQuery('#rfiCo').removeClass('d-none');
            })
        },
        bu: function () {

            jQuery('#bu').click(function () {
                jQuery('.rfi').addClass('d-none');
                jQuery('#rfiBu').removeClass('d-none');
            })
        },
        sb: function () {

            jQuery('#sb').click(function () {
                jQuery('.rfi').addClass('d-none');
                jQuery('#rfiSb').removeClass('d-none');
            })
        },
    };
    $(document).ready(function () {
        app.initialize();
    });
}());