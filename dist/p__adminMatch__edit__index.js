(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
  {
    '/wk5': function (e, a, t) {
      'use strict';
      var n = t('7eJq'),
        c = t('3UCj'),
        l = t('bvuw'),
        r = t('8CZ5'),
        i = t('784L'),
        s = t('6NPg'),
        o = t('LdBP'),
        u = t('ZLan'),
        d = t('T9Mk'),
        j = t.n(d),
        b = t('jK+o'),
        h = t.n(b),
        O = (function (e) {
          Object(o['a'])(t, e);
          var a = Object(u['a'])(t);
          function t(e) {
            var n;
            Object(i['a'])(this, t),
              (n = a.call(this, e)),
              (n.handleChange = function (e) {
                var a = n.props,
                  t = a.disabled,
                  c = a.onChange;
                t ||
                  ('checked' in n.props ||
                    n.setState({ checked: e.target.checked }),
                  c &&
                    c({
                      target: Object(r['a'])(
                        Object(r['a'])({}, n.props),
                        {},
                        { checked: e.target.checked },
                      ),
                      stopPropagation: function () {
                        e.stopPropagation();
                      },
                      preventDefault: function () {
                        e.preventDefault();
                      },
                      nativeEvent: e.nativeEvent,
                    }));
              }),
              (n.saveInput = function (e) {
                n.input = e;
              });
            var c = 'checked' in e ? e.checked : e.defaultChecked;
            return (n.state = { checked: c }), n;
          }
          return (
            Object(s['a'])(
              t,
              [
                {
                  key: 'focus',
                  value: function () {
                    this.input.focus();
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this.input.blur();
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e,
                      a = this.props,
                      t = a.prefixCls,
                      r = a.className,
                      i = a.style,
                      s = a.name,
                      o = a.id,
                      u = a.type,
                      d = a.disabled,
                      b = a.readOnly,
                      O = a.tabIndex,
                      p = a.onClick,
                      x = a.onFocus,
                      m = a.onBlur,
                      f = a.onKeyDown,
                      v = a.onKeyPress,
                      y = a.onKeyUp,
                      k = a.autoFocus,
                      g = a.value,
                      C = a.required,
                      w = Object(l['a'])(a, [
                        'prefixCls',
                        'className',
                        'style',
                        'name',
                        'id',
                        'type',
                        'disabled',
                        'readOnly',
                        'tabIndex',
                        'onClick',
                        'onFocus',
                        'onBlur',
                        'onKeyDown',
                        'onKeyPress',
                        'onKeyUp',
                        'autoFocus',
                        'value',
                        'required',
                      ]),
                      I = Object.keys(w).reduce(function (e, a) {
                        return (
                          ('aria-' !== a.substr(0, 5) &&
                            'data-' !== a.substr(0, 5) &&
                            'role' !== a) ||
                            (e[a] = w[a]),
                          e
                        );
                      }, {}),
                      P = this.state.checked,
                      N = h()(
                        t,
                        r,
                        ((e = {}),
                        Object(c['a'])(e, ''.concat(t, '-checked'), P),
                        Object(c['a'])(e, ''.concat(t, '-disabled'), d),
                        e),
                      );
                    return j.a.createElement(
                      'span',
                      { className: N, style: i },
                      j.a.createElement(
                        'input',
                        Object(n['a'])(
                          {
                            name: s,
                            id: o,
                            type: u,
                            required: C,
                            readOnly: b,
                            disabled: d,
                            tabIndex: O,
                            className: ''.concat(t, '-input'),
                            checked: !!P,
                            onClick: p,
                            onFocus: x,
                            onBlur: m,
                            onKeyUp: y,
                            onKeyDown: f,
                            onKeyPress: v,
                            onChange: this.handleChange,
                            autoFocus: k,
                            ref: this.saveInput,
                            value: g,
                          },
                          I,
                        ),
                      ),
                      j.a.createElement('span', {
                        className: ''.concat(t, '-inner'),
                      }),
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, a) {
                    return 'checked' in e
                      ? Object(r['a'])(
                          Object(r['a'])({}, a),
                          {},
                          { checked: e.checked },
                        )
                      : null;
                  },
                },
              ],
            ),
            t
          );
        })(d['Component']);
      (O.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {},
        onBlur: function () {},
        onChange: function () {},
        onKeyDown: function () {},
        onKeyPress: function () {},
        onKeyUp: function () {},
      }),
        (a['a'] = O);
    },
    '1olM': function (e, a, t) {
      'use strict';
      var n = t('tPjX');
      a['a'] = n['a'];
    },
    '5tJY': function (e, a, t) {
      'use strict';
      t('/YAq'), t('lwF7');
    },
    '6ihM': function (e, a, t) {
      'use strict';
      t('/YAq'), t('lwF7');
    },
    '8U54': function (e, a, t) {
      e.exports = { matchEdit: 'matchEdit___1AOmj' };
    },
    F7Dx: function (e, a, t) {},
    NdOv: function (e, a, t) {
      'use strict';
      var n = t('FNRQ');
      a['a'] = n['a'];
    },
    PU71: function (e, a, t) {
      'use strict';
      t('TfCt');
      var n = t('qVa7'),
        c = t('ikfJ');
      a['a'] = (e) => {
        var a = (a) => {
          var t = a.target.checked ? 1 : 0;
          e.onChange(t);
        };
        return Object(c['jsx'])(n['a'], {
          checked: 1 == e.checked,
          onChange: (e) => {
            a(e);
          },
          children: e.children,
        });
      };
    },
    R4Cc: function (e, a, t) {
      e.exports = {
        formItem: 'formItem___3Y_cr',
        formContent: 'formContent___1x2nT',
      };
    },
    TfCt: function (e, a, t) {
      'use strict';
      t('/YAq'), t('F7Dx');
    },
    cbwS: function (e, a, t) {
      'use strict';
      t.r(a);
      t('vvyX');
      var n = t('sEMA'),
        c = t('LpHj'),
        l = t('4+7e'),
        r = t('ylX1'),
        i = t.n(r),
        s = (t('6ihM'), t('NdOv')),
        o = (t('VAo7'), t('7fed')),
        u = (t('5tJY'), t('1olM')),
        d = (t('vh1u'), t('EyPa')),
        j = t('0hF1'),
        b = (t('8yU/'), t('yaUO')),
        h = t('T9Mk'),
        O = t('R4Cc'),
        p = t.n(O),
        x = t('PU71'),
        m = t('ikfJ'),
        f = (e, a) => {
          var t = b['a'].useForm(),
            n = Object(l['a'])(t, 1),
            c = n[0],
            r = Object(h['useState'])(!0),
            i = Object(l['a'])(r, 2),
            O = i[0];
          i[1];
          return (
            Object(h['useEffect'])(() => {
              c.setFieldsValue(Object(j['a'])({}, e.info)), e.onChange(c);
            }, []),
            Object(m['jsx'])('div', {
              className: p.a.formItem,
              children: Object(m['jsxs'])(b['a'], {
                form: c,
                layout: 'horizontal',
                labelCol: { span: 6 },
                children: [
                  Object(m['jsx'])(b['a'].Item, {
                    name: 'id',
                    style: { display: 'none' },
                    children: Object(m['jsx'])(d['a'], {}),
                  }),
                  Object(m['jsx'])('div', {
                    className: p.a.formContent,
                    children: Object(m['jsxs'])(s['a'], {
                      children: [
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'cpxhShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u4ea7\u54c1\u5e8f\u53f7',
                            name: 'cpxh',
                            rules: [
                              {
                                required: O,
                                message:
                                  '\u8bf7\u8f93\u5165\u4ea7\u54c1\u5e8f\u53f7',
                              },
                            ],
                            required: !0,
                            children: Object(m['jsx'])(d['a'], {
                              size: 'large',
                              placeholder:
                                '\u8bf7\u8f93\u5165\u4ea7\u54c1\u5e8f\u53f7',
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'cplbShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u4ea7\u54c1\u7c7b\u522b',
                            name: 'cplb',
                            rules: [
                              {
                                required: O,
                                message:
                                  '\u8bf7\u8f93\u5165\u4ea7\u54c1\u7c7b\u522b',
                              },
                            ],
                            required: !0,
                            initialValue: '1',
                            children: Object(m['jsxs'])(o['a'], {
                              size: 'large',
                              children: [
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '1',
                                  children: '\u4fe1\u7528',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '2',
                                  children: '\u62b5\u62bc',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '3',
                                  children: '\u5176\u4ed6',
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'cpmcShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u4ea7\u54c1\u540d\u79f0',
                            rules: [
                              {
                                required: O,
                                message:
                                  '\u8bf7\u8f93\u5165\u4ea7\u54c1\u540d\u79f0',
                              },
                            ],
                            name: 'cpmc',
                            required: !0,
                            children: Object(m['jsx'])(d['a'], {
                              placeholder:
                                '\u8bf7\u8f93\u5165\u4ea7\u54c1\u540d\u79f0',
                              size: 'large',
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'splxShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u5ba1\u6279\u7c7b\u578b',
                            name: 'splx',
                            initialValue: '1',
                            children: Object(m['jsxs'])(o['a'], {
                              size: 'large',
                              children: [
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '1',
                                  children: '\u7ebf\u4e0a',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '2',
                                  children: '\u7ebf\u4e0b',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '3',
                                  children: '\u7ebf\u4e0a+\u7ebf\u4e0b',
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'edShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u989d\u5ea6(\u4e07)',
                            name: 'ed',
                            rules: [
                              {
                                required: O,
                                message: '\u8bf7\u8f93\u5165\u989d\u5ea6',
                              },
                            ],
                            required: !0,
                            children: Object(m['jsx'])(d['a'], {
                              placeholder: '\u8bf7\u8f93\u5165\u989d\u5ea6',
                              size: 'large',
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'lilvShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            name: 'lilv',
                            label: '\u5229\u7387(%)',
                            rules: [
                              {
                                required: O,
                                message: '\u8bf7\u8f93\u5165\u5229\u7387',
                              },
                            ],
                            required: !0,
                            children: Object(m['jsx'])(d['a'], {
                              placeholder: '\u8bf7\u8f93\u5165\u5229\u7387',
                              size: 'large',
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'qxsjShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u671f\u9650',
                            required: !0,
                            children: Object(m['jsxs'])(s['a'], {
                              gutter: 8,
                              align: 'middle',
                              children: [
                                Object(m['jsx'])(u['a'], {
                                  span: 12,
                                  children: Object(m['jsx'])(b['a'].Item, {
                                    name: 'qxsj',
                                    noStyle: !0,
                                    rules: [
                                      {
                                        required: !0,
                                        message:
                                          '\u8bf7\u8f93\u5165\u671f\u9650',
                                      },
                                    ],
                                    children: Object(m['jsx'])(d['a'], {
                                      size: 'large',
                                      placeholder:
                                        '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                    }),
                                  }),
                                }),
                                Object(m['jsx'])(u['a'], {
                                  span: 12,
                                  children: Object(m['jsx'])(b['a'].Item, {
                                    name: 'qxdw',
                                    noStyle: !0,
                                    initialValue: '1',
                                    children: Object(m['jsxs'])(o['a'], {
                                      size: 'large',
                                      children: [
                                        Object(m['jsx'])(o['a'].Option, {
                                          value: '1',
                                          children: '\u5e74',
                                        }),
                                        Object(m['jsx'])(o['a'].Option, {
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
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            valuePropName: 'checked',
                            name: 'fksjShow',
                            initialValue: !0,
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u653e\u6b3e\u65f6\u95f4',
                            required: !0,
                            children: Object(m['jsxs'])(s['a'], {
                              gutter: 8,
                              align: 'middle',
                              children: [
                                Object(m['jsx'])(u['a'], {
                                  span: 12,
                                  children: Object(m['jsx'])(b['a'].Item, {
                                    name: 'fksj',
                                    noStyle: !0,
                                    rules: [
                                      {
                                        required: !0,
                                        message:
                                          '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                      },
                                    ],
                                    children: Object(m['jsx'])(d['a'], {
                                      size: 'large',
                                      placeholder:
                                        '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                    }),
                                  }),
                                }),
                                Object(m['jsx'])(u['a'], {
                                  span: 12,
                                  children: Object(m['jsx'])(b['a'].Item, {
                                    name: 'fkdw',
                                    noStyle: !0,
                                    initialValue: '1',
                                    children: Object(m['jsxs'])(o['a'], {
                                      size: 'large',
                                      children: [
                                        Object(m['jsx'])(o['a'].Option, {
                                          value: '1',
                                          children: '\u5929',
                                        }),
                                        Object(m['jsx'])(o['a'].Option, {
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
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            initialValue: !0,
                            valuePropName: 'checked',
                            name: 'tkfsShow',
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u63d0\u6b3e\u65b9\u5f0f',
                            name: 'tkfs',
                            initialValue: '1',
                            children: Object(m['jsxs'])(o['a'], {
                              size: 'large',
                              children: [
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '1',
                                  children: '\u81ea\u4e3b\u652f\u4ed8 ',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '2',
                                  children: '\u53d7\u6258\u652f\u4ed8 ',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '3',
                                  children: '\u5176\u4ed6 ',
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            initialValue: !0,
                            valuePropName: 'checked',
                            name: 'hkfsShow',
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u8fd8\u6b3e\u65b9\u5f0f',
                            name: 'hkfs',
                            initialValue: '1',
                            children: Object(m['jsxs'])(o['a'], {
                              size: 'large',
                              children: [
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '1',
                                  children: '\u5148\u606f\u540e\u672c ',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '2',
                                  children: '\u7b49\u989d\u672c\u606f ',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '3',
                                  children: '\u7b49\u989d\u672c\u91d1 ',
                                }),
                                Object(m['jsx'])(o['a'].Option, {
                                  value: '4',
                                  children: '\u5176\u4ed6 ',
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 4,
                          children: Object(m['jsx'])(b['a'].Item, {
                            initialValue: !0,
                            valuePropName: 'checked',
                            name: 'remarkShow',
                            children: Object(m['jsx'])(x['a'], {}),
                          }),
                        }),
                        Object(m['jsx'])(u['a'], {
                          span: 20,
                          children: Object(m['jsx'])(b['a'].Item, {
                            label: '\u5907\u6ce8',
                            name: 'remark',
                            children: Object(m['jsx'])(d['a'].TextArea, {
                              placeholder: '\u8bf7\u8f93\u5165\u5907\u6ce8',
                              size: 'large',
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        v = t('jzBK'),
        y = t('q5+0'),
        k = t('8U54'),
        g = t.n(k),
        C = [];
      a['default'] = () => {
        var e = Object(y['g'])(),
          a = Object(h['useState'])([]),
          t = Object(l['a'])(a, 2),
          r = t[0],
          s = t[1],
          o = e.location.state;
        Object(h['useEffect'])(() => {
          Object(v['d'])(o.id).then((e) => {
            var a = e.data;
            s(a.pipeiInfo.productVOList);
          });
        }, []);
        var u = (function () {
          var e = Object(c['a'])(
            i.a.mark(function e() {
              var a, t, n, c;
              return i.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = []), (t = 0);
                    case 2:
                      if (!(t < C.length)) {
                        e.next = 11;
                        break;
                      }
                      return (n = C[t]), (e.next = 6), n.validateFields();
                    case 6:
                      (c = e.sent), a.push(c);
                    case 8:
                      t++, (e.next = 2);
                      break;
                    case 11:
                      Object(v['a'])({ id: o.id, productVOList: a }).then(
                        (e) => {
                          console.log(e);
                        },
                      );
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return Object(m['jsxs'])('div', {
          className: g.a.matchEdit,
          children: [
            r.map((e, a) =>
              Object(m['jsx'])(
                f,
                {
                  index: a,
                  info: e,
                  onChange: (e) => {
                    C.push(e);
                  },
                },
                e.id,
              ),
            ),
            Object(m['jsx'])('div', {
              style: { textAlign: 'center' },
              children: Object(m['jsx'])(n['a'], {
                onClick: () => {
                  u();
                },
                children: '\u4fdd\u5b58',
              }),
            }),
          ],
        });
      };
    },
    jzBK: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return c;
      }),
        t.d(a, 'a', function () {
          return l;
        }),
        t.d(a, 'd', function () {
          return r;
        }),
        t.d(a, 'c', function () {
          return i;
        });
      var n = t('5lAy'),
        c = (e) =>
          Object(n['a'])({
            url: '/services/v1/pipei/query',
            method: 'POST',
            data: e,
          }),
        l = (e) =>
          Object(n['a'])({
            url: '/services/v1/pipei/edit',
            method: 'PUT',
            data: e,
          }),
        r = (e) =>
          Object(n['a'])({ url: '/services/v1/pipei/' + e, method: 'GET' }),
        i = () =>
          Object(n['a'])({
            url: '/services/v1/pipei/getPipeiCount',
            method: 'GET',
          });
    },
    qVa7: function (e, a, t) {
      'use strict';
      var n = t('3UCj'),
        c = t('7eJq'),
        l = t('T9Mk'),
        r = t('jK+o'),
        i = t.n(r),
        s = t('/wk5'),
        o = t('mKQt'),
        u = t('DZ87'),
        d = t('AYaK'),
        j = t('f9wj'),
        b = function (e, a) {
          var t = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              a.indexOf(n) < 0 &&
              (t[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              a.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (t[n[c]] = e[n[c]]);
          }
          return t;
        },
        h = l['createContext'](null),
        O = function (e, a) {
          var t = e.defaultValue,
            r = e.children,
            s = e.options,
            O = void 0 === s ? [] : s,
            p = e.prefixCls,
            x = e.className,
            m = e.style,
            f = e.onChange,
            v = b(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            y = l['useContext'](j['b']),
            g = y.getPrefixCls,
            C = y.direction,
            w = l['useState'](v.value || t || []),
            I = Object(u['a'])(w, 2),
            P = I[0],
            N = I[1],
            V = l['useState']([]),
            q = Object(u['a'])(V, 2),
            E = q[0],
            S = q[1];
          l['useEffect'](
            function () {
              'value' in v && N(v.value || []);
            },
            [v.value],
          );
          var K = function () {
              return O.map(function (e) {
                return 'string' === typeof e || 'number' === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            F = function (e) {
              S(function (a) {
                return a.filter(function (a) {
                  return a !== e;
                });
              });
            },
            z = function (e) {
              S(function (a) {
                return [].concat(Object(o['a'])(a), [e]);
              });
            },
            M = function (e) {
              var a = P.indexOf(e.value),
                t = Object(o['a'])(P);
              -1 === a ? t.push(e.value) : t.splice(a, 1), 'value' in v || N(t);
              var n = K();
              null === f ||
                void 0 === f ||
                f(
                  t
                    .filter(function (e) {
                      return -1 !== E.indexOf(e);
                    })
                    .sort(function (e, a) {
                      var t = n.findIndex(function (a) {
                          return a.value === e;
                        }),
                        c = n.findIndex(function (e) {
                          return e.value === a;
                        });
                      return t - c;
                    }),
                );
            },
            U = g('checkbox', p),
            _ = ''.concat(U, '-group'),
            T = Object(d['a'])(v, ['value', 'disabled']);
          O &&
            O.length > 0 &&
            (r = K().map(function (e) {
              return l['createElement'](
                k,
                {
                  prefixCls: U,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : v.disabled,
                  value: e.value,
                  checked: -1 !== P.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(_, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var A = {
              toggleOption: M,
              value: P,
              disabled: v.disabled,
              name: v.name,
              registerValue: z,
              cancelValue: F,
            },
            D = i()(
              _,
              Object(n['a'])({}, ''.concat(_, '-rtl'), 'rtl' === C),
              x,
            );
          return l['createElement'](
            'div',
            Object(c['a'])({ className: D, style: m }, T, { ref: a }),
            l['createElement'](h.Provider, { value: A }, r),
          );
        },
        p = l['forwardRef'](O),
        x = l['memo'](p),
        m = t('M9Ln'),
        f = function (e, a) {
          var t = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              a.indexOf(n) < 0 &&
              (t[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              a.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (t[n[c]] = e[n[c]]);
          }
          return t;
        },
        v = function (e, a) {
          var t,
            r = e.prefixCls,
            o = e.className,
            u = e.children,
            d = e.indeterminate,
            b = void 0 !== d && d,
            O = e.style,
            p = e.onMouseEnter,
            x = e.onMouseLeave,
            v = e.skipGroup,
            y = void 0 !== v && v,
            k = f(e, [
              'prefixCls',
              'className',
              'children',
              'indeterminate',
              'style',
              'onMouseEnter',
              'onMouseLeave',
              'skipGroup',
            ]),
            g = l['useContext'](j['b']),
            C = g.getPrefixCls,
            w = g.direction,
            I = l['useContext'](h),
            P = l['useRef'](k.value);
          l['useEffect'](function () {
            null === I || void 0 === I || I.registerValue(k.value),
              Object(m['a'])(
                'checked' in k || !!I || !('value' in k),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            l['useEffect'](
              function () {
                if (!y)
                  return (
                    k.value !== P.current &&
                      (null === I || void 0 === I || I.cancelValue(P.current),
                      null === I || void 0 === I || I.registerValue(k.value),
                      (P.current = k.value)),
                    function () {
                      return null === I || void 0 === I
                        ? void 0
                        : I.cancelValue(k.value);
                    }
                  );
              },
              [k.value],
            );
          var N = C('checkbox', r),
            V = Object(c['a'])({}, k);
          I &&
            !y &&
            ((V.onChange = function () {
              k.onChange && k.onChange.apply(k, arguments),
                I.toggleOption && I.toggleOption({ label: u, value: k.value });
            }),
            (V.name = I.name),
            (V.checked = -1 !== I.value.indexOf(k.value)),
            (V.disabled = k.disabled || I.disabled));
          var q = i()(
              ((t = {}),
              Object(n['a'])(t, ''.concat(N, '-wrapper'), !0),
              Object(n['a'])(t, ''.concat(N, '-rtl'), 'rtl' === w),
              Object(n['a'])(t, ''.concat(N, '-wrapper-checked'), V.checked),
              Object(n['a'])(t, ''.concat(N, '-wrapper-disabled'), V.disabled),
              t),
              o,
            ),
            E = i()(Object(n['a'])({}, ''.concat(N, '-indeterminate'), b));
          return l['createElement'](
            'label',
            { className: q, style: O, onMouseEnter: p, onMouseLeave: x },
            l['createElement'](
              s['a'],
              Object(c['a'])({}, V, { prefixCls: N, className: E, ref: a }),
            ),
            void 0 !== u && l['createElement']('span', null, u),
          );
        },
        y = l['forwardRef'](v);
      y.displayName = 'Checkbox';
      var k = y,
        g = k;
      (g.Group = x), (g.__ANT_CHECKBOX = !0);
      a['a'] = g;
    },
  },
]);
