(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
  {
    LCX7: function (e, c, s) {
      e.exports = {
        myTitle: 'myTitle___3kbfk',
        title: 'title___2EKtI',
        dash: 'dash___pmEzt',
      };
    },
    R5Hj: function (e, c, s) {
      e.exports = {
        formBlock: 'formBlock___2J9Z-',
        formBlockWrap: 'formBlockWrap___1E1WX',
        productName: 'productName___3Xdit',
        productInfo: 'productInfo___3hyep',
        productItem: 'productItem___2e0yR',
      };
    },
    iiHg: function (e, c, s) {
      e.exports = {
        matchDetail: 'matchDetail___1Ok6A',
        blockWrap: 'blockWrap___3IQtf',
        list: 'list___2rDo9',
        item: 'item___2U4uA',
        remark: 'remark___jHvGO',
      };
    },
    jzBK: function (e, c, s) {
      'use strict';
      s.d(c, 'c', function () {
        return i;
      }),
        s.d(c, 'b', function () {
          return j;
        }),
        s.d(c, 'a', function () {
          return l;
        }),
        s.d(c, 'e', function () {
          return d;
        }),
        s.d(c, 'd', function () {
          return a;
        });
      var t = s('5lAy'),
        i = (e) =>
          Object(t['a'])({
            url: '/services/v1/pipei/query',
            method: 'POST',
            data: e,
          }),
        j = (e) =>
          Object(t['a'])({
            url: '/services/v1/pipei/edit',
            method: 'PUT',
            data: e,
          }),
        l = (e) =>
          Object(t['a'])({
            url: '/services/v1/pipei/edit',
            method: 'DELETE',
            data: e,
          }),
        d = (e) =>
          Object(t['a'])({ url: '/services/v1/pipei/' + e, method: 'GET' }),
        a = () =>
          Object(t['a'])({
            url: '/services/v1/pipei/getPipeiCount',
            method: 'GET',
          });
    },
    khV9: function (e, c, s) {
      'use strict';
      var t = s('LCX7'),
        i = s.n(t),
        j = s('ikfJ');
      c['a'] = (e) =>
        Object(j['jsxs'])('div', {
          className: i.a.myTitle,
          style: e.style,
          children: [
            Object(j['jsx'])('h5', { className: i.a.title, children: e.title }),
            Object(j['jsx'])('div', { className: i.a.dash }),
          ],
        });
    },
    uYHH: function (e, c, s) {
      'use strict';
      s.r(c);
      var t = s('4+7e'),
        i = s('khV9'),
        j = s('R5Hj'),
        l = s.n(j),
        d = s('ikfJ'),
        a = { 1: '\u4fe1\u7528', 2: '\u62b5\u62bc', 3: '\u5176\u4ed6' },
        r = {
          1: '\u7ebf\u4e0a',
          2: '\u7ebf\u4e0b',
          3: '\u7ebf\u4e0a+\u7ebf\u4e0b',
        },
        n = {
          1: '\u81ea\u4e3b\u652f\u4ed8',
          2: '\u53d7\u6258\u652f\u4ed8',
          3: '\u5176\u4ed6',
        },
        b = {
          1: '\u5148\u606f\u540e\u672c',
          2: '\u7b49\u989d\u672c\u606f',
          3: '\u7b49\u989d\u672c\u91d1',
          4: '\u5176\u4ed6',
        },
        O = (e) => {
          var c = e.product;
          return Object(d['jsx'])('div', {
            className: l.a.formBlock,
            children: Object(d['jsxs'])('div', {
              className: l.a.formBlockWrap,
              children: [
                Object(d['jsx'])('div', {
                  className: l.a.productName,
                  children: c.cpxh,
                }),
                Object(d['jsxs'])('div', {
                  className: l.a.productInfo,
                  children: [
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u4ea7\u54c1\u5e8f\u53f7:',
                        }),
                        Object(d['jsx'])('p', { children: c.cpxh }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u4ea7\u54c1\u7c7b\u522b:',
                        }),
                        Object(d['jsx'])('p', { children: a[c.cplb] }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u4ea7\u54c1\u540d\u79f0:',
                        }),
                        Object(d['jsx'])('p', { children: c.cpmc }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u5ba1\u6279\u7c7b\u578b :',
                        }),
                        Object(d['jsx'])('p', { children: r[c.splx] }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', { children: '\u989d\u5ea6:' }),
                        Object(d['jsxs'])('p', { children: [c.ed, '\u4e07'] }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', { children: '\u5229\u7387:' }),
                        Object(d['jsx'])('p', { children: c.lilv }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', { children: '\u671f\u9650:' }),
                        Object(d['jsxs'])('p', {
                          children: [
                            c.qxsj,
                            1 === c.qxdw ? '\u5e74' : '\u6708',
                          ],
                        }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u653e\u6b3e\u65f6\u95f4:',
                        }),
                        Object(d['jsxs'])('p', {
                          children: [
                            c.fksj,
                            1 === c.fkdw ? '\u5929' : '\u6708',
                          ],
                        }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u63d0\u6b3e\u65b9\u5f0f:',
                        }),
                        Object(d['jsx'])('p', { children: n[c.tkfs] }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u8fd8\u6b3e\u65b9\u5f0f:',
                        }),
                        Object(d['jsx'])('p', { children: b[c.hkfs] }),
                      ],
                    }),
                    Object(d['jsxs'])('div', {
                      className: l.a.productItem,
                      children: [
                        Object(d['jsx'])('p', { children: '\u5907\u6ce8:' }),
                        Object(d['jsx'])('p', { children: c.remark }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = s('iiHg'),
        x = s.n(p),
        h = s('q5+0'),
        m = s('T9Mk'),
        o = s('jzBK'),
        v = {
          1: '\u670d\u88c5',
          2: '\u9910\u996e',
          3: '\u623f\u5730\u4ea7',
          4: '\u6c7d\u8f66',
          5: '\u4e92\u8054\u7f51',
        },
        u = {
          1: '\u989d\u5ea6\u4f18\u5148',
          2: '\u5229\u7387\u4f18\u5148',
          3: '\u901f\u5ea6\u4f18\u5148',
        };
      c['default'] = (e) => {
        var c,
          s = Object(h['g'])(),
          j = s.location.state,
          l = Object(m['useState'])([]),
          a = Object(t['a'])(l, 2),
          r = a[0],
          n = a[1],
          b = Object(m['useState'])({}),
          p = Object(t['a'])(b, 2),
          N = p[0],
          f = p[1];
        return (
          Object(m['useEffect'])(() => {
            Object(o['e'])(j.id).then((e) => {
              n(e.data.pipeiInfo.productVOList),
                f(e.data.pipeiInfo.userOrgInfoVO);
            });
          }, []),
          Object(d['jsxs'])('div', {
            className: x.a.matchDetail,
            children: [
              Object(d['jsx'])(i['a'], { title: '\u4f01\u4e1a\u4fe1\u606f' }),
              Object(d['jsxs'])('div', {
                className: x.a.list,
                children: [
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u516c\u53f8\u540d\u79f0:',
                      }),
                      Object(d['jsx'])('p', { children: N.orgName }),
                    ],
                  }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u516c\u53f8\u884c\u4e1a:',
                      }),
                      Object(d['jsx'])('p', { children: v[N.gshy] }),
                    ],
                  }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u8054\u7cfb\u4eba\u59d3\u540d:',
                      }),
                      Object(d['jsx'])('p', { children: N.lxrxm }),
                    ],
                  }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u8054\u7cfb\u7535\u8bdd:',
                      }),
                      Object(d['jsx'])('p', { children: N.lxrdh }),
                    ],
                  }),
                ],
              }),
              Object(d['jsx'])(i['a'], { title: '\u8d26\u53f7\u4fe1\u606f' }),
              Object(d['jsxs'])('div', {
                className: x.a.list,
                children: [
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u767b\u5f55\u624b\u673a\u53f7:',
                      }),
                      Object(d['jsx'])('p', { children: N.mobile }),
                    ],
                  }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u767b\u5f55\u5bc6\u7801:',
                      }),
                      Object(d['jsx'])('p', { children: N.passwd }),
                    ],
                  }),
                ],
              }),
              Object(d['jsx'])(i['a'], { title: '\u6cd5\u4eba\u5f81\u4fe1' }),
              Object(d['jsx'])('div', {
                className: x.a.list,
                children: Object(d['jsxs'])('div', {
                  className: x.a.item,
                  children: [
                    Object(d['jsx'])('p', {
                      children: '\u6cd5\u4eba\u5f81\u4fe1\u62a5\u544a:',
                    }),
                    Object(d['jsx'])('p', {
                      children: Object(d['jsx'])('span', {
                        className: 'color',
                        onClick: () => {
                          var e;
                          window.open(
                            null === N ||
                              void 0 === N ||
                              null === (e = N.frzxbgfileList) ||
                              void 0 === e
                              ? void 0
                              : e.addrUrl,
                          );
                        },
                        children:
                          null === N ||
                          void 0 === N ||
                          null === (c = N.frzxbgfileList) ||
                          void 0 === c
                            ? void 0
                            : c.name,
                      }),
                    }),
                  ],
                }),
              }),
              Object(d['jsx'])(i['a'], { title: '\u8d22\u52a1\u6570\u636e' }),
              Object(d['jsxs'])('div', {
                className: x.a.list,
                children: [
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u7eb3\u7a0e\u7b49\u7ea7:',
                      }),
                      Object(d['jsx'])('p', {
                        children: null === N || void 0 === N ? void 0 : N.nsdj,
                      }),
                    ],
                  }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children:
                          '\u8fd1\u4e00\u5e74\u7eb3\u7a0e\u603b\u989d(\u4e07\u5143):',
                      }),
                      Object(d['jsx'])('p', { children: N.nsze }),
                    ],
                  }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children:
                          '\u4f01\u4e1a\u5f53\u524d\u8d1f\u503a\u4f59\u989d(\u4e07\u5143)\uff1a',
                      }),
                      Object(d['jsx'])('p', { children: N.fzze }),
                    ],
                  }),
                ],
              }),
              Object(d['jsx'])(i['a'], { title: '\u878d\u8d44\u4fe1\u606f' }),
              Object(d['jsxs'])('div', {
                className: x.a.list,
                children: [
                  N.rzlxXydk &&
                    Object(d['jsxs'])('div', {
                      className: x.a.item,
                      children: [
                        Object(d['jsx'])('p', {
                          children: '\u878d\u8d44\u7c7b\u578b:',
                        }),
                        Object(d['jsxs'])('p', {
                          children: [
                            '\u4fe1\u7528\u8d37\u6b3e',
                            ' ',
                            Object(d['jsx'])('span', {
                              style: { marginLeft: 12 },
                              className: 'color',
                              onClick: () => {
                                window.open(N.xydkFileList.addrUrl);
                              },
                              children: N.xydkFileList.name,
                            }),
                          ],
                        }),
                      ],
                    }),
                  N.rzlxDydk &&
                    Object(d['jsxs'])('div', {
                      className: x.a.item,
                      children: [
                        Object(d['jsx'])('p', {}),
                        Object(d['jsxs'])('p', {
                          children: [
                            '\u62b5\u62bc\u8d37\u6b3e',
                            Object(d['jsx'])('span', {
                              className: 'color',
                              style: { marginLeft: 12 },
                              onClick: () => {
                                window.open(N.dydkfileList.addrUrl);
                              },
                              children: N.dydkfileList.name,
                            }),
                          ],
                        }),
                      ],
                    }),
                  Object(d['jsxs'])('div', {
                    className: x.a.item,
                    children: [
                      Object(d['jsx'])('p', {
                        children: '\u878d\u8d44\u504f\u597d:',
                      }),
                      Object(d['jsx'])('p', { children: u[N.rzph] }),
                    ],
                  }),
                ],
              }),
              Object(d['jsx'])(i['a'], { title: '\u4ea7\u54c1\u4fe1\u606f' }),
              Object(d['jsx'])('div', {
                className: x.a.blockWrap,
                children: r.map((e) => Object(d['jsx'])(O, { product: e })),
              }),
              Object(d['jsx'])(i['a'], { title: '\u5907\u6ce8' }),
              Object(d['jsxs'])('div', {
                className: x.a.remark,
                children: [
                  Object(d['jsx'])('p', { children: '\u5907\u6ce8:' }),
                  Object(d['jsxs'])('p', {
                    style: { marginLeft: 12 },
                    children: [N.remark, '111111111111111111'],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
