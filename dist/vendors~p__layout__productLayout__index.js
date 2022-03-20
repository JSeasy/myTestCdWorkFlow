(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
  {
    '8CG2': function (e, t) {
      e.exports = function (e, t, n, a) {
        var r = n ? n.call(a, e, t) : void 0;
        if (void 0 !== r) return !!r;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var c = Object.keys(e),
          o = Object.keys(t);
        if (c.length !== o.length) return !1;
        for (
          var i = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < c.length;
          l++
        ) {
          var u = c[l];
          if (!i(u)) return !1;
          var s = e[u],
            f = t[u];
          if (
            ((r = n ? n.call(a, s, f, u) : void 0),
            !1 === r || (void 0 === r && s !== f))
          )
            return !1;
        }
        return !0;
      };
    },
    Aghq: function (e, t, n) {
      'use strict';
      var a = n('WX9N'),
        r = n('T9Mk'),
        c = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
                },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        o = c,
        i = n('ING4'),
        l = function (e, t) {
          return r['createElement'](
            i['a'],
            Object(a['a'])(Object(a['a'])({}, e), {}, { ref: t, icon: o }),
          );
        };
      l.displayName = 'PlusOutlined';
      t['a'] = r['forwardRef'](l);
    },
    Div4: function (e, t, n) {},
    UZpV: function (e, t, n) {
      'use strict';
      var a = n('Go7p'),
        r = n('T9Mk'),
        c = n('WFyy'),
        o = (n('hH7H'), n('WX9N')),
        i = n('XDpi'),
        l = n('xKXm'),
        u = n('BlUI'),
        s = new Map();
      function f(e) {
        e.forEach(function (e) {
          var t,
            n = e.target;
          null === (t = s.get(n)) ||
            void 0 === t ||
            t.forEach(function (e) {
              return e(n);
            });
        });
      }
      var d = new u['a'](f);
      function b(e, t) {
        s.has(e) || (s.set(e, new Set()), d.observe(e)), s.get(e).add(t);
      }
      function v(e, t) {
        s.has(e) &&
          (s.get(e).delete(t), s.get(e).size || (d.unobserve(e), s.delete(e)));
      }
      var h = n('oBjn'),
        m = n('6QJr'),
        p = n('2coe'),
        j = n('BZBb'),
        O = (function (e) {
          Object(p['a'])(n, e);
          var t = Object(j['a'])(n);
          function n() {
            return Object(h['a'])(this, n), t.apply(this, arguments);
          }
          return (
            Object(m['a'])(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(r['Component']),
        y = r['createContext'](null);
      function g(e) {
        var t = e.children,
          n = e.onBatchResize,
          a = r['useRef'](0),
          c = r['useRef']([]),
          o = r['useContext'](y),
          i = r['useCallback'](
            function (e, t, r) {
              a.current += 1;
              var i = a.current;
              c.current.push({ size: e, element: t, data: r }),
                Promise.resolve().then(function () {
                  i === a.current &&
                    (null === n || void 0 === n || n(c.current),
                    (c.current = []));
                }),
                null === o || void 0 === o || o(e, t, r);
            },
            [n, o],
          );
        return r['createElement'](y.Provider, { value: i }, t);
      }
      function E(e) {
        var t = e.children,
          n = e.disabled,
          a = r['useRef'](null),
          c = r['useRef'](null),
          u = r['useContext'](y),
          s = 'function' === typeof t,
          f = s ? t(a) : t,
          d = r['useRef']({
            width: -1,
            height: -1,
            offsetWidth: -1,
            offsetHeight: -1,
          }),
          h = !s && r['isValidElement'](f) && Object(i['c'])(f),
          m = h ? f.ref : null,
          p = r['useMemo'](
            function () {
              return Object(i['a'])(m, a);
            },
            [m, a],
          ),
          j = r['useRef'](e);
        j.current = e;
        var g = r['useCallback'](function (e) {
          var t = j.current,
            n = t.onResize,
            a = t.data,
            r = e.getBoundingClientRect(),
            c = r.width,
            i = r.height,
            l = e.offsetWidth,
            s = e.offsetHeight,
            f = Math.floor(c),
            b = Math.floor(i);
          if (
            d.current.width !== f ||
            d.current.height !== b ||
            d.current.offsetWidth !== l ||
            d.current.offsetHeight !== s
          ) {
            var v = { width: f, height: b, offsetWidth: l, offsetHeight: s };
            d.current = v;
            var h = l === Math.round(c) ? c : l,
              m = s === Math.round(i) ? i : s,
              p = Object(o['a'])(
                Object(o['a'])({}, v),
                {},
                { offsetWidth: h, offsetHeight: m },
              );
            null === u || void 0 === u || u(p, e, a),
              n &&
                Promise.resolve().then(function () {
                  n(p, e);
                });
          }
        }, []);
        return (
          r['useEffect'](
            function () {
              var e = Object(l['a'])(a.current) || Object(l['a'])(c.current);
              return (
                e && !n && b(e, g),
                function () {
                  return v(e, g);
                }
              );
            },
            [a.current, n],
          ),
          r['createElement'](
            O,
            { ref: c },
            h ? r['cloneElement'](f, { ref: p }) : f,
          )
        );
      }
      var k = 'rc-observer-key';
      function w(e) {
        var t = e.children,
          n = 'function' === typeof t ? [t] : Object(c['a'])(t);
        return n.map(function (t, n) {
          var c =
            (null === t || void 0 === t ? void 0 : t.key) ||
            ''.concat(k, '-').concat(n);
          return r['createElement'](E, Object(a['a'])({}, e, { key: c }), t);
        });
      }
      w.Collection = g;
      t['a'] = w;
    },
    YVgN: function (e, t, n) {
      'use strict';
      n('FOy+'), n('Div4');
    },
    Zuj1: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var a = n('wVky'),
        r = n('T9Mk'),
        c = n('JZEm');
      function o(e, t) {
        var n = t || {},
          o = n.defaultValue,
          i = n.value,
          l = n.onChange,
          u = n.postState,
          s = Object(c['a'])(function () {
            return void 0 !== i
              ? i
              : void 0 !== o
              ? 'function' === typeof o
                ? o()
                : o
              : 'function' === typeof e
              ? e()
              : e;
          }),
          f = Object(a['a'])(s, 2),
          d = f[0],
          b = f[1],
          v = void 0 !== i ? i : d;
        u && (v = u(v));
        var h = r['useRef'](l);
        h.current = l;
        var m = r['useCallback'](
            function (e, t) {
              b(e, t), v !== e && h.current && h.current(e, v);
            },
            [v, h],
          ),
          p = r['useRef'](!0);
        return (
          r['useEffect'](
            function () {
              p.current ? (p.current = !1) : void 0 === i && b(i);
            },
            [i],
          ),
          [v, m]
        );
      }
    },
    'x+C3': function (e, t, n) {
      'use strict';
      var a = n('Go7p'),
        r = n('Kov8'),
        c = n('T9Mk'),
        o = n('wVky'),
        i = n('Fq0B'),
        l = n('vSGW'),
        u = n('WX9N'),
        s = n('jK+o'),
        f = n.n(s),
        d = n('WFyy'),
        b = n('Q9w9'),
        v = n('Zuj1'),
        h = n('BF1a'),
        m = n('tH+5'),
        p = n('UZpV');
      function j(e) {
        var t = Object(c['useRef'])(),
          n = Object(c['useRef'])(!1);
        function a() {
          for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
            r[c] = arguments[c];
          n.current ||
            (m['a'].cancel(t.current),
            (t.current = Object(m['a'])(function () {
              e.apply(void 0, r);
            })));
        }
        return (
          Object(c['useEffect'])(function () {
            return function () {
              (n.current = !0), m['a'].cancel(t.current);
            };
          }, []),
          a
        );
      }
      function O(e) {
        var t = Object(c['useRef'])([]),
          n = Object(c['useState'])({}),
          a = Object(o['a'])(n, 2),
          r = a[1],
          i = Object(c['useRef'])('function' === typeof e ? e() : e),
          l = j(function () {
            var e = i.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (i.current = e),
              r({});
          });
        function u(e) {
          t.current.push(e), l();
        }
        return [i.current, u];
      }
      var y = n('1RZB');
      function g(e, t) {
        var n,
          a = e.prefixCls,
          o = e.id,
          i = e.active,
          l = e.tab,
          u = l.key,
          s = l.tab,
          d = l.disabled,
          b = l.closeIcon,
          v = e.closable,
          h = e.renderWrapper,
          m = e.removeAriaLabel,
          p = e.editable,
          j = e.onClick,
          O = e.onRemove,
          g = e.onFocus,
          E = e.style,
          k = ''.concat(a, '-tab');
        c['useEffect'](function () {
          return O;
        }, []);
        var w = p && !1 !== v && !d;
        function x(e) {
          d || j(e);
        }
        function C(e) {
          e.preventDefault(),
            e.stopPropagation(),
            p.onEdit('remove', { key: u, event: e });
        }
        var N = c['createElement'](
          'div',
          {
            key: u,
            ref: t,
            className: f()(
              k,
              ((n = {}),
              Object(r['a'])(n, ''.concat(k, '-with-remove'), w),
              Object(r['a'])(n, ''.concat(k, '-active'), i),
              Object(r['a'])(n, ''.concat(k, '-disabled'), d),
              n),
            ),
            style: E,
            onClick: x,
          },
          c['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': i,
              id: o && ''.concat(o, '-tab-').concat(u),
              className: ''.concat(k, '-btn'),
              'aria-controls': o && ''.concat(o, '-panel-').concat(u),
              'aria-disabled': d,
              tabIndex: d ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), x(e);
              },
              onKeyDown: function (e) {
                [y['a'].SPACE, y['a'].ENTER].includes(e.which) &&
                  (e.preventDefault(), x(e));
              },
              onFocus: g,
            },
            s,
          ),
          w &&
            c['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': m || 'remove',
                tabIndex: 0,
                className: ''.concat(k, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), C(e);
                },
              },
              b || p.removeIcon || '\xd7',
            ),
        );
        return h ? h(N) : N;
      }
      var E = c['forwardRef'](g),
        k = { width: 0, height: 0, left: 0, top: 0 };
      function w(e, t, n) {
        return Object(c['useMemo'])(
          function () {
            for (
              var n,
                a = new Map(),
                r =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  k,
                c = r.left + r.width,
                o = 0;
              o < e.length;
              o += 1
            ) {
              var i,
                l = e[o].key,
                s = t.get(l);
              if (!s)
                s =
                  t.get(
                    null === (i = e[o - 1]) || void 0 === i ? void 0 : i.key,
                  ) || k;
              var f = a.get(l) || Object(u['a'])({}, s);
              (f.right = c - f.left - f.width), a.set(l, f);
            }
            return a;
          },
          [
            e
              .map(function (e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var x = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function C(e, t, n, a, r) {
        var o,
          i,
          l,
          u = r.tabs,
          s = r.tabPosition,
          f = r.rtl;
        ['top', 'bottom'].includes(s)
          ? ((o = 'width'), (i = f ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((o = 'height'), (i = 'top'), (l = -t.top));
        var d = t[o],
          b = n[o],
          v = a[o],
          h = d;
        return (
          b + v > d && b < d && (h = d - v),
          Object(c['useMemo'])(
            function () {
              if (!u.length) return [0, 0];
              for (var t = u.length, n = t, a = 0; a < t; a += 1) {
                var r = e.get(u[a].key) || x;
                if (r[i] + r[o] > l + h) {
                  n = a - 1;
                  break;
                }
              }
              for (var c = 0, s = t - 1; s >= 0; s -= 1) {
                var f = e.get(u[s].key) || x;
                if (f[i] < l) {
                  c = s + 1;
                  break;
                }
              }
              return [c, n];
            },
            [
              e,
              l,
              h,
              s,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              f,
            ],
          )
        );
      }
      var N = n('75Xr'),
        R = n('3GOv');
      function T(e, t) {
        var n = e.prefixCls,
          a = e.editable,
          r = e.locale,
          o = e.style;
        return a && !1 !== a.showAdd
          ? c['createElement'](
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: o,
                'aria-label':
                  (null === r || void 0 === r ? void 0 : r.addAriaLabel) ||
                  'Add tab',
                onClick: function (e) {
                  a.onEdit('add', { event: e });
                },
              },
              a.addIcon || '+',
            )
          : null;
      }
      var I = c['forwardRef'](T);
      function P(e, t) {
        var n = e.prefixCls,
          a = e.id,
          i = e.tabs,
          l = e.locale,
          u = e.mobile,
          s = e.moreIcon,
          d = void 0 === s ? 'More' : s,
          b = e.moreTransitionName,
          v = e.style,
          h = e.className,
          m = e.editable,
          p = e.tabBarGutter,
          j = e.rtl,
          O = e.removeAriaLabel,
          g = e.onTabClick,
          E = Object(c['useState'])(!1),
          k = Object(o['a'])(E, 2),
          w = k[0],
          x = k[1],
          C = Object(c['useState'])(null),
          T = Object(o['a'])(C, 2),
          P = T[0],
          M = T[1],
          S = ''.concat(a, '-more-popup'),
          B = ''.concat(n, '-dropdown'),
          D = null !== P ? ''.concat(S, '-').concat(P) : null,
          A = null === l || void 0 === l ? void 0 : l.dropdownAriaLabel;
        function W(e, t) {
          e.preventDefault(),
            e.stopPropagation(),
            m.onEdit('remove', { key: t, event: e });
        }
        var L = c['createElement'](
          N['f'],
          {
            onClick: function (e) {
              var t = e.key,
                n = e.domEvent;
              g(t, n), x(!1);
            },
            id: S,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': D,
            selectedKeys: [P],
            'aria-label': void 0 !== A ? A : 'expanded dropdown',
          },
          i.map(function (e) {
            var t = m && !1 !== e.closable && !e.disabled;
            return c['createElement'](
              N['d'],
              {
                key: e.key,
                id: ''.concat(S, '-').concat(e.key),
                role: 'option',
                'aria-controls': a && ''.concat(a, '-panel-').concat(e.key),
                disabled: e.disabled,
              },
              c['createElement']('span', null, e.tab),
              t &&
                c['createElement'](
                  'button',
                  {
                    type: 'button',
                    'aria-label': O || 'remove',
                    tabIndex: 0,
                    className: ''.concat(B, '-menu-item-remove'),
                    onClick: function (t) {
                      t.stopPropagation(), W(t, e.key);
                    },
                  },
                  e.closeIcon || m.removeIcon || '\xd7',
                ),
            );
          }),
        );
        function K(e) {
          for (
            var t = i.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === P;
                }) || 0,
              a = t.length,
              r = 0;
            r < a;
            r += 1
          ) {
            n = (n + e + a) % a;
            var c = t[n];
            if (!c.disabled) return void M(c.key);
          }
        }
        function V(e) {
          var t = e.which;
          if (w)
            switch (t) {
              case y['a'].UP:
                K(-1), e.preventDefault();
                break;
              case y['a'].DOWN:
                K(1), e.preventDefault();
                break;
              case y['a'].ESC:
                x(!1);
                break;
              case y['a'].SPACE:
              case y['a'].ENTER:
                null !== P && g(P, e);
                break;
            }
          else
            [y['a'].DOWN, y['a'].SPACE, y['a'].ENTER].includes(t) &&
              (x(!0), e.preventDefault());
        }
        Object(c['useEffect'])(
          function () {
            var e = document.getElementById(D);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [P],
        ),
          Object(c['useEffect'])(
            function () {
              w || M(null);
            },
            [w],
          );
        var H = Object(r['a'])({}, j ? 'marginRight' : 'marginLeft', p);
        i.length || ((H.visibility = 'hidden'), (H.order = 1));
        var q = f()(Object(r['a'])({}, ''.concat(B, '-rtl'), j)),
          G = u
            ? null
            : c['createElement'](
                R['a'],
                {
                  prefixCls: B,
                  overlay: L,
                  trigger: ['hover'],
                  visible: w,
                  transitionName: b,
                  onVisibleChange: x,
                  overlayClassName: q,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                c['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: H,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': S,
                    id: ''.concat(a, '-more'),
                    'aria-expanded': w,
                    onKeyDown: V,
                  },
                  d,
                ),
              );
        return c['createElement'](
          'div',
          {
            className: f()(''.concat(n, '-nav-operations'), h),
            style: v,
            ref: t,
          },
          G,
          c['createElement'](I, { prefixCls: n, locale: l, editable: m }),
        );
      }
      var M = c['memo'](c['forwardRef'](P), function (e, t) {
          return t.tabMoving;
        }),
        S = Object(c['createContext'])(null),
        B = 0.1,
        D = 0.01,
        A = 20,
        W = Math.pow(0.995, A);
      function L(e, t) {
        var n = Object(c['useState'])(),
          a = Object(o['a'])(n, 2),
          r = a[0],
          i = a[1],
          l = Object(c['useState'])(0),
          u = Object(o['a'])(l, 2),
          s = u[0],
          f = u[1],
          d = Object(c['useState'])(0),
          b = Object(o['a'])(d, 2),
          v = b[0],
          h = b[1],
          m = Object(c['useState'])(),
          p = Object(o['a'])(m, 2),
          j = p[0],
          O = p[1],
          y = Object(c['useRef'])();
        function g(e) {
          var t = e.touches[0],
            n = t.screenX,
            a = t.screenY;
          i({ x: n, y: a }), window.clearInterval(y.current);
        }
        function E(e) {
          if (r) {
            e.preventDefault();
            var n = e.touches[0],
              a = n.screenX,
              c = n.screenY;
            i({ x: a, y: c });
            var o = a - r.x,
              l = c - r.y;
            t(o, l);
            var u = Date.now();
            f(u), h(u - s), O({ x: o, y: l });
          }
        }
        function k() {
          if (r && (i(null), O(null), j)) {
            var e = j.x / v,
              n = j.y / v,
              a = Math.abs(e),
              c = Math.abs(n);
            if (Math.max(a, c) < B) return;
            var o = e,
              l = n;
            y.current = window.setInterval(function () {
              Math.abs(o) < D && Math.abs(l) < D
                ? window.clearInterval(y.current)
                : ((o *= W), (l *= W), t(o * A, l * A));
            }, A);
          }
        }
        var w = Object(c['useRef'])();
        function x(e) {
          var n = e.deltaX,
            a = e.deltaY,
            r = 0,
            c = Math.abs(n),
            o = Math.abs(a);
          c === o
            ? (r = 'x' === w.current ? n : a)
            : c > o
            ? ((r = n), (w.current = 'x'))
            : ((r = a), (w.current = 'y')),
            t(-r, -r) && e.preventDefault();
        }
        var C = Object(c['useRef'])(null);
        (C.current = {
          onTouchStart: g,
          onTouchMove: E,
          onTouchEnd: k,
          onWheel: x,
        }),
          c['useEffect'](function () {
            function t(e) {
              C.current.onTouchStart(e);
            }
            function n(e) {
              C.current.onTouchMove(e);
            }
            function a(e) {
              C.current.onTouchEnd(e);
            }
            function r(e) {
              C.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', a, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', r),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', a);
              }
            );
          }, []);
      }
      function K() {
        var e = Object(c['useRef'])(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, c['createRef']()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current.delete(t);
        }
        return [t, n];
      }
      function V(e, t) {
        var n = c['useRef'](e),
          a = c['useState']({}),
          r = Object(o['a'])(a, 2),
          i = r[1];
        function l(e) {
          var a = 'function' === typeof e ? e(n.current) : e;
          a !== n.current && t(a, n.current), (n.current = a), i({});
        }
        return [n.current, l];
      }
      var H = function (e) {
        var t,
          n = e.position,
          a = e.prefixCls,
          r = e.extra;
        if (!r) return null;
        var o = {};
        return (
          r && 'object' === Object(i['a'])(r) && !c['isValidElement'](r)
            ? (o = r)
            : (o.right = r),
          'right' === n && (t = o.right),
          'left' === n && (t = o.left),
          t
            ? c['createElement'](
                'div',
                { className: ''.concat(a, '-extra-content') },
                t,
              )
            : null
        );
      };
      function q(e, t) {
        var n,
          i = c['useContext'](S),
          l = i.prefixCls,
          s = i.tabs,
          d = e.className,
          b = e.style,
          v = e.id,
          y = e.animated,
          g = e.activeKey,
          k = e.rtl,
          x = e.extra,
          N = e.editable,
          R = e.locale,
          T = e.tabPosition,
          P = e.tabBarGutter,
          B = e.children,
          D = e.onTabClick,
          A = e.onTabScroll,
          W = Object(c['useRef'])(),
          q = Object(c['useRef'])(),
          G = Object(c['useRef'])(),
          z = Object(c['useRef'])(),
          F = K(),
          X = Object(o['a'])(F, 2),
          Z = X[0],
          U = X[1],
          Y = 'top' === T || 'bottom' === T,
          J = V(0, function (e, t) {
            Y && A && A({ direction: e > t ? 'left' : 'right' });
          }),
          _ = Object(o['a'])(J, 2),
          Q = _[0],
          $ = _[1],
          ee = V(0, function (e, t) {
            !Y && A && A({ direction: e > t ? 'top' : 'bottom' });
          }),
          te = Object(o['a'])(ee, 2),
          ne = te[0],
          ae = te[1],
          re = Object(c['useState'])(0),
          ce = Object(o['a'])(re, 2),
          oe = ce[0],
          ie = ce[1],
          le = Object(c['useState'])(0),
          ue = Object(o['a'])(le, 2),
          se = ue[0],
          fe = ue[1],
          de = Object(c['useState'])(null),
          be = Object(o['a'])(de, 2),
          ve = be[0],
          he = be[1],
          me = Object(c['useState'])(null),
          pe = Object(o['a'])(me, 2),
          je = pe[0],
          Oe = pe[1],
          ye = Object(c['useState'])(0),
          ge = Object(o['a'])(ye, 2),
          Ee = ge[0],
          ke = ge[1],
          we = Object(c['useState'])(0),
          xe = Object(o['a'])(we, 2),
          Ce = xe[0],
          Ne = xe[1],
          Re = O(new Map()),
          Te = Object(o['a'])(Re, 2),
          Ie = Te[0],
          Pe = Te[1],
          Me = w(s, Ie, oe),
          Se = ''.concat(l, '-nav-operations-hidden'),
          Be = 0,
          De = 0;
        function Ae(e) {
          return e < Be ? Be : e > De ? De : e;
        }
        Y
          ? k
            ? ((Be = 0), (De = Math.max(0, oe - ve)))
            : ((Be = Math.min(0, ve - oe)), (De = 0))
          : ((Be = Math.min(0, je - se)), (De = 0));
        var We = Object(c['useRef'])(),
          Le = Object(c['useState'])(),
          Ke = Object(o['a'])(Le, 2),
          Ve = Ke[0],
          He = Ke[1];
        function qe() {
          He(Date.now());
        }
        function Ge() {
          window.clearTimeout(We.current);
        }
        function ze() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g,
            t = Me.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (Y) {
            var n = Q;
            k
              ? t.right < Q
                ? (n = t.right)
                : t.right + t.width > Q + ve && (n = t.right + t.width - ve)
              : t.left < -Q
              ? (n = -t.left)
              : t.left + t.width > -Q + ve && (n = -(t.left + t.width - ve)),
              ae(0),
              $(Ae(n));
          } else {
            var a = ne;
            t.top < -ne
              ? (a = -t.top)
              : t.top + t.height > -ne + je && (a = -(t.top + t.height - je)),
              $(0),
              ae(Ae(a));
          }
        }
        L(W, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = Ae(e + t);
              return n;
            });
          }
          if (Y) {
            if (ve >= oe) return !1;
            n($, e);
          } else {
            if (je >= se) return !1;
            n(ae, t);
          }
          return Ge(), qe(), !0;
        }),
          Object(c['useEffect'])(
            function () {
              return (
                Ge(),
                Ve &&
                  (We.current = window.setTimeout(function () {
                    He(0);
                  }, 100)),
                Ge
              );
            },
            [Ve],
          );
        var Fe = C(
            Me,
            { width: ve, height: je, left: Q, top: ne },
            { width: oe, height: se },
            { width: Ee, height: Ce },
            Object(u['a'])(Object(u['a'])({}, e), {}, { tabs: s }),
          ),
          Xe = Object(o['a'])(Fe, 2),
          Ze = Xe[0],
          Ue = Xe[1],
          Ye = {};
        'top' === T || 'bottom' === T
          ? (Ye[k ? 'marginRight' : 'marginLeft'] = P)
          : (Ye.marginTop = P);
        var Je = s.map(function (e, t) {
            var n = e.key;
            return c['createElement'](E, {
              id: v,
              prefixCls: l,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : Ye,
              closable: e.closable,
              editable: N,
              active: n === g,
              renderWrapper: B,
              removeAriaLabel:
                null === R || void 0 === R ? void 0 : R.removeAriaLabel,
              ref: Z(n),
              onClick: function (e) {
                D(n, e);
              },
              onRemove: function () {
                U(n);
              },
              onFocus: function () {
                ze(n),
                  qe(),
                  W.current &&
                    (k || (W.current.scrollLeft = 0),
                    (W.current.scrollTop = 0));
              },
            });
          }),
          _e = j(function () {
            var e,
              t,
              n,
              a,
              r,
              c,
              o =
                (null === (e = W.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              i =
                (null === (t = W.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              l =
                (null === (n = z.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              u =
                (null === (a = z.current) || void 0 === a
                  ? void 0
                  : a.offsetHeight) || 0;
            he(o), Oe(i), ke(l), Ne(u);
            var f =
                ((null === (r = q.current) || void 0 === r
                  ? void 0
                  : r.offsetWidth) || 0) - l,
              d =
                ((null === (c = q.current) || void 0 === c
                  ? void 0
                  : c.offsetHeight) || 0) - u;
            ie(f),
              fe(d),
              Pe(function () {
                var e = new Map();
                return (
                  s.forEach(function (t) {
                    var n = t.key,
                      a = Z(n).current;
                    a &&
                      e.set(n, {
                        width: a.offsetWidth,
                        height: a.offsetHeight,
                        left: a.offsetLeft,
                        top: a.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          Qe = s.slice(0, Ze),
          $e = s.slice(Ue + 1),
          et = [].concat(Object(h['a'])(Qe), Object(h['a'])($e)),
          tt = Object(c['useState'])(),
          nt = Object(o['a'])(tt, 2),
          at = nt[0],
          rt = nt[1],
          ct = Me.get(g),
          ot = Object(c['useRef'])();
        function it() {
          m['a'].cancel(ot.current);
        }
        Object(c['useEffect'])(
          function () {
            var e = {};
            return (
              ct &&
                (Y
                  ? (k ? (e.right = ct.right) : (e.left = ct.left),
                    (e.width = ct.width))
                  : ((e.top = ct.top), (e.height = ct.height))),
              it(),
              (ot.current = Object(m['a'])(function () {
                rt(e);
              })),
              it
            );
          },
          [ct, Y, k],
        ),
          Object(c['useEffect'])(
            function () {
              ze();
            },
            [g, ct, Me, Y],
          ),
          Object(c['useEffect'])(
            function () {
              _e();
            },
            [
              k,
              P,
              g,
              s
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var lt,
          ut,
          st,
          ft,
          dt = !!et.length,
          bt = ''.concat(l, '-nav-wrap');
        return (
          Y
            ? k
              ? ((ut = Q > 0), (lt = Q + ve < oe))
              : ((lt = Q < 0), (ut = -Q + ve < oe))
            : ((st = ne < 0), (ft = -ne + je < se)),
          c['createElement'](
            'div',
            {
              ref: t,
              role: 'tablist',
              className: f()(''.concat(l, '-nav'), d),
              style: b,
              onKeyDown: function () {
                qe();
              },
            },
            c['createElement'](H, { position: 'left', extra: x, prefixCls: l }),
            c['createElement'](
              p['a'],
              { onResize: _e },
              c['createElement'](
                'div',
                {
                  className: f()(
                    bt,
                    ((n = {}),
                    Object(r['a'])(n, ''.concat(bt, '-ping-left'), lt),
                    Object(r['a'])(n, ''.concat(bt, '-ping-right'), ut),
                    Object(r['a'])(n, ''.concat(bt, '-ping-top'), st),
                    Object(r['a'])(n, ''.concat(bt, '-ping-bottom'), ft),
                    n),
                  ),
                  ref: W,
                },
                c['createElement'](
                  p['a'],
                  { onResize: _e },
                  c['createElement'](
                    'div',
                    {
                      ref: q,
                      className: ''.concat(l, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(Q, 'px, ')
                          .concat(ne, 'px)'),
                        transition: Ve ? 'none' : void 0,
                      },
                    },
                    Je,
                    c['createElement'](I, {
                      ref: z,
                      prefixCls: l,
                      locale: R,
                      editable: N,
                      style: Object(u['a'])(
                        Object(u['a'])({}, 0 === Je.length ? void 0 : Ye),
                        {},
                        { visibility: dt ? 'hidden' : null },
                      ),
                    }),
                    c['createElement']('div', {
                      className: f()(
                        ''.concat(l, '-ink-bar'),
                        Object(r['a'])(
                          {},
                          ''.concat(l, '-ink-bar-animated'),
                          y.inkBar,
                        ),
                      ),
                      style: at,
                    }),
                  ),
                ),
              ),
            ),
            c['createElement'](
              M,
              Object(a['a'])({}, e, {
                removeAriaLabel:
                  null === R || void 0 === R ? void 0 : R.removeAriaLabel,
                ref: G,
                prefixCls: l,
                tabs: et,
                className: !dt && Se,
                tabMoving: !!Ve,
              }),
            ),
            c['createElement'](H, {
              position: 'right',
              extra: x,
              prefixCls: l,
            }),
          )
        );
      }
      var G = c['forwardRef'](q);
      function z(e) {
        var t = e.id,
          n = e.activeKey,
          a = e.animated,
          o = e.tabPosition,
          i = e.rtl,
          l = e.destroyInactiveTabPane,
          u = c['useContext'](S),
          s = u.prefixCls,
          d = u.tabs,
          b = a.tabPane,
          v = d.findIndex(function (e) {
            return e.key === n;
          });
        return c['createElement'](
          'div',
          { className: f()(''.concat(s, '-content-holder')) },
          c['createElement'](
            'div',
            {
              className: f()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(o),
                Object(r['a'])({}, ''.concat(s, '-content-animated'), b),
              ),
              style:
                v && b
                  ? Object(r['a'])(
                      {},
                      i ? 'marginRight' : 'marginLeft',
                      '-'.concat(v, '00%'),
                    )
                  : null,
            },
            d.map(function (e) {
              return c['cloneElement'](e.node, {
                key: e.key,
                prefixCls: s,
                tabKey: e.key,
                id: t,
                animated: b,
                active: e.key === n,
                destroyInactiveTabPane: l,
              });
            }),
          ),
        );
      }
      function F(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          a = e.className,
          r = e.style,
          i = e.id,
          l = e.active,
          s = e.animated,
          d = e.destroyInactiveTabPane,
          b = e.tabKey,
          v = e.children,
          h = c['useState'](n),
          m = Object(o['a'])(h, 2),
          p = m[0],
          j = m[1];
        c['useEffect'](
          function () {
            l ? j(!0) : d && j(!1);
          },
          [l, d],
        );
        var O = {};
        return (
          l ||
            (s
              ? ((O.visibility = 'hidden'),
                (O.height = 0),
                (O.overflowY = 'hidden'))
              : (O.display = 'none')),
          c['createElement'](
            'div',
            {
              id: i && ''.concat(i, '-panel-').concat(b),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': i && ''.concat(i, '-tab-').concat(b),
              'aria-hidden': !l,
              style: Object(u['a'])(Object(u['a'])({}, O), r),
              className: f()(
                ''.concat(t, '-tabpane'),
                l && ''.concat(t, '-tabpane-active'),
                a,
              ),
            },
            (l || p || n) && v,
          )
        );
      }
      var X = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        Z = 0;
      function U(e) {
        return Object(d['a'])(e)
          .map(function (e) {
            if (c['isValidElement'](e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return Object(u['a'])(
                Object(u['a'])({ key: t }, e.props),
                {},
                { node: e },
              );
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function Y(e, t) {
        var n,
          s,
          d = e.id,
          h = e.prefixCls,
          m = void 0 === h ? 'rc-tabs' : h,
          p = e.className,
          j = e.children,
          O = e.direction,
          y = e.activeKey,
          g = e.defaultActiveKey,
          E = e.editable,
          k = e.animated,
          w = void 0 === k ? { inkBar: !0, tabPane: !1 } : k,
          x = e.tabPosition,
          C = void 0 === x ? 'top' : x,
          N = e.tabBarGutter,
          R = e.tabBarStyle,
          T = e.tabBarExtraContent,
          I = e.locale,
          P = e.moreIcon,
          M = e.moreTransitionName,
          B = e.destroyInactiveTabPane,
          D = e.renderTabBar,
          A = e.onChange,
          W = e.onTabClick,
          L = e.onTabScroll,
          K = Object(l['a'])(e, X),
          V = U(j),
          H = 'rtl' === O;
        s =
          !1 === w
            ? { inkBar: !1, tabPane: !1 }
            : !0 === w
            ? { inkBar: !0, tabPane: !0 }
            : Object(u['a'])(
                { inkBar: !0, tabPane: !1 },
                'object' === Object(i['a'])(w) ? w : {},
              );
        var q = Object(c['useState'])(!1),
          F = Object(o['a'])(q, 2),
          Y = F[0],
          J = F[1];
        Object(c['useEffect'])(function () {
          J(Object(b['a'])());
        }, []);
        var _ = Object(v['a'])(
            function () {
              var e;
              return null === (e = V[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: y, defaultValue: g },
          ),
          Q = Object(o['a'])(_, 2),
          $ = Q[0],
          ee = Q[1],
          te = Object(c['useState'])(function () {
            return V.findIndex(function (e) {
              return e.key === $;
            });
          }),
          ne = Object(o['a'])(te, 2),
          ae = ne[0],
          re = ne[1];
        Object(c['useEffect'])(
          function () {
            var e,
              t = V.findIndex(function (e) {
                return e.key === $;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(ae, V.length - 1))),
              ee(null === (e = V[t]) || void 0 === e ? void 0 : e.key));
            re(t);
          },
          [
            V.map(function (e) {
              return e.key;
            }).join('_'),
            $,
            ae,
          ],
        );
        var ce = Object(v['a'])(null, { value: d }),
          oe = Object(o['a'])(ce, 2),
          ie = oe[0],
          le = oe[1],
          ue = C;
        function se(e, t) {
          null === W || void 0 === W || W(e, t);
          var n = e !== $;
          ee(e), n && (null === A || void 0 === A || A(e));
        }
        Y && !['left', 'right'].includes(C) && (ue = 'top'),
          Object(c['useEffect'])(function () {
            d || (le('rc-tabs-'.concat(Z)), (Z += 1));
          }, []);
        var fe,
          de = {
            id: ie,
            activeKey: $,
            animated: s,
            tabPosition: ue,
            rtl: H,
            mobile: Y,
          },
          be = Object(u['a'])(
            Object(u['a'])({}, de),
            {},
            {
              editable: E,
              locale: I,
              moreIcon: P,
              moreTransitionName: M,
              tabBarGutter: N,
              onTabClick: se,
              onTabScroll: L,
              extra: T,
              style: R,
              panes: j,
            },
          );
        return (
          (fe = D ? D(be, G) : c['createElement'](G, be)),
          c['createElement'](
            S.Provider,
            { value: { tabs: V, prefixCls: m } },
            c['createElement'](
              'div',
              Object(a['a'])(
                {
                  ref: t,
                  id: d,
                  className: f()(
                    m,
                    ''.concat(m, '-').concat(ue),
                    ((n = {}),
                    Object(r['a'])(n, ''.concat(m, '-mobile'), Y),
                    Object(r['a'])(n, ''.concat(m, '-editable'), E),
                    Object(r['a'])(n, ''.concat(m, '-rtl'), H),
                    n),
                    p,
                  ),
                },
                K,
              ),
              fe,
              c['createElement'](
                z,
                Object(a['a'])({ destroyInactiveTabPane: B }, de, {
                  animated: s,
                }),
              ),
            ),
          )
        );
      }
      var J = c['forwardRef'](Y);
      J.TabPane = F;
      var _ = J,
        Q = _,
        $ = n('vg+8'),
        ee = n('Aghq'),
        te = n('9CK/'),
        ne = n('dMVD'),
        ae = n('U8Ee'),
        re = n('FoDI'),
        ce = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        };
      function oe(e) {
        var t,
          n = e.type,
          o = e.className,
          i = e.size,
          l = e.onEdit,
          u = e.hideAdd,
          s = e.centered,
          d = e.addIcon,
          b = ce(e, [
            'type',
            'className',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
          ]),
          v = b.prefixCls,
          h = b.moreIcon,
          m = void 0 === h ? c['createElement']($['a'], null) : h,
          p = c['useContext'](ae['b']),
          j = p.getPrefixCls,
          O = p.direction,
          y = j('tabs', v);
        'editable-card' === n &&
          (t = {
            onEdit: function (e, t) {
              var n = t.key,
                a = t.event;
              null === l || void 0 === l || l('add' === e ? a : n, e);
            },
            removeIcon: c['createElement'](te['a'], null),
            addIcon: d || c['createElement'](ee['a'], null),
            showAdd: !0 !== u,
          });
        var g = j();
        return (
          Object(ne['a'])(
            !('onPrevClick' in b) && !('onNextClick' in b),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
          ),
          c['createElement'](re['b'].Consumer, null, function (e) {
            var l,
              u = void 0 !== i ? i : e;
            return c['createElement'](
              Q,
              Object(a['a'])(
                { direction: O, moreTransitionName: ''.concat(g, '-slide-up') },
                b,
                {
                  className: f()(
                    ((l = {}),
                    Object(r['a'])(l, ''.concat(y, '-').concat(u), u),
                    Object(r['a'])(
                      l,
                      ''.concat(y, '-card'),
                      ['card', 'editable-card'].includes(n),
                    ),
                    Object(r['a'])(
                      l,
                      ''.concat(y, '-editable-card'),
                      'editable-card' === n,
                    ),
                    Object(r['a'])(l, ''.concat(y, '-centered'), s),
                    l),
                    o,
                  ),
                  editable: t,
                  moreIcon: m,
                  prefixCls: y,
                },
              ),
            );
          })
        );
      }
      oe.TabPane = F;
      t['a'] = oe;
    },
  },
]);
