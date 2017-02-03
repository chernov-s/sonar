var Sonar = function (w, h) {
    var __ = {},
        ctx, x, y;

    __.run = function () {
        console.log('run');
    };

    __.context = function (_c) {
        if (!arguments.length) return ctx;
        ctx = _c;
        return this;
    };

    __.render = function () {

    };

    return __;
};
