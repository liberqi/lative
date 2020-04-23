(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('L'))
        .then(() => engine.shake())
        .then(() => engine.toText('唐'))
        .then(() => engine.shake())
        .then(() => engine.toText('章'))
        .then(() => engine.shake())
        .then(() => engine.toText('梅'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
