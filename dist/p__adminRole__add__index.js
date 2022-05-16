(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    '/wk5': function (e, t, n) {
      'use strict';
      var a = n('7eJq'),
        c = n('3UCj'),
        r = n('bvuw'),
        l = n('8CZ5'),
        s = n('784L'),
        i = n('6NPg'),
        o = n('LdBP'),
        u = n('ZLan'),
        d = n('T9Mk'),
        b = n.n(d),
        f = n('jK+o'),
        v = n.n(f),
        m = (function (e) {
          Object(o['a'])(n, e);
          var t = Object(u['a'])(n);
          function n(e) {
            var a;
            Object(s['a'])(this, n),
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
            Object(i['a'])(
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
                      s = t.style,
                      i = t.name,
                      o = t.id,
                      u = t.type,
                      d = t.disabled,
                      f = t.readOnly,
                      m = t.tabIndex,
                      p = t.onClick,
                      j = t.onFocus,
                      h = t.onBlur,
                      O = t.onKeyDown,
                      y = t.onKeyPress,
                      x = t.onKeyUp,
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
                      P = v()(
                        n,
                        l,
                        ((e = {}),
                        Object(c['a'])(e, ''.concat(n, '-checked'), w),
                        Object(c['a'])(e, ''.concat(n, '-disabled'), d),
                        e),
                      );
                    return b.a.createElement(
                      'span',
                      { className: P, style: s },
                      b.a.createElement(
                        'input',
                        Object(a['a'])(
                          {
                            name: i,
                            id: o,
                            type: u,
                            required: C,
                            readOnly: f,
                            disabled: d,
                            tabIndex: m,
                            className: ''.concat(n, '-input'),
                            checked: !!w,
                            onClick: p,
                            onFocus: j,
                            onBlur: h,
                            onKeyUp: x,
                            onKeyDown: O,
                            onKeyPress: y,
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
      (m.defaultProps = {
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
        (t['a'] = m);
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
          return s;
        }),
        n.d(t, 'b', function () {
          return i;
        }),
        n.d(t, 'c', function () {
          return o;
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
        s = (e) =>
          Object(a['a'])({ url: '/services/v1/role', method: 'POST', data: e }),
        i = (e) =>
          Object(a['a'])({
            url: '/services/v1/role',
            method: 'delete',
            data: e,
          }),
        o = (e) =>
          Object(a['a'])({
            url: '/services/v1/role/edit',
            method: 'PUT',
            data: e,
          });
    },
    F7Dx: function (e, t, n) {},
    JtYQ: function (e, t, n) {
      'use strict';
      n.r(t);
      n('vvyX');
      var a = n('sEMA'),
        c = (n('vh1u'), n('EyPa')),
        r = n('0hF1'),
        l = (n('8yU/'), n('yaUO')),
        s = n('4+7e'),
        i = n('bEmH'),
        o = n.n(i),
        u = n('khV9'),
        d = n('2WS0'),
        b = n('T9Mk'),
        f = n('9kvl'),
        v = n('q5+0'),
        m = n('K/B4'),
        p = n('ikfJ'),
        j = { labelCol: { span: 4 }, wrapperCol: { span: 20, offset: 1 } };
      t['default'] = (e) => {
        var t = Object(f['c'])('@@initialState'),
          n = t.initialState['/role'].add;
        if (!n) return Object(p['jsx'])(v['a'], { to: '/404' });
        var i = Object(v['g'])(),
          h = l['a'].useForm(),
          O = Object(s['a'])(h, 1),
          y = O[0],
          x = Object(b['useState'])([]),
          k = Object(s['a'])(x, 2),
          g = k[0],
          C = k[1],
          N = Object(b['useState'])([]),
          E = Object(s['a'])(N, 2),
          w = E[0],
          P = E[1],
          I = () => {
            Object(d['e'])().then((e) => {
              var t = e.data;
              C(t.menus);
            });
          };
        Object(b['useEffect'])(() => {
          I();
        }, []);
        var K = () => {
            y.validateFields().then((e) => {
              Object(d['a'])(
                Object(r['a'])(Object(r['a'])({}, e), {}, { menuIds: w }),
              ).then((e) => {
                i.push('/role');
              });
            });
          },
          _ = (e) => {
            P(e);
          };
        return Object(p['jsxs'])('div', {
          className: o.a.roleAdd,
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
                  form: y,
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
            Object(p['jsx'])(m['a'], { data: g, menuIds: w, onChange: _ }),
            Object(p['jsx'])('div', {
              style: { textAlign: 'center', width: 481, margin: '0 auto' },
              children: Object(p['jsx'])(a['a'], {
                onClick: K,
                children: '\u4fdd\u5b58',
              }),
            }),
          ],
        });
      };
    },
    'K/B4': function (e, t, n) {
      'use strict';
      n('TfCt');
      var a = n('qVa7'),
        c = n('feUP'),
        r = n.n(c),
        l = n('T9Mk'),
        s = n.n(l),
        i = n('ikfJ');
      t['a'] = (e) => {
        var t = e.data,
          n = e.onChange,
          c = e.menuIds,
          l = (e) =>
            Object(i['jsxs'])(
              'div',
              {
                className: 'item',
                children: [
                  Object(i['jsxs'])('p', { children: [e.menuName, ':'] }),
                  Object(i['jsx'])('div', {
                    className: r.a.checkboxs,
                    children: e.auth.map((e) =>
                      Object(i['jsx'])(
                        s.a.Fragment,
                        {
                          children: Object(i['jsx'])(a['a'], {
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
          o = (e, t) =>
            t.map((t) =>
              Object(i['jsxs'])(
                'div',
                {
                  className: 'item',
                  children: [
                    Object(i['jsxs'])('p', {
                      children: [e.menuName, '-', t.menuName, ':'],
                    }),
                    Object(i['jsx'])('div', {
                      className: r.a.checkboxs,
                      children: t.auth.map((e) =>
                        Object(i['jsx'])(
                          s.a.Fragment,
                          {
                            children: Object(i['jsx'])(a['a'], {
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
        return Object(i['jsx'])('div', {
          className: r.a.permissionCb,
          children: Object(i['jsx'])('div', {
            className: 'list',
            children: Object(i['jsx'])(a['a'].Group, {
              onChange: n,
              value: c,
              children: t.map((e) =>
                e.children.length ? o(e, e.children) : l(e),
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
    TfCt: function (e, t, n) {
      'use strict';
      n('/YAq'), n('F7Dx');
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
    qVa7: function (e, t, n) {
      'use strict';
      var a = n('3UCj'),
        c = n('7eJq'),
        r = n('T9Mk'),
        l = n('jK+o'),
        s = n.n(l),
        i = n('/wk5'),
        o = n('mKQt'),
        u = n('DZ87'),
        d = n('AYaK'),
        b = n('f9wj'),
        f = function (e, t) {
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
        m = function (e, t) {
          var n = e.defaultValue,
            l = e.children,
            i = e.options,
            m = void 0 === i ? [] : i,
            p = e.prefixCls,
            j = e.className,
            h = e.style,
            O = e.onChange,
            y = f(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            x = r['useContext'](b['b']),
            g = x.getPrefixCls,
            C = x.direction,
            N = r['useState'](y.value || n || []),
            E = Object(u['a'])(N, 2),
            w = E[0],
            P = E[1],
            I = r['useState']([]),
            K = Object(u['a'])(I, 2),
            _ = K[0],
            T = K[1];
          r['useEffect'](
            function () {
              'value' in y && P(y.value || []);
            },
            [y.value],
          );
          var S = function () {
              return m.map(function (e) {
                return 'string' === typeof e || 'number' === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            F = function (e) {
              T(function (t) {
                return t.filter(function (t) {
                  return t !== e;
                });
              });
            },
            M = function (e) {
              T(function (t) {
                return [].concat(Object(o['a'])(t), [e]);
              });
            },
            V = function (e) {
              var t = w.indexOf(e.value),
                n = Object(o['a'])(w);
              -1 === t ? n.push(e.value) : n.splice(t, 1), 'value' in y || P(n);
              var a = S();
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
            q = g('checkbox', p),
            A = ''.concat(q, '-group'),
            D = Object(d['a'])(y, ['value', 'disabled']);
          m &&
            m.length > 0 &&
            (l = S().map(function (e) {
              return r['createElement'](
                k,
                {
                  prefixCls: q,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : y.disabled,
                  value: e.value,
                  checked: -1 !== w.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(A, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var U = {
              toggleOption: V,
              value: w,
              disabled: y.disabled,
              name: y.name,
              registerValue: M,
              cancelValue: F,
            },
            B = s()(
              A,
              Object(a['a'])({}, ''.concat(A, '-rtl'), 'rtl' === C),
              j,
            );
          return r['createElement'](
            'div',
            Object(c['a'])({ className: B, style: h }, D, { ref: t }),
            r['createElement'](v.Provider, { value: U }, l),
          );
        },
        p = r['forwardRef'](m),
        j = r['memo'](p),
        h = n('M9Ln'),
        O = function (e, t) {
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
            o = e.className,
            u = e.children,
            d = e.indeterminate,
            f = void 0 !== d && d,
            m = e.style,
            p = e.onMouseEnter,
            j = e.onMouseLeave,
            y = e.skipGroup,
            x = void 0 !== y && y,
            k = O(e, [
              'prefixCls',
              'className',
              'children',
              'indeterminate',
              'style',
              'onMouseEnter',
              'onMouseLeave',
              'skipGroup',
            ]),
            g = r['useContext'](b['b']),
            C = g.getPrefixCls,
            N = g.direction,
            E = r['useContext'](v),
            w = r['useRef'](k.value);
          r['useEffect'](function () {
            null === E || void 0 === E || E.registerValue(k.value),
              Object(h['a'])(
                'checked' in k || !!E || !('value' in k),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            r['useEffect'](
              function () {
                if (!x)
                  return (
                    k.value !== w.current &&
                      (null === E || void 0 === E || E.cancelValue(w.current),
                      null === E || void 0 === E || E.registerValue(k.value),
                      (w.current = k.value)),
                    function () {
                      return null === E || void 0 === E
                        ? void 0
                        : E.cancelValue(k.value);
                    }
                  );
              },
              [k.value],
            );
          var P = C('checkbox', l),
            I = Object(c['a'])({}, k);
          E &&
            !x &&
            ((I.onChange = function () {
              k.onChange && k.onChange.apply(k, arguments),
                E.toggleOption && E.toggleOption({ label: u, value: k.value });
            }),
            (I.name = E.name),
            (I.checked = -1 !== E.value.indexOf(k.value)),
            (I.disabled = k.disabled || E.disabled));
          var K = s()(
              ((n = {}),
              Object(a['a'])(n, ''.concat(P, '-wrapper'), !0),
              Object(a['a'])(n, ''.concat(P, '-rtl'), 'rtl' === N),
              Object(a['a'])(n, ''.concat(P, '-wrapper-checked'), I.checked),
              Object(a['a'])(n, ''.concat(P, '-wrapper-disabled'), I.disabled),
              n),
              o,
            ),
            _ = s()(Object(a['a'])({}, ''.concat(P, '-indeterminate'), f));
          return r['createElement'](
            'label',
            { className: K, style: m, onMouseEnter: p, onMouseLeave: j },
            r['createElement'](
              i['a'],
              Object(c['a'])({}, I, { prefixCls: P, className: _, ref: t }),
            ),
            void 0 !== u && r['createElement']('span', null, u),
          );
        },
        x = r['forwardRef'](y);
      x.displayName = 'Checkbox';
      var k = x,
        g = k;
      (g.Group = j), (g.__ANT_CHECKBOX = !0);
      t['a'] = g;
    },
  },
]);
