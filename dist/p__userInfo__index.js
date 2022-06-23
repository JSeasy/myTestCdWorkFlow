(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [38],
  {
    '/wk5': function (e, t, a) {
      'use strict';
      var n = a('7eJq'),
        c = a('3UCj'),
        r = a('bvuw'),
        l = a('8CZ5'),
        s = a('784L'),
        i = a('6NPg'),
        o = a('LdBP'),
        d = a('ZLan'),
        j = a('T9Mk'),
        u = a.n(j),
        b = a('jK+o'),
        p = a.n(b),
        O = (function (e) {
          Object(o['a'])(a, e);
          var t = Object(d['a'])(a);
          function a(e) {
            var n;
            Object(s['a'])(this, a),
              (n = t.call(this, e)),
              (n.handleChange = function (e) {
                var t = n.props,
                  a = t.disabled,
                  c = t.onChange;
                a ||
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
            Object(i['a'])(
              a,
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
                      a = t.prefixCls,
                      l = t.className,
                      s = t.style,
                      i = t.name,
                      o = t.id,
                      d = t.type,
                      j = t.disabled,
                      b = t.readOnly,
                      O = t.tabIndex,
                      h = t.onClick,
                      f = t.onFocus,
                      x = t.onBlur,
                      v = t.onKeyDown,
                      m = t.onKeyPress,
                      y = t.onKeyUp,
                      g = t.autoFocus,
                      k = t.value,
                      C = t.required,
                      w = Object(r['a'])(t, [
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
                      N = Object.keys(w).reduce(function (e, t) {
                        return (
                          ('aria-' !== t.substr(0, 5) &&
                            'data-' !== t.substr(0, 5) &&
                            'role' !== t) ||
                            (e[t] = w[t]),
                          e
                        );
                      }, {}),
                      _ = this.state.checked,
                      E = p()(
                        a,
                        l,
                        ((e = {}),
                        Object(c['a'])(e, ''.concat(a, '-checked'), _),
                        Object(c['a'])(e, ''.concat(a, '-disabled'), j),
                        e),
                      );
                    return u.a.createElement(
                      'span',
                      { className: E, style: s },
                      u.a.createElement(
                        'input',
                        Object(n['a'])(
                          {
                            name: i,
                            id: o,
                            type: d,
                            required: C,
                            readOnly: b,
                            disabled: j,
                            tabIndex: O,
                            className: ''.concat(a, '-input'),
                            checked: !!_,
                            onClick: h,
                            onFocus: f,
                            onBlur: x,
                            onKeyUp: y,
                            onKeyDown: v,
                            onKeyPress: m,
                            onChange: this.handleChange,
                            autoFocus: g,
                            ref: this.saveInput,
                            value: k,
                          },
                          N,
                        ),
                      ),
                      u.a.createElement('span', {
                        className: ''.concat(a, '-inner'),
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
            a
          );
        })(j['Component']);
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
        (t['a'] = O);
    },
    '0Niv': function (e, t, a) {
      'use strict';
      var n = a('3UCj'),
        c = a('7eJq'),
        r = a('T9Mk'),
        l = a('/wk5'),
        s = a('jK+o'),
        i = a.n(s),
        o = a('XDpi'),
        d = a('f9wj'),
        j = r['createContext'](null),
        u = j.Provider,
        b = j,
        p = a('M9Ln'),
        O = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              t.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (a[n[c]] = e[n[c]]);
          }
          return a;
        },
        h = function (e, t) {
          var a,
            s = r['useContext'](b),
            j = r['useContext'](d['b']),
            u = j.getPrefixCls,
            h = j.direction,
            f = r['useRef'](),
            x = Object(o['a'])(t, f);
          r['useEffect'](function () {
            Object(p['a'])(
              !('optionType' in e),
              'Radio',
              '`optionType` is only support in Radio.Group.',
            );
          }, []);
          var v = function (t) {
              var a, n;
              null === (a = e.onChange) || void 0 === a || a.call(e, t),
                null ===
                  (n = null === s || void 0 === s ? void 0 : s.onChange) ||
                  void 0 === n ||
                  n.call(s, t);
            },
            m = e.prefixCls,
            y = e.className,
            g = e.children,
            k = e.style,
            C = O(e, ['prefixCls', 'className', 'children', 'style']),
            w = u('radio', m),
            N = Object(c['a'])({}, C);
          s &&
            ((N.name = s.name),
            (N.onChange = v),
            (N.checked = e.value === s.value),
            (N.disabled = e.disabled || s.disabled));
          var _ = i()(
            ''.concat(w, '-wrapper'),
            ((a = {}),
            Object(n['a'])(a, ''.concat(w, '-wrapper-checked'), N.checked),
            Object(n['a'])(a, ''.concat(w, '-wrapper-disabled'), N.disabled),
            Object(n['a'])(a, ''.concat(w, '-wrapper-rtl'), 'rtl' === h),
            a),
            y,
          );
          return r['createElement'](
            'label',
            {
              className: _,
              style: k,
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
            },
            r['createElement'](
              l['a'],
              Object(c['a'])({}, N, { type: 'radio', prefixCls: w, ref: x }),
            ),
            void 0 !== g ? r['createElement']('span', null, g) : null,
          );
        },
        f = r['forwardRef'](h);
      f.displayName = 'Radio';
      var x = f,
        v = a('DZ87'),
        m = a('Zuj1'),
        y = a('o8qi');
      function g(e) {
        return Object.keys(e).reduce(function (t, a) {
          return (
            (!a.startsWith('data-') &&
              !a.startsWith('aria-') &&
              'role' !== a) ||
              a.startsWith('data-__') ||
              (t[a] = e[a]),
            t
          );
        }, {});
      }
      var k = r['forwardRef'](function (e, t) {
          var a = r['useContext'](d['b']),
            l = a.getPrefixCls,
            s = a.direction,
            o = r['useContext'](y['b']),
            j = Object(m['a'])(e.defaultValue, { value: e.value }),
            b = Object(v['a'])(j, 2),
            p = b[0],
            O = b[1],
            h = function (t) {
              var a = p,
                n = t.target.value;
              'value' in e || O(n);
              var c = e.onChange;
              c && n !== a && c(t);
            },
            f = function () {
              var a,
                d = e.prefixCls,
                j = e.className,
                u = void 0 === j ? '' : j,
                b = e.options,
                O = e.optionType,
                h = e.buttonStyle,
                f = void 0 === h ? 'outline' : h,
                v = e.disabled,
                m = e.children,
                y = e.size,
                k = e.style,
                C = e.id,
                w = e.onMouseEnter,
                N = e.onMouseLeave,
                _ = l('radio', d),
                E = ''.concat(_, '-group'),
                I = m;
              if (b && b.length > 0) {
                var P = 'button' === O ? ''.concat(_, '-button') : _;
                I = b.map(function (e) {
                  return 'string' === typeof e || 'number' === typeof e
                    ? r['createElement'](
                        x,
                        {
                          key: e.toString(),
                          prefixCls: P,
                          disabled: v,
                          value: e,
                          checked: p === e,
                        },
                        e,
                      )
                    : r['createElement'](
                        x,
                        {
                          key: 'radio-group-value-options-'.concat(e.value),
                          prefixCls: P,
                          disabled: e.disabled || v,
                          value: e.value,
                          checked: p === e.value,
                          style: e.style,
                        },
                        e.label,
                      );
                });
              }
              var z = y || o,
                M = i()(
                  E,
                  ''.concat(E, '-').concat(f),
                  ((a = {}),
                  Object(n['a'])(a, ''.concat(E, '-').concat(z), z),
                  Object(n['a'])(a, ''.concat(E, '-rtl'), 'rtl' === s),
                  a),
                  u,
                );
              return r['createElement'](
                'div',
                Object(c['a'])({}, g(e), {
                  className: M,
                  style: k,
                  onMouseEnter: w,
                  onMouseLeave: N,
                  id: C,
                  ref: t,
                }),
                I,
              );
            };
          return r['createElement'](
            u,
            {
              value: {
                onChange: h,
                value: p,
                disabled: e.disabled,
                name: e.name,
              },
            },
            f(),
          );
        }),
        C = r['memo'](k),
        w = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              t.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (a[n[c]] = e[n[c]]);
          }
          return a;
        },
        N = function (e, t) {
          var a = r['useContext'](b),
            n = r['useContext'](d['b']),
            l = n.getPrefixCls,
            s = e.prefixCls,
            i = w(e, ['prefixCls']),
            o = l('radio-button', s);
          return (
            a &&
              ((i.checked = e.value === a.value),
              (i.disabled = e.disabled || a.disabled)),
            r['createElement'](
              x,
              Object(c['a'])({ prefixCls: o }, i, { type: 'radio', ref: t }),
            )
          );
        },
        _ = r['forwardRef'](N),
        E = x;
      (E.Button = _), (E.Group = C);
      t['a'] = E;
    },
    '0d8f': function (e, t, a) {
      'use strict';
      a('/YAq'), a('afMB');
    },
    '1olM': function (e, t, a) {
      'use strict';
      var n = a('tPjX');
      t['a'] = n['a'];
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
    F7Dx: function (e, t, a) {},
    'FX5/': function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return c;
      }),
        a.d(t, 'b', function () {
          return r;
        }),
        a.d(t, 'c', function () {
          return l;
        });
      var n = a('5lAy'),
        c = () =>
          Object(n['a'])({ url: '/services/v1/org/getOrgInfo', method: 'GET' }),
        r = () =>
          Object(n['a'])({
            url: '/services/v1/pipei/zjjgPipei',
            method: 'GET',
          }),
        l = (e) =>
          Object(n['a'])({
            url: '/services/v1/org/edit',
            method: 'PUT',
            data: e,
          });
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
      var n = a('FNRQ');
      t['a'] = n['a'];
    },
    PU71: function (e, t, a) {
      'use strict';
      a('TfCt');
      var n = a('qVa7'),
        c = a('ikfJ');
      t['a'] = (e) => {
        var t = (t) => {
          var a = t.target.checked ? 1 : 0;
          e.onChange(a);
        };
        return Object(c['jsx'])(n['a'], {
          checked: 1 == e.checked,
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
      var n = a('7eJq'),
        c = a('3UCj'),
        r = a('T9Mk'),
        l = a('jK+o'),
        s = a.n(l),
        i = a('f9wj'),
        o = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              t.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (a[n[c]] = e[n[c]]);
          }
          return a;
        },
        d = function (e) {
          var t,
            a = r['useContext'](i['b']),
            l = a.getPrefixCls,
            d = a.direction,
            j = e.prefixCls,
            u = e.type,
            b = void 0 === u ? 'horizontal' : u,
            p = e.orientation,
            O = void 0 === p ? 'center' : p,
            h = e.orientationMargin,
            f = e.className,
            x = e.children,
            v = e.dashed,
            m = e.plain,
            y = o(e, [
              'prefixCls',
              'type',
              'orientation',
              'orientationMargin',
              'className',
              'children',
              'dashed',
              'plain',
            ]),
            g = l('divider', j),
            k = O.length > 0 ? '-'.concat(O) : O,
            C = !!x,
            w = 'left' === O && null != h,
            N = 'right' === O && null != h,
            _ = s()(
              g,
              ''.concat(g, '-').concat(b),
              ((t = {}),
              Object(c['a'])(t, ''.concat(g, '-with-text'), C),
              Object(c['a'])(t, ''.concat(g, '-with-text').concat(k), C),
              Object(c['a'])(t, ''.concat(g, '-dashed'), !!v),
              Object(c['a'])(t, ''.concat(g, '-plain'), !!m),
              Object(c['a'])(t, ''.concat(g, '-rtl'), 'rtl' === d),
              Object(c['a'])(
                t,
                ''.concat(g, '-no-default-orientation-margin-left'),
                w,
              ),
              Object(c['a'])(
                t,
                ''.concat(g, '-no-default-orientation-margin-right'),
                N,
              ),
              t),
              f,
            ),
            E = Object(n['a'])(
              Object(n['a'])({}, w && { marginLeft: h }),
              N && { marginRight: h },
            );
          return r['createElement'](
            'div',
            Object(n['a'])({ className: _ }, y, { role: 'separator' }),
            x &&
              r['createElement'](
                'span',
                { className: ''.concat(g, '-inner-text'), style: E },
                x,
              ),
          );
        },
        j = d,
        u = a('0hF1'),
        b = a('4+7e'),
        p = a('4NjM'),
        O = a.n(p),
        h = a('mYY6'),
        f = a('FX5/'),
        x = a('ikfJ'),
        v = { 1: '\u4fe1\u7528', 2: '\u62b5\u62bc', 3: '\u5176\u4ed6' },
        m = {
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
        var t = Object(r['useRef'])(null),
          a = Object(r['useState'])([]),
          n = Object(b['a'])(a, 2),
          c = n[0],
          l = n[1],
          s = Object(r['useState'])({}),
          i = Object(b['a'])(s, 2),
          o = i[0],
          d = i[1];
        return (
          Object(r['useEffect'])(() => {
            Object(f['a'])().then((e) => {
              var a = e.data,
                n = t.current.getForm();
              n.setFieldsValue(Object(u['a'])({}, a.userOrgInfo)),
                d(a.userOrgInfo);
            }),
              Object(f['b'])().then((e) => {
                var t = e.data;
                l(t.productList);
              });
          }, []),
          Object(x['jsxs'])('div', {
            className: O.a.userInfo,
            children: [
              Object(x['jsx'])('div', {
                className: O.a.left,
                children: Object(x['jsx'])(h['a'], {
                  ref: t,
                  isInfo: !0,
                  info: o,
                  onchange: () => {
                    Object(f['a'])().then((e) => {
                      var t = e.data;
                      d(t.userOrgInfo);
                    });
                  },
                }),
              }),
              Object(x['jsxs'])('div', {
                className: O.a.right,
                children: [
                  Object(x['jsx'])('h1', {
                    children: '\u6700\u8fd1\u5339\u914d\u7ed3\u679c',
                  }),
                  Object(x['jsx'])('div', {
                    className: O.a.list,
                    children: c.map((e) =>
                      Object(x['jsxs'])(
                        'div',
                        {
                          className: O.a.item,
                          children: [
                            Object(x['jsxs'])('div', {
                              className: O.a.title,
                              children: [
                                Object(x['jsx'])('h1', { children: e.cpmc }),
                                Object(x['jsxs'])('span', {
                                  children: [v[e.cplb], '\u8d37\u6b3e'],
                                }),
                                Object(x['jsxs'])('span', {
                                  children: [e.pipeiDu, '%'],
                                }),
                              ],
                            }),
                            Object(x['jsxs'])('div', {
                              className: O.a.info,
                              children: [
                                Object(x['jsxs'])('span', {
                                  children: [e.ed, '\u4e07'],
                                }),
                                Object(x['jsx'])(j, {
                                  type: 'vertical',
                                  className: 'divider',
                                }),
                                Object(x['jsxs'])('span', {
                                  children: [e.lilv, '%'],
                                }),
                                Object(x['jsx'])(j, {
                                  type: 'vertical',
                                  className: 'divider',
                                }),
                                Object(x['jsxs'])('span', {
                                  children: [
                                    e.fksj,
                                    ' ',
                                    1 == e.fkdw ? '\u5929' : '\u6708',
                                    '\u653e\u6b3e',
                                  ],
                                }),
                              ],
                            }),
                            Object(x['jsx'])('div', {
                              className: O.a.tip,
                              children: Object(x['jsxs'])('p', {
                                children: [
                                  y[e.hkfs],
                                  ' / ',
                                  e.qxsj,
                                  1 == e.qxdw ? '\u5e74' : '\u6708',
                                  '/ ',
                                  m[e.splx],
                                ],
                              }),
                            }),
                            Object(x['jsx'])('div', {
                              className: O.a.remark,
                              children: Object(x['jsxs'])('p', {
                                children: ['\u5907\u6ce8:', e.remark],
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    TfCt: function (e, t, a) {
      'use strict';
      a('/YAq'), a('F7Dx');
    },
    Ujwb: function (e, t, a) {
      e.exports = {
        registForm: 'registForm___2i8lL',
        formInfo: 'formInfo___AOOTU',
      };
    },
    afMB: function (e, t, a) {},
    khV9: function (e, t, a) {
      'use strict';
      var n = a('LCX7'),
        c = a.n(n),
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
      a('0d8f');
      var n = a('0Niv'),
        c = (a('6ihM'), a('NdOv')),
        r = (a('5tJY'), a('1olM')),
        l = (a('vvyX'), a('sEMA')),
        s = a('0hF1'),
        i = (a('VAo7'), a('7fed')),
        o = (a('vh1u'), a('EyPa')),
        d = (a('8yU/'), a('yaUO')),
        j = a('4+7e'),
        u = a('PU71'),
        b = a('khV9'),
        p = a('T9Mk'),
        O = a('KXgE'),
        h = a.n(O),
        f = a('MLMA'),
        x = a('ikfJ'),
        v = (e) => {
          var t = e.value,
            a = e.onChange,
            n = e.title,
            c = Object(p['useState'])(''),
            r = Object(j['a'])(c, 2),
            s = (r[0], r[1]),
            i = () => {
              var t = Object(f['d'])();
              t.onchange = (t) => {
                var n = t.target.files[0],
                  c = o(n, e.fileType);
                Object(f['f'])(c).then((e) => {
                  var t = e.data;
                  s(n.name), a(t.file.id);
                });
              };
            },
            o = (e, t) => {
              var a = new FormData();
              return a.append('file', e), a.append('wjlb ', t), a;
            };
          return Object(x['jsxs'])('div', {
            className: h.a.customUpload,
            children: [
              Object(x['jsx'])(l['a'], {
                onClick: () => i(),
                style: { marginRight: 5 },
                children: t
                  ? '\u91cd\u65b0\u4e0a\u4f20'
                  : '\u6570\u636e\u4e0a\u4f20',
              }),
              Object(x['jsxs'])('div', {
                children: [
                  Object(x['jsx'])('div', { children: n }),
                  Object(x['jsx'])('p', {
                    className: h.a.fileName,
                    children: t
                      ? Object(x['jsx'])('span', {
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
        m = a('FX5/'),
        y = a('Ujwb'),
        g = a.n(y),
        k = { labelCol: { span: 9 }, wrapperCol: { span: 15, offset: 1 } },
        C = {
          1: '\u670d\u88c5',
          2: '\u9910\u996e',
          3: '\u623f\u5730\u4ea7',
          4: '\u6c7d\u8f66',
          5: '\u4e92\u8054\u7f51',
        },
        w = {
          1: '\u989d\u5ea6\u4f18\u5148',
          2: '\u5229\u7387\u4f18\u5148',
          3: '\u901f\u5ea6\u4f18\u5148',
        };
      t['a'] = Object(p['forwardRef'])((e, t) => {
        var a,
          O,
          h = d['a'].useForm(),
          f = Object(j['a'])(h, 1),
          y = f[0],
          N = e.isInfo,
          _ = e.info,
          E = e.onchange,
          I = Object(p['useState'])([!0, !0, !0, !0]),
          P = Object(j['a'])(I, 2),
          z = P[0],
          M = P[1];
        Object(p['useEffect'])(() => {
          N && M([!1, !1, !1, !1]);
        }, []);
        var F = (e, t) => {
          Object(m['c'])(e).then((e) => {
            var a = [...z];
            (a[t] = !1), M(a), E();
          });
        };
        return (
          Object(p['useImperativeHandle'])(t, () => ({
            validateForm: () => y.validateFields(),
            getForm: () => y,
          })),
          Object(x['jsx'])('div', {
            className: g.a.registForm,
            children: Object(x['jsxs'])(
              d['a'],
              Object(s['a'])(
                Object(s['a'])({ form: y }, k),
                {},
                {
                  children: [
                    Object(x['jsx'])(b['a'], {
                      title: '\u4f01\u4e1a\u57fa\u672c\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    z[0] &&
                      Object(x['jsxs'])('div', {
                        style: { width: 582, margin: '0 auto' },
                        children: [
                          Object(x['jsx'])(d['a'].Item, {
                            name: 'orgName',
                            rules: [
                              {
                                required: !0,
                                message:
                                  '\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0',
                              },
                            ],
                            label: '\u516c\u53f8\u540d\u79f0',
                            children: Object(x['jsx'])(o['a'], {
                              placeholder:
                                '\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0',
                              size: 'large',
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message:
                                  '\u8bf7\u8f93\u5165\u516c\u53f8\u884c\u4e1a',
                              },
                            ],
                            name: 'gshy',
                            label: '\u516c\u53f8\u884c\u4e1a',
                            initialValue: '1',
                            children: Object(x['jsxs'])(i['a'], {
                              size: 'large',
                              children: [
                                Object(x['jsx'])(i['a'].Option, {
                                  value: '1',
                                  children: '\u670d\u88c5',
                                }),
                                Object(x['jsx'])(i['a'].Option, {
                                  value: '2',
                                  children: '\u9910\u996e',
                                }),
                                Object(x['jsx'])(i['a'].Option, {
                                  value: '3',
                                  children: '\u623f\u5730\u4ea7',
                                }),
                                Object(x['jsx'])(i['a'].Option, {
                                  value: '4',
                                  children: '\u6c7d\u8f66',
                                }),
                                Object(x['jsx'])(i['a'].Option, {
                                  value: '5',
                                  children: '\u4e92\u8054\u7f51',
                                }),
                              ],
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message:
                                  '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u59d3\u540d',
                              },
                            ],
                            name: 'lxrxm',
                            label: '\u8054\u7cfb\u4eba\u59d3\u540d',
                            children: Object(x['jsx'])(o['a'], {
                              placeholder:
                                '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u59d3\u540d',
                              size: 'large',
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message:
                                  '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                              },
                            ],
                            name: 'lxrdh',
                            label: '\u8054\u7cfb\u4eba\u7535\u8bdd',
                            children: Object(x['jsx'])(o['a'], {
                              placeholder:
                                '\u8bf7\u8f93\u5165\u8054\u7cfb\u4eba\u7535\u8bdd',
                              size: 'large',
                            }),
                          }),
                          N &&
                            Object(x['jsxs'])('div', {
                              style: { textAlign: 'center' },
                              children: [
                                Object(x['jsx'])(l['a'], {
                                  style: { width: 140 },
                                  className: 'save',
                                  onClick: () => {
                                    y.validateFields([
                                      'orgName',
                                      'gshy',
                                      'lxrxm',
                                      'lxrdh',
                                    ]).then((e) => {
                                      F(
                                        Object(s['a'])(
                                          Object(s['a'])({}, e),
                                          {},
                                          { id: _.id },
                                        ),
                                        0,
                                      );
                                    });
                                  },
                                  children: '\u5b8c\u6210',
                                }),
                                Object(x['jsx'])(l['a'], {
                                  onClick: () => {
                                    var e = [...z];
                                    (e[0] = !1), M([...e]);
                                  },
                                  children: '\u53d6\u6d88',
                                }),
                              ],
                            }),
                        ],
                      }),
                    !z[0] &&
                      Object(x['jsxs'])('div', {
                        className: g.a.formInfo,
                        children: [
                          Object(x['jsx'])('div', {
                            children: Object(x['jsx'])(l['a'], {
                              type: 'link',
                              className: 'editBtnTable',
                              onClick: () => {
                                var e = [...z];
                                (e[0] = !0), M([...e]);
                              },
                              children: '\u7f16\u8f91',
                            }),
                          }),
                          Object(x['jsxs'])('p', {
                            style: { marginTop: -20 },
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u516c\u53f8\u540d\u79f0\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.orgName }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u516c\u53f8\u884c\u4e1a\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: C[_.gshy] }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children:
                                  '\u8054\u7cfb\u4eba\u59d3\u540d\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.lxrxm }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u8054\u7cfb\u7535\u8bdd\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.lxrdh }),
                            ],
                          }),
                        ],
                      }),
                    e.children,
                    Object(x['jsx'])(b['a'], {
                      title: '\u6cd5\u4eba\u5f81\u4fe1',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    Object(x['jsx'])('div', {
                      style: { width: 582, margin: '0 auto' },
                      children: Object(x['jsx'])(d['a'].Item, {
                        name: ['frzxbgfileList', 'id'],
                        label: '\u6cd5\u4eba\u5f81\u4fe1\u62a5\u544a',
                        children: Object(x['jsx'])(v, {
                          fileType: 1,
                          onChange: (e) => {
                            F({ frzxbgfileList: { id: e }, id: _.id });
                          },
                          title: Object(x['jsxs'])('p', {
                            style: { whiteSpace: 'nowrap' },
                            children: [
                              '\u53ef\u5728',
                              Object(x['jsx'])('span', {
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
                    Object(x['jsx'])(b['a'], {
                      title: '\u8d22\u52a1\u6570\u636e',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    z[2] &&
                      Object(x['jsxs'])('div', {
                        style: { width: 582, margin: '0 auto' },
                        children: [
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message:
                                  '\u8bf7\u8f93\u5165\u7eb3\u7a0e\u7b49\u7ea7',
                              },
                            ],
                            name: 'nsdj',
                            label: '\u7eb3\u7a0e\u7b49\u7ea7',
                            children: Object(x['jsx'])(o['a'], {
                              placeholder: 'A/B/M/C',
                              size: 'large',
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                              },
                            ],
                            name: 'nsze',
                            label:
                              '\u8fd1\u4e00\u5e74\u7eb3\u7a0e\u603b\u989d(\u4e07\u5143)',
                            children: Object(x['jsx'])(o['a'], {
                              size: 'large',
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                              },
                            ],
                            name: 'kpze',
                            label:
                              '\u8fd1\u4e00\u5e74\u5f00\u7968\u603b\u989d(\u4e07\u5143)',
                            children: Object(x['jsx'])(o['a'], {
                              size: 'large',
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            rules: [
                              {
                                required: !0,
                                message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                              },
                            ],
                            name: 'fzze',
                            label:
                              '\u4f01\u4e1a\u5f53\u524d\u8d1f\u503a\u4f59\u989d(\u4e07\u5143)',
                            children: Object(x['jsx'])(o['a'], {
                              size: 'large',
                            }),
                          }),
                          N &&
                            Object(x['jsxs'])('div', {
                              style: { textAlign: 'center' },
                              children: [
                                Object(x['jsx'])(l['a'], {
                                  style: { width: 140 },
                                  className: 'save',
                                  onClick: () => {
                                    y.validateFields([
                                      'nsdj',
                                      'nsze',
                                      'kpze',
                                      'fzze',
                                    ]).then((e) => {
                                      F(
                                        Object(s['a'])(
                                          Object(s['a'])({}, e),
                                          {},
                                          { id: _.id },
                                        ),
                                        2,
                                      );
                                    });
                                  },
                                  children: '\u5b8c\u6210',
                                }),
                                Object(x['jsx'])(l['a'], {
                                  onClick: () => {
                                    var e = [...z];
                                    (e[2] = !1), M([...e]);
                                  },
                                  children: '\u53d6\u6d88',
                                }),
                              ],
                            }),
                        ],
                      }),
                    !z[2] &&
                      Object(x['jsxs'])('div', {
                        className: g.a.formInfo,
                        children: [
                          Object(x['jsx'])('div', {
                            children: Object(x['jsx'])(l['a'], {
                              type: 'link',
                              className: 'editBtnTable',
                              onClick: () => {
                                var e = [...z];
                                (e[2] = !0), M([...e]);
                              },
                              children: '\u7f16\u8f91',
                            }),
                          }),
                          Object(x['jsxs'])('p', {
                            style: { marginTop: -20 },
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u7eb3\u7a0e\u7b49\u7ea7\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.nsdj }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children:
                                  '\u8fd1\u4e00\u5e74\u7eb3\u7a0e\u603b\u989d\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.nsze }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children:
                                  '\u8fd1\u4e00\u5e74\u5f00\u7968\u603b\u989d\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.kpze }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children:
                                  '\u4f01\u4e1a\u5f53\u524d\u8d1f\u503a\u4f59\u989d\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.fzze }),
                            ],
                          }),
                        ],
                      }),
                    Object(x['jsx'])(b['a'], {
                      title: '\u878d\u8d44\u4fe1\u606f',
                      style: { marginTop: 52, marginBottom: 40 },
                    }),
                    z[3] &&
                      Object(x['jsxs'])('div', {
                        style: { width: 582, margin: '0 auto' },
                        children: [
                          Object(x['jsxs'])(d['a'].Item, {
                            label: '\u878d\u8d44\u7c7b\u578b',
                            children: [
                              Object(x['jsxs'])(c['a'], {
                                children: [
                                  Object(x['jsx'])(r['a'], {
                                    span: 9,
                                    children: Object(x['jsx'])(d['a'].Item, {
                                      name: 'rzlxXydk',
                                      noStyle: !0,
                                      valuePropName: 'checked',
                                      initialValue: !1,
                                      children: Object(x['jsx'])(u['a'], {
                                        style: { whiteSpace: 'nowrap' },
                                        children: '\u4fe1\u7528\u8d37\u6b3e',
                                      }),
                                    }),
                                  }),
                                  Object(x['jsx'])(r['a'], {
                                    span: 15,
                                    children: Object(x['jsx'])(d['a'].Item, {
                                      name: ['xydkFileList', 'id'],
                                      noStyle: !0,
                                      children: Object(x['jsx'])(v, {
                                        fileType: 2,
                                        title: Object(x['jsxs'])('p', {
                                          style: { whiteSpace: 'nowrap' },
                                          children: [
                                            '\u6a21\u677f:',
                                            Object(x['jsx'])('span', {
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
                              Object(x['jsxs'])(c['a'], {
                                style: { marginTop: 30 },
                                children: [
                                  Object(x['jsx'])(r['a'], {
                                    span: 9,
                                    children: Object(x['jsx'])(d['a'].Item, {
                                      name: 'rzlxDydk',
                                      noStyle: !0,
                                      valuePropName: 'checked',
                                      initialValue: !1,
                                      children: Object(x['jsx'])(u['a'], {
                                        style: { whiteSpace: 'nowrap' },
                                        children: '\u62b5\u62bc\u8d37\u6b3e',
                                      }),
                                    }),
                                  }),
                                  Object(x['jsx'])(r['a'], {
                                    span: 15,
                                    children: Object(x['jsx'])(d['a'].Item, {
                                      name: ['dydkfileList', 'id'],
                                      noStyle: !0,
                                      children: Object(x['jsx'])(v, {
                                        title: Object(x['jsxs'])('p', {
                                          style: { whiteSpace: 'nowrap' },
                                          children: [
                                            '\u6a21\u677f:',
                                            Object(x['jsx'])('span', {
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
                          Object(x['jsx'])(d['a'].Item, {
                            name: 'rzph',
                            label: '\u878d\u8d44\u504f\u597d',
                            initialValue: '1',
                            children: Object(x['jsxs'])(n['a'].Group, {
                              children: [
                                Object(x['jsx'])(n['a'], {
                                  value: '1',
                                  children: '\u989d\u5ea6\u4f18\u5148',
                                }),
                                Object(x['jsx'])(n['a'], {
                                  value: '2',
                                  children: '\u5229\u7387\u4f18\u5148',
                                }),
                                Object(x['jsx'])(n['a'], {
                                  value: '3',
                                  children: '\u901f\u5ea6\u4f18\u5148',
                                }),
                              ],
                            }),
                          }),
                          Object(x['jsx'])(d['a'].Item, {
                            name: 'xqje',
                            label: '\u9700\u6c42\u91d1\u989d',
                            required: !0,
                            rules: [
                              {
                                required: !0,
                                message: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                              },
                            ],
                            children: Object(x['jsx'])(o['a'], {
                              size: 'large',
                            }),
                          }),
                          N &&
                            Object(x['jsxs'])('div', {
                              style: { textAlign: 'center', marginBottom: 30 },
                              children: [
                                Object(x['jsx'])(l['a'], {
                                  style: { width: 140 },
                                  className: 'save',
                                  onClick: () => {
                                    y.validateFields([
                                      'rzlxDydk',
                                      'rzlxXydk',
                                      'xydkFileList',
                                      'dydkfileList',
                                      'xqje',
                                      'rzph',
                                    ]).then((e) => {
                                      F(
                                        Object(s['a'])(
                                          Object(s['a'])({}, e),
                                          {},
                                          { id: _.id },
                                        ),
                                        3,
                                      );
                                    });
                                  },
                                  children: '\u5b8c\u6210',
                                }),
                                Object(x['jsx'])(l['a'], {
                                  onClick: () => {
                                    var e = [...z];
                                    (e[3] = !1), M([...e]);
                                  },
                                  children: '\u53d6\u6d88',
                                }),
                              ],
                            }),
                        ],
                      }),
                    !z[3] &&
                      Object(x['jsxs'])('div', {
                        className: g.a.formInfo,
                        style: { marginBottom: 30 },
                        children: [
                          Object(x['jsx'])('div', {
                            children: Object(x['jsx'])(l['a'], {
                              type: 'link',
                              className: 'editBtnTable',
                              onClick: () => {
                                var e = [...z];
                                (e[3] = !0), M([...e]);
                              },
                              children: '\u7f16\u8f91',
                            }),
                          }),
                          Object(x['jsxs'])('p', {
                            style: { marginTop: -20, alignItems: 'flex-start' },
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u878d\u8d44\u7c7b\u578b\uff1a',
                              }),
                              Object(x['jsxs'])('span', {
                                children: [
                                  Object(x['jsxs'])('p', {
                                    children: [
                                      1 == _.rzlxDydk
                                        ? '\u62b5\u62bc\u8d37\u6b3e'
                                        : '',
                                      Object(x['jsx'])('span', {
                                        className: 'color',
                                        style: { padding: '0 12px' },
                                        children:
                                          null === (a = _.dydkfileList) ||
                                          void 0 === a
                                            ? void 0
                                            : a.name,
                                      }),
                                    ],
                                  }),
                                  Object(x['jsxs'])('p', {
                                    children: [
                                      1 == _.rzlxXydk
                                        ? '\u4fe1\u7528\u8d37\u6b3e'
                                        : '',
                                      Object(x['jsx'])('span', {
                                        className: 'color',
                                        style: { padding: '0 12px' },
                                        children:
                                          null === (O = _.xydkFileList) ||
                                          void 0 === O
                                            ? void 0
                                            : O.name,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u878d\u8d44\u504f\u597d\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: w[_.rzph] }),
                            ],
                          }),
                          Object(x['jsxs'])('p', {
                            children: [
                              Object(x['jsx'])('span', {
                                children: '\u9700\u6c42\u91d1\u989d\uff1a',
                              }),
                              Object(x['jsx'])('span', { children: _.xqje }),
                            ],
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
    qVa7: function (e, t, a) {
      'use strict';
      var n = a('3UCj'),
        c = a('7eJq'),
        r = a('T9Mk'),
        l = a('jK+o'),
        s = a.n(l),
        i = a('/wk5'),
        o = a('mKQt'),
        d = a('DZ87'),
        j = a('AYaK'),
        u = a('f9wj'),
        b = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              t.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (a[n[c]] = e[n[c]]);
          }
          return a;
        },
        p = r['createContext'](null),
        O = function (e, t) {
          var a = e.defaultValue,
            l = e.children,
            i = e.options,
            O = void 0 === i ? [] : i,
            h = e.prefixCls,
            f = e.className,
            x = e.style,
            v = e.onChange,
            m = b(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            y = r['useContext'](u['b']),
            k = y.getPrefixCls,
            C = y.direction,
            w = r['useState'](m.value || a || []),
            N = Object(d['a'])(w, 2),
            _ = N[0],
            E = N[1],
            I = r['useState']([]),
            P = Object(d['a'])(I, 2),
            z = P[0],
            M = P[1];
          r['useEffect'](
            function () {
              'value' in m && E(m.value || []);
            },
            [m.value],
          );
          var F = function () {
              return O.map(function (e) {
                return 'string' === typeof e || 'number' === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            T = function (e) {
              M(function (t) {
                return t.filter(function (t) {
                  return t !== e;
                });
              });
            },
            S = function (e) {
              M(function (t) {
                return [].concat(Object(o['a'])(t), [e]);
              });
            },
            q = function (e) {
              var t = _.indexOf(e.value),
                a = Object(o['a'])(_);
              -1 === t ? a.push(e.value) : a.splice(t, 1), 'value' in m || E(a);
              var n = F();
              null === v ||
                void 0 === v ||
                v(
                  a
                    .filter(function (e) {
                      return -1 !== z.indexOf(e);
                    })
                    .sort(function (e, t) {
                      var a = n.findIndex(function (t) {
                          return t.value === e;
                        }),
                        c = n.findIndex(function (e) {
                          return e.value === t;
                        });
                      return a - c;
                    }),
                );
            },
            L = k('checkbox', h),
            K = ''.concat(L, '-group'),
            B = Object(j['a'])(m, ['value', 'disabled']);
          O &&
            O.length > 0 &&
            (l = F().map(function (e) {
              return r['createElement'](
                g,
                {
                  prefixCls: L,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : m.disabled,
                  value: e.value,
                  checked: -1 !== _.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(K, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var U = {
              toggleOption: q,
              value: _,
              disabled: m.disabled,
              name: m.name,
              registerValue: S,
              cancelValue: T,
            },
            V = s()(
              K,
              Object(n['a'])({}, ''.concat(K, '-rtl'), 'rtl' === C),
              f,
            );
          return r['createElement'](
            'div',
            Object(c['a'])({ className: V, style: x }, B, { ref: t }),
            r['createElement'](p.Provider, { value: U }, l),
          );
        },
        h = r['forwardRef'](O),
        f = r['memo'](h),
        x = a('M9Ln'),
        v = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              t.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (a[n[c]] = e[n[c]]);
          }
          return a;
        },
        m = function (e, t) {
          var a,
            l = e.prefixCls,
            o = e.className,
            d = e.children,
            j = e.indeterminate,
            b = void 0 !== j && j,
            O = e.style,
            h = e.onMouseEnter,
            f = e.onMouseLeave,
            m = e.skipGroup,
            y = void 0 !== m && m,
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
            k = r['useContext'](u['b']),
            C = k.getPrefixCls,
            w = k.direction,
            N = r['useContext'](p),
            _ = r['useRef'](g.value);
          r['useEffect'](function () {
            null === N || void 0 === N || N.registerValue(g.value),
              Object(x['a'])(
                'checked' in g || !!N || !('value' in g),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            r['useEffect'](
              function () {
                if (!y)
                  return (
                    g.value !== _.current &&
                      (null === N || void 0 === N || N.cancelValue(_.current),
                      null === N || void 0 === N || N.registerValue(g.value),
                      (_.current = g.value)),
                    function () {
                      return null === N || void 0 === N
                        ? void 0
                        : N.cancelValue(g.value);
                    }
                  );
              },
              [g.value],
            );
          var E = C('checkbox', l),
            I = Object(c['a'])({}, g);
          N &&
            !y &&
            ((I.onChange = function () {
              g.onChange && g.onChange.apply(g, arguments),
                N.toggleOption && N.toggleOption({ label: d, value: g.value });
            }),
            (I.name = N.name),
            (I.checked = -1 !== N.value.indexOf(g.value)),
            (I.disabled = g.disabled || N.disabled));
          var P = s()(
              ((a = {}),
              Object(n['a'])(a, ''.concat(E, '-wrapper'), !0),
              Object(n['a'])(a, ''.concat(E, '-rtl'), 'rtl' === w),
              Object(n['a'])(a, ''.concat(E, '-wrapper-checked'), I.checked),
              Object(n['a'])(a, ''.concat(E, '-wrapper-disabled'), I.disabled),
              a),
              o,
            ),
            z = s()(Object(n['a'])({}, ''.concat(E, '-indeterminate'), b));
          return r['createElement'](
            'label',
            { className: P, style: O, onMouseEnter: h, onMouseLeave: f },
            r['createElement'](
              i['a'],
              Object(c['a'])({}, I, { prefixCls: E, className: z, ref: t }),
            ),
            void 0 !== d && r['createElement']('span', null, d),
          );
        },
        y = r['forwardRef'](m);
      y.displayName = 'Checkbox';
      var g = y,
        k = g;
      (k.Group = f), (k.__ANT_CHECKBOX = !0);
      t['a'] = k;
    },
  },
]);
