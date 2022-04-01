(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
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
                      v = a.onKeyDown,
                      f = a.onKeyPress,
                      y = a.onKeyUp,
                      g = a.autoFocus,
                      k = a.value,
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
                            onKeyDown: v,
                            onKeyPress: f,
                            onChange: this.handleChange,
                            autoFocus: g,
                            ref: this.saveInput,
                            value: k,
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
        x = (t('TfCt'), t('qVa7')),
        m = t('ikfJ'),
        v = (e) => {
          var a = (a) => {
            var t = a.target.checked ? 1 : 0;
            e.onChange(t);
          };
          return Object(m['jsx'])(x['a'], {
            checked: 1 === e.checked,
            onChange: (e) => {
              a(e);
            },
          });
        },
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
                            children: Object(m['jsx'])(v, {}),
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
        y = t('jzBK'),
        g = t('q5+0'),
        k = t('8U54'),
        C = t.n(k),
        w = [];
      a['default'] = () => {
        var e = Object(g['g'])(),
          a = Object(h['useState'])([]),
          t = Object(l['a'])(a, 2),
          r = t[0],
          s = t[1],
          o = e.location.state;
        Object(h['useEffect'])(() => {
          Object(y['e'])(o.id).then((e) => {
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
                      if (!(t < w.length)) {
                        e.next = 11;
                        break;
                      }
                      return (n = w[t]), (e.next = 6), n.validateFields();
                    case 6:
                      (c = e.sent), a.push(c);
                    case 8:
                      t++, (e.next = 2);
                      break;
                    case 11:
                      Object(y['b'])({ id: o.id, productVOList: a }).then(
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
          className: C.a.matchEdit,
          children: [
            r.map((e, a) =>
              Object(m['jsx'])(
                f,
                {
                  index: a,
                  info: e,
                  onChange: (e) => {
                    w.push(e);
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
                children: '\u67e5\u770b',
              }),
            }),
          ],
        });
      };
    },
    jzBK: function (e, a, t) {
      'use strict';
      t.d(a, 'c', function () {
        return c;
      }),
        t.d(a, 'b', function () {
          return l;
        }),
        t.d(a, 'a', function () {
          return r;
        }),
        t.d(a, 'e', function () {
          return i;
        }),
        t.d(a, 'd', function () {
          return s;
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
          Object(n['a'])({
            url: '/services/v1/pipei/edit',
            method: 'DELETE',
            data: e,
          }),
        i = (e) =>
          Object(n['a'])({ url: '/services/v1/pipei/' + e, method: 'GET' }),
        s = () =>
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
            v = e.onChange,
            f = b(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            y = l['useContext'](j['b']),
            k = y.getPrefixCls,
            C = y.direction,
            w = l['useState'](f.value || t || []),
            I = Object(u['a'])(w, 2),
            P = I[0],
            N = I[1],
            E = l['useState']([]),
            V = Object(u['a'])(E, 2),
            q = V[0],
            S = V[1];
          l['useEffect'](
            function () {
              'value' in f && N(f.value || []);
            },
            [f.value],
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
              -1 === a ? t.push(e.value) : t.splice(a, 1), 'value' in f || N(t);
              var n = K();
              null === v ||
                void 0 === v ||
                v(
                  t
                    .filter(function (e) {
                      return -1 !== q.indexOf(e);
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
            T = k('checkbox', p),
            _ = ''.concat(T, '-group'),
            A = Object(d['a'])(f, ['value', 'disabled']);
          O &&
            O.length > 0 &&
            (r = K().map(function (e) {
              return l['createElement'](
                g,
                {
                  prefixCls: T,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : f.disabled,
                  value: e.value,
                  checked: -1 !== P.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(_, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var D = {
              toggleOption: M,
              value: P,
              disabled: f.disabled,
              name: f.name,
              registerValue: z,
              cancelValue: F,
            },
            L = i()(
              _,
              Object(n['a'])({}, ''.concat(_, '-rtl'), 'rtl' === C),
              x,
            );
          return l['createElement'](
            'div',
            Object(c['a'])({ className: L, style: m }, A, { ref: a }),
            l['createElement'](h.Provider, { value: D }, r),
          );
        },
        p = l['forwardRef'](O),
        x = l['memo'](p),
        m = t('M9Ln'),
        v = function (e, a) {
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
        f = function (e, a) {
          var t,
            r = e.prefixCls,
            o = e.className,
            u = e.children,
            d = e.indeterminate,
            b = void 0 !== d && d,
            O = e.style,
            p = e.onMouseEnter,
            x = e.onMouseLeave,
            f = e.skipGroup,
            y = void 0 !== f && f,
            g = v(e, [
              'prefixCls',
              'className',
              'children',
              'indeterminate',
              'style',
              'onMouseEnter',
              'onMouseLeave',
              'skipGroup',
            ]),
            k = l['useContext'](j['b']),
            C = k.getPrefixCls,
            w = k.direction,
            I = l['useContext'](h),
            P = l['useRef'](g.value);
          l['useEffect'](function () {
            null === I || void 0 === I || I.registerValue(g.value),
              Object(m['a'])(
                'checked' in g || !!I || !('value' in g),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            l['useEffect'](
              function () {
                if (!y)
                  return (
                    g.value !== P.current &&
                      (null === I || void 0 === I || I.cancelValue(P.current),
                      null === I || void 0 === I || I.registerValue(g.value),
                      (P.current = g.value)),
                    function () {
                      return null === I || void 0 === I
                        ? void 0
                        : I.cancelValue(g.value);
                    }
                  );
              },
              [g.value],
            );
          var N = C('checkbox', r),
            E = Object(c['a'])({}, g);
          I &&
            !y &&
            ((E.onChange = function () {
              g.onChange && g.onChange.apply(g, arguments),
                I.toggleOption && I.toggleOption({ label: u, value: g.value });
            }),
            (E.name = I.name),
            (E.checked = -1 !== I.value.indexOf(g.value)),
            (E.disabled = g.disabled || I.disabled));
          var V = i()(
              ((t = {}),
              Object(n['a'])(t, ''.concat(N, '-wrapper'), !0),
              Object(n['a'])(t, ''.concat(N, '-rtl'), 'rtl' === w),
              Object(n['a'])(t, ''.concat(N, '-wrapper-checked'), E.checked),
              Object(n['a'])(t, ''.concat(N, '-wrapper-disabled'), E.disabled),
              t),
              o,
            ),
            q = i()(Object(n['a'])({}, ''.concat(N, '-indeterminate'), b));
          return l['createElement'](
            'label',
            { className: V, style: O, onMouseEnter: p, onMouseLeave: x },
            l['createElement'](
              s['a'],
              Object(c['a'])({}, E, { prefixCls: N, className: q, ref: a }),
            ),
            void 0 !== u && l['createElement']('span', null, u),
          );
        },
        y = l['forwardRef'](f);
      y.displayName = 'Checkbox';
      var g = y,
        k = g;
      (k.Group = x), (k.__ANT_CHECKBOX = !0);
      a['a'] = k;
    },
  },
]);
