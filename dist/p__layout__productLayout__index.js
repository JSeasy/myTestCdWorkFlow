(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [15],
  {
    l1cM: function (e, t, c) {
      'use strict';
      c.r(t);
      c('YVgN');
      var a = c('x+C3'),
        b = c('q5+0'),
        j = c('ikfJ'),
        n = a['a'].TabPane;
      t['default'] = (e) => {
        var t = Object(b['g'])(),
          c = Object(b['i'])(),
          s = (e) => {
            t.replace('/product/' + c.id + '/' + e);
          };
        return Object(j['jsxs'])(j['Fragment'], {
          children: [
            Object(j['jsxs'])(a['a'], {
              defaultActiveKey: '1',
              onChange: s,
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
                Object(j['jsx'])(n, { tab: '\u62bd\u8c61\u5904\u7406' }, '4'),
                Object(j['jsx'])(n, { tab: '\u7b56\u7565\u7ba1\u7406' }, '5'),
              ],
            }),
            e.children,
          ],
        });
      };
    },
  },
]);
