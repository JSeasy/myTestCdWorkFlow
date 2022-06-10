(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    '/wk5': function (e, a, t) {
      'use strict';
      var n = t('Ou+A'),
        c = t('KLal'),
        r = t('P+Vm'),
        l = t('tJ49'),
        i = t('Yrqj'),
        s = t('QEIf'),
        o = t('DMBx'),
        u = t('7ozg'),
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
                      target: Object(l['a'])(
                        Object(l['a'])({}, n.props),
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
                      l = a.className,
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
                      g = a.onKeyUp,
                      k = a.autoFocus,
                      y = a.value,
                      C = a.required,
                      I = Object(r['a'])(a, [
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
                      w = Object.keys(I).reduce(function (e, a) {
                        return (
                          ('aria-' !== a.substr(0, 5) &&
                            'data-' !== a.substr(0, 5) &&
                            'role' !== a) ||
                            (e[a] = I[a]),
                          e
                        );
                      }, {}),
                      P = this.state.checked,
                      V = h()(
                        t,
                        l,
                        ((e = {}),
                        Object(c['a'])(e, ''.concat(t, '-checked'), P),
                        Object(c['a'])(e, ''.concat(t, '-disabled'), d),
                        e),
                      );
                    return j.a.createElement(
                      'span',
                      { className: V, style: i },
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
                            onKeyUp: g,
                            onKeyDown: f,
                            onKeyPress: v,
                            onChange: this.handleChange,
                            autoFocus: k,
                            ref: this.saveInput,
                            value: y,
                          },
                          w,
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
                      ? Object(l['a'])(
                          Object(l['a'])({}, a),
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
    '8U54': function (e, a, t) {
      e.exports = { matchEdit: 'matchEdit___1AOmj' };
    },
    PU71: function (e, a, t) {
      'use strict';
      t('teHG');
      var n = t('ZoyK'),
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
    TfuQ: function (e, a, t) {
      'use strict';
      var n = t('WVCz');
      a['a'] = n['a'];
    },
    ZoyK: function (e, a, t) {
      'use strict';
      var n = t('KLal'),
        c = t('Ou+A'),
        r = t('T9Mk'),
        l = t('jK+o'),
        i = t.n(l),
        s = t('/wk5'),
        o = t('vjJ4'),
        u = t('GThX'),
        d = t('EJA8'),
        j = t('ni4d'),
        b = t('I2Ht'),
        h = function (e, a) {
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
        O = r['createContext'](null),
        p = function (e, a) {
          var t = e.defaultValue,
            l = e.children,
            s = e.options,
            o = void 0 === s ? [] : s,
            p = e.prefixCls,
            x = e.className,
            m = e.style,
            f = e.onChange,
            v = h(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            g = r['useContext'](b['b']),
            k = g.getPrefixCls,
            C = g.direction,
            I = r['useState'](v.value || t || []),
            w = Object(d['a'])(I, 2),
            P = w[0],
            V = w[1],
            E = r['useState']([]),
            N = Object(d['a'])(E, 2),
            S = N[0],
            q = N[1];
          r['useEffect'](
            function () {
              'value' in v && V(v.value || []);
            },
            [v.value],
          );
          var K = function () {
              return o.map(function (e) {
                return 'string' === typeof e || 'number' === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            z = function (e) {
              q(function (a) {
                return a.filter(function (a) {
                  return a !== e;
                });
              });
            },
            A = function (e) {
              q(function (a) {
                return [].concat(Object(u['a'])(a), [e]);
              });
            },
            U = function (e) {
              var a = P.indexOf(e.value),
                t = Object(u['a'])(P);
              -1 === a ? t.push(e.value) : t.splice(a, 1), 'value' in v || V(t);
              var n = K();
              null === f ||
                void 0 === f ||
                f(
                  t
                    .filter(function (e) {
                      return -1 !== S.indexOf(e);
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
            B = k('checkbox', p),
            F = ''.concat(B, '-group'),
            M = Object(j['a'])(v, ['value', 'disabled']);
          o &&
            o.length > 0 &&
            (l = K().map(function (e) {
              return r['createElement'](
                y,
                {
                  prefixCls: B,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : v.disabled,
                  value: e.value,
                  checked: -1 !== P.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(F, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var T = {
              toggleOption: U,
              value: P,
              disabled: v.disabled,
              name: v.name,
              registerValue: A,
              cancelValue: z,
            },
            _ = i()(
              F,
              Object(n['a'])({}, ''.concat(F, '-rtl'), 'rtl' === C),
              x,
            );
          return r['createElement'](
            'div',
            Object(c['a'])({ className: _, style: m }, M, { ref: a }),
            r['createElement'](O.Provider, { value: T }, l),
          );
        },
        x = r['forwardRef'](p),
        m = r['memo'](x),
        f = t('M9k3'),
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
        g = function (e, a) {
          var t,
            l = e.prefixCls,
            u = e.className,
            d = e.children,
            j = e.indeterminate,
            h = void 0 !== j && j,
            p = e.style,
            x = e.onMouseEnter,
            m = e.onMouseLeave,
            g = e.skipGroup,
            k = void 0 !== g && g,
            y = v(e, [
              'prefixCls',
              'className',
              'children',
              'indeterminate',
              'style',
              'onMouseEnter',
              'onMouseLeave',
              'skipGroup',
            ]),
            C = r['useContext'](b['b']),
            I = C.getPrefixCls,
            w = C.direction,
            P = r['useContext'](O),
            V = Object(r['useContext'])(o['b']),
            E = V.isFormItemInput,
            N = r['useRef'](y.value);
          r['useEffect'](function () {
            null === P || void 0 === P || P.registerValue(y.value),
              Object(f['a'])(
                'checked' in y || !!P || !('value' in y),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            r['useEffect'](
              function () {
                if (!k)
                  return (
                    y.value !== N.current &&
                      (null === P || void 0 === P || P.cancelValue(N.current),
                      null === P || void 0 === P || P.registerValue(y.value),
                      (N.current = y.value)),
                    function () {
                      return null === P || void 0 === P
                        ? void 0
                        : P.cancelValue(y.value);
                    }
                  );
              },
              [y.value],
            );
          var S = I('checkbox', l),
            q = Object(c['a'])({}, y);
          P &&
            !k &&
            ((q.onChange = function () {
              y.onChange && y.onChange.apply(y, arguments),
                P.toggleOption && P.toggleOption({ label: d, value: y.value });
            }),
            (q.name = P.name),
            (q.checked = -1 !== P.value.indexOf(y.value)),
            (q.disabled = y.disabled || P.disabled));
          var K = i()(
              ((t = {}),
              Object(n['a'])(t, ''.concat(S, '-wrapper'), !0),
              Object(n['a'])(t, ''.concat(S, '-rtl'), 'rtl' === w),
              Object(n['a'])(t, ''.concat(S, '-wrapper-checked'), q.checked),
              Object(n['a'])(t, ''.concat(S, '-wrapper-disabled'), q.disabled),
              Object(n['a'])(t, ''.concat(S, '-wrapper-in-form-item'), E),
              t),
              u,
            ),
            z = i()(Object(n['a'])({}, ''.concat(S, '-indeterminate'), h)),
            A = h ? 'mixed' : void 0;
          return r['createElement'](
            'label',
            { className: K, style: p, onMouseEnter: x, onMouseLeave: m },
            r['createElement'](
              s['a'],
              Object(c['a'])({ 'aria-checked': A }, q, {
                prefixCls: S,
                className: z,
                ref: a,
              }),
            ),
            void 0 !== d && r['createElement']('span', null, d),
          );
        },
        k = r['forwardRef'](g);
      k.displayName = 'Checkbox';
      var y = k,
        C = y;
      (C.Group = m), (C.__ANT_CHECKBOX = !0);
      a['a'] = C;
    },
    cbwS: function (e, a, t) {
      'use strict';
      t.r(a);
      t('uoUd');
      var n = t('qB0e'),
        c = t('LpHj'),
        r = t('4+7e'),
        l = t('ylX1'),
        i = t.n(l),
        s = (t('iwEx'), t('TfuQ')),
        o = (t('cJjC'), t('s2Zf')),
        u = (t('gfMV'), t('cih1')),
        d = (t('ydr8'), t('kiQS')),
        j = t('0hF1'),
        b = (t('bCul'), t('W5NL')),
        h = t('T9Mk'),
        O = t('q5+0'),
        p = t('R4Cc'),
        x = t.n(p),
        m = t('PU71'),
        f = t('ikfJ'),
        v = (e, a) => {
          console.log(e, 'xxx');
          var t = Object(O['g'])(),
            n = b['a'].useForm(),
            c = Object(r['a'])(n, 1),
            l = c[0],
            i = Object(h['useState'])(!0),
            p = Object(r['a'])(i, 2),
            v = p[0];
          p[1];
          return (
            Object(h['useEffect'])(() => {
              l.setFieldsValue(Object(j['a'])({}, e.info)), e.onChange(l);
            }, []),
            Object(f['jsx'])('div', {
              className: x.a.formItem,
              children: Object(f['jsxs'])(b['a'], {
                form: l,
                layout: 'horizontal',
                labelCol: { span: 6 },
                children: [
                  Object(f['jsx'])(b['a'].Item, {
                    name: 'id',
                    style: { display: 'none' },
                    children: Object(f['jsx'])(d['a'], {}),
                  }),
                  Object(f['jsxs'])('div', {
                    className: x.a.formContent,
                    children: [
                      Object(f['jsx'])('div', {
                        style: { textAlign: 'right', paddingBottom: 12 },
                        children: Object(f['jsx'])('a', {
                          onClick: () => {
                            t.push({
                              pathname: '/matchDetailByProduct',
                              query: { id: e.info.id },
                            });
                          },
                          children: '\u67e5\u770b\u5339\u914d\u7ed3\u679c',
                        }),
                      }),
                      Object(f['jsxs'])(s['a'], {
                        children: [
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'cpxhShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u4ea7\u54c1\u5e8f\u53f7',
                              name: 'cpxh',
                              rules: [
                                {
                                  required: v,
                                  message:
                                    '\u8bf7\u8f93\u5165\u4ea7\u54c1\u5e8f\u53f7',
                                },
                              ],
                              required: !0,
                              children: Object(f['jsx'])(d['a'], {
                                size: 'large',
                                placeholder:
                                  '\u8bf7\u8f93\u5165\u4ea7\u54c1\u5e8f\u53f7',
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'cplbShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u4ea7\u54c1\u7c7b\u522b',
                              name: 'cplb',
                              rules: [
                                {
                                  required: v,
                                  message:
                                    '\u8bf7\u8f93\u5165\u4ea7\u54c1\u7c7b\u522b',
                                },
                              ],
                              required: !0,
                              initialValue: '1',
                              children: Object(f['jsxs'])(o['a'], {
                                size: 'large',
                                children: [
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '1',
                                    children: '\u4fe1\u7528',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '2',
                                    children: '\u62b5\u62bc',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '3',
                                    children: '\u5176\u4ed6',
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'cpmcShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u4ea7\u54c1\u540d\u79f0',
                              rules: [
                                {
                                  required: v,
                                  message:
                                    '\u8bf7\u8f93\u5165\u4ea7\u54c1\u540d\u79f0',
                                },
                              ],
                              name: 'cpmc',
                              required: !0,
                              children: Object(f['jsx'])(d['a'], {
                                placeholder:
                                  '\u8bf7\u8f93\u5165\u4ea7\u54c1\u540d\u79f0',
                                size: 'large',
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'splxShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u5ba1\u6279\u7c7b\u578b',
                              name: 'splx',
                              initialValue: '1',
                              children: Object(f['jsxs'])(o['a'], {
                                size: 'large',
                                children: [
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '1',
                                    children: '\u7ebf\u4e0a',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '2',
                                    children: '\u7ebf\u4e0b',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '3',
                                    children: '\u7ebf\u4e0a+\u7ebf\u4e0b',
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'edShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u989d\u5ea6(\u4e07)',
                              name: 'ed',
                              rules: [
                                {
                                  required: v,
                                  message: '\u8bf7\u8f93\u5165\u989d\u5ea6',
                                },
                              ],
                              required: !0,
                              children: Object(f['jsx'])(d['a'], {
                                placeholder: '\u8bf7\u8f93\u5165\u989d\u5ea6',
                                size: 'large',
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'lilvShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              name: 'lilv',
                              label: '\u5229\u7387(%)',
                              rules: [
                                {
                                  required: v,
                                  message: '\u8bf7\u8f93\u5165\u5229\u7387',
                                },
                              ],
                              required: !0,
                              children: Object(f['jsx'])(d['a'], {
                                placeholder: '\u8bf7\u8f93\u5165\u5229\u7387',
                                size: 'large',
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'qxsjShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u671f\u9650',
                              required: !0,
                              children: Object(f['jsxs'])(s['a'], {
                                gutter: 8,
                                align: 'middle',
                                children: [
                                  Object(f['jsx'])(u['a'], {
                                    span: 12,
                                    children: Object(f['jsx'])(b['a'].Item, {
                                      name: 'qxsj',
                                      noStyle: !0,
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            '\u8bf7\u8f93\u5165\u671f\u9650',
                                        },
                                      ],
                                      children: Object(f['jsx'])(d['a'], {
                                        size: 'large',
                                        placeholder:
                                          '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                      }),
                                    }),
                                  }),
                                  Object(f['jsx'])(u['a'], {
                                    span: 12,
                                    children: Object(f['jsx'])(b['a'].Item, {
                                      name: 'qxdw',
                                      noStyle: !0,
                                      initialValue: '1',
                                      children: Object(f['jsxs'])(o['a'], {
                                        size: 'large',
                                        children: [
                                          Object(f['jsx'])(o['a'].Option, {
                                            value: '1',
                                            children: '\u5e74',
                                          }),
                                          Object(f['jsx'])(o['a'].Option, {
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
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              valuePropName: 'checked',
                              name: 'fksjShow',
                              initialValue: !0,
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u653e\u6b3e\u65f6\u95f4',
                              required: !0,
                              children: Object(f['jsxs'])(s['a'], {
                                gutter: 8,
                                align: 'middle',
                                children: [
                                  Object(f['jsx'])(u['a'], {
                                    span: 12,
                                    children: Object(f['jsx'])(b['a'].Item, {
                                      name: 'fksj',
                                      noStyle: !0,
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                        },
                                      ],
                                      children: Object(f['jsx'])(d['a'], {
                                        size: 'large',
                                        placeholder:
                                          '\u8bf7\u8f93\u5165\u653e\u6b3e\u65f6\u95f4',
                                      }),
                                    }),
                                  }),
                                  Object(f['jsx'])(u['a'], {
                                    span: 12,
                                    children: Object(f['jsx'])(b['a'].Item, {
                                      name: 'fkdw',
                                      noStyle: !0,
                                      initialValue: '1',
                                      children: Object(f['jsxs'])(o['a'], {
                                        size: 'large',
                                        children: [
                                          Object(f['jsx'])(o['a'].Option, {
                                            value: '1',
                                            children: '\u5929',
                                          }),
                                          Object(f['jsx'])(o['a'].Option, {
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
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              initialValue: !0,
                              valuePropName: 'checked',
                              name: 'tkfsShow',
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u63d0\u6b3e\u65b9\u5f0f',
                              name: 'tkfs',
                              initialValue: '1',
                              children: Object(f['jsxs'])(o['a'], {
                                size: 'large',
                                children: [
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '1',
                                    children: '\u81ea\u4e3b\u652f\u4ed8 ',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '2',
                                    children: '\u53d7\u6258\u652f\u4ed8 ',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '3',
                                    children: '\u5176\u4ed6 ',
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              initialValue: !0,
                              valuePropName: 'checked',
                              name: 'hkfsShow',
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u8fd8\u6b3e\u65b9\u5f0f',
                              name: 'hkfs',
                              initialValue: '1',
                              children: Object(f['jsxs'])(o['a'], {
                                size: 'large',
                                children: [
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '1',
                                    children: '\u5148\u606f\u540e\u672c ',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '2',
                                    children: '\u7b49\u989d\u672c\u606f ',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '3',
                                    children: '\u7b49\u989d\u672c\u91d1 ',
                                  }),
                                  Object(f['jsx'])(o['a'].Option, {
                                    value: '4',
                                    children: '\u5176\u4ed6 ',
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 4,
                            children: Object(f['jsx'])(b['a'].Item, {
                              initialValue: !0,
                              valuePropName: 'checked',
                              name: 'remarkShow',
                              children: Object(f['jsx'])(m['a'], {}),
                            }),
                          }),
                          Object(f['jsx'])(u['a'], {
                            span: 20,
                            children: Object(f['jsx'])(b['a'].Item, {
                              label: '\u5907\u6ce8',
                              name: 'remark',
                              children: Object(f['jsx'])(d['a'].TextArea, {
                                placeholder: '\u8bf7\u8f93\u5165\u5907\u6ce8',
                                size: 'large',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        g = t('jzBK'),
        k = t('8U54'),
        y = t.n(k),
        C = [];
      a['default'] = () => {
        var e = Object(O['g'])(),
          a = Object(h['useState'])([]),
          t = Object(r['a'])(a, 2),
          l = t[0],
          s = t[1],
          o = e.location.state;
        Object(h['useEffect'])(() => {
          Object(g['d'])(o.id).then((e) => {
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
                      Object(g['a'])({ id: o.id, productVOList: a }).then(
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
        return Object(f['jsxs'])('div', {
          className: y.a.matchEdit,
          children: [
            l.map((e, a) =>
              Object(f['jsx'])(
                v,
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
            Object(f['jsx'])('div', {
              style: { textAlign: 'center' },
              children: Object(f['jsx'])(n['a'], {
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
    cih1: function (e, a, t) {
      'use strict';
      var n = t('Gqy6');
      a['a'] = n['a'];
    },
    gfMV: function (e, a, t) {
      'use strict';
      t('VAud'), t('xEAU');
    },
    iwEx: function (e, a, t) {
      'use strict';
      t('VAud'), t('xEAU');
    },
    jzBK: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return c;
      }),
        t.d(a, 'a', function () {
          return r;
        }),
        t.d(a, 'd', function () {
          return l;
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
        r = (e) =>
          Object(n['a'])({
            url: '/services/v1/pipei/edit',
            method: 'PUT',
            data: e,
          }),
        l = (e) =>
          Object(n['a'])({ url: '/services/v1/pipei/' + e, method: 'GET' }),
        i = () =>
          Object(n['a'])({
            url: '/services/v1/pipei/getPipeiCount',
            method: 'GET',
          });
    },
    rUAB: function (e, a, t) {},
    teHG: function (e, a, t) {
      'use strict';
      t('VAud'), t('rUAB');
    },
  },
]);
