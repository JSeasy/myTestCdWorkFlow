(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [32],
  {
    l1cM: function (e, t, a) {
      'use strict';
      a.r(t);
      a('+EJo');
      var c = a('/RO9'),
        b = a('T9Mk'),
        s = a('q5+0'),
        j = a('ikfJ'),
        n = c['a'].TabPane;
      t['default'] = (e) => {
        var t = Object(s['g'])(),
          a = Object(s['i'])(),
          r = Object(b['useMemo'])(() => () => a.id, []),
          i = (e) => {
            t.replace('/product/' + r() + '/' + e);
          };
        return Object(j['jsxs'])(j['Fragment'], {
          children: [
            Object(j['jsxs'])(c['a'], {
              defaultActiveKey: 'fields',
              onChange: i,
              children: [
                Object(j['jsx'])(
                  n,
                  { tab: '\u5b57\u6bb5\u7ba1\u7406' },
                  'fields',
                ),
                Object(j['jsx'])(
                  n,
                  { tab: '\u9884\u5904\u7406\u7ba1\u7406' },
                  'prehandle',
                ),
                Object(j['jsx'])(
                  n,
                  { tab: '\u9ed1/\u767d\u540d\u5355\u7ba1\u7406' },
                  'white',
                ),
                Object(j['jsx'])(
                  n,
                  { tab: '\u62bd\u8c61\u5904\u7406' },
                  'abstract',
                ),
                Object(j['jsx'])(
                  n,
                  { tab: '\u7b56\u7565\u7ba1\u7406' },
                  'strategy',
                ),
              ],
            }),
            e.children,
          ],
        });
      };
    },
  },
]);
