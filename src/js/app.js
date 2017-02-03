var Sonar = (function () {

    var ctx, w, h;

    var data = [];

    var debug = true;

    function log(message) {
        if(debug)
            console.log(message);
    }

    return {

        init: function (options) {
            ctx = options.ctx;
            w = options.width;
            h = options.height;
            TestData.init({
                w: w, h: h
            });
            data = TestData.ellipse(w/2, w/2, 150);
            //data = TestData.rect(w/2 - 100, w/2 - 100, 200, 200);
            log('init');
            this.run();
        },

        run: function () {
            log('run');
            this.render();
        },

        render: function () {
            ctx.fillStyle = "rgba(32,64,128, 0.2)";
            var i, k;
            var route= TestData.route();
            for (i = 0; i < w; i++) {
                for (k = 0; k < h; k++) {
                    if(data[i][k] > 0) {
                        ctx.fillRect(k, i , 1, 1);
                    }

                }
                ctx.fillRect(100, i , 1, 1);
            }

            ctx.fillStyle = "rgba(255,0,0, 0.5)";
            for (i = 0; i < w; i++) {

                (function (t) {
                    setTimeout(function () {
                        for (k = 0; k < h; k++) {
                            if(data[t][k] > 0 && t < route.length) {
                                ctx.fillRect(k + route[t].x, t, 1, 1);
                            }

                        }
                        if(t < route.length)
                            ctx.fillRect(route[t].x + 100, route[t].y, 1, 1);
                    }, 10);
                })(i);

            }

        },
        filter: function () {

        }

    };
})();
