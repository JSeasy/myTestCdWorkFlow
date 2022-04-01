(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '75Xr': function (e, t, n) {
      'use strict';
      n.d(t, 'e', function () {
        return Oe;
      }),
        n.d(t, 'b', function () {
          return U;
        }),
        n.d(t, 'd', function () {
          return U;
        }),
        n.d(t, 'c', function () {
          return $e;
        }),
        n.d(t, 'a', function () {
          return et;
        }),
        n.d(t, 'g', function () {
          return tt;
        });
      var r = n('7eJq'),
        a = n('3UCj'),
        o = n('8CZ5'),
        i = n('mKQt'),
        c = n('DZ87'),
        l = n('bvuw'),
        u = n('T9Mk'),
        s = n('jK+o'),
        f = n.n(s),
        d = n('8CG2'),
        v = n.n(d),
        b = n('Zuj1'),
        p = n('hH7H'),
        m = n('Qevy'),
        O = n('784L'),
        y = n('6NPg'),
        h = n('LdBP'),
        j = n('ZLan'),
        C = n('1RZB'),
        g = n('AYaK'),
        E = n('B3Qg'),
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
      function x(e, t, n, r) {
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
      var P = ['item'];
      function S(e) {
        var t = e.item,
          n = Object(l['a'])(e, P);
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
      function k(e) {
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
      function N(e) {
        var t = u['useContext'](I),
          n = t.mode,
          r = t.rtl,
          a = t.inlineIndent;
        if ('inline' !== n) return null;
        var o = e;
        return r ? { paddingRight: o * a } : { paddingLeft: o * a };
      }
      var R = [],
        D = u['createContext'](null);
      function A() {
        return u['useContext'](D);
      }
      var L = u['createContext'](R);
      function T(e) {
        var t = u['useContext'](L);
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
      var H = u['createContext']({}),
        q = H,
        B = ['title', 'attribute', 'elementRef'],
        Z = [
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
        Q = ['active'],
        W = (function (e) {
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
                    o = Object(l['a'])(e, B),
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
        G = function (e) {
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
            g = Object(l['a'])(e, Z),
            E = F(s),
            M = u['useContext'](I),
            w = M.prefixCls,
            K = M.onItemClick,
            P = M.disabled,
            R = M.overflowDisabled,
            D = M.itemIcon,
            A = M.selectedKeys,
            L = M.onActive,
            _ = u['useContext'](q),
            z = _._internalRenderMenuItem,
            V = ''.concat(w, '-item'),
            H = u['useRef'](),
            B = u['useRef'](),
            G = P || d,
            J = T(s);
          var U = function (e) {
              return {
                key: s,
                keyPath: Object(i['a'])(J).reverse(),
                item: H.current,
                domEvent: e,
              };
            },
            X = v || D,
            Y = x(s, G, m, O),
            $ = Y.active,
            ee = Object(l['a'])(Y, Q),
            te = A.includes(s),
            ne = N(J.length),
            re = function (e) {
              if (!G) {
                var t = U(e);
                null === y || void 0 === y || y(S(t)), K(t);
              }
            },
            ae = function (e) {
              if (
                (null === h || void 0 === h || h(e), e.which === C['a'].ENTER)
              ) {
                var t = U(e);
                null === y || void 0 === y || y(S(t)), K(t);
              }
            },
            oe = function (e) {
              L(s), null === j || void 0 === j || j(e);
            },
            ie = {};
          'option' === e.role && (ie['aria-selected'] = te);
          var ce = u['createElement'](
            W,
            Object(r['a'])(
              {
                ref: H,
                elementRef: B,
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
                  Object(a['a'])(t, ''.concat(V, '-disabled'), G),
                  t),
                  c,
                ),
                onClick: re,
                onKeyDown: ae,
                onFocus: oe,
              },
            ),
            b,
            u['createElement'](k, {
              props: Object(o['a'])(
                Object(o['a'])({}, e),
                {},
                { isSelected: te },
              ),
              icon: X,
            }),
          );
          return z && (ce = z(ce, e, { selected: te })), ce;
        };
      function J(e) {
        var t = e.eventKey,
          n = A(),
          r = T(t);
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
          n ? null : u['createElement'](G, e)
        );
      }
      var U = J,
        X = n('WFyy');
      function Y(e, t) {
        return Object(X['a'])(e).map(function (e, n) {
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
      function $(e) {
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
      var ee = ['className', 'children'],
        te = function (e, t) {
          var n = e.className,
            a = e.children,
            o = Object(l['a'])(e, ee),
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
        ne = u['forwardRef'](te);
      ne.displayName = 'SubMenuList';
      var re = ne,
        ae = n('q0aD'),
        oe = n('tH+5'),
        ie = { adjustX: 1, adjustY: 1 },
        ce = {
          topLeft: { points: ['bl', 'tl'], overflow: ie, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: ie, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: ie, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: ie, offset: [4, 0] },
        },
        le = {
          topLeft: { points: ['bl', 'tl'], overflow: ie, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: ie, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: ie, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: ie, offset: [4, 0] },
        };
      function ue(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var se = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function fe(e) {
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
          E = p.motion,
          M = p.defaultMotions,
          w = u['useState'](!1),
          K = Object(c['a'])(w, 2),
          x = K[0],
          P = K[1],
          S = O
            ? Object(o['a'])(Object(o['a'])({}, le), j)
            : Object(o['a'])(Object(o['a'])({}, ce), j),
          k = se[v],
          N = ue(v, E, M),
          R = Object(o['a'])(
            Object(o['a'])({}, N),
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
                (D.current = Object(oe['a'])(function () {
                  P(n);
                })),
                function () {
                  oe['a'].cancel(D.current);
                }
              );
            },
            [n],
          ),
          u['createElement'](
            ae['a'],
            {
              prefixCls: t,
              popupClassName: f()(
                ''.concat(t, '-popup'),
                Object(a['a'])({}, ''.concat(t, '-rtl'), O),
                l,
              ),
              stretch: 'horizontal' === v ? 'minWidth' : null,
              getPopupContainer: m,
              builtinPlacements: S,
              popupPlacement: k,
              popupVisible: x,
              popup: i,
              popupAlign: s && { offset: s },
              action: d ? [] : [C],
              mouseEnterDelay: y,
              mouseLeaveDelay: h,
              onPopupVisibleChange: b,
              forceRender: g,
              popupMotion: R,
            },
            r,
          )
        );
      }
      var de = n('QpI/');
      function ve(e) {
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
        var g = Object(o['a'])({}, ue(l, v, b));
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
                  de['b'],
                  Object(r['a'])({ visible: C }, g, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(f, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      r = e.style;
                    return u['createElement'](
                      re,
                      { id: t, className: n, style: r },
                      i,
                    );
                  },
                ),
              )
        );
      }
      var be = [
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
        pe = ['active'],
        me = function (e) {
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
            P = e.onTitleMouseLeave,
            R = Object(l['a'])(e, be),
            D = F(d),
            A = u['useContext'](I),
            L = A.prefixCls,
            z = A.mode,
            V = A.openKeys,
            H = A.disabled,
            B = A.overflowDisabled,
            Z = A.activeKey,
            Q = A.selectedKeys,
            W = A.itemIcon,
            G = A.expandIcon,
            J = A.onItemClick,
            U = A.onOpenChange,
            X = A.onActive,
            Y = u['useContext'](q),
            ee = Y._internalRenderSubMenuItem,
            te = u['useContext'](_),
            ne = te.isSubPathKey,
            ae = T(),
            oe = ''.concat(L, '-submenu'),
            ie = H || v,
            ce = u['useRef'](),
            le = u['useRef']();
          var ue = O || W,
            se = y || G,
            de = V.includes(d),
            me = !B && de,
            Oe = ne(Q, d),
            ye = x(d, ie, w, P),
            he = ye.active,
            je = Object(l['a'])(ye, pe),
            Ce = u['useState'](!1),
            ge = Object(c['a'])(Ce, 2),
            Ee = ge[0],
            Me = ge[1],
            Ie = function (e) {
              ie || Me(e);
            },
            we = function (e) {
              Ie(!0), null === g || void 0 === g || g({ key: d, domEvent: e });
            },
            Ke = function (e) {
              Ie(!1), null === E || void 0 === E || E({ key: d, domEvent: e });
            },
            xe = u['useMemo'](
              function () {
                return he || ('inline' !== z && (Ee || ne([Z], d)));
              },
              [z, he, Z, Ee, d, ne],
            ),
            Pe = N(ae.length),
            Se = function (e) {
              ie ||
                (null === M || void 0 === M || M({ key: d, domEvent: e }),
                'inline' === z && U(d, !de));
            },
            ke = $(function (e) {
              null === C || void 0 === C || C(S(e)), J(e);
            }),
            Ne = function (e) {
              'inline' !== z && U(d, e);
            },
            Re = function () {
              X(d);
            },
            De = D && ''.concat(D, '-popup'),
            Ae = u['createElement'](
              'div',
              Object(r['a'])(
                {
                  role: 'menuitem',
                  style: Pe,
                  className: ''.concat(oe, '-title'),
                  tabIndex: ie ? null : -1,
                  ref: ce,
                  title: 'string' === typeof s ? s : null,
                  'data-menu-id': B && D ? null : D,
                  'aria-expanded': me,
                  'aria-haspopup': !0,
                  'aria-controls': De,
                  'aria-disabled': ie,
                  onClick: Se,
                  onFocus: Re,
                },
                je,
              ),
              s,
              u['createElement'](
                k,
                {
                  icon: 'horizontal' !== z ? se : null,
                  props: Object(o['a'])(
                    Object(o['a'])({}, e),
                    {},
                    { isOpen: me, isSubMenu: !0 },
                  ),
                },
                u['createElement']('i', { className: ''.concat(oe, '-arrow') }),
              ),
            ),
            Le = u['useRef'](z);
          if (
            ('inline' !== z && (Le.current = ae.length > 1 ? 'vertical' : z),
            !B)
          ) {
            var Te = Le.current;
            Ae = u['createElement'](
              fe,
              {
                mode: Te,
                prefixCls: oe,
                visible: !b && me && 'inline' !== z,
                popupClassName: h,
                popupOffset: j,
                popup: u['createElement'](
                  K,
                  { mode: 'horizontal' === Te ? 'vertical' : Te },
                  u['createElement'](re, { id: De, ref: le }, p),
                ),
                disabled: ie,
                onVisibleChange: Ne,
              },
              Ae,
            );
          }
          var _e = u['createElement'](
            m['a'].Item,
            Object(r['a'])({ role: 'none' }, R, {
              component: 'li',
              style: n,
              className: f()(
                oe,
                ''.concat(oe, '-').concat(z),
                i,
                ((t = {}),
                Object(a['a'])(t, ''.concat(oe, '-open'), me),
                Object(a['a'])(t, ''.concat(oe, '-active'), xe),
                Object(a['a'])(t, ''.concat(oe, '-selected'), Oe),
                Object(a['a'])(t, ''.concat(oe, '-disabled'), ie),
                t),
              ),
              onMouseEnter: we,
              onMouseLeave: Ke,
            }),
            Ae,
            !B && u['createElement'](ve, { id: De, open: me, keyPath: ae }, p),
          );
          return (
            ee &&
              (_e = ee(_e, e, {
                selected: Oe,
                active: xe,
                open: me,
                disabled: ie,
              })),
            u['createElement'](
              K,
              {
                onItemClick: ke,
                mode: 'horizontal' === z ? 'vertical' : z,
                itemIcon: ue,
                expandIcon: se,
              },
              _e,
            )
          );
        };
      function Oe(e) {
        var t,
          n = e.eventKey,
          r = e.children,
          a = T(n),
          o = Y(r, a),
          i = A();
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
          (t = i ? o : u['createElement'](me, e, o)),
          u['createElement'](L.Provider, { value: a }, t)
        );
      }
      var ye = n('IHBc');
      function he(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Object(ye['a'])(e)) {
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
      function je(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Object(i['a'])(e.querySelectorAll('*')).filter(function (e) {
            return he(e, t);
          });
        return he(e, t) && n.unshift(e), n;
      }
      var Ce = C['a'].LEFT,
        ge = C['a'].RIGHT,
        Ee = C['a'].UP,
        Me = C['a'].DOWN,
        Ie = C['a'].ENTER,
        we = C['a'].ESC,
        Ke = C['a'].HOME,
        xe = C['a'].END,
        Pe = [Ee, Me, Ce, ge];
      function Se(e, t, n, r) {
        var o,
          i,
          c,
          l,
          u = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === Ie) return { inlineTrigger: !0 };
        var v =
            ((o = {}), Object(a['a'])(o, Ee, u), Object(a['a'])(o, Me, s), o),
          b =
            ((i = {}),
            Object(a['a'])(i, Ce, n ? s : u),
            Object(a['a'])(i, ge, n ? u : s),
            Object(a['a'])(i, Me, f),
            Object(a['a'])(i, Ie, f),
            i),
          p =
            ((c = {}),
            Object(a['a'])(c, Ee, u),
            Object(a['a'])(c, Me, s),
            Object(a['a'])(c, Ie, f),
            Object(a['a'])(c, we, d),
            Object(a['a'])(c, Ce, n ? f : d),
            Object(a['a'])(c, ge, n ? d : f),
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
      function ke(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function Ne(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Re(e, t) {
        var n = je(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function De(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var a = Re(e, t),
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
      function Ae(e, t, n, r, a, o, i, c, l, s) {
        var f = u['useRef'](),
          d = u['useRef']();
        d.current = t;
        var v = function () {
          oe['a'].cancel(f.current);
        };
        return (
          u['useEffect'](function () {
            return function () {
              v();
            };
          }, []),
          function (u) {
            var b = u.which;
            if ([].concat(Pe, [Ie, we, Ke, xe]).includes(b)) {
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
                j = Ne(h, p),
                C = O.get(j),
                g = Se(e, 1 === i(C, !0).length, n, b);
              if (!g && b !== Ke && b !== xe) return;
              (Pe.includes(b) || [Ke, xe].includes(b)) && u.preventDefault();
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
                    (f.current = Object(oe['a'])(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if ([Ke, xe].includes(b) || g.sibling || !j) {
                var M, I;
                M = j && 'inline' !== e ? ke(j) : a.current;
                var w = Re(M, p);
                (I =
                  b === Ke
                    ? w[0]
                    : b === xe
                    ? w[w.length - 1]
                    : De(M, p, j, g.offset)),
                  E(I);
              } else if (g.inlineTrigger) l(C);
              else if (g.offset > 0)
                l(C, !0),
                  v(),
                  (f.current = Object(oe['a'])(function () {
                    y();
                    var e = j.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = De(t, p);
                    E(n);
                  }, 5));
              else if (g.offset < 0) {
                var K = i(C, !0),
                  x = K[K.length - 2],
                  P = m.get(x);
                l(x, !1), E(P);
              }
            }
            null === s || void 0 === s || s(u);
          }
        );
      }
      var Le = Math.random().toFixed(5).toString().slice(2),
        Te = 0;
      function _e(e) {
        var t = Object(b['a'])(e, { value: e }),
          n = Object(c['a'])(t, 2),
          r = n[0],
          a = n[1];
        return (
          u['useEffect'](function () {
            Te += 1;
            var e = ''.concat(Le, '-').concat(Te);
            a('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      }
      function ze(e) {
        Promise.resolve().then(e);
      }
      var Ve = '__RC_UTIL_PATH_SPLIT__',
        Fe = function (e) {
          return e.join(Ve);
        },
        He = function (e) {
          return e.split(Ve);
        },
        qe = 'rc-menu-more';
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
            var n = Fe(t);
            a.current.set(n, e), r.current.set(e, n), (d.current += 1);
            var o = d.current;
            ze(function () {
              o === d.current && b();
            });
          }, []),
          m = Object(u['useCallback'])(function (e, t) {
            var n = Fe(t);
            a.current.delete(n), r.current.delete(e);
          }, []),
          O = Object(u['useCallback'])(function (e) {
            f(e);
          }, []),
          y = Object(u['useCallback'])(
            function (e, t) {
              var n = r.current.get(e) || '',
                a = He(n);
              return t && s.includes(a[0]) && a.unshift(qe), a;
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
            return s.length && e.push(qe), e;
          },
          C = Object(u['useCallback'])(function (e) {
            var t = ''.concat(r.current.get(e)).concat(Ve),
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
      var Ze = n('XDpi'),
        Qe = [
          'prefixCls',
          'style',
          'className',
          'tabIndex',
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
        We = [],
        Ge = u['forwardRef'](function (e, t) {
          var n,
            s,
            d = e.prefixCls,
            p = void 0 === d ? 'rc-menu' : d,
            O = e.style,
            y = e.className,
            h = e.tabIndex,
            j = void 0 === h ? 0 : h,
            C = e.children,
            g = e.direction,
            E = e.id,
            M = e.mode,
            I = void 0 === M ? 'vertical' : M,
            w = e.inlineCollapsed,
            x = e.disabled,
            P = e.disabledOverflow,
            k = e.subMenuOpenDelay,
            N = void 0 === k ? 0.1 : k,
            R = e.subMenuCloseDelay,
            A = void 0 === R ? 0.1 : R,
            L = e.forceSubMenuRender,
            T = e.defaultOpenKeys,
            V = e.openKeys,
            F = e.activeKey,
            H = e.defaultActiveFirst,
            B = e.selectable,
            Z = void 0 === B || B,
            Q = e.multiple,
            W = void 0 !== Q && Q,
            G = e.defaultSelectedKeys,
            J = e.selectedKeys,
            X = e.onSelect,
            ee = e.onDeselect,
            te = e.inlineIndent,
            ne = void 0 === te ? 24 : te,
            re = e.motion,
            ae = e.defaultMotions,
            oe = e.triggerSubMenuAction,
            ie = void 0 === oe ? 'hover' : oe,
            ce = e.builtinPlacements,
            le = e.itemIcon,
            ue = e.expandIcon,
            se = e.overflowedIndicator,
            fe = void 0 === se ? '...' : se,
            de = e.overflowedIndicatorPopupClassName,
            ve = e.getPopupContainer,
            be = e.onClick,
            pe = e.onOpenChange,
            me = e.onKeyDown,
            ye =
              (e.openAnimation,
              e.openTransitionName,
              e._internalRenderMenuItem),
            he = e._internalRenderSubMenuItem,
            je = Object(l['a'])(e, Qe),
            Ce = Y(C, We),
            ge = u['useState'](!1),
            Ee = Object(c['a'])(ge, 2),
            Me = Ee[0],
            Ie = Ee[1],
            we = u['useRef'](),
            Ke = Object(Ze['a'])(we, t),
            xe = _e(E),
            Pe = 'rtl' === g;
          var Se = u['useMemo'](
              function () {
                return ('inline' !== I && 'vertical' !== I) || !w
                  ? [I, !1]
                  : ['vertical', w];
              },
              [I, w],
            ),
            ke = Object(c['a'])(Se, 2),
            Ne = ke[0],
            Re = ke[1],
            De = u['useState'](0),
            Le = Object(c['a'])(De, 2),
            Te = Le[0],
            ze = Le[1],
            Ve = Te >= Ce.length - 1 || 'horizontal' !== Ne || P,
            Fe = Object(b['a'])(T, {
              value: V,
              postState: function (e) {
                return e || We;
              },
            }),
            He = Object(c['a'])(Fe, 2),
            Ge = He[0],
            Je = He[1],
            Ue = function (e) {
              Je(e), null === pe || void 0 === pe || pe(e);
            },
            Xe = u['useState'](Ge),
            Ye = Object(c['a'])(Xe, 2),
            $e = Ye[0],
            et = Ye[1],
            tt = 'inline' === Ne,
            nt = u['useRef'](!1);
          u['useEffect'](
            function () {
              tt && et(Ge);
            },
            [Ge],
          ),
            u['useEffect'](
              function () {
                nt.current ? (tt ? Je($e) : Ue(We)) : (nt.current = !0);
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
                  ? We
                  : Ce.slice(Te + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [Te, Ve],
          );
          var vt = Object(b['a'])(
              F ||
                (H && (null === (n = Ce[0]) || void 0 === n ? void 0 : n.key)),
              { value: F },
            ),
            bt = Object(c['a'])(vt, 2),
            pt = bt[0],
            mt = bt[1],
            Ot = $(function (e) {
              mt(e);
            }),
            yt = $(function () {
              mt(void 0);
            }),
            ht = Object(b['a'])(G || [], {
              value: J,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? We
                  : [e];
              },
            }),
            jt = Object(c['a'])(ht, 2),
            Ct = jt[0],
            gt = jt[1],
            Et = function (e) {
              if (Z) {
                var t,
                  n = e.key,
                  r = Ct.includes(n);
                (t = W
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
                  : null === X || void 0 === X || X(a);
              }
              !W && Ge.length && 'inline' !== Ne && Ue(We);
            },
            Mt = $(function (e) {
              null === be || void 0 === be || be(S(e)), Et(e);
            }),
            It = $(function (e, t) {
              var n = Ge.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== Ne) {
                var r = st(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              v()(Ge, n) || Ue(n);
            }),
            wt = $(ve),
            Kt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !Ge.includes(e);
              It(e, n);
            },
            xt = Ae(Ne, pt, Pe, xe, we, ut, lt, mt, Kt, me);
          u['useEffect'](function () {
            Ie(!0);
          }, []);
          var Pt = u['useMemo'](
              function () {
                return {
                  _internalRenderMenuItem: ye,
                  _internalRenderSubMenuItem: he,
                };
              },
              [ye, he],
            ),
            St =
              'horizontal' !== Ne || P
                ? Ce
                : Ce.map(function (e, t) {
                    return u['createElement'](
                      K,
                      { key: e.key, overflowDisabled: t > Te },
                      e,
                    );
                  }),
            kt = u['createElement'](
              m['a'],
              Object(r['a'])(
                {
                  id: E,
                  ref: Ke,
                  prefixCls: ''.concat(p, '-overflow'),
                  component: 'ul',
                  itemComponent: U,
                  className: f()(
                    p,
                    ''.concat(p, '-root'),
                    ''.concat(p, '-').concat(Ne),
                    y,
                    ((s = {}),
                    Object(a['a'])(s, ''.concat(p, '-inline-collapsed'), Re),
                    Object(a['a'])(s, ''.concat(p, '-rtl'), Pe),
                    s),
                  ),
                  dir: g,
                  style: O,
                  role: 'menu',
                  tabIndex: j,
                  data: St,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? Ce.slice(-t) : null;
                    return u['createElement'](
                      Oe,
                      {
                        eventKey: qe,
                        title: fe,
                        disabled: Ve,
                        internalPopupClose: 0 === t,
                        popupClassName: de,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== Ne || P
                      ? m['a'].INVALIDATE
                      : m['a'].RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    ze(e);
                  },
                  onKeyDown: xt,
                },
                je,
              ),
            );
          return u['createElement'](
            q.Provider,
            { value: Pt },
            u['createElement'](
              z.Provider,
              { value: xe },
              u['createElement'](
                K,
                {
                  prefixCls: p,
                  mode: Ne,
                  openKeys: Ge,
                  rtl: Pe,
                  disabled: x,
                  motion: Me ? re : null,
                  defaultMotions: Me ? ae : null,
                  activeKey: pt,
                  onActive: Ot,
                  onInactive: yt,
                  selectedKeys: Ct,
                  inlineIndent: ne,
                  subMenuOpenDelay: N,
                  subMenuCloseDelay: A,
                  forceSubMenuRender: L,
                  builtinPlacements: ce,
                  triggerSubMenuAction: ie,
                  getPopupContainer: wt,
                  itemIcon: le,
                  expandIcon: ue,
                  onItemClick: Mt,
                  onOpenChange: It,
                },
                u['createElement'](_.Provider, { value: dt }, kt),
                u['createElement'](
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  u['createElement'](D.Provider, { value: ft }, Ce),
                ),
              ),
            ),
          );
        }),
        Je = Ge,
        Ue = ['className', 'title', 'eventKey', 'children'],
        Xe = ['children'],
        Ye = function (e) {
          var t = e.className,
            n = e.title,
            a = (e.eventKey, e.children),
            o = Object(l['a'])(e, Ue),
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
      function $e(e) {
        var t = e.children,
          n = Object(l['a'])(e, Xe),
          r = T(n.eventKey),
          a = Y(t, r),
          o = A();
        return o
          ? a
          : u['createElement'](Ye, Object(g['a'])(n, ['warnKey']), a);
      }
      function et(e) {
        var t = e.className,
          n = e.style,
          r = u['useContext'](I),
          a = r.prefixCls,
          o = A();
        return o
          ? null
          : u['createElement']('li', {
              className: f()(''.concat(a, '-item-divider'), t),
              style: n,
            });
      }
      var tt = T,
        nt = Je;
      (nt.Item = U), (nt.SubMenu = Oe), (nt.ItemGroup = $e), (nt.Divider = et);
      t['f'] = nt;
    },
  },
]);
