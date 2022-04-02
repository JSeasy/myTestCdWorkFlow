(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [45],
  {
    GZYO: function (t, e, a) {
      'use strict';
      a.r(e);
      var o = a('9kvl'),
        r = a('q5+0'),
        n = a('MLMA'),
        i = a('ikfJ');
      e['default'] = (t) => {
        var e = Object(o['c'])('@@initialState'),
          a = e.initialState,
          c = (e.loading, e.error, e.refresh, e.setInitialState, t.route);
        if ((console.log(c.path), window.localStorage.getItem('token'))) {
          var l = a[c.path];
          console.log(l);
          var s = !l || l.read;
          if ('/login' === c.path || ('/product' === c.path && !s)) {
            var j = Object(n['b'])(a);
            return Object(i['jsx'])(r['a'], { to: j });
          }
          return (
            console.log('xxxx'),
            s
              ? Object(i['jsx'])(i['Fragment'], { children: t.children })
              : Object(i['jsx'])(r['a'], { to: '/404' })
          );
        }
        return '/login' === c.path
          ? Object(i['jsx'])(i['Fragment'], { children: t.children })
          : Object(i['jsx'])(r['a'], { to: '/login' });
      };
    },
  },
]);
