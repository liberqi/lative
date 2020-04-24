(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//     document.getElementById('go').addEventListener('click', start);
    start();
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('唐'))
        .then(() => engine.shake())
        .then(() => engine.toText('章'))
        .then(() => engine.shake())
        .then(() => engine.toText('梅'))
        .then(() => engine.shake())
        .then(() => engine.toText('斯'))
        .then(() => engine.shake())
        .then(() => engine.toText('人'))
        .then(() => engine.shake())
        .then(() => engine.toText('若'))
        .then(() => engine.shake())
        .then(() => engine.toText('彩'))
        .then(() => engine.shake())
        .then(() => engine.toText('红'))
        .then(() => engine.shake())
        .then(() => engine.toText('遇'))
        .then(() => engine.shake())
        .then(() => engine.toText('上'))
        .then(() => engine.shake())
        .then(() => engine.toText('方'))
        .then(() => engine.shake())
        .then(() => engine.toText('知'))
        .then(() => engine.shake())
        .then(() => engine.toText('有'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
