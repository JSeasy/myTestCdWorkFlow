(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [36],
  {
    '1olM': function (e, a, t) {
      'use strict';
      var s = t('tPjX');
      a['a'] = s['a'];
    },
    '4l2p': function (e, a, t) {
      'use strict';
      t.r(a);
      t('vvyX');
      var s = t('sEMA'),
        c = (t('TfCt'), t('qVa7')),
        l = t('e4hb'),
        i = t.n(l),
        r = t('mYY6'),
        n = t('T9Mk'),
        j = t('5lAy'),
        d = (e) =>
          Object(j['a'])({
            url: '/services/v1/pipei/znPipei',
            method: 'POST',
            data: e,
          }),
        b = t('ikfJ');
      a['default'] = (e) => {
        var a = Object(n['useRef'])(null),
          t = () => {
            a.current.validateForm().then((e) => {
              d(e);
            });
          };
        return Object(b['jsxs'])('div', {
          className: i.a.userHome,
          children: [
            Object(b['jsx'])(r['a'], { ref: a }),
            Object(b['jsxs'])('div', {
              className: i.a.submit,
              children: [
                Object(b['jsx'])('p', {
                  children: '\u4e0d\u67e5\u5f81\u4fe1,\u7cbe\u51c6\u6d4b\u989d',
                }),
                Object(b['jsxs'])('div', {
                  className: i.a.service,
                  children: [
                    Object(b['jsx'])(c['a'], {}),
                    Object(b['jsxs'])('p', {
                      children: [
                        '\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f',
                        Object(b['jsx'])('span', {
                          className: 'color',
                          children:
                            '\u300a\u670d\u52a1\u6761\u6b3e\u3001\u9690\u79c1\u4fe1\u606f\u53ca\u6388\u6743\u300b',
                        }),
                      ],
                    }),
                  ],
                }),
                Object(b['jsx'])(s['a'], {
                  onClick: () => {
                    t();
                  },
                  children: '\u667a\u80fd\u7cbe\u51c6\u5339\u914d',
                }),
              ],
            }),
          ],
        });
      };
    },
    '5tJY': function (e, a, t) {
      'use strict';
      t('/YAq'), t('lwF7');
    },
    '6ihM': function (e, a, t) {
      'use strict';
      t('/YAq'), t('lwF7');
    },
    KXgE: function (e, a, t) {
      e.exports = {
        customUpload: 'customUpload___1ppeh',
        fileName: 'fileName___14y02',
      };
    },
    LCX7: function (e, a, t) {
      e.exports = {
        myTitle: 'myTitle___3kbfk',
        title: 'title___2EKtI',
        dash: 'dash___pmEzt',
      };
    },
    NdOv: function (e, a, t) {
      'use strict';
      var s = t('FNRQ');
      a['a'] = s['a'];
    },
    PU71: function (e, a, t) {
      'use strict';
      t('TfCt');
      var s = t('qVa7'),
        c = t('ikfJ');
      a['a'] = (e) => {
        var a = (a) => {
          var t = a.target.checked ? 1 : 0;
          e.onChange(t);
        };
        return Object(c['jsx'])(s['a'], {
          checked: 1 === e.checked,
          onChange: (e) => {
            a(e);
          },
          children: e.children,
        });
      };
    },
    Ujwb: function (e, a, t) {
      e.exports = { registForm: 'registForm___2i8lL' };
    },
    e4hb: function (e, a, t) {
      e.exports = {
        userHome: 'userHome___1WVJ5',
        submit: 'submit___1qaal',
        service: 'service___1H5HS',
      };
    },
    khV9: function (e, a, t) {
      'use strict';
      var s = t('LCX7'),
        c = t.n(s),
        l = t('ikfJ');
      a['a'] = (e) =>
        Object(l['jsxs'])('div', {
          className: c.a.myTitle,
          style: e.style,
          children: [
            Object(l['jsx'])('h5', { className: c.a.title, children: e.title }),
            Object(l['jsx'])('div', { className: c.a.dash }),
          ],
        });
    },
    mYY6: function (e, a, t) {
      'use strict';
      var s = t('0hF1'),
        c = (t('0d8f'), t('0Niv')),
        l = (t('6ihM'), t('NdOv')),
        i = (t('5tJY'), t('1olM')),
        r = (t('VAo7'), t('7fed')),
        n = (t('vh1u'), t('EyPa')),
        j = (t('8yU/'), t('yaUO')),
        d = t('4+7e'),
        b = t('PU71'),
        o = t('khV9'),
        h = (t('vvyX'), t('sEMA')),
        m = t('T9Mk'),
        O = t('KXgE'),
        x = t.n(O),
        p = t('MLMA'),
        u = t('ikfJ'),
        v = (e) => {
          var a = e.value,
            t = e.onChange,
            s = e.title,
            c = Object(m['useState'])(''),
            l = Object(d['a'])(c, 2),
            i = (l[0], l[1]),
            r = () => {
              var a = Object(p['d'])();
              a.onchange = (a) => {
                var s = a.target.files[0],
                  c = n(s, e.fileType);
                Object(p['f'])(c).then((e) => {
                  var a = e.data;
                  i(s.name), t(a.file.id);
                });
              };
            },
            n = (e, a) => {
              var t = new FormData();
              return t.append('file', e), t.append('wjlb ', a), t;
            };
          return Object(u['jsxs'])('div', {
            className: x.a.customUpload,
            children: [
              Object(u['jsx'])(h['a'], {
                onClick: () => r(),
                style: { marginRight: 5 },
                children: a
                  ? '\u91cd\u65b0\u4e0a\u4f20'
                  : '\u6570\u636e\u4e0a\u4f20',
              }),
              Object(u['jsxs'])('div', {
                children: [
                  Object(u['jsx'])('div', { children: s }),
                  Object(u['jsx'])('p', {
                    className: x.a.fileName,
                    children: a
                      ? Object(u['jsx'])('span', {
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
        g = t('Ujwb'),
        f = t.n(g),
        y = { labelCol: { span: 9 }, wrapperCol: { span: 15, offset: 1 } };
      a['a'] = Object(m['forwardRef'])((e, a) => {
        var t = j['a'].useForm(),
          h = Object(d['a'])(t, 1),
          O = h[0];
        return (
          Object(m['useImperativeHandle'])(a, () => ({
            validateForm: () => O.validateFields(),
            getForm: () => O,
          })),
          Object(u['jsx'])('div', {
            className: f.a.registForm,
            children: Object(u['jsxs'])(
              j['a'],
              Object(s['a'])(
                Object(s['a'])({ form: O }, y),
                {},
                {
                  children: [
                    Object(u['jsx'])(o['a'], {
                      title: '\u4f01\u4e1a\u57fa\u672c\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(u['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(u['jsx'])(j['a'].Item, {
                          name: 'orgName',
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0',
                            },
                          ],
                          label: '\u516c\u53f8\u540d\u79f0',
                          children: Object(u['jsx'])(n['a'], {
                            placeholder:
                              '\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0',
                            size: 'large',
                          }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
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
                          children: Object(u['jsxs'])(r['a'], {
                            size: 'large',
                            children: [
                              Object(u['jsx'])(r['a'].Option, {
                                value: 1,
                                children: '\u670d\u88c5',
                              }),
                              Object(u['jsx'])(r['a'].Option, {
                                value: 2,
                                children: '\u9910\u996e',
                              }),
                              Object(u['jsx'])(r['a'].Option, {
                                value: 3,
                                children: '\u623f\u5730\u4ea7',
                              }),
                              Object(u['jsx'])(r['a'].Option, {
                                value: 4,
                                children: '\u6c7d\u8f66',
                              }),
                              Object(u['jsx'])(r['a'].Option, {
                                value: 5,
                                children: '\u4e92\u8054\u7f51',
                              }),
                            ],
                          }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u59d3\u540d',
                            },
                          ],
                          name: 'lxrxm',
                          label: '\u8054\u7cfb\u4eba\u59d3\u540d',
                          children: Object(u['jsx'])(n['a'], {
                            placeholder:
                              '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u59d3\u540d',
                            size: 'large',
                          }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                            },
                          ],
                          name: 'lxrdh',
                          label: '\u8054\u7cfb\u4eba\u7535\u8bdd',
                          children: Object(u['jsx'])(n['a'], {
                            placeholder:
                              '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                            size: 'large',
                          }),
                        }),
                      ],
                    }),
                    e.children,
                    Object(u['jsx'])(o['a'], {
                      title: '\u6cd5\u4eba\u5f81\u4fe1',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(u['jsx'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: Object(u['jsx'])(j['a'].Item, {
                        name: ['frzxbgfileList', 'id'],
                        label: '\u6cd5\u4eba\u5f81\u4fe1\u62a5\u544a',
                        children: Object(u['jsx'])(v, {
                          fileType: 1,
                          title: Object(u['jsxs'])('p', {
                            style: { whiteSpace: 'nowrap' },
                            children: [
                              '\u53ef\u5728',
                              Object(u['jsx'])('span', {
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
                    Object(u['jsx'])(o['a'], {
                      title: '\u8d22\u52a1\u6570\u636e',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(u['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(u['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8bf7\u8f93\u5165\u7eb3\u7a0e\u7b49\u7ea7',
                            },
                          ],
                          name: 'nsdj',
                          label: '\u7eb3\u7a0e\u7b49\u7ea7',
                          children: Object(u['jsx'])(n['a'], {
                            placeholder: 'A/B/M/C',
                            size: 'large',
                          }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          name: 'nsze',
                          label:
                            '\u8fd1\u4e00\u5e74\u7eb3\u7a0e\u603b\u989d(\u4e07\u5143)',
                          children: Object(u['jsx'])(n['a'], { size: 'large' }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          name: 'kpze',
                          label:
                            '\u8fd1\u4e00\u5e74\u5f00\u7968\u603b\u989d(\u4e07\u5143)',
                          children: Object(u['jsx'])(n['a'], { size: 'large' }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          name: 'fzze',
                          label:
                            '\u4f01\u4e1a\u5f53\u524d\u8d1f\u503a\u4f59\u989d(\u4e07\u5143)',
                          children: Object(u['jsx'])(n['a'], { size: 'large' }),
                        }),
                      ],
                    }),
                    Object(u['jsx'])(o['a'], {
                      title: '\u878d\u8d44\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(u['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(u['jsxs'])(j['a'].Item, {
                          label: '\u878d\u8d44\u7c7b\u578b',
                          children: [
                            Object(u['jsxs'])(l['a'], {
                              children: [
                                Object(u['jsx'])(i['a'], {
                                  span: 9,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: 'rzlxXydk',
                                    noStyle: !0,
                                    valuePropName: 'checked',
                                    initialValue: !1,
                                    children: Object(u['jsx'])(b['a'], {
                                      style: { whiteSpace: 'nowrap' },
                                      children: '\u4fe1\u7528\u8d37\u6b3e',
                                    }),
                                  }),
                                }),
                                Object(u['jsx'])(i['a'], {
                                  span: 15,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: ['xydkFileList', 'id'],
                                    noStyle: !0,
                                    children: Object(u['jsx'])(v, {
                                      fileType: 2,
                                      title: Object(u['jsxs'])('p', {
                                        style: { whiteSpace: 'nowrap' },
                                        children: [
                                          '\u6a21\u677f:',
                                          Object(u['jsx'])('span', {
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
                            Object(u['jsxs'])(l['a'], {
                              style: { marginTop: 30 },
                              children: [
                                Object(u['jsx'])(i['a'], {
                                  span: 9,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: 'rzlxDydk',
                                    noStyle: !0,
                                    valuePropName: 'checked',
                                    initialValue: !1,
                                    children: Object(u['jsx'])(b['a'], {
                                      style: { whiteSpace: 'nowrap' },
                                      children: '\u62b5\u62bc\u8d37\u6b3e',
                                    }),
                                  }),
                                }),
                                Object(u['jsx'])(i['a'], {
                                  span: 15,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: ['dydkfileList', 'id'],
                                    noStyle: !0,
                                    children: Object(u['jsx'])(v, {
                                      title: Object(u['jsxs'])('p', {
                                        style: { whiteSpace: 'nowrap' },
                                        children: [
                                          '\u6a21\u677f:',
                                          Object(u['jsx'])('span', {
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
                        Object(u['jsx'])(j['a'].Item, {
                          name: 'rzph',
                          label: '\u878d\u8d44\u504f\u597d',
                          initialValue: 1,
                          children: Object(u['jsxs'])(c['a'].Group, {
                            children: [
                              Object(u['jsx'])(c['a'], {
                                value: 1,
                                children: '\u989d\u5ea6\u4f18\u5148',
                              }),
                              Object(u['jsx'])(c['a'], {
                                value: 2,
                                children: '\u5229\u7387\u4f18\u5148',
                              }),
                              Object(u['jsx'])(c['a'], {
                                value: 3,
                                children: '\u901f\u5ea6\u4f18\u5148',
                              }),
                            ],
                          }),
                        }),
                        Object(u['jsx'])(j['a'].Item, {
                          name: 'xqje',
                          label: '\u9700\u6c42\u91d1\u989d',
                          required: !0,
                          rules: [
                            {
                              required: !0,
                              message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                            },
                          ],
                          children: Object(u['jsx'])(n['a'], { size: 'large' }),
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
  },
]);
