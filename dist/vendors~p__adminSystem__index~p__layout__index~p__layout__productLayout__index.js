(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    'a/9r': function (e, t, n) {
      'use strict';
      n.d(t, 'f', function () {
        return Ce;
      }),
        n.d(t, 'b', function () {
          return X;
        }),
        n.d(t, 'd', function () {
          return X;
        }),
        n.d(t, 'e', function () {
          return nt;
        }),
        n.d(t, 'c', function () {
          return nt;
        }),
        n.d(t, 'a', function () {
          return rt;
        }),
        n.d(t, 'h', function () {
          return at;
        });
      var r = n('Ou+A'),
        a = n('KLal'),
        o = n('tJ49'),
        i = n('GThX'),
        c = n('EJA8'),
        l = n('P+Vm'),
        u = n('T9Mk'),
        s = n('jK+o'),
        f = n.n(s),
        d = n('8CG2'),
        v = n.n(d),
        b = n('lz4r'),
        p = n('hIwI'),
        m = n('cE6Y'),
        O = n('Yrqj'),
        y = n('QEIf'),
        h = n('DMBx'),
        j = n('7ozg'),
        C = n('5P0T'),
        g = n('ni4d'),
        E = n('YISn'),
        M = ['children', 'locked'],
        I = u['createContext'](null);
      function w(e, t) {
        var n = Object(o['a'])({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function K(e) {
        var t = e.children,
          n = e.locked,
          r = Object(l['a'])(e, M),
          a = u['useContext'](I),
          o = Object(E['a'])(
            function () {
              return w(a, r);
            },
            [a, r],
            function (e, t) {
              return !n && (e[0] !== t[0] || !v()(e[1], t[1]));
            },
          );
        return u['createElement'](I.Provider, { value: o }, t);
      }
      function k(e, t, n, r) {
        var a = u['useContext'](I),
          o = a.activeKey,
          i = a.onActive,
          c = a.onInactive,
          l = { active: o === e };
        return (
          t ||
            ((l.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), i(e);
            }),
            (l.onMouseLeave = function (t) {
              null === r || void 0 === r || r({ key: e, domEvent: t }), c(e);
            })),
          l
        );
      }
      var x = ['item'];
      function P(e) {
        var t = e.item,
          n = Object(l['a'])(e, x);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                Object(p['a'])(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function N(e) {
        var t,
          n = e.icon,
          r = e.props,
          a = e.children;
        return (
          (t =
            'function' === typeof n
              ? u['createElement'](n, Object(o['a'])({}, r))
              : n),
          t || a || null
        );
      }
      function S(e) {
        var t = u['useContext'](I),
          n = t.mode,
          r = t.rtl,
          a = t.inlineIndent;
        if ('inline' !== n) return null;
        var o = e;
        return r ? { paddingRight: o * a } : { paddingLeft: o * a };
      }
      var R = [],
        A = u['createContext'](null);
      function D() {
        return u['useContext'](A);
      }
      var T = u['createContext'](R);
      function L(e) {
        var t = u['useContext'](T);
        return u['useMemo'](
          function () {
            return void 0 !== e ? [].concat(Object(i['a'])(t), [e]) : t;
          },
          [t, e],
        );
      }
      var _ = u['createContext'](null),
        z = u['createContext'](null);
      function V(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function F(e) {
        var t = u['useContext'](z);
        return V(t, e);
      }
      var q = u['createContext']({}),
        G = q,
        H = ['title', 'attribute', 'elementRef'],
        J = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        W = ['active'],
        Y = (function (e) {
          Object(h['a'])(n, e);
          var t = Object(j['a'])(n);
          function n() {
            return Object(O['a'])(this, n), t.apply(this, arguments);
          }
          return (
            Object(y['a'])(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    a = e.elementRef,
                    o = Object(l['a'])(e, H),
                    i = Object(g['a'])(o, ['eventKey']);
                  return (
                    Object(p['a'])(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    u['createElement'](
                      m['a'].Item,
                      Object(r['a'])(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        i,
                        { ref: a },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(u['Component']),
        B = function (e) {
          var t,
            n = e.style,
            c = e.className,
            s = e.eventKey,
            d = (e.warnKey, e.disabled),
            v = e.itemIcon,
            b = e.children,
            p = e.role,
            m = e.onMouseEnter,
            O = e.onMouseLeave,
            y = e.onClick,
            h = e.onKeyDown,
            j = e.onFocus,
            g = Object(l['a'])(e, J),
            E = F(s),
            M = u['useContext'](I),
            w = M.prefixCls,
            K = M.onItemClick,
            x = M.disabled,
            R = M.overflowDisabled,
            A = M.itemIcon,
            D = M.selectedKeys,
            T = M.onActive,
            _ = u['useContext'](G),
            z = _._internalRenderMenuItem,
            V = ''.concat(w, '-item'),
            q = u['useRef'](),
            H = u['useRef'](),
            B = x || d,
            U = L(s);
          var X = function (e) {
              return {
                key: s,
                keyPath: Object(i['a'])(U).reverse(),
                item: q.current,
                domEvent: e,
              };
            },
            Q = v || A,
            Z = k(s, B, m, O),
            $ = Z.active,
            ee = Object(l['a'])(Z, W),
            te = D.includes(s),
            ne = S(U.length),
            re = function (e) {
              if (!B) {
                var t = X(e);
                null === y || void 0 === y || y(P(t)), K(t);
              }
            },
            ae = function (e) {
              if (
                (null === h || void 0 === h || h(e), e.which === C['a'].ENTER)
              ) {
                var t = X(e);
                null === y || void 0 === y || y(P(t)), K(t);
              }
            },
            oe = function (e) {
              T(s), null === j || void 0 === j || j(e);
            },
            ie = {};
          'option' === e.role && (ie['aria-selected'] = te);
          var ce = u['createElement'](
            Y,
            Object(r['a'])(
              {
                ref: q,
                elementRef: H,
                role: null === p ? 'none' : p || 'menuitem',
                tabIndex: d ? null : -1,
                'data-menu-id': R && E ? null : E,
              },
              g,
              ee,
              ie,
              {
                component: 'li',
                'aria-disabled': d,
                style: Object(o['a'])(Object(o['a'])({}, ne), n),
                className: f()(
                  V,
                  ((t = {}),
                  Object(a['a'])(t, ''.concat(V, '-active'), $),
                  Object(a['a'])(t, ''.concat(V, '-selected'), te),
                  Object(a['a'])(t, ''.concat(V, '-disabled'), B),
                  t),
                  c,
                ),
                onClick: re,
                onKeyDown: ae,
                onFocus: oe,
              },
            ),
            b,
            u['createElement'](N, {
              props: Object(o['a'])(
                Object(o['a'])({}, e),
                {},
                { isSelected: te },
              ),
              icon: Q,
            }),
          );
          return z && (ce = z(ce, e, { selected: te })), ce;
        };
      function U(e) {
        var t = e.eventKey,
          n = D(),
          r = L(t);
        return (
          u['useEffect'](
            function () {
              if (n)
                return (
                  n.registerPath(t, r),
                  function () {
                    n.unregisterPath(t, r);
                  }
                );
            },
            [r],
          ),
          n ? null : u['createElement'](B, e)
        );
      }
      var X = U,
        Q = n('Shg2'),
        Z = n('citB'),
        $ = ['label', 'children', 'key', 'type'];
      function ee(e, t) {
        return Object(Z['a'])(e).map(function (e, n) {
          if (u['isValidElement'](e)) {
            var r,
              a,
              o = e.key,
              c =
                null !==
                  (r =
                    null === (a = e.props) || void 0 === a
                      ? void 0
                      : a.eventKey) && void 0 !== r
                  ? r
                  : o,
              l = null === c || void 0 === c;
            l &&
              (c = 'tmp_key-'.concat(
                [].concat(Object(i['a'])(t), [n]).join('-'),
              ));
            var s = { key: c, eventKey: c };
            return u['cloneElement'](e, s);
          }
          return e;
        });
      }
      function te(e) {
        return (e || [])
          .map(function (e, t) {
            if (e && 'object' === Object(Q['a'])(e)) {
              var n = e.label,
                a = e.children,
                o = e.key,
                i = e.type,
                c = Object(l['a'])(e, $),
                s = null !== o && void 0 !== o ? o : 'tmp-'.concat(t);
              return a || 'group' === i
                ? 'group' === i
                  ? u['createElement'](
                      nt,
                      Object(r['a'])({ key: s }, c, { title: n }),
                      te(a),
                    )
                  : u['createElement'](
                      Ce,
                      Object(r['a'])({ key: s }, c, { title: n }),
                      te(a),
                    )
                : 'divider' === i
                ? u['createElement'](rt, Object(r['a'])({ key: s }, c))
                : u['createElement'](X, Object(r['a'])({ key: s }, c), n);
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function ne(e, t, n) {
        var r = e;
        return t && (r = te(t)), ee(r, n);
      }
      function re(e) {
        var t = u['useRef'](e);
        t.current = e;
        var n = u['useCallback'](function () {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var ae = ['className', 'children'],
        oe = function (e, t) {
          var n = e.className,
            a = e.children,
            o = Object(l['a'])(e, ae),
            i = u['useContext'](I),
            c = i.prefixCls,
            s = i.mode,
            d = i.rtl;
          return u['createElement'](
            'ul',
            Object(r['a'])(
              {
                className: f()(
                  c,
                  d && ''.concat(c, '-rtl'),
                  ''.concat(c, '-sub'),
                  ''
                    .concat(c, '-')
                    .concat('inline' === s ? 'inline' : 'vertical'),
                  n,
                ),
              },
              o,
              { 'data-menu-list': !0, ref: t },
            ),
            a,
          );
        },
        ie = u['forwardRef'](oe);
      ie.displayName = 'SubMenuList';
      var ce = ie,
        le = n('Dn1d'),
        ue = n('xOg1'),
        se = { adjustX: 1, adjustY: 1 },
        fe = {
          topLeft: { points: ['bl', 'tl'], overflow: se, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: se, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: se, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: se, offset: [4, 0] },
        },
        de = {
          topLeft: { points: ['bl', 'tl'], overflow: se, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: se, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: se, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: se, offset: [4, 0] },
        };
      function ve(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var be = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function pe(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.children,
          i = e.popup,
          l = e.popupClassName,
          s = e.popupOffset,
          d = e.disabled,
          v = e.mode,
          b = e.onVisibleChange,
          p = u['useContext'](I),
          m = p.getPopupContainer,
          O = p.rtl,
          y = p.subMenuOpenDelay,
          h = p.subMenuCloseDelay,
          j = p.builtinPlacements,
          C = p.triggerSubMenuAction,
          g = p.forceSubMenuRender,
          E = p.rootClassName,
          M = p.motion,
          w = p.defaultMotions,
          K = u['useState'](!1),
          k = Object(c['a'])(K, 2),
          x = k[0],
          P = k[1],
          N = O
            ? Object(o['a'])(Object(o['a'])({}, de), j)
            : Object(o['a'])(Object(o['a'])({}, fe), j),
          S = be[v],
          R = ve(v, M, w),
          A = Object(o['a'])(
            Object(o['a'])({}, R),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          D = u['useRef']();
        return (
          u['useEffect'](
            function () {
              return (
                (D.current = Object(ue['a'])(function () {
                  P(n);
                })),
                function () {
                  ue['a'].cancel(D.current);
                }
              );
            },
            [n],
          ),
          u['createElement'](
            le['a'],
            {
              prefixCls: t,
              popupClassName: f()(
                ''.concat(t, '-popup'),
                Object(a['a'])({}, ''.concat(t, '-rtl'), O),
                l,
                E,
              ),
              stretch: 'horizontal' === v ? 'minWidth' : null,
              getPopupContainer: m,
              builtinPlacements: N,
              popupPlacement: S,
              popupVisible: x,
              popup: i,
              popupAlign: s && { offset: s },
              action: d ? [] : [C],
              mouseEnterDelay: y,
              mouseLeaveDelay: h,
              onPopupVisibleChange: b,
              forceRender: g,
              popupMotion: A,
            },
            r,
          )
        );
      }
      var me = n('mWg6');
      function Oe(e) {
        var t = e.id,
          n = e.open,
          a = e.keyPath,
          i = e.children,
          l = 'inline',
          s = u['useContext'](I),
          f = s.prefixCls,
          d = s.forceSubMenuRender,
          v = s.motion,
          b = s.defaultMotions,
          p = s.mode,
          m = u['useRef'](!1);
        m.current = p === l;
        var O = u['useState'](!m.current),
          y = Object(c['a'])(O, 2),
          h = y[0],
          j = y[1],
          C = !!m.current && n;
        u['useEffect'](
          function () {
            m.current && j(!1);
          },
          [p],
        );
        var g = Object(o['a'])({}, ve(l, v, b));
        a.length > 1 && (g.motionAppear = !1);
        var E = g.onVisibleChanged;
        return (
          (g.onVisibleChanged = function (e) {
            return (
              m.current || e || j(!0),
              null === E || void 0 === E ? void 0 : E(e)
            );
          }),
          h
            ? null
            : u['createElement'](
                K,
                { mode: l, locked: !m.current },
                u['createElement'](
                  me['b'],
                  Object(r['a'])({ visible: C }, g, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(f, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      r = e.style;
                    return u['createElement'](
                      ce,
                      { id: t, className: n, style: r },
                      i,
                    );
                  },
                ),
              )
        );
      }
      var ye = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        he = ['active'],
        je = function (e) {
          var t,
            n = e.style,
            i = e.className,
            s = e.title,
            d = e.eventKey,
            v = (e.warnKey, e.disabled),
            b = e.internalPopupClose,
            p = e.children,
            O = e.itemIcon,
            y = e.expandIcon,
            h = e.popupClassName,
            j = e.popupOffset,
            C = e.onClick,
            g = e.onMouseEnter,
            E = e.onMouseLeave,
            M = e.onTitleClick,
            w = e.onTitleMouseEnter,
            x = e.onTitleMouseLeave,
            R = Object(l['a'])(e, ye),
            A = F(d),
            D = u['useContext'](I),
            T = D.prefixCls,
            z = D.mode,
            V = D.openKeys,
            q = D.disabled,
            H = D.overflowDisabled,
            J = D.activeKey,
            W = D.selectedKeys,
            Y = D.itemIcon,
            B = D.expandIcon,
            U = D.onItemClick,
            X = D.onOpenChange,
            Q = D.onActive,
            Z = u['useContext'](G),
            $ = Z._internalRenderSubMenuItem,
            ee = u['useContext'](_),
            te = ee.isSubPathKey,
            ne = L(),
            ae = ''.concat(T, '-submenu'),
            oe = q || v,
            ie = u['useRef'](),
            le = u['useRef']();
          var ue = O || Y,
            se = y || B,
            fe = V.includes(d),
            de = !H && fe,
            ve = te(W, d),
            be = k(d, oe, w, x),
            me = be.active,
            je = Object(l['a'])(be, he),
            Ce = u['useState'](!1),
            ge = Object(c['a'])(Ce, 2),
            Ee = ge[0],
            Me = ge[1],
            Ie = function (e) {
              oe || Me(e);
            },
            we = function (e) {
              Ie(!0), null === g || void 0 === g || g({ key: d, domEvent: e });
            },
            Ke = function (e) {
              Ie(!1), null === E || void 0 === E || E({ key: d, domEvent: e });
            },
            ke = u['useMemo'](
              function () {
                return me || ('inline' !== z && (Ee || te([J], d)));
              },
              [z, me, J, Ee, d, te],
            ),
            xe = S(ne.length),
            Pe = function (e) {
              oe ||
                (null === M || void 0 === M || M({ key: d, domEvent: e }),
                'inline' === z && X(d, !fe));
            },
            Ne = re(function (e) {
              null === C || void 0 === C || C(P(e)), U(e);
            }),
            Se = function (e) {
              'inline' !== z && X(d, e);
            },
            Re = function () {
              Q(d);
            },
            Ae = A && ''.concat(A, '-popup'),
            De = u['createElement'](
              'div',
              Object(r['a'])(
                {
                  role: 'menuitem',
                  style: xe,
                  className: ''.concat(ae, '-title'),
                  tabIndex: oe ? null : -1,
                  ref: ie,
                  title: 'string' === typeof s ? s : null,
                  'data-menu-id': H && A ? null : A,
                  'aria-expanded': de,
                  'aria-haspopup': !0,
                  'aria-controls': Ae,
                  'aria-disabled': oe,
                  onClick: Pe,
                  onFocus: Re,
                },
                je,
              ),
              s,
              u['createElement'](
                N,
                {
                  icon: 'horizontal' !== z ? se : null,
                  props: Object(o['a'])(
                    Object(o['a'])({}, e),
                    {},
                    { isOpen: de, isSubMenu: !0 },
                  ),
                },
                u['createElement']('i', { className: ''.concat(ae, '-arrow') }),
              ),
            ),
            Te = u['useRef'](z);
          if (
            ('inline' !== z && (Te.current = ne.length > 1 ? 'vertical' : z),
            !H)
          ) {
            var Le = Te.current;
            De = u['createElement'](
              pe,
              {
                mode: Le,
                prefixCls: ae,
                visible: !b && de && 'inline' !== z,
                popupClassName: h,
                popupOffset: j,
                popup: u['createElement'](
                  K,
                  { mode: 'horizontal' === Le ? 'vertical' : Le },
                  u['createElement'](ce, { id: Ae, ref: le }, p),
                ),
                disabled: oe,
                onVisibleChange: Se,
              },
              De,
            );
          }
          var _e = u['createElement'](
            m['a'].Item,
            Object(r['a'])({ role: 'none' }, R, {
              component: 'li',
              style: n,
              className: f()(
                ae,
                ''.concat(ae, '-').concat(z),
                i,
                ((t = {}),
                Object(a['a'])(t, ''.concat(ae, '-open'), de),
                Object(a['a'])(t, ''.concat(ae, '-active'), ke),
                Object(a['a'])(t, ''.concat(ae, '-selected'), ve),
                Object(a['a'])(t, ''.concat(ae, '-disabled'), oe),
                t),
              ),
              onMouseEnter: we,
              onMouseLeave: Ke,
            }),
            De,
            !H && u['createElement'](Oe, { id: Ae, open: de, keyPath: ne }, p),
          );
          return (
            $ &&
              (_e = $(_e, e, {
                selected: ve,
                active: ke,
                open: de,
                disabled: oe,
              })),
            u['createElement'](
              K,
              {
                onItemClick: Ne,
                mode: 'horizontal' === z ? 'vertical' : z,
                itemIcon: ue,
                expandIcon: se,
              },
              _e,
            )
          );
        };
      function Ce(e) {
        var t,
          n = e.eventKey,
          r = e.children,
          a = L(n),
          o = ee(r, a),
          i = D();
        return (
          u['useEffect'](
            function () {
              if (i)
                return (
                  i.registerPath(n, a),
                  function () {
                    i.unregisterPath(n, a);
                  }
                );
            },
            [a],
          ),
          (t = i ? o : u['createElement'](je, e, o)),
          u['createElement'](T.Provider, { value: a }, t)
        );
      }
      var ge = n('Nckb');
      function Ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Object(ge['a'])(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            a = e.getAttribute('tabindex'),
            o = Number(a),
            i = null;
          return (
            a && !Number.isNaN(o) ? (i = o) : r && null === i && (i = 0),
            r && e.disabled && (i = null),
            null !== i && (i >= 0 || (t && i < 0))
          );
        }
        return !1;
      }
      function Me(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Object(i['a'])(e.querySelectorAll('*')).filter(function (e) {
            return Ee(e, t);
          });
        return Ee(e, t) && n.unshift(e), n;
      }
      var Ie = C['a'].LEFT,
        we = C['a'].RIGHT,
        Ke = C['a'].UP,
        ke = C['a'].DOWN,
        xe = C['a'].ENTER,
        Pe = C['a'].ESC,
        Ne = C['a'].HOME,
        Se = C['a'].END,
        Re = [Ke, ke, Ie, we];
      function Ae(e, t, n, r) {
        var o,
          i,
          c,
          l,
          u = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === xe) return { inlineTrigger: !0 };
        var v =
            ((o = {}), Object(a['a'])(o, Ke, u), Object(a['a'])(o, ke, s), o),
          b =
            ((i = {}),
            Object(a['a'])(i, Ie, n ? s : u),
            Object(a['a'])(i, we, n ? u : s),
            Object(a['a'])(i, ke, f),
            Object(a['a'])(i, xe, f),
            i),
          p =
            ((c = {}),
            Object(a['a'])(c, Ke, u),
            Object(a['a'])(c, ke, s),
            Object(a['a'])(c, xe, f),
            Object(a['a'])(c, Pe, d),
            Object(a['a'])(c, Ie, n ? f : d),
            Object(a['a'])(c, we, n ? d : f),
            c),
          m = {
            inline: v,
            horizontal: b,
            vertical: p,
            inlineSub: v,
            horizontalSub: p,
            verticalSub: p,
          },
          O =
            null === (l = m[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === l
              ? void 0
              : l[r];
        switch (O) {
          case u:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function De(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function Te(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Le(e, t) {
        var n = Me(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function _e(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var a = Le(e, t),
          o = a.length,
          i = a.findIndex(function (e) {
            return n === e;
          });
        return (
          r < 0 ? (-1 === i ? (i = o - 1) : (i -= 1)) : r > 0 && (i += 1),
          (i = (i + o) % o),
          a[i]
        );
      }
      function ze(e, t, n, r, a, o, i, c, l, s) {
        var f = u['useRef'](),
          d = u['useRef']();
        d.current = t;
        var v = function () {
          ue['a'].cancel(f.current);
        };
        return (
          u['useEffect'](function () {
            return function () {
              v();
            };
          }, []),
          function (u) {
            var b = u.which;
            if ([].concat(Re, [xe, Pe, Ne, Se]).includes(b)) {
              var p,
                m,
                O,
                y = function () {
                  (p = new Set()), (m = new Map()), (O = new Map());
                  var e = o();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(V(r, e), "']"),
                      );
                      t && (p.add(t), O.set(t, e), m.set(e, t));
                    }),
                    p
                  );
                };
              y();
              var h = m.get(t),
                j = Te(h, p),
                C = O.get(j),
                g = Ae(e, 1 === i(C, !0).length, n, b);
              if (!g && b !== Ne && b !== Se) return;
              (Re.includes(b) || [Ne, Se].includes(b)) && u.preventDefault();
              var E = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n
                    ? void 0
                    : n.getAttribute('href')) && (t = n);
                  var r = O.get(e);
                  c(r),
                    v(),
                    (f.current = Object(ue['a'])(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if ([Ne, Se].includes(b) || g.sibling || !j) {
                var M, I;
                M = j && 'inline' !== e ? De(j) : a.current;
                var w = Le(M, p);
                (I =
                  b === Ne
                    ? w[0]
                    : b === Se
                    ? w[w.length - 1]
                    : _e(M, p, j, g.offset)),
                  E(I);
              } else if (g.inlineTrigger) l(C);
              else if (g.offset > 0)
                l(C, !0),
                  v(),
                  (f.current = Object(ue['a'])(function () {
                    y();
                    var e = j.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = _e(t, p);
                    E(n);
                  }, 5));
              else if (g.offset < 0) {
                var K = i(C, !0),
                  k = K[K.length - 2],
                  x = m.get(k);
                l(k, !1), E(x);
              }
            }
            null === s || void 0 === s || s(u);
          }
        );
      }
      var Ve = Math.random().toFixed(5).toString().slice(2),
        Fe = 0;
      function qe(e) {
        var t = Object(b['a'])(e, { value: e }),
          n = Object(c['a'])(t, 2),
          r = n[0],
          a = n[1];
        return (
          u['useEffect'](function () {
            Fe += 1;
            var e = ''.concat(Ve, '-').concat(Fe);
            a('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      }
      function Ge(e) {
        Promise.resolve().then(e);
      }
      var He = '__RC_UTIL_PATH_SPLIT__',
        Je = function (e) {
          return e.join(He);
        },
        We = function (e) {
          return e.split(He);
        },
        Ye = 'rc-menu-more';
      function Be() {
        var e = u['useState']({}),
          t = Object(c['a'])(e, 2),
          n = t[1],
          r = Object(u['useRef'])(new Map()),
          a = Object(u['useRef'])(new Map()),
          o = u['useState']([]),
          l = Object(c['a'])(o, 2),
          s = l[0],
          f = l[1],
          d = Object(u['useRef'])(0),
          v = Object(u['useRef'])(!1),
          b = function () {
            v.current || n({});
          },
          p = Object(u['useCallback'])(function (e, t) {
            var n = Je(t);
            a.current.set(n, e), r.current.set(e, n), (d.current += 1);
            var o = d.current;
            Ge(function () {
              o === d.current && b();
            });
          }, []),
          m = Object(u['useCallback'])(function (e, t) {
            var n = Je(t);
            a.current.delete(n), r.current.delete(e);
          }, []),
          O = Object(u['useCallback'])(function (e) {
            f(e);
          }, []),
          y = Object(u['useCallback'])(
            function (e, t) {
              var n = r.current.get(e) || '',
                a = We(n);
              return t && s.includes(a[0]) && a.unshift(Ye), a;
            },
            [s],
          ),
          h = Object(u['useCallback'])(
            function (e, t) {
              return e.some(function (e) {
                var n = y(e, !0);
                return n.includes(t);
              });
            },
            [y],
          ),
          j = function () {
            var e = Object(i['a'])(r.current.keys());
            return s.length && e.push(Ye), e;
          },
          C = Object(u['useCallback'])(function (e) {
            var t = ''.concat(r.current.get(e)).concat(He),
              n = new Set();
            return (
              Object(i['a'])(a.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(a.current.get(e));
              }),
              n
            );
          }, []);
        return (
          u['useEffect'](function () {
            return function () {
              v.current = !0;
            };
          }, []),
          {
            registerPath: p,
            unregisterPath: m,
            refreshOverflowKeys: O,
            isSubPathKey: h,
            getKeyPath: y,
            getKeys: j,
            getSubPathKeys: C,
          }
        );
      }
      var Ue = [
          'prefixCls',
          'rootClassName',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        Xe = [],
        Qe = u['forwardRef'](function (e, t) {
          var n,
            s,
            d = e.prefixCls,
            p = void 0 === d ? 'rc-menu' : d,
            O = e.rootClassName,
            y = e.style,
            h = e.className,
            j = e.tabIndex,
            C = void 0 === j ? 0 : j,
            g = e.items,
            E = e.children,
            M = e.direction,
            I = e.id,
            w = e.mode,
            k = void 0 === w ? 'vertical' : w,
            x = e.inlineCollapsed,
            N = e.disabled,
            S = e.disabledOverflow,
            R = e.subMenuOpenDelay,
            D = void 0 === R ? 0.1 : R,
            T = e.subMenuCloseDelay,
            L = void 0 === T ? 0.1 : T,
            V = e.forceSubMenuRender,
            F = e.defaultOpenKeys,
            q = e.openKeys,
            H = e.activeKey,
            J = e.defaultActiveFirst,
            W = e.selectable,
            Y = void 0 === W || W,
            B = e.multiple,
            U = void 0 !== B && B,
            Q = e.defaultSelectedKeys,
            Z = e.selectedKeys,
            $ = e.onSelect,
            ee = e.onDeselect,
            te = e.inlineIndent,
            ae = void 0 === te ? 24 : te,
            oe = e.motion,
            ie = e.defaultMotions,
            ce = e.triggerSubMenuAction,
            le = void 0 === ce ? 'hover' : ce,
            ue = e.builtinPlacements,
            se = e.itemIcon,
            fe = e.expandIcon,
            de = e.overflowedIndicator,
            ve = void 0 === de ? '...' : de,
            be = e.overflowedIndicatorPopupClassName,
            pe = e.getPopupContainer,
            me = e.onClick,
            Oe = e.onOpenChange,
            ye = e.onKeyDown,
            he =
              (e.openAnimation,
              e.openTransitionName,
              e._internalRenderMenuItem),
            je = e._internalRenderSubMenuItem,
            ge = Object(l['a'])(e, Ue),
            Ee = u['useMemo'](
              function () {
                return ne(E, g, Xe);
              },
              [E, g],
            ),
            Me = u['useState'](!1),
            Ie = Object(c['a'])(Me, 2),
            we = Ie[0],
            Ke = Ie[1],
            ke = u['useRef']();
          Object(u['useImperativeHandle'])(t, function () {
            return {
              list: ke.current,
              focus: function (e) {
                var t;
                null === (t = ke.current) || void 0 === t || t.focus(e);
              },
            };
          });
          var xe = qe(I),
            Pe = 'rtl' === M;
          var Ne = u['useMemo'](
              function () {
                return ('inline' !== k && 'vertical' !== k) || !x
                  ? [k, !1]
                  : ['vertical', x];
              },
              [k, x],
            ),
            Se = Object(c['a'])(Ne, 2),
            Re = Se[0],
            Ae = Se[1],
            De = u['useState'](0),
            Te = Object(c['a'])(De, 2),
            Le = Te[0],
            _e = Te[1],
            Ve = Le >= Ee.length - 1 || 'horizontal' !== Re || S,
            Fe = Object(b['a'])(F, {
              value: q,
              postState: function (e) {
                return e || Xe;
              },
            }),
            Ge = Object(c['a'])(Fe, 2),
            He = Ge[0],
            Je = Ge[1],
            We = function (e) {
              Je(e), null === Oe || void 0 === Oe || Oe(e);
            },
            Qe = u['useState'](He),
            Ze = Object(c['a'])(Qe, 2),
            $e = Ze[0],
            et = Ze[1],
            tt = 'inline' === Re,
            nt = u['useRef'](!1);
          u['useEffect'](
            function () {
              tt && et(He);
            },
            [He],
          ),
            u['useEffect'](
              function () {
                nt.current ? (tt ? Je($e) : We(Xe)) : (nt.current = !0);
              },
              [tt],
            );
          var rt = Be(),
            at = rt.registerPath,
            ot = rt.unregisterPath,
            it = rt.refreshOverflowKeys,
            ct = rt.isSubPathKey,
            lt = rt.getKeyPath,
            ut = rt.getKeys,
            st = rt.getSubPathKeys,
            ft = u['useMemo'](
              function () {
                return { registerPath: at, unregisterPath: ot };
              },
              [at, ot],
            ),
            dt = u['useMemo'](
              function () {
                return { isSubPathKey: ct };
              },
              [ct],
            );
          u['useEffect'](
            function () {
              it(
                Ve
                  ? Xe
                  : Ee.slice(Le + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [Le, Ve],
          );
          var vt = Object(b['a'])(
              H ||
                (J && (null === (n = Ee[0]) || void 0 === n ? void 0 : n.key)),
              { value: H },
            ),
            bt = Object(c['a'])(vt, 2),
            pt = bt[0],
            mt = bt[1],
            Ot = re(function (e) {
              mt(e);
            }),
            yt = re(function () {
              mt(void 0);
            }),
            ht = Object(b['a'])(Q || [], {
              value: Z,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? Xe
                  : [e];
              },
            }),
            jt = Object(c['a'])(ht, 2),
            Ct = jt[0],
            gt = jt[1],
            Et = function (e) {
              if (Y) {
                var t,
                  n = e.key,
                  r = Ct.includes(n);
                (t = U
                  ? r
                    ? Ct.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat(Object(i['a'])(Ct), [n])
                  : [n]),
                  gt(t);
                var a = Object(o['a'])(
                  Object(o['a'])({}, e),
                  {},
                  { selectedKeys: t },
                );
                r
                  ? null === ee || void 0 === ee || ee(a)
                  : null === $ || void 0 === $ || $(a);
              }
              !U && He.length && 'inline' !== Re && We(Xe);
            },
            Mt = re(function (e) {
              null === me || void 0 === me || me(P(e)), Et(e);
            }),
            It = re(function (e, t) {
              var n = He.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== Re) {
                var r = st(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              v()(He, n) || We(n);
            }),
            wt = re(pe),
            Kt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !He.includes(e);
              It(e, n);
            },
            kt = ze(Re, pt, Pe, xe, ke, ut, lt, mt, Kt, ye);
          u['useEffect'](function () {
            Ke(!0);
          }, []);
          var xt = u['useMemo'](
              function () {
                return {
                  _internalRenderMenuItem: he,
                  _internalRenderSubMenuItem: je,
                };
              },
              [he, je],
            ),
            Pt =
              'horizontal' !== Re || S
                ? Ee
                : Ee.map(function (e, t) {
                    return u['createElement'](
                      K,
                      { key: e.key, overflowDisabled: t > Le },
                      e,
                    );
                  }),
            Nt = u['createElement'](
              m['a'],
              Object(r['a'])(
                {
                  id: I,
                  ref: ke,
                  prefixCls: ''.concat(p, '-overflow'),
                  component: 'ul',
                  itemComponent: X,
                  className: f()(
                    p,
                    ''.concat(p, '-root'),
                    ''.concat(p, '-').concat(Re),
                    h,
                    ((s = {}),
                    Object(a['a'])(s, ''.concat(p, '-inline-collapsed'), Ae),
                    Object(a['a'])(s, ''.concat(p, '-rtl'), Pe),
                    s),
                    O,
                  ),
                  dir: M,
                  style: y,
                  role: 'menu',
                  tabIndex: C,
                  data: Pt,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? Ee.slice(-t) : null;
                    return u['createElement'](
                      Ce,
                      {
                        eventKey: Ye,
                        title: ve,
                        disabled: Ve,
                        internalPopupClose: 0 === t,
                        popupClassName: be,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== Re || S
                      ? m['a'].INVALIDATE
                      : m['a'].RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    _e(e);
                  },
                  onKeyDown: kt,
                },
                ge,
              ),
            );
          return u['createElement'](
            G.Provider,
            { value: xt },
            u['createElement'](
              z.Provider,
              { value: xe },
              u['createElement'](
                K,
                {
                  prefixCls: p,
                  rootClassName: O,
                  mode: Re,
                  openKeys: He,
                  rtl: Pe,
                  disabled: N,
                  motion: we ? oe : null,
                  defaultMotions: we ? ie : null,
                  activeKey: pt,
                  onActive: Ot,
                  onInactive: yt,
                  selectedKeys: Ct,
                  inlineIndent: ae,
                  subMenuOpenDelay: D,
                  subMenuCloseDelay: L,
                  forceSubMenuRender: V,
                  builtinPlacements: ue,
                  triggerSubMenuAction: le,
                  getPopupContainer: wt,
                  itemIcon: se,
                  expandIcon: fe,
                  onItemClick: Mt,
                  onOpenChange: It,
                },
                u['createElement'](_.Provider, { value: dt }, Nt),
                u['createElement'](
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  u['createElement'](A.Provider, { value: ft }, Ee),
                ),
              ),
            ),
          );
        }),
        Ze = Qe,
        $e = ['className', 'title', 'eventKey', 'children'],
        et = ['children'],
        tt = function (e) {
          var t = e.className,
            n = e.title,
            a = (e.eventKey, e.children),
            o = Object(l['a'])(e, $e),
            i = u['useContext'](I),
            c = i.prefixCls,
            s = ''.concat(c, '-item-group');
          return u['createElement'](
            'li',
            Object(r['a'])({}, o, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: f()(s, t),
            }),
            u['createElement'](
              'div',
              {
                className: ''.concat(s, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            u['createElement']('ul', { className: ''.concat(s, '-list') }, a),
          );
        };
      function nt(e) {
        var t = e.children,
          n = Object(l['a'])(e, et),
          r = L(n.eventKey),
          a = ee(t, r),
          o = D();
        return o
          ? a
          : u['createElement'](tt, Object(g['a'])(n, ['warnKey']), a);
      }
      function rt(e) {
        var t = e.className,
          n = e.style,
          r = u['useContext'](I),
          a = r.prefixCls,
          o = D();
        return o
          ? null
          : u['createElement']('li', {
              className: f()(''.concat(a, '-item-divider'), t),
              style: n,
            });
      }
      var at = L,
        ot = Ze;
      (ot.Item = X), (ot.SubMenu = Ce), (ot.ItemGroup = nt), (ot.Divider = rt);
      t['g'] = ot;
    },
  },
]);
