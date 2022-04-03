(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    '1olM': function (e, t, a) {
      'use strict';
      var s = a('tPjX');
      t['a'] = s['a'];
    },
    '5tJY': function (e, t, a) {
      'use strict';
      a('/YAq'), a('lwF7');
    },
    '6ihM': function (e, t, a) {
      'use strict';
      a('/YAq'), a('lwF7');
    },
    KXgE: function (e, t, a) {
      e.exports = {
        customUpload: 'customUpload___1ppeh',
        fileName: 'fileName___14y02',
      };
    },
    LCX7: function (e, t, a) {
      e.exports = {
        myTitle: 'myTitle___3kbfk',
        title: 'title___2EKtI',
        dash: 'dash___pmEzt',
      };
    },
    NdOv: function (e, t, a) {
      'use strict';
      var s = a('FNRQ');
      t['a'] = s['a'];
    },
    PU71: function (e, t, a) {
      'use strict';
      a('TfCt');
      var s = a('qVa7'),
        c = a('ikfJ');
      t['a'] = (e) => {
        var t = (t) => {
          var a = t.target.checked ? 1 : 0;
          e.onChange(a);
        };
        return Object(c['jsx'])(s['a'], {
          checked: 1 === e.checked,
          onChange: (e) => {
            t(e);
          },
          children: e.children,
        });
      };
    },
    Ujwb: function (e, t, a) {
      e.exports = { registForm: 'registForm___2i8lL' };
    },
    gsXd: function (e, t, a) {
      'use strict';
      a.r(t);
      a('vvyX');
      var s = a('sEMA'),
        c = (a('8yU/'), a('yaUO')),
        r = (a('vh1u'), a('EyPa')),
        l = a('0hF1'),
        i = a('mYY6'),
        n = a('khV9'),
        j = a('T9Mk'),
        d = a('sgsl'),
        o = a.n(d),
        b = a('zh2q'),
        h = a('q5+0'),
        m = a('ikfJ');
      t['default'] = (e) => {
        var t = Object(j['useRef'])(null),
          a = Object(h['g'])(),
          d = a.location.state,
          O = () => {
            t.current.validateForm().then((e) => {
              console.log(e),
                Object(b['c'])({ values: e }).then(() => {
                  a.push('/customer');
                });
            });
          };
        return (
          Object(j['useEffect'])(() => {
            Object(b['e'])(d.id).then((e) => {
              var a = e.data,
                s = t.current.getForm();
              console.log(a.userOrgInfo),
                s.setFieldsValue(Object(l['a'])({}, a.userOrgInfo));
            });
          }, []),
          Object(m['jsxs'])('div', {
            className: o.a.customerEdit,
            children: [
              Object(m['jsxs'])(i['a'], {
                ref: t,
                children: [
                  Object(m['jsx'])(n['a'], {
                    title: '\u8d26\u53f7\u4fe1\u606f',
                  }),
                  Object(m['jsxs'])('div', {
                    style: { margin: '0 auto', width: 582, marginTop: 40 },
                    children: [
                      Object(m['jsx'])(c['a'].Item, {
                        rules: [
                          {
                            required: !0,
                            message:
                              '\u8bf7\u8f93\u5165\u767b\u5f55\u624b\u673a\u53f7',
                          },
                        ],
                        name: 'mobile',
                        label: '\u767b\u5f55\u624b\u673a\u53f7',
                        children: Object(m['jsx'])(r['a'], {
                          placeholder:
                            '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                          size: 'large',
                        }),
                      }),
                      Object(m['jsx'])(c['a'].Item, {
                        rules: [
                          {
                            required: !0,
                            message:
                              '\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801',
                          },
                        ],
                        name: 'passwd',
                        label: '\u767b\u5f55\u5bc6\u7801',
                        children: Object(m['jsx'])(r['a'], {
                          placeholder:
                            '\u8bf7\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801',
                          size: 'large',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(m['jsx'])('div', {
                style: { margin: '0 auto', width: 582 },
                children: Object(m['jsx'])(s['a'], {
                  onClick: O,
                  children: '\u4fdd\u5b58',
                }),
              }),
            ],
          })
        );
      };
    },
    khV9: function (e, t, a) {
      'use strict';
      var s = a('LCX7'),
        c = a.n(s),
        r = a('ikfJ');
      t['a'] = (e) =>
        Object(r['jsxs'])('div', {
          className: c.a.myTitle,
          style: e.style,
          children: [
            Object(r['jsx'])('h5', { className: c.a.title, children: e.title }),
            Object(r['jsx'])('div', { className: c.a.dash }),
          ],
        });
    },
    mYY6: function (e, t, a) {
      'use strict';
      var s = a('0hF1'),
        c = (a('0d8f'), a('0Niv')),
        r = (a('6ihM'), a('NdOv')),
        l = (a('5tJY'), a('1olM')),
        i = (a('VAo7'), a('7fed')),
        n = (a('vh1u'), a('EyPa')),
        j = (a('8yU/'), a('yaUO')),
        d = a('4+7e'),
        o = a('PU71'),
        b = a('khV9'),
        h = (a('vvyX'), a('sEMA')),
        m = a('T9Mk'),
        O = a('KXgE'),
        u = a.n(O),
        x = a('MLMA'),
        p = a('ikfJ'),
        g = (e) => {
          var t = e.value,
            a = e.onChange,
            s = e.title,
            c = Object(m['useState'])(''),
            r = Object(d['a'])(c, 2),
            l = (r[0], r[1]),
            i = () => {
              var t = Object(x['d'])();
              t.onchange = (t) => {
                var s = t.target.files[0],
                  c = n(s, e.fileType);
                Object(x['f'])(c).then((e) => {
                  var t = e.data;
                  l(s.name), a(t.file.id);
                });
              };
            },
            n = (e, t) => {
              var a = new FormData();
              return a.append('file', e), a.append('wjlb ', t), a;
            };
          return Object(p['jsxs'])('div', {
            className: u.a.customUpload,
            children: [
              Object(p['jsx'])(h['a'], {
                onClick: () => i(),
                style: { marginRight: 5 },
                children: t
                  ? '\u91cd\u65b0\u4e0a\u4f20'
                  : '\u6570\u636e\u4e0a\u4f20',
              }),
              Object(p['jsxs'])('div', {
                children: [
                  Object(p['jsx'])('div', { children: s }),
                  Object(p['jsx'])('p', {
                    className: u.a.fileName,
                    children: t
                      ? Object(p['jsx'])('span', {
                          className: 'color',
                          children: '\u6587\u4ef6.pdf',
                        })
                      : '\u4e0a\u4f20\u6587\u4ef6\u8bf7\u5c0f\u4e8e10M',
                  }),
                ],
              }),
            ],
          });
        },
        v = a('Ujwb'),
        f = a.n(v),
        y = { labelCol: { span: 9 }, wrapperCol: { span: 15, offset: 1 } };
      t['a'] = Object(m['forwardRef'])((e, t) => {
        var a = j['a'].useForm(),
          h = Object(d['a'])(a, 1),
          O = h[0];
        return (
          Object(m['useImperativeHandle'])(t, () => ({
            validateForm: () => O.validateFields(),
            getForm: () => O,
          })),
          Object(p['jsx'])('div', {
            className: f.a.registForm,
            children: Object(p['jsxs'])(
              j['a'],
              Object(s['a'])(
                Object(s['a'])({ form: O }, y),
                {},
                {
                  children: [
                    Object(p['jsx'])(b['a'], {
                      title: '\u4f01\u4e1a\u57fa\u672c\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(p['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(p['jsx'])(j['a'].Item, {
                          name: 'orgName',
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0',
                            },
                          ],
                          label: '\u516c\u53f8\u540d\u79f0',
                          children: Object(p['jsx'])(n['a'], {
                            placeholder:
                              '\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0',
                            size: 'large',
                          }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u516c\u53f8\u884c\u4e1a',
                            },
                          ],
                          name: 'gshy',
                          label: '\u516c\u53f8\u884c\u4e1a',
                          initialValue: 1,
                          children: Object(p['jsxs'])(i['a'], {
                            size: 'large',
                            children: [
                              Object(p['jsx'])(i['a'].Option, {
                                value: 1,
                                children: '\u670d\u88c5',
                              }),
                              Object(p['jsx'])(i['a'].Option, {
                                value: 2,
                                children: '\u9910\u996e',
                              }),
                              Object(p['jsx'])(i['a'].Option, {
                                value: 3,
                                children: '\u623f\u5730\u4ea7',
                              }),
                              Object(p['jsx'])(i['a'].Option, {
                                value: 4,
                                children: '\u6c7d\u8f66',
                              }),
                              Object(p['jsx'])(i['a'].Option, {
                                value: 5,
                                children: '\u4e92\u8054\u7f51',
                              }),
                            ],
                          }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u59d3\u540d',
                            },
                          ],
                          name: 'lxrxm',
                          label: '\u8054\u7cfb\u4eba\u59d3\u540d',
                          children: Object(p['jsx'])(n['a'], {
                            placeholder:
                              '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u59d3\u540d',
                            size: 'large',
                          }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                            },
                          ],
                          name: 'lxrdh',
                          label: '\u8054\u7cfb\u4eba\u7535\u8bdd',
                          children: Object(p['jsx'])(n['a'], {
                            placeholder:
                              '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                            size: 'large',
                          }),
                        }),
                      ],
                    }),
                    e.children,
                    Object(p['jsx'])(b['a'], {
                      title: '\u6cd5\u4eba\u5f81\u4fe1',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(p['jsx'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: Object(p['jsx'])(j['a'].Item, {
                        name: ['frzxbgfileList', 'id'],
                        label: '\u6cd5\u4eba\u5f81\u4fe1\u62a5\u544a',
                        children: Object(p['jsx'])(g, {
                          fileType: 1,
                          title: Object(p['jsxs'])('p', {
                            style: { whiteSpace: 'nowrap' },
                            children: [
                              '\u53ef\u5728',
                              Object(p['jsx'])('span', {
                                className: 'color',
                                onClick: () => {
                                  window.open('https://ipcrs.pbccrc.org.cn');
                                },
                                children: 'https://ipcrs.pbccrc.org.cn',
                              }),
                              '\u70b9\u51fb"\u9a6c\u4e0a\u5f00\u59cb"\u7533\u8bf7\u4e0b\u8f7d',
                            ],
                          }),
                        }),
                      }),
                    }),
                    Object(p['jsx'])(b['a'], {
                      title: '\u8d22\u52a1\u6570\u636e',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(p['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u7eb3\u7a0e\u7b49\u7ea7',
                            },
                          ],
                          name: 'nsdj',
                          label: '\u7eb3\u7a0e\u7b49\u7ea7',
                          children: Object(p['jsx'])(n['a'], {
                            placeholder: 'A/B/M/C',
                            size: 'large',
                          }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          name: 'nsze',
                          label:
                            '\u8fd1\u4e00\u5e74\u7eb3\u7a0e\u603b\u989d(\u4e07\u5143)',
                          children: Object(p['jsx'])(n['a'], { size: 'large' }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          name: 'kpze',
                          label:
                            '\u8fd1\u4e00\u5e74\u5f00\u7968\u603b\u989d(\u4e07\u5143)',
                          children: Object(p['jsx'])(n['a'], { size: 'large' }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          name: 'fzze',
                          label:
                            '\u4f01\u4e1a\u5f53\u524d\u8d1f\u503a\u4f59\u989d(\u4e07\u5143)',
                          children: Object(p['jsx'])(n['a'], { size: 'large' }),
                        }),
                      ],
                    }),
                    Object(p['jsx'])(b['a'], {
                      title: '\u878d\u8d44\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(p['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(p['jsxs'])(j['a'].Item, {
                          label: '\u878d\u8d44\u7c7b\u578b',
                          children: [
                            Object(p['jsxs'])(r['a'], {
                              children: [
                                Object(p['jsx'])(l['a'], {
                                  span: 9,
                                  children: Object(p['jsx'])(j['a'].Item, {
                                    name: 'rzlxXydk',
                                    noStyle: !0,
                                    valuePropName: 'checked',
                                    initialValue: !1,
                                    children: Object(p['jsx'])(o['a'], {
                                      style: { whiteSpace: 'nowrap' },
                                      children: '\u4fe1\u7528\u8d37\u6b3e',
                                    }),
                                  }),
                                }),
                                Object(p['jsx'])(l['a'], {
                                  span: 15,
                                  children: Object(p['jsx'])(j['a'].Item, {
                                    name: ['xydkFileList', 'id'],
                                    noStyle: !0,
                                    children: Object(p['jsx'])(g, {
                                      fileType: 2,
                                      title: Object(p['jsxs'])('p', {
                                        style: { whiteSpace: 'nowrap' },
                                        children: [
                                          '\u6a21\u677f:',
                                          Object(p['jsx'])('span', {
                                            className: 'color',
                                            onClick: () => {
                                              window.open(
                                                'https://ipcrs.pbccrc.org.cn',
                                              );
                                            },
                                            children:
                                              '\u63d0\u4ea4\u6570\u636e.xlsx',
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(p['jsxs'])(r['a'], {
                              style: { marginTop: 30 },
                              children: [
                                Object(p['jsx'])(l['a'], {
                                  span: 9,
                                  children: Object(p['jsx'])(j['a'].Item, {
                                    name: 'rzlxDydk',
                                    noStyle: !0,
                                    valuePropName: 'checked',
                                    initialValue: !1,
                                    children: Object(p['jsx'])(o['a'], {
                                      style: { whiteSpace: 'nowrap' },
                                      children: '\u62b5\u62bc\u8d37\u6b3e',
                                    }),
                                  }),
                                }),
                                Object(p['jsx'])(l['a'], {
                                  span: 15,
                                  children: Object(p['jsx'])(j['a'].Item, {
                                    name: ['dydkfileList', 'id'],
                                    noStyle: !0,
                                    children: Object(p['jsx'])(g, {
                                      title: Object(p['jsxs'])('p', {
                                        style: { whiteSpace: 'nowrap' },
                                        children: [
                                          '\u6a21\u677f:',
                                          Object(p['jsx'])('span', {
                                            className: 'color',
                                            onClick: () => {
                                              window.open(
                                                'https://ipcrs.pbccrc.org.cn',
                                              );
                                            },
                                            children:
                                              '\u63d0\u4ea4\u6570\u636e.xlsx',
                                          }),
                                        ],
                                      }),
                                      fileType: 3,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          name: 'rzph',
                          label: '\u878d\u8d44\u504f\u597d',
                          initialValue: 1,
                          children: Object(p['jsxs'])(c['a'].Group, {
                            children: [
                              Object(p['jsx'])(c['a'], {
                                value: 1,
                                children: '\u989d\u5ea6\u4f18\u5148',
                              }),
                              Object(p['jsx'])(c['a'], {
                                value: 2,
                                children: '\u5229\u7387\u4f18\u5148',
                              }),
                              Object(p['jsx'])(c['a'], {
                                value: 3,
                                children: '\u901f\u5ea6\u4f18\u5148',
                              }),
                            ],
                          }),
                        }),
                        Object(p['jsx'])(j['a'].Item, {
                          name: 'xqje',
                          label: '\u9700\u6c42\u91d1\u989d',
                          required: !0,
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          children: Object(p['jsx'])(n['a'], { size: 'large' }),
                        }),
                      ],
                    }),
                  ],
                },
              ),
            ),
          })
        );
      });
    },
    sgsl: function (e, t, a) {
      e.exports = { customerEdit: 'customerEdit___2rzNf' };
    },
    zh2q: function (e, t, a) {
      'use strict';
      a.d(t, 'd', function () {
        return c;
      }),
        a.d(t, 'b', function () {
          return r;
        }),
        a.d(t, 'a', function () {
          return l;
        }),
        a.d(t, 'c', function () {
          return i;
        }),
        a.d(t, 'e', function () {
          return n;
        });
      var s = a('5lAy'),
        c = (e) =>
          Object(s['a'])({
            url: '/services/v1/org/khd/query',
            method: 'POST',
            data: e,
          }),
        r = (e) =>
          Object(s['a'])({
            url: '/services/v1/org',
            method: 'DELETE',
            data: e,
          }),
        l = (e) =>
          Object(s['a'])({
            url: '/services/v1/org/khd/saveQy',
            method: 'POST',
            data: e,
          }),
        i = (e) =>
          Object(s['a'])({
            url: '/services/1v/org/edit',
            method: 'PUT',
            data: e,
          }),
        n = (e) =>
          Object(s['a'])({ url: '/services/v1/org/khd/' + e, method: 'GET' });
    },
  },
]);
