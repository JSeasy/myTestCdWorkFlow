(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [25],
  {
    '/Uef': function (e, a, c) {
      e.exports = { adminServiceAdd: 'adminServiceAdd___cZobB' };
    },
    Fz4H: function (e, a, c) {
      'use strict';
      c.r(a);
      c('vvyX');
      var t = c('sEMA'),
        s = c('0hF1'),
        i = (c('vh1u'), c('EyPa')),
        l = (c('Pu9e'), c('7jiR')),
        r = (c('8yU/'), c('yaUO')),
        j = c('4+7e'),
        n = c('khV9'),
        d = c('/Uef'),
        b = c.n(d),
        O = c('azGz'),
        h = c('nBjk'),
        m = c('T9Mk'),
        x = c('P7pi'),
        o = c('q5+0'),
        u = c('ikfJ'),
        v = { labelCol: { span: 8 }, wrapperCol: { span: 6, offset: 1 } };
      a['default'] = (e) => {
        var a = r['a'].useForm(),
          c = Object(j['a'])(a, 1),
          d = c[0],
          p = {
            cplb: '1',
            cpmc: '',
            cpxh: '',
            ed: '',
            fkdw: '1',
            fksj: '',
            hkfs: '1',
            lilv: '',
            qxdw: '1',
            qxsj: '',
            remark: '',
            splx: '1',
            tkfs: '1',
          },
          f = Object(m['useState'])([]),
          g = Object(j['a'])(f, 2),
          k = g[0],
          y = g[1],
          N = Object(h['a'])([]),
          q = Object(j['a'])(N, 2),
          _ = q[0],
          z = q[1],
          w = Object(m['useState'])('add'),
          I = Object(j['a'])(w, 2),
          T = I[0],
          F = I[1],
          C = Object(o['g'])();
        return (
          Object(m['useEffect'])(() => {
            Object(x['e'])().then((e) => {
              y(e.data.areas);
            });
          }, []),
          Object(u['jsxs'])('div', {
            className: b.a.adminServiceAdd,
            children: [
              Object(u['jsx'])(n['a'], {
                title: '\u4f01\u4e1a\u4fe1\u606f',
                style: { marginBottom: 40 },
              }),
              Object(u['jsxs'])(
                r['a'],
                Object(s['a'])(
                  Object(s['a'])({}, v),
                  {},
                  {
                    form: d,
                    children: [
                      Object(u['jsx'])(r['a'].Item, {
                        label: '\u5730\u533a/\u57ce\u5e02',
                        name: 'city',
                        required: !0,
                        rules: [
                          {
                            required: !0,
                            message: '\u8bf7\u9009\u62e9\u57ce\u5e02',
                          },
                        ],
                        children: Object(u['jsx'])(l['a'], {
                          options: k,
                          size: 'large',
                          fieldNames: { label: 'name', value: 'id' },
                        }),
                      }),
                      Object(u['jsx'])(r['a'].Item, {
                        name: 'orgName',
                        label: '\u670d\u52a1\u4f01\u4e1a\u540d\u79f0',
                        required: !0,
                        rules: [
                          {
                            required: !0,
                            message:
                              '\u8bf7\u586b\u5199\u670d\u52a1\u4f01\u4e1a',
                          },
                        ],
                        children: Object(u['jsx'])(i['a'], { size: 'large' }),
                      }),
                    ],
                  },
                ),
              ),
              Object(u['jsx'])(n['a'], {
                title: '\u4ea7\u54c1\u4fe1\u606f',
                style: { marginTop: 64, marginBottom: 20 },
              }),
              _.map((e, a) =>
                Object(u['jsx'])(
                  O['a'],
                  {
                    info: e,
                    setFromWhitch: F,
                    fromWhitch: T,
                    onDel: () => {
                      z((e) => {
                        e.splice(a, 1);
                      });
                    },
                    onChange: (e) => {
                      z((c) => {
                        c[a] = e;
                      });
                    },
                  },
                  a,
                ),
              ),
              Object(u['jsx'])('div', {
                style: { textAlign: 'center' },
                children: Object(u['jsx'])(t['a'], {
                  className: 'adminServiceAddBtn',
                  onClick: () => {
                    F('add'),
                      z((e) => {
                        e.push(p);
                      });
                  },
                  children: '\u65b0\u589e',
                }),
              }),
              Object(u['jsx'])('div', {
                style: { textAlign: 'center', marginTop: 20 },
                children: Object(u['jsx'])(t['a'], {
                  className: 'adminServiceSaveBtn',
                  onClick: () => {
                    d.validateFields().then((e) => {
                      var a = Object(j['a'])(e.city, 3),
                        c = a[0],
                        t = a[1],
                        s = a[2];
                      console.log(c, t, s),
                        Object(x['a'])({
                          szsfdm: c,
                          szsqdm: t,
                          szqxdm: s,
                          orgName: e.orgName,
                          orgProductList: _,
                        }).then(() => {
                          C.push('/service');
                        });
                    });
                  },
                  children: '\u4fdd\u5b58',
                }),
              }),
            ],
          })
        );
      };
    },
    LCX7: function (e, a, c) {
      e.exports = {
        myTitle: 'myTitle___3kbfk',
        title: 'title___2EKtI',
        dash: 'dash___pmEzt',
      };
    },
    P7pi: function (e, a, c) {
      'use strict';
      c.d(a, 'd', function () {
        return s;
      }),
        c.d(a, 'f', function () {
          return i;
        }),
        c.d(a, 'a', function () {
          return l;
        }),
        c.d(a, 'c', function () {
          return r;
        }),
        c.d(a, 'b', function () {
          return j;
        }),
        c.d(a, 'e', function () {
          return n;
        });
      var t = c('5lAy'),
        s = (e) =>
          Object(t['a'])({
            url: '/services/v1/fworg/query',
            method: 'POST',
            data: e,
          }),
        i = (e) =>
          Object(t['a'])({ url: '/services/v1/fworg/' + e, method: 'GET' }),
        l = (e) =>
          Object(t['a'])({
            url: '/services/v1/fworg/save',
            method: 'POST',
            data: e,
          }),
        r = (e) =>
          Object(t['a'])({
            url: '/services/v1/fworg/edit',
            method: 'PUT',
            data: e,
          }),
        j = (e) =>
          Object(t['a'])({
            url: '/services/v1/fworg',
            method: 'DELETE',
            data: e,
          }),
        n = () =>
          Object(t['a'])({
            url: '/services/v1/common/areaTree',
            method: 'GET',
          });
    },
    azGz: function (e, a, c) {
      'use strict';
      var t = c('0hF1'),
        s = (c('vvyX'), c('sEMA')),
        i = (c('6ihM'), c('NdOv')),
        l = (c('5tJY'), c('1olM')),
        r = (c('VAo7'), c('7fed')),
        j = (c('vh1u'), c('EyPa')),
        n = (c('8yU/'), c('yaUO')),
        d = c('4+7e'),
        b = c('pYQa'),
        O = c.n(b),
        h = c('jzin'),
        m = c('fkEL'),
        x = c('T9Mk'),
        o = c('ikfJ'),
        u = { labelCol: { span: 8 }, wrapperCol: { span: 6, offset: 1 } },
        v = { 1: '\u4fe1\u7528', 2: '\u62b5\u62bc', 3: '\u5176\u4ed6' },
        p = {
          1: '\u7ebf\u4e0a',
          2: '\u7ebf\u4e0b',
          3: '\u7ebf\u4e0a+\u7ebf\u4e0b',
        },
        f = {
          1: '\u81ea\u4e3b\u652f\u4ed8',
          2: '\u53d7\u6258\u652f\u4ed8',
          3: '\u5176\u4ed6',
        },
        g = {
          1: '\u5148\u606f\u540e\u672c',
          2: '\u7b49\u989d\u672c\u606f',
          3: '\u7b49\u989d\u672c\u91d1',
          4: '\u5176\u4ed6',
        };
      a['a'] = (e) => {
        var a = n['a'].useForm(),
          c = Object(d['a'])(a, 1),
          b = c[0],
          k = Object(x['useState'])(!e.showBlock),
          y = Object(d['a'])(k, 2),
          N = y[0],
          q = y[1],
          _ = e.onChange,
          z = e.info,
          w = e.fromWhitch,
          I = e.onDel,
          T = e.setFromWhitch;
        return Object(o['jsx'])('div', {
          className: O.a.myForm,
          children: N
            ? Object(o['jsxs'])(
                n['a'],
                Object(t['a'])(
                  Object(t['a'])({}, u),
                  {},
                  {
                    form: b,
                    children: [
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u4ea7\u54c1\u5e8f\u53f7',
                        required: !0,
                        name: 'cpxh',
                        rules: [
                          {
                            required: !0,
                            message:
                              '\u8bf7\u8f93\u5165\u4ea7\u54c1\u5e8f\u53f7',
                          },
                        ],
                        children: Object(o['jsx'])(j['a'], { size: 'large' }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u4ea7\u54c1\u7c7b\u522b',
                        required: !0,
                        name: 'cplb',
                        initialValue: '1',
                        children: Object(o['jsxs'])(r['a'], {
                          size: 'large',
                          children: [
                            Object(o['jsx'])(r['a'].Option, {
                              value: '1',
                              children: '\u4fe1\u7528',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '2',
                              children: '\u62b5\u62bc',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '3',
                              children: '\u5176\u4ed6',
                            }),
                          ],
                        }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u4ea7\u54c1\u540d\u79f0',
                        name: 'cpmc',
                        required: !0,
                        rules: [
                          {
                            required: !0,
                            message:
                              '\u8bf7\u8f93\u5165\u4ea7\u54c1\u540d\u79f0',
                          },
                        ],
                        children: Object(o['jsx'])(j['a'], { size: 'large' }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: ' \u5ba1\u6279\u7c7b\u578b',
                        name: 'splx',
                        required: !0,
                        initialValue: '1',
                        children: Object(o['jsxs'])(r['a'], {
                          size: 'large',
                          children: [
                            Object(o['jsx'])(r['a'].Option, {
                              value: '1',
                              children: '\u7ebf\u4e0a',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '2',
                              children: '\u7ebf\u4e0b',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '3',
                              children: '\u7ebf\u4e0a+\u7ebf\u4e0b',
                            }),
                          ],
                        }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u989d\u5ea6(\u4e07\u5143)',
                        name: 'ed',
                        required: !0,
                        rules: [
                          {
                            required: !0,
                            message: '\u8bf7\u8f93\u5165\u989d\u5ea6',
                          },
                        ],
                        children: Object(o['jsx'])(j['a'], { size: 'large' }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u5229\u7387',
                        rules: [
                          {
                            required: !0,
                            message: '\u8bf7\u8f93\u5165\u5229\u7387',
                          },
                        ],
                        name: 'lilv',
                        required: !0,
                        children: Object(o['jsx'])(j['a'], { size: 'large' }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u671f\u9650',
                        required: !0,
                        children: Object(o['jsxs'])(i['a'], {
                          gutter: 8,
                          align: 'middle',
                          children: [
                            Object(o['jsx'])(l['a'], {
                              span: 12,
                              children: Object(o['jsx'])(n['a'].Item, {
                                name: 'qxsj',
                                noStyle: !0,
                                rules: [
                                  {
                                    required: !0,
                                    message: '\u8bf7\u8f93\u5165\u671f\u9650',
                                  },
                                ],
                                children: Object(o['jsx'])(j['a'], {
                                  size: 'large',
                                  placeholder: '\u8bf7\u8f93\u5165\u671f\u9650',
                                }),
                              }),
                            }),
                            Object(o['jsx'])(l['a'], {
                              span: 12,
                              children: Object(o['jsx'])(n['a'].Item, {
                                name: 'qxdw',
                                noStyle: !0,
                                initialValue: '1',
                                children: Object(o['jsxs'])(r['a'], {
                                  size: 'large',
                                  children: [
                                    Object(o['jsx'])(r['a'].Option, {
                                      value: '1',
                                      children: '\u5e74',
                                    }),
                                    Object(o['jsx'])(r['a'].Option, {
                                      value: '2',
                                      children: '\u6708',
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u653e\u6b3e\u65f6\u95f4',
                        required: !0,
                        children: Object(o['jsxs'])(i['a'], {
                          gutter: 8,
                          align: 'middle',
                          children: [
                            Object(o['jsx'])(l['a'], {
                              span: 12,
                              children: Object(o['jsx'])(n['a'].Item, {
                                name: 'fksj',
                                noStyle: !0,
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                  },
                                ],
                                children: Object(o['jsx'])(j['a'], {
                                  size: 'large',
                                  placeholder:
                                    '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                }),
                              }),
                            }),
                            Object(o['jsx'])(l['a'], {
                              span: 12,
                              children: Object(o['jsx'])(n['a'].Item, {
                                name: 'fkdw',
                                noStyle: !0,
                                initialValue: '1',
                                children: Object(o['jsxs'])(r['a'], {
                                  size: 'large',
                                  children: [
                                    Object(o['jsx'])(r['a'].Option, {
                                      value: '1',
                                      children: '\u5929',
                                    }),
                                    Object(o['jsx'])(r['a'].Option, {
                                      value: '2',
                                      children: '\u6708',
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u63d0\u6b3e\u65b9\u5f0f',
                        name: 'tkfs',
                        required: !0,
                        initialValue: '1',
                        children: Object(o['jsxs'])(r['a'], {
                          size: 'large',
                          children: [
                            Object(o['jsx'])(r['a'].Option, {
                              value: '1',
                              children: '\u81ea\u4e3b\u652f\u4ed8',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '2',
                              children: '\u53d7\u6258\u652f\u4ed8',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '3',
                              children: '\u5176\u4ed6',
                            }),
                          ],
                        }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u8fd8\u6b3e\u65b9\u5f0f',
                        required: !0,
                        name: 'hkfs',
                        initialValue: '1',
                        children: Object(o['jsxs'])(r['a'], {
                          size: 'large',
                          children: [
                            Object(o['jsx'])(r['a'].Option, {
                              value: '1',
                              children: '\u5148\u606f\u540e\u672c',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '2',
                              children: '\u7b49\u989d\u672c\u606f',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '3',
                              children: '\u7b49\u989d\u672c\u91d1',
                            }),
                            Object(o['jsx'])(r['a'].Option, {
                              value: '4',
                              children: '\u5176\u4ed6',
                            }),
                          ],
                        }),
                      }),
                      Object(o['jsx'])(n['a'].Item, {
                        label: '\u5907\u6ce8',
                        name: 'remark',
                        children: Object(o['jsx'])(j['a'].TextArea, {
                          size: 'large',
                        }),
                      }),
                      Object(o['jsxs'])(n['a'].Item, {
                        label: ' ',
                        colon: !1,
                        children: [
                          Object(o['jsx'])(s['a'], {
                            className: 'addFormBtn',
                            onClick: () => {
                              b.validateFields().then((e) => {
                                _(e), q(!1);
                              });
                            },
                            children: '\u5b8c\u6210',
                          }),
                          Object(o['jsx'])(s['a'], {
                            className: 'cancelFormBtn',
                            onClick: () => {
                              'add' === w ? I() : q(!1);
                            },
                            children: '\u53d6\u6d88',
                          }),
                        ],
                      }),
                    ],
                  },
                ),
              )
            : Object(o['jsxs'])('div', {
                className: O.a.formBlock,
                children: [
                  Object(o['jsxs'])('div', {
                    className: O.a.bar,
                    children: [
                      Object(o['jsxs'])(s['a'], {
                        type: 'link',
                        className: 'editBtnTable',
                        onClick: () => {
                          b.setFieldsValue(Object(t['a'])({}, z)),
                            q(!0),
                            T('edit');
                        },
                        children: [
                          Object(o['jsx'])(h['a'], {}),
                          ' \u7f16\u8f91',
                        ],
                      }),
                      Object(o['jsxs'])(s['a'], {
                        type: 'link',
                        className: 'delBtnTable',
                        onClick: I,
                        children: [
                          Object(o['jsx'])(m['a'], {}),
                          '\u5220\u9664',
                        ],
                      }),
                    ],
                  }),
                  Object(o['jsx'])('div', {
                    className: O.a.content,
                    children: Object(o['jsxs'])('div', {
                      className: O.a.list,
                      children: [
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u4ea7\u54c1\u5e8f\u53f7:',
                            }),
                            Object(o['jsx'])('p', { children: z.cpxh }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u4ea7\u54c1\u7c7b\u522b:',
                            }),
                            Object(o['jsx'])('p', { children: v[z.cplb] }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u4ea7\u54c1\u540d\u79f0:',
                            }),
                            Object(o['jsx'])('p', { children: z.cpmc }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u5ba1\u6279\u7c7b\u578b :',
                            }),
                            Object(o['jsx'])('p', { children: p[z.splx] }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u989d\u5ea6:',
                            }),
                            Object(o['jsxs'])('p', {
                              children: [z.ed, '\u4e07'],
                            }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u5229\u7387:',
                            }),
                            Object(o['jsxs'])('p', { children: [z.lilv, '%'] }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u671f\u9650:',
                            }),
                            Object(o['jsxs'])('p', {
                              children: [
                                z.qxsj,
                                1 === z.qxdw ? '\u5e74' : '\u6708',
                              ],
                            }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u653e\u6b3e\u65f6\u95f4:',
                            }),
                            Object(o['jsxs'])('p', {
                              children: [
                                z.fksj,
                                1 === z.fkdw ? '\u5929' : '\u6708',
                              ],
                            }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u63d0\u6b3e\u65b9\u5f0f:',
                            }),
                            Object(o['jsx'])('p', { children: f[z.tkfs] }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u8fd8\u6b3e\u65b9\u5f0f:',
                            }),
                            Object(o['jsx'])('p', { children: g[z.hkfs] }),
                          ],
                        }),
                        Object(o['jsxs'])('div', {
                          className: O.a.item,
                          children: [
                            Object(o['jsx'])('h1', {
                              children: '\u5907\u6ce8:',
                            }),
                            Object(o['jsx'])('p', { children: z.remark }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
        });
      };
    },
    khV9: function (e, a, c) {
      'use strict';
      var t = c('LCX7'),
        s = c.n(t),
        i = c('ikfJ');
      a['a'] = (e) =>
        Object(i['jsxs'])('div', {
          className: s.a.myTitle,
          style: e.style,
          children: [
            Object(i['jsx'])('h5', { className: s.a.title, children: e.title }),
            Object(i['jsx'])('div', { className: s.a.dash }),
          ],
        });
    },
    pYQa: function (e, a, c) {
      e.exports = {
        myForm: 'myForm___31yxp',
        formBlock: 'formBlock___37yvC',
        bar: 'bar___2KER-',
        content: 'content___2hDv9',
        list: 'list___3JtnG',
        item: 'item___2Fpzw',
      };
    },
  },
]);
