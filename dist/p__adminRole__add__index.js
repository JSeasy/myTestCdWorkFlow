(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21],
  {
    '/wk5': function (e, t, n) {
      'use strict';
      var a = n('Ou+A'),
        c = n('KLal'),
        r = n('P+Vm'),
        l = n('tJ49'),
        i = n('Yrqj'),
        o = n('QEIf'),
        s = n('DMBx'),
        u = n('7ozg'),
        d = n('T9Mk'),
        b = n.n(d),
        f = n('jK+o'),
        m = n.n(f),
        v = (function (e) {
          Object(s['a'])(n, e);
          var t = Object(u['a'])(n);
          function n(e) {
            var a;
            Object(i['a'])(this, n),
              (a = t.call(this, e)),
              (a.handleChange = function (e) {
                var t = a.props,
                  n = t.disabled,
                  c = t.onChange;
                n ||
                  ('checked' in a.props ||
                    a.setState({ checked: e.target.checked }),
                  c &&
                    c({
                      target: Object(l['a'])(
                        Object(l['a'])({}, a.props),
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
              (a.saveInput = function (e) {
                a.input = e;
              });
            var c = 'checked' in e ? e.checked : e.defaultChecked;
            return (a.state = { checked: c }), a;
          }
          return (
            Object(o['a'])(
              n,
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
                      t = this.props,
                      n = t.prefixCls,
                      l = t.className,
                      i = t.style,
                      o = t.name,
                      s = t.id,
                      u = t.type,
                      d = t.disabled,
                      f = t.readOnly,
                      v = t.tabIndex,
                      p = t.onClick,
                      j = t.onFocus,
                      h = t.onBlur,
                      O = t.onKeyDown,
                      x = t.onKeyPress,
                      y = t.onKeyUp,
                      k = t.autoFocus,
                      g = t.value,
                      C = t.required,
                      N = Object(r['a'])(t, [
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
                      E = Object.keys(N).reduce(function (e, t) {
                        return (
                          ('aria-' !== t.substr(0, 5) &&
                            'data-' !== t.substr(0, 5) &&
                            'role' !== t) ||
                            (e[t] = N[t]),
                          e
                        );
                      }, {}),
                      w = this.state.checked,
                      I = m()(
                        n,
                        l,
                        ((e = {}),
                        Object(c['a'])(e, ''.concat(n, '-checked'), w),
                        Object(c['a'])(e, ''.concat(n, '-disabled'), d),
                        e),
                      );
                    return b.a.createElement(
                      'span',
                      { className: I, style: i },
                      b.a.createElement(
                        'input',
                        Object(a['a'])(
                          {
                            name: o,
                            id: s,
                            type: u,
                            required: C,
                            readOnly: f,
                            disabled: d,
                            tabIndex: v,
                            className: ''.concat(n, '-input'),
                            checked: !!w,
                            onClick: p,
                            onFocus: j,
                            onBlur: h,
                            onKeyUp: y,
                            onKeyDown: O,
                            onKeyPress: x,
                            onChange: this.handleChange,
                            autoFocus: k,
                            ref: this.saveInput,
                            value: g,
                          },
                          E,
                        ),
                      ),
                      b.a.createElement('span', {
                        className: ''.concat(n, '-inner'),
                      }),
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return 'checked' in e
                      ? Object(l['a'])(
                          Object(l['a'])({}, t),
                          {},
                          { checked: e.checked },
                        )
                      : null;
                  },
                },
              ],
            ),
            n
          );
        })(d['Component']);
      (v.defaultProps = {
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
        (t['a'] = v);
    },
    '2WS0': function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return c;
      }),
        n.d(t, 'f', function () {
          return r;
        }),
        n.d(t, 'e', function () {
          return l;
        }),
        n.d(t, 'a', function () {
          return i;
        }),
        n.d(t, 'b', function () {
          return o;
        }),
        n.d(t, 'c', function () {
          return s;
        });
      var a = n('5lAy'),
        c = (e) =>
          Object(a['a'])({
            url: '/services/v1/role/query',
            method: 'POST',
            data: e,
          }),
        r = (e) =>
          Object(a['a'])({ url: '/services/v1/role/' + e, method: 'GET' }),
        l = () =>
          Object(a['a'])({
            url: '/services/v1/role/getAllMenus',
            method: 'GET',
          }),
        i = (e) =>
          Object(a['a'])({ url: '/services/v1/role', method: 'POST', data: e }),
        o = (e) =>
          Object(a['a'])({
            url: '/services/v1/role',
            method: 'delete',
            data: e,
          }),
        s = (e) =>
          Object(a['a'])({
            url: '/services/v1/role/edit',
            method: 'PUT',
            data: e,
          });
    },
    JtYQ: function (e, t, n) {
      'use strict';
      n.r(t);
      n('uoUd');
      var a = n('qB0e'),
        c = (n('ydr8'), n('kiQS')),
        r = n('0hF1'),
        l = (n('bCul'), n('W5NL')),
        i = n('4+7e'),
        o = n('bEmH'),
        s = n.n(o),
        u = n('khV9'),
        d = n('2WS0'),
        b = n('T9Mk'),
        f = n('9kvl'),
        m = n('q5+0'),
        v = n('K/B4'),
        p = n('ikfJ'),
        j = { labelCol: { span: 4 }, wrapperCol: { span: 20, offset: 1 } };
      t['default'] = (e) => {
        var t = Object(f['c'])('@@initialState'),
          n = t.initialState['/role'].add;
        if (!n) return Object(p['jsx'])(m['a'], { to: '/404' });
        var o = Object(m['g'])(),
          h = l['a'].useForm(),
          O = Object(i['a'])(h, 1),
          x = O[0],
          y = Object(b['useState'])([]),
          k = Object(i['a'])(y, 2),
          g = k[0],
          C = k[1],
          N = Object(b['useState'])([]),
          E = Object(i['a'])(N, 2),
          w = E[0],
          I = E[1],
          K = () => {
            Object(d['e'])().then((e) => {
              var t = e.data;
              C(t.menus);
            });
          };
        Object(b['useEffect'])(() => {
          K();
        }, []);
        var P = () => {
            x.validateFields().then((e) => {
              Object(d['a'])(
                Object(r['a'])(Object(r['a'])({}, e), {}, { menuIds: w }),
              ).then((e) => {
                o.push('/role');
              });
            });
          },
          _ = (e) => {
            I(e);
          };
        return Object(p['jsxs'])('div', {
          className: s.a.roleAdd,
          children: [
            Object(p['jsx'])(u['a'], {
              title: '\u89d2\u8272\u4fe1\u606f',
              style: { marginTop: 22, marginBottom: 64 },
            }),
            Object(p['jsx'])(
              l['a'],
              Object(r['a'])(
                Object(r['a'])({}, j),
                {},
                {
                  form: x,
                  children: Object(p['jsxs'])('div', {
                    style: { width: 481, margin: '0 auto' },
                    children: [
                      Object(p['jsx'])(l['a'].Item, {
                        name: 'roleName',
                        rules: [
                          {
                            required: !0,
                            message:
                              '\u8bf7\u9009\u62e9\u63d2\u4ef6\u79cd\u7c7b',
                          },
                        ],
                        label: '\u89d2\u8272\u540d',
                        children: Object(p['jsx'])(c['a'], {
                          size: 'large',
                          placeholder: '\u8bf7\u8f93\u5165\u89d2\u8272\u540d',
                        }),
                      }),
                      Object(p['jsx'])(l['a'].Item, {
                        name: 'remark',
                        label: '\u63cf\u8ff0',
                        children: Object(p['jsx'])(c['a'].TextArea, {
                          size: 'large',
                          placeholder: '\u8bf7\u8f93\u5165\u63cf\u8ff0',
                        }),
                      }),
                    ],
                  }),
                },
              ),
            ),
            Object(p['jsx'])(u['a'], {
              title: '\u8d44\u6e90',
              style: { marginTop: 64, marginBottom: 64 },
            }),
            Object(p['jsx'])(v['a'], { data: g, menuIds: w, onChange: _ }),
            Object(p['jsx'])('div', {
              style: { textAlign: 'center', width: 481, margin: '0 auto' },
              children: Object(p['jsx'])(a['a'], {
                onClick: P,
                children: '\u4fdd\u5b58',
              }),
            }),
          ],
        });
      };
    },
    'K/B4': function (e, t, n) {
      'use strict';
      n('teHG');
      var a = n('ZoyK'),
        c = n('feUP'),
        r = n.n(c),
        l = n('T9Mk'),
        i = n.n(l),
        o = n('ikfJ');
      t['a'] = (e) => {
        var t = e.data,
          n = e.onChange,
          c = e.menuIds,
          l = (e) =>
            Object(o['jsxs'])(
              'div',
              {
                className: 'item',
                children: [
                  Object(o['jsxs'])('p', { children: [e.menuName, ':'] }),
                  Object(o['jsx'])('div', {
                    className: r.a.checkboxs,
                    children: e.auth.map((e) =>
                      Object(o['jsx'])(
                        i.a.Fragment,
                        {
                          children: Object(o['jsx'])(a['a'], {
                            value: e.menuId,
                            children: e.menuName,
                          }),
                        },
                        e.menuId,
                      ),
                    ),
                  }),
                ],
              },
              e.menuId,
            ),
          s = (e, t) =>
            t.map((t) =>
              Object(o['jsxs'])(
                'div',
                {
                  className: 'item',
                  children: [
                    Object(o['jsxs'])('p', {
                      children: [e.menuName, '-', t.menuName, ':'],
                    }),
                    Object(o['jsx'])('div', {
                      className: r.a.checkboxs,
                      children: t.auth.map((e) =>
                        Object(o['jsx'])(
                          i.a.Fragment,
                          {
                            children: Object(o['jsx'])(a['a'], {
                              value: e.menuId,
                              children: e.menuName,
                            }),
                          },
                          e.menuId,
                        ),
                      ),
                    }),
                  ],
                },
                t.menuId,
              ),
            );
        return Object(o['jsx'])('div', {
          className: r.a.permissionCb,
          children: Object(o['jsx'])('div', {
            className: 'list',
            children: Object(o['jsx'])(a['a'].Group, {
              onChange: n,
              value: c,
              children: t.map((e) =>
                e.children.length ? s(e, e.children) : l(e),
              ),
            }),
          }),
        });
      };
    },
    LCX7: function (e, t, n) {
      e.exports = {
        myTitle: 'myTitle___3kbfk',
        title: 'title___2EKtI',
        dash: 'dash___pmEzt',
      };
    },
    ZoyK: function (e, t, n) {
      'use strict';
      var a = n('KLal'),
        c = n('Ou+A'),
        r = n('T9Mk'),
        l = n('jK+o'),
        i = n.n(l),
        o = n('/wk5'),
        s = n('vjJ4'),
        u = n('GThX'),
        d = n('EJA8'),
        b = n('ni4d'),
        f = n('I2Ht'),
        m = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (a = Object.getOwnPropertySymbols(e); c < a.length; c++)
              t.indexOf(a[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[c]) &&
                (n[a[c]] = e[a[c]]);
          }
          return n;
        },
        v = r['createContext'](null),
        p = function (e, t) {
          var n = e.defaultValue,
            l = e.children,
            o = e.options,
            s = void 0 === o ? [] : o,
            p = e.prefixCls,
            j = e.className,
            h = e.style,
            O = e.onChange,
            x = m(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            y = r['useContext'](f['b']),
            k = y.getPrefixCls,
            C = y.direction,
            N = r['useState'](x.value || n || []),
            E = Object(d['a'])(N, 2),
            w = E[0],
            I = E[1],
            K = r['useState']([]),
            P = Object(d['a'])(K, 2),
            _ = P[0],
            S = P[1];
          r['useEffect'](
            function () {
              'value' in x && I(x.value || []);
            },
            [x.value],
          );
          var T = function () {
              return s.map(function (e) {
                return 'string' === typeof e || 'number' === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            A = function (e) {
              S(function (t) {
                return t.filter(function (t) {
                  return t !== e;
                });
              });
            },
            F = function (e) {
              S(function (t) {
                return [].concat(Object(u['a'])(t), [e]);
              });
            },
            B = function (e) {
              var t = w.indexOf(e.value),
                n = Object(u['a'])(w);
              -1 === t ? n.push(e.value) : n.splice(t, 1), 'value' in x || I(n);
              var a = T();
              null === O ||
                void 0 === O ||
                O(
                  n
                    .filter(function (e) {
                      return -1 !== _.indexOf(e);
                    })
                    .sort(function (e, t) {
                      var n = a.findIndex(function (t) {
                          return t.value === e;
                        }),
                        c = a.findIndex(function (e) {
                          return e.value === t;
                        });
                      return n - c;
                    }),
                );
            },
            M = k('checkbox', p),
            V = ''.concat(M, '-group'),
            U = Object(b['a'])(x, ['value', 'disabled']);
          s &&
            s.length > 0 &&
            (l = T().map(function (e) {
              return r['createElement'](
                g,
                {
                  prefixCls: M,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : x.disabled,
                  value: e.value,
                  checked: -1 !== w.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(V, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var D = {
              toggleOption: B,
              value: w,
              disabled: x.disabled,
              name: x.name,
              registerValue: F,
              cancelValue: A,
            },
            G = i()(
              V,
              Object(a['a'])({}, ''.concat(V, '-rtl'), 'rtl' === C),
              j,
            );
          return r['createElement'](
            'div',
            Object(c['a'])({ className: G, style: h }, U, { ref: t }),
            r['createElement'](v.Provider, { value: D }, l),
          );
        },
        j = r['forwardRef'](p),
        h = r['memo'](j),
        O = n('M9k3'),
        x = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (a = Object.getOwnPropertySymbols(e); c < a.length; c++)
              t.indexOf(a[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[c]) &&
                (n[a[c]] = e[a[c]]);
          }
          return n;
        },
        y = function (e, t) {
          var n,
            l = e.prefixCls,
            u = e.className,
            d = e.children,
            b = e.indeterminate,
            m = void 0 !== b && b,
            p = e.style,
            j = e.onMouseEnter,
            h = e.onMouseLeave,
            y = e.skipGroup,
            k = void 0 !== y && y,
            g = x(e, [
              'prefixCls',
              'className',
              'children',
              'indeterminate',
              'style',
              'onMouseEnter',
              'onMouseLeave',
              'skipGroup',
            ]),
            C = r['useContext'](f['b']),
            N = C.getPrefixCls,
            E = C.direction,
            w = r['useContext'](v),
            I = Object(r['useContext'])(s['b']),
            K = I.isFormItemInput,
            P = r['useRef'](g.value);
          r['useEffect'](function () {
            null === w || void 0 === w || w.registerValue(g.value),
              Object(O['a'])(
                'checked' in g || !!w || !('value' in g),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            r['useEffect'](
              function () {
                if (!k)
                  return (
                    g.value !== P.current &&
                      (null === w || void 0 === w || w.cancelValue(P.current),
                      null === w || void 0 === w || w.registerValue(g.value),
                      (P.current = g.value)),
                    function () {
                      return null === w || void 0 === w
                        ? void 0
                        : w.cancelValue(g.value);
                    }
                  );
              },
              [g.value],
            );
          var _ = N('checkbox', l),
            S = Object(c['a'])({}, g);
          w &&
            !k &&
            ((S.onChange = function () {
              g.onChange && g.onChange.apply(g, arguments),
                w.toggleOption && w.toggleOption({ label: d, value: g.value });
            }),
            (S.name = w.name),
            (S.checked = -1 !== w.value.indexOf(g.value)),
            (S.disabled = g.disabled || w.disabled));
          var T = i()(
              ((n = {}),
              Object(a['a'])(n, ''.concat(_, '-wrapper'), !0),
              Object(a['a'])(n, ''.concat(_, '-rtl'), 'rtl' === E),
              Object(a['a'])(n, ''.concat(_, '-wrapper-checked'), S.checked),
              Object(a['a'])(n, ''.concat(_, '-wrapper-disabled'), S.disabled),
              Object(a['a'])(n, ''.concat(_, '-wrapper-in-form-item'), K),
              n),
              u,
            ),
            A = i()(Object(a['a'])({}, ''.concat(_, '-indeterminate'), m)),
            F = m ? 'mixed' : void 0;
          return r['createElement'](
            'label',
            { className: T, style: p, onMouseEnter: j, onMouseLeave: h },
            r['createElement'](
              o['a'],
              Object(c['a'])({ 'aria-checked': F }, S, {
                prefixCls: _,
                className: A,
                ref: t,
              }),
            ),
            void 0 !== d && r['createElement']('span', null, d),
          );
        },
        k = r['forwardRef'](y);
      k.displayName = 'Checkbox';
      var g = k,
        C = g;
      (C.Group = h), (C.__ANT_CHECKBOX = !0);
      t['a'] = C;
    },
    bEmH: function (e, t, n) {
      e.exports = { roleAdd: 'roleAdd___2D0-a' };
    },
    feUP: function (e, t, n) {
      e.exports = {
        permissionCb: 'permissionCb___2iN39',
        checkboxs: 'checkboxs___2sKad',
      };
    },
    khV9: function (e, t, n) {
      'use strict';
      var a = n('LCX7'),
        c = n.n(a),
        r = n('ikfJ');
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
    rUAB: function (e, t, n) {},
    teHG: function (e, t, n) {
      'use strict';
      n('VAud'), n('rUAB');
    },
  },
]);
