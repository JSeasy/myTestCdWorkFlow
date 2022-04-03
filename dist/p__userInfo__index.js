(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [37],
  {
    '1olM': function (e, t, a) {
      'use strict';
      var c = a('tPjX');
      t['a'] = c['a'];
    },
    '4NjM': function (e, t, a) {
      e.exports = {
        userInfo: 'userInfo___5PPHH',
        left: 'left___1JBhP',
        right: 'right___NHUyK',
        list: 'list___2SnRk',
        item: 'item___2hIRi',
        title: 'title___1nn9J',
        info: 'info___2kkoV',
        tip: 'tip___1FW8B',
        remark: 'remark___3gjxu',
      };
    },
    '5tJY': function (e, t, a) {
      'use strict';
      a('/YAq'), a('lwF7');
    },
    '6ihM': function (e, t, a) {
      'use strict';
      a('/YAq'), a('lwF7');
    },
    IbLv: function (e, t, a) {},
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
      var c = a('FNRQ');
      t['a'] = c['a'];
    },
    PU71: function (e, t, a) {
      'use strict';
      a('TfCt');
      var c = a('qVa7'),
        s = a('ikfJ');
      t['a'] = (e) => {
        var t = (t) => {
          var a = t.target.checked ? 1 : 0;
          e.onChange(a);
        };
        return Object(s['jsx'])(c['a'], {
          checked: 1 === e.checked,
          onChange: (e) => {
            t(e);
          },
          children: e.children,
        });
      };
    },
    TUAT: function (e, t, a) {
      'use strict';
      a.r(t);
      a('/YAq'), a('IbLv');
      var c = a('7eJq'),
        s = a('3UCj'),
        i = a('T9Mk'),
        l = a('jK+o'),
        r = a.n(l),
        n = a('f9wj'),
        j = function (e, t) {
          var a = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              t.indexOf(c) < 0 &&
              (a[c] = e[c]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (c = Object.getOwnPropertySymbols(e); s < c.length; s++)
              t.indexOf(c[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, c[s]) &&
                (a[c[s]] = e[c[s]]);
          }
          return a;
        },
        d = function (e) {
          var t,
            a = i['useContext'](n['b']),
            l = a.getPrefixCls,
            d = a.direction,
            o = e.prefixCls,
            b = e.type,
            h = void 0 === b ? 'horizontal' : b,
            O = e.orientation,
            m = void 0 === O ? 'center' : O,
            p = e.orientationMargin,
            x = e.className,
            u = e.children,
            f = e.dashed,
            g = e.plain,
            v = j(e, [
              'prefixCls',
              'type',
              'orientation',
              'orientationMargin',
              'className',
              'children',
              'dashed',
              'plain',
            ]),
            y = l('divider', o),
            _ = m.length > 0 ? '-'.concat(m) : m,
            w = !!u,
            N = 'left' === m && null != p,
            k = 'right' === m && null != p,
            I = r()(
              y,
              ''.concat(y, '-').concat(h),
              ((t = {}),
              Object(s['a'])(t, ''.concat(y, '-with-text'), w),
              Object(s['a'])(t, ''.concat(y, '-with-text').concat(_), w),
              Object(s['a'])(t, ''.concat(y, '-dashed'), !!f),
              Object(s['a'])(t, ''.concat(y, '-plain'), !!g),
              Object(s['a'])(t, ''.concat(y, '-rtl'), 'rtl' === d),
              Object(s['a'])(
                t,
                ''.concat(y, '-no-default-orientation-margin-left'),
                N,
              ),
              Object(s['a'])(
                t,
                ''.concat(y, '-no-default-orientation-margin-right'),
                k,
              ),
              t),
              x,
            ),
            z = Object(c['a'])(
              Object(c['a'])({}, N && { marginLeft: p }),
              k && { marginRight: p },
            );
          return i['createElement'](
            'div',
            Object(c['a'])({ className: I }, v, { role: 'separator' }),
            u &&
              i['createElement'](
                'span',
                { className: ''.concat(y, '-inner-text'), style: z },
                u,
              ),
          );
        },
        o = d,
        b = a('4+7e'),
        h = a('4NjM'),
        O = a.n(h),
        m = a('mYY6'),
        p = a('5lAy'),
        x = () =>
          Object(p['a'])({ url: '/services/v1/org/getOrgInfo', method: 'GET' }),
        u = () =>
          Object(p['a'])({
            url: '/services/v1/pipei/zjjgPipei',
            method: 'GET',
          }),
        f = a('ikfJ'),
        g = { 1: '\u4fe1\u7528', 2: '\u62b5\u62bc', 3: '\u5176\u4ed6' },
        v = {
          1: '\u7ebf\u4e0a',
          2: '\u7ebf\u4e0b',
          3: '\u7ebf\u4e0a+\u7ebf\u4e0b',
        },
        y = {
          1: '\u5148\u606f\u540e\u672c',
          2: '\u7b49\u989d\u672c\u606f',
          3: '\u7b49\u989d\u672c\u91d1',
          4: '\u5176\u4ed6',
        };
      t['default'] = (e) => {
        var t = Object(i['useRef'])(null),
          a = Object(i['useState'])([]),
          c = Object(b['a'])(a, 2),
          s = c[0],
          l = c[1];
        return (
          Object(i['useEffect'])(() => {
            x().then((e) => {
              console.log(e);
            }),
              u().then((e) => {
                var t = e.data;
                l(t.productList);
              });
          }, []),
          Object(f['jsxs'])('div', {
            className: O.a.userInfo,
            children: [
              Object(f['jsx'])('div', {
                className: O.a.left,
                children: Object(f['jsx'])(m['a'], { ref: t }),
              }),
              Object(f['jsxs'])('div', {
                className: O.a.right,
                children: [
                  Object(f['jsx'])('h1', {
                    children: '\u6700\u8fd1\u5339\u914d\u7ed3\u679c',
                  }),
                  Object(f['jsx'])('div', {
                    className: O.a.list,
                    children: s.map((e) =>
                      Object(f['jsxs'])('div', {
                        className: O.a.item,
                        children: [
                          Object(f['jsxs'])('div', {
                            className: O.a.title,
                            children: [
                              Object(f['jsx'])('h1', { children: e.cpmc }),
                              Object(f['jsxs'])('span', {
                                children: [g[e.cplb], '\u8d37\u6b3e'],
                              }),
                              Object(f['jsxs'])('span', {
                                children: [e.pipeiDu, '%'],
                              }),
                            ],
                          }),
                          Object(f['jsxs'])('div', {
                            className: O.a.info,
                            children: [
                              Object(f['jsxs'])('span', {
                                children: [e.ed, '\u4e07'],
                              }),
                              Object(f['jsx'])(o, {
                                type: 'vertical',
                                className: 'divider',
                              }),
                              Object(f['jsxs'])('span', {
                                children: [e.lilv, '%'],
                              }),
                              Object(f['jsx'])(o, {
                                type: 'vertical',
                                className: 'divider',
                              }),
                              Object(f['jsxs'])('span', {
                                children: [
                                  e.fksj,
                                  ' ',
                                  1 == e.fkdw ? '\u5929' : '\u6708',
                                  '\u653e\u6b3e',
                                ],
                              }),
                            ],
                          }),
                          Object(f['jsx'])('div', {
                            className: O.a.tip,
                            children: Object(f['jsxs'])('p', {
                              children: [
                                y[e.hkfs],
                                ' / ',
                                e.qxsj,
                                1 == e.qxdw ? '\u5e74' : '\u6708',
                                '/ ',
                                v[e.splx],
                              ],
                            }),
                          }),
                          Object(f['jsx'])('div', {
                            className: O.a.remark,
                            children: Object(f['jsxs'])('p', {
                              children: ['\u5907\u6ce8:', e.remark],
                            }),
                          }),
                        ],
                      }),
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    Ujwb: function (e, t, a) {
      e.exports = { registForm: 'registForm___2i8lL' };
    },
    khV9: function (e, t, a) {
      'use strict';
      var c = a('LCX7'),
        s = a.n(c),
        i = a('ikfJ');
      t['a'] = (e) =>
        Object(i['jsxs'])('div', {
          className: s.a.myTitle,
          style: e.style,
          children: [
            Object(i['jsx'])('h5', { className: s.a.title, children: e.title }),
            Object(i['jsx'])('div', { className: s.a.dash }),
          ],
        });
    },
    mYY6: function (e, t, a) {
      'use strict';
      var c = a('0hF1'),
        s = (a('0d8f'), a('0Niv')),
        i = (a('6ihM'), a('NdOv')),
        l = (a('5tJY'), a('1olM')),
        r = (a('VAo7'), a('7fed')),
        n = (a('vh1u'), a('EyPa')),
        j = (a('8yU/'), a('yaUO')),
        d = a('4+7e'),
        o = a('PU71'),
        b = a('khV9'),
        h = (a('vvyX'), a('sEMA')),
        O = a('T9Mk'),
        m = a('KXgE'),
        p = a.n(m),
        x = a('MLMA'),
        u = a('ikfJ'),
        f = (e) => {
          var t = e.value,
            a = e.onChange,
            c = e.title,
            s = Object(O['useState'])(''),
            i = Object(d['a'])(s, 2),
            l = (i[0], i[1]),
            r = () => {
              var t = Object(x['d'])();
              t.onchange = (t) => {
                var c = t.target.files[0],
                  s = n(c, e.fileType);
                Object(x['f'])(s).then((e) => {
                  var t = e.data;
                  l(c.name), a(t.file.id);
                });
              };
            },
            n = (e, t) => {
              var a = new FormData();
              return a.append('file', e), a.append('wjlb ', t), a;
            };
          return Object(u['jsxs'])('div', {
            className: p.a.customUpload,
            children: [
              Object(u['jsx'])(h['a'], {
                onClick: () => r(),
                style: { marginRight: 5 },
                children: t
                  ? '\u91cd\u65b0\u4e0a\u4f20'
                  : '\u6570\u636e\u4e0a\u4f20',
              }),
              Object(u['jsxs'])('div', {
                children: [
                  Object(u['jsx'])('div', { children: c }),
                  Object(u['jsx'])('p', {
                    className: p.a.fileName,
                    children: t
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
        g = a('Ujwb'),
        v = a.n(g),
        y = { labelCol: { span: 9 }, wrapperCol: { span: 15, offset: 1 } };
      t['a'] = Object(O['forwardRef'])((e, t) => {
        var a = j['a'].useForm(),
          h = Object(d['a'])(a, 1),
          m = h[0];
        return (
          Object(O['useImperativeHandle'])(t, () => ({
            validateForm: () => m.validateFields(),
            getForm: () => m,
          })),
          Object(u['jsx'])('div', {
            className: v.a.registForm,
            children: Object(u['jsxs'])(
              j['a'],
              Object(c['a'])(
                Object(c['a'])({ form: m }, y),
                {},
                {
                  children: [
                    Object(u['jsx'])(b['a'], {
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
                    Object(u['jsx'])(b['a'], {
                      title: '\u6cd5\u4eba\u5f81\u4fe1',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(u['jsx'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: Object(u['jsx'])(j['a'].Item, {
                        name: ['frzxbgfileList', 'id'],
                        label: '\u6cd5\u4eba\u5f81\u4fe1\u62a5\u544a',
                        children: Object(u['jsx'])(f, {
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
                    Object(u['jsx'])(b['a'], {
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
                    Object(u['jsx'])(b['a'], {
                      title: '\u878d\u8d44\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(u['jsxs'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: [
                        Object(u['jsxs'])(j['a'].Item, {
                          label: '\u878d\u8d44\u7c7b\u578b',
                          children: [
                            Object(u['jsxs'])(i['a'], {
                              children: [
                                Object(u['jsx'])(l['a'], {
                                  span: 9,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: 'rzlxXydk',
                                    noStyle: !0,
                                    valuePropName: 'checked',
                                    initialValue: !1,
                                    children: Object(u['jsx'])(o['a'], {
                                      style: { whiteSpace: 'nowrap' },
                                      children: '\u4fe1\u7528\u8d37\u6b3e',
                                    }),
                                  }),
                                }),
                                Object(u['jsx'])(l['a'], {
                                  span: 15,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: ['xydkFileList', 'id'],
                                    noStyle: !0,
                                    children: Object(u['jsx'])(f, {
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
                            Object(u['jsxs'])(i['a'], {
                              style: { marginTop: 30 },
                              children: [
                                Object(u['jsx'])(l['a'], {
                                  span: 9,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: 'rzlxDydk',
                                    noStyle: !0,
                                    valuePropName: 'checked',
                                    initialValue: !1,
                                    children: Object(u['jsx'])(o['a'], {
                                      style: { whiteSpace: 'nowrap' },
                                      children: '\u62b5\u62bc\u8d37\u6b3e',
                                    }),
                                  }),
                                }),
                                Object(u['jsx'])(l['a'], {
                                  span: 15,
                                  children: Object(u['jsx'])(j['a'].Item, {
                                    name: ['dydkfileList', 'id'],
                                    noStyle: !0,
                                    children: Object(u['jsx'])(f, {
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
                          children: Object(u['jsxs'])(s['a'].Group, {
                            children: [
                              Object(u['jsx'])(s['a'], {
                                value: 1,
                                children: '\u989d\u5ea6\u4f18\u5148',
                              }),
                              Object(u['jsx'])(s['a'], {
                                value: 2,
                                children: '\u5229\u7387\u4f18\u5148',
                              }),
                              Object(u['jsx'])(s['a'], {
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
