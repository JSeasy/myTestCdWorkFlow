(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [42],
  {
    GZYO: function (t, e, a) {
      'use strict';
      a.r(e);
      var r = a('9kvl'),
        n = a('q5+0'),
        i = a('MLMA'),
        o = a('ikfJ');
      e['default'] = (t) => {
        var e = Object(r['c'])('@@initialState'),
          a = e.initialState,
          c = (e.loading, e.error, e.refresh, e.setInitialState, t.route);
        if ((console.log(c.path), window.localStorage.getItem('token'))) {
          var l = a[c.path],
            s = !l || l.read;
          if ('/login' === c.path || ('/product' === c.path && !s)) {
            var j = Object(i['b'])(a);
            return Object(o['jsx'])(n['a'], { to: j });
          }
          return s
            ? Object(o['jsx'])(o['Fragment'], { children: t.children })
            : Object(o['jsx'])(n['a'], { to: '/404' });
        }
        return '/login' === c.path
          ? Object(o['jsx'])(o['Fragment'], { children: t.children })
          : Object(o['jsx'])(n['a'], { to: '/login' });
      };
    },
  },
]);
