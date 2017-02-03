var TestData = (function () {

    var w, h;

    return {

        init: function (options) {
            w = options.w || 600;
            h = options.h || 600;
        },

        ellipse: function (x, y, r) {
          var m = [];
          for(var i = 0; i < w; i++) {
              m[i] = [];
              for(var k = 0; k < h; k++) {
                  m[i][k] = Math.sqrt((i - x) * (i - x) + (k - y) * (k - y)) > r ? 0 : 1;
              }
          }
          return m;
        },

        rect: function (x, y, _w, _h) {
            var m = [], i, k;
            for(i = 0; i < w; i++) {
                m[i] = [];
                for(k = 0; k < h; k++) {
                    m[i][k] = 0;
                }
            }

            for(i = y; i < y + _h; i++) {
                for(k = x; k < x + _w; k++) {
                    m[i][k] = 1;
                }
            }
            return m;
        },

        route: function () {
            var r = [];
            var step = 0.1;

            for(var t = 0, s = 0; s < h; t++, s += step) {
                r.push({
                    x: Math.sin(s) * 20,
                    y: t
                })
            }
            return r;
        }
    };
})();