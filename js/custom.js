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
            this.utgvsutg();
            this.mpvsutg();
            this.hjcobuvsutgmp();
            this.buvshjco();
            this.sbvshjcobu();
            this.sbvsutgmp();
            this.bbvssbbuhj();
            this.bbvsutgmp()
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
        utgvsutg: function(){
            jQuery('#utgvsutg').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#utg-vs-utg').removeClass('d-none');
            })
        },
        mpvsutg: function(){
            jQuery('#mpvsutg').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#mp-vs-utg').removeClass('d-none');
            })
        },
        hjcobuvsutgmp: function(){
            jQuery('#hjcobuvsutgmp').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#hj-co-bu-vs-utg-mp').removeClass('d-none');
            })
        },
        buvshjco: function(){
            jQuery('#buvshjco').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#bu-vs-hj-co').removeClass('d-none');
            })
        },
        sbvshjcobu: function(){
            jQuery('#sbvshjcobu').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#sb-vs-hj-co-bu').removeClass('d-none');
            })
        },
        sbvsutgmp: function(){
            jQuery('#sbvsutgmp').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#sb-vs-utg-mp').removeClass('d-none');
            })
        },
        bbvsutgmp: function(){
            jQuery('#bbvsutgmp').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#bb-vs-utg-mp').removeClass('d-none');
            })
        },
        bbvssbbuhj: function(){
            jQuery('#bbvssbbuhj').click(function () {
                jQuery('.cc').addClass('d-none');
                jQuery('#bb-vs-sb-bu-hj').removeClass('d-none');
            })
        },
    };
    $(document).ready(function () {
        app.initialize();
    });
}());