(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    GZYO: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n('9kvl'),
        a = n('q5+0'),
        o = n('ikfJ');
      e['default'] = (t) => {
        var e = Object(i['c'])('@@initialState'),
          n =
            (e.initialState,
            e.loading,
            e.error,
            e.refresh,
            e.setInitialState,
            Object(a['g'])()),
          c = n.location.pathname;
        return window.localStorage.getItem('token')
          ? '/login' === c
            ? Object(o['jsx'])(a['a'], { to: '/match' })
            : Object(o['jsx'])(o['Fragment'], { children: t.children })
          : (console.log(c),
            '/login' === c
              ? Object(o['jsx'])(o['Fragment'], { children: t.children })
              : Object(o['jsx'])(a['a'], { to: '/login' }));
      };
    },
  },
]);
