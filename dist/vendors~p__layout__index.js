(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [39],
  {
    '/6Z1': function (e, t, n) {
      'use strict';
      var r = n('JRDK'),
        a = n.n(r),
        c = n('T9Mk'),
        o = n.n(c),
        i = n('q5+0');
      function l(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      var s = { exact: !0 },
        u = 'NO_BREADCRUMB',
        f = function (e) {
          return e
            .replace(/^[\s_]+|[\s_]+$/g, '')
            .replace(/[_\s]+/g, ' ')
            .replace(/^[a-z]/, function (e) {
              return e.toUpperCase();
            });
        },
        p = function (e) {
          var t = e.breadcrumb,
            n = e.match,
            r = e.location,
            a = l(e, ['breadcrumb', 'match', 'location']),
            i = Object.assign({ match: n, location: r, key: n.url }, a);
          return Object.assign(Object.assign({}, i), {
            breadcrumb:
              'string' === typeof t
                ? Object(c['createElement'])('span', { key: i.key }, t)
                : o.a.createElement(t, Object.assign({}, i)),
          });
        },
        d = function (e) {
          var t = e.currentSection,
            n = e.location,
            r = e.pathSection,
            a = Object(i['f'])(
              r,
              Object.assign(Object.assign({}, s), { path: r }),
            ) || { url: 'not-found' };
          return p({ breadcrumb: f(t), match: a, location: n });
        },
        m = function (e) {
          var t,
            n = e.currentSection,
            r = e.disableDefaults,
            a = e.excludePaths,
            c = e.location,
            o = e.pathSection,
            m = e.routes,
            b = function (e) {
              return Object(i['f'])(o, { path: e, exact: !0, strict: !1 });
            };
          return a && a.some(b)
            ? u
            : (m.some(function (e) {
                var a = e.breadcrumb,
                  d = e.matchOptions,
                  m = e.path,
                  b = l(e, ['breadcrumb', 'matchOptions', 'path']);
                if (!m)
                  throw new Error(
                    'withBreadcrumbs: `path` must be provided in every route object',
                  );
                var v = Object(i['f'])(
                  o,
                  Object.assign(Object.assign({}, d || s), { path: m }),
                );
                return (v && null === a) || (!v && d)
                  ? ((t = u), !0)
                  : !!v &&
                      (!a && r
                        ? ((t = u), !0)
                        : ((t = p(
                            Object.assign(
                              { breadcrumb: a || f(n), match: v, location: c },
                              b,
                            ),
                          )),
                          !0));
              }),
              t ||
                (r
                  ? u
                  : d({
                      pathSection: o,
                      currentSection: '/' === o ? 'Home' : n,
                      location: c,
                    })));
        },
        b = function (e) {
          var t = e.routes,
            n = e.location,
            r = e.options,
            a = void 0 === r ? {} : r,
            c = [],
            o = n.pathname;
          return (
            o
              .split('?')[0]
              .split('/')
              .reduce(function (e, r, o) {
                var i = r ? ''.concat(e, '/').concat(r) : '/';
                if ('/' === i && 0 !== o) return '';
                var l = m(
                  Object.assign(
                    {
                      currentSection: r,
                      location: n,
                      pathSection: i,
                      routes: t,
                    },
                    a,
                  ),
                );
                return l !== u && c.push(l), '/' === i ? '' : i;
              }, ''),
            c
          );
        },
        v = function e(t) {
          return t.reduce(function (t, n) {
            return n.routes
              ? t.concat([n].concat(a()(e(n.routes))))
              : t.concat(n);
          }, []);
        },
        O = function (e, t) {
          return function (n) {
            return function (r) {
              return o.a.createElement(
                n,
                Object.assign(Object.assign({}, r), {
                  breadcrumbs: b({
                    options: t,
                    routes: v(e || []),
                    location: Object(i['h'])(),
                  }),
                }),
              );
            };
          };
        };
      t['a'] = O;
    },
    DndG: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return g;
      });
      var r = n('q5+0'),
        a = n('zTkB'),
        c = n('T9Mk'),
        o = n.n(c),
        i = n('HFu6'),
        l = n('7eJq'),
        s = n('d7Zr'),
        u = n('U/x9');
      o.a.Component;
      o.a.Component;
      var f = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        p = function (e, t) {
          return 'string' === typeof e ? Object(i['c'])(e, null, null, t) : e;
        },
        d = function (e) {
          return e;
        },
        m = o.a.forwardRef;
      function b(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      'undefined' === typeof m && (m = d);
      var v = m(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          c = Object(s['a'])(e, ['innerRef', 'navigate', 'onClick']),
          i = c.target,
          u = Object(l['a'])({}, c, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (i && '_self' !== i) ||
                b(e) ||
                (e.preventDefault(), r());
            },
          });
        return (u.ref = (d !== m && t) || n), o.a.createElement('a', u);
      });
      var O = m(function (e, t) {
          var n = e.component,
            a = void 0 === n ? v : n,
            c = e.replace,
            i = e.to,
            b = e.innerRef,
            O = Object(s['a'])(e, ['component', 'replace', 'to', 'innerRef']);
          return o.a.createElement(r['e'].Consumer, null, function (e) {
            e || Object(u['a'])(!1);
            var n = e.history,
              r = p(f(i, e.location), e.location),
              s = r ? n.createHref(r) : '',
              v = Object(l['a'])({}, O, {
                href: s,
                navigate: function () {
                  var t = f(i, e.location),
                    r = c ? n.replace : n.push;
                  r(t);
                },
              });
            return (
              d !== m ? (v.ref = t || b) : (v.innerRef = b),
              o.a.createElement(a, v)
            );
          });
        }),
        y = function (e) {
          return e;
        },
        j = o.a.forwardRef;
      function h() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }
      'undefined' === typeof j && (j = y);
      var g = j(function (e, t) {
        var n = e['aria-current'],
          a = void 0 === n ? 'page' : n,
          c = e.activeClassName,
          i = void 0 === c ? 'active' : c,
          d = e.activeStyle,
          m = e.className,
          b = e.exact,
          v = e.isActive,
          g = e.location,
          x = e.sensitive,
          C = e.strict,
          E = e.style,
          N = e.to,
          w = e.innerRef,
          S = Object(s['a'])(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return o.a.createElement(r['e'].Consumer, null, function (e) {
          e || Object(u['a'])(!1);
          var n = g || e.location,
            c = p(f(N, n), n),
            s = c.pathname,
            M = s && s.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            R = M
              ? Object(r['f'])(n.pathname, {
                  path: M,
                  exact: b,
                  sensitive: x,
                  strict: C,
                })
              : null,
            I = !!(v ? v(R, n) : R),
            P = I ? h(m, i) : m,
            k = I ? Object(l['a'])({}, E, {}, d) : E,
            _ = Object(l['a'])(
              {
                'aria-current': (I && a) || null,
                className: P,
                style: k,
                to: c,
              },
              S,
            );
          return (
            y !== j ? (_.ref = t || w) : (_.innerRef = w),
            o.a.createElement(O, _)
          );
        });
      });
    },
    I1fa: function (e, t, n) {},
    JRDK: function (e, t, n) {
      var r = n('cZWE'),
        a = n('vNQV'),
        c = n('kQr0'),
        o = n('ZSNe');
      function i(e) {
        return r(e) || a(e) || c(e) || o();
      }
      (e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports['default'] = e.exports);
    },
    Kbj6: function (e, t, n) {
      'use strict';
      var r = n('784L'),
        a = n('6NPg'),
        c = n('LdBP'),
        o = n('ZLan'),
        i = n('7eJq'),
        l = n('T9Mk'),
        s = n('75Xr'),
        u = n('jK+o'),
        f = n.n(u),
        p = n('AYaK'),
        d = n('vg+8'),
        m = Object(l['createContext'])({
          prefixCls: '',
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        b = m,
        v = n('8tHZ');
      function O(e) {
        var t,
          n,
          r = e.popupClassName,
          a = e.icon,
          c = e.title,
          o = e.theme,
          u = l['useContext'](b),
          d = u.prefixCls,
          m = u.inlineCollapsed,
          O = u.antdMenuTheme,
          y = Object(s['g'])();
        if (a) {
          var j = Object(v['b'])(c) && 'span' === c.type;
          n = l['createElement'](
            l['Fragment'],
            null,
            Object(v['a'])(a, {
              className: f()(
                Object(v['b'])(a)
                  ? null === (t = a.props) || void 0 === t
                    ? void 0
                    : t.className
                  : '',
                ''.concat(d, '-item-icon'),
              ),
            }),
            j
              ? c
              : l['createElement'](
                  'span',
                  { className: ''.concat(d, '-title-content') },
                  c,
                ),
          );
        } else
          n =
            m && !y.length && c && 'string' === typeof c
              ? l['createElement'](
                  'div',
                  { className: ''.concat(d, '-inline-collapsed-noicon') },
                  c.charAt(0),
                )
              : l['createElement'](
                  'span',
                  { className: ''.concat(d, '-title-content') },
                  c,
                );
        var h = l['useMemo'](
          function () {
            return Object(i['a'])(Object(i['a'])({}, u), { firstLevel: !1 });
          },
          [u],
        );
        return l['createElement'](
          b.Provider,
          { value: h },
          l['createElement'](
            s['e'],
            Object(i['a'])({}, Object(p['a'])(e, ['icon']), {
              title: n,
              popupClassName: f()(d, ''.concat(d, '-').concat(o || O), r),
            }),
          ),
        );
      }
      var y = O,
        j = n('3UCj'),
        h = n('WFyy'),
        g = n('7E4c'),
        x = n('DZ87'),
        C = n('8CZ5'),
        E = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'bars',
          theme: 'outlined',
        },
        N = E,
        w = n('ING4'),
        S = function (e, t) {
          return l['createElement'](
            w['a'],
            Object(C['a'])(Object(C['a'])({}, e), {}, { ref: t, icon: N }),
          );
        };
      S.displayName = 'BarsOutlined';
      var M = l['forwardRef'](S),
        R = n('xUpK'),
        I = n('Q03V'),
        P = n('mKQt'),
        k = n('f9wj'),
        _ = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        A = l['createContext']({
          siderHook: {
            addSider: function () {
              return null;
            },
            removeSider: function () {
              return null;
            },
          },
        });
      function T(e) {
        var t = e.suffixCls,
          n = e.tagName,
          r = e.displayName;
        return function (e) {
          var a = function (r) {
            var a = l['useContext'](k['b']),
              c = a.getPrefixCls,
              o = r.prefixCls,
              s = c(t, o);
            return l['createElement'](
              e,
              Object(i['a'])({ prefixCls: s, tagName: n }, r),
            );
          };
          return (a.displayName = r), a;
        };
      }
      var K = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.children,
            a = e.tagName,
            c = _(e, ['prefixCls', 'className', 'children', 'tagName']),
            o = f()(t, n);
          return l['createElement'](a, Object(i['a'])({ className: o }, c), r);
        },
        z = function (e) {
          var t,
            n = l['useContext'](k['b']),
            r = n.direction,
            a = l['useState']([]),
            c = Object(x['a'])(a, 2),
            o = c[0],
            s = c[1],
            u = e.prefixCls,
            p = e.className,
            d = e.children,
            m = e.hasSider,
            b = e.tagName,
            v = _(e, [
              'prefixCls',
              'className',
              'children',
              'hasSider',
              'tagName',
            ]),
            O = f()(
              u,
              ((t = {}),
              Object(j['a'])(
                t,
                ''.concat(u, '-has-sider'),
                'boolean' === typeof m ? m : o.length > 0,
              ),
              Object(j['a'])(t, ''.concat(u, '-rtl'), 'rtl' === r),
              t),
              p,
            ),
            y = l['useMemo'](function () {
              return {
                siderHook: {
                  addSider: function (e) {
                    s(function (t) {
                      return [].concat(Object(P['a'])(t), [e]);
                    });
                  },
                  removeSider: function (e) {
                    s(function (t) {
                      return t.filter(function (t) {
                        return t !== e;
                      });
                    });
                  },
                },
              };
            }, []);
          return l['createElement'](
            A.Provider,
            { value: y },
            l['createElement'](b, Object(i['a'])({ className: O }, v), d),
          );
        },
        B =
          (T({
            suffixCls: 'layout',
            tagName: 'section',
            displayName: 'Layout',
          })(z),
          T({
            suffixCls: 'layout-header',
            tagName: 'header',
            displayName: 'Header',
          })(K),
          T({
            suffixCls: 'layout-footer',
            tagName: 'footer',
            displayName: 'Footer',
          })(K),
          T({
            suffixCls: 'layout-content',
            tagName: 'main',
            displayName: 'Content',
          })(K),
          function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          }),
        L = B,
        Z = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        D = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        W = l['createContext']({}),
        F = (function () {
          var e = 0;
          return function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '';
            return (e += 1), ''.concat(t).concat(e);
          };
        })(),
        H = l['forwardRef'](function (e, t) {
          var n = e.prefixCls,
            r = e.className,
            a = e.trigger,
            c = e.children,
            o = e.defaultCollapsed,
            s = void 0 !== o && o,
            u = e.theme,
            d = void 0 === u ? 'dark' : u,
            m = e.style,
            b = void 0 === m ? {} : m,
            v = e.collapsible,
            O = void 0 !== v && v,
            y = e.reverseArrow,
            h = void 0 !== y && y,
            g = e.width,
            C = void 0 === g ? 200 : g,
            E = e.collapsedWidth,
            N = void 0 === E ? 80 : E,
            w = e.zeroWidthTriggerStyle,
            S = e.breakpoint,
            P = e.onCollapse,
            _ = e.onBreakpoint,
            T = Z(e, [
              'prefixCls',
              'className',
              'trigger',
              'children',
              'defaultCollapsed',
              'theme',
              'style',
              'collapsible',
              'reverseArrow',
              'width',
              'collapsedWidth',
              'zeroWidthTriggerStyle',
              'breakpoint',
              'onCollapse',
              'onBreakpoint',
            ]),
            K = Object(l['useContext'])(A),
            z = K.siderHook,
            B = Object(l['useState'])('collapsed' in T ? T.collapsed : s),
            H = Object(x['a'])(B, 2),
            U = H[0],
            q = H[1],
            J = Object(l['useState'])(!1),
            V = Object(x['a'])(J, 2),
            Q = V[0],
            G = V[1];
          Object(l['useEffect'])(
            function () {
              'collapsed' in T && q(T.collapsed);
            },
            [T.collapsed],
          );
          var X = function (e, t) {
              'collapsed' in T || q(e), null === P || void 0 === P || P(e, t);
            },
            Y = Object(l['useRef'])();
          (Y.current = function (e) {
            G(e.matches),
              null === _ || void 0 === _ || _(e.matches),
              U !== e.matches && X(e.matches, 'responsive');
          }),
            Object(l['useEffect'])(
              function () {
                function e(e) {
                  return Y.current(e);
                }
                var t;
                if ('undefined' !== typeof window) {
                  var n = window,
                    r = n.matchMedia;
                  if (r && S && S in D) {
                    t = r('(max-width: '.concat(D[S], ')'));
                    try {
                      t.addEventListener('change', e);
                    } catch (a) {
                      t.addListener(e);
                    }
                    e(t);
                  }
                }
                return function () {
                  try {
                    null === t ||
                      void 0 === t ||
                      t.removeEventListener('change', e);
                  } catch (a) {
                    null === t || void 0 === t || t.removeListener(e);
                  }
                };
              },
              [S],
            ),
            Object(l['useEffect'])(function () {
              var e = F('ant-sider-');
              return (
                z.addSider(e),
                function () {
                  return z.removeSider(e);
                }
              );
            }, []);
          var $ = function () {
              X(!U, 'clickTrigger');
            },
            ee = Object(l['useContext'])(k['b']),
            te = ee.getPrefixCls,
            ne = function () {
              var e,
                o = te('layout-sider', n),
                s = Object(p['a'])(T, ['collapsed']),
                u = U ? N : C,
                m = L(u) ? ''.concat(u, 'px') : String(u),
                v =
                  0 === parseFloat(String(N || 0))
                    ? l['createElement'](
                        'span',
                        {
                          onClick: $,
                          className: f()(
                            ''.concat(o, '-zero-width-trigger'),
                            ''
                              .concat(o, '-zero-width-trigger-')
                              .concat(h ? 'right' : 'left'),
                          ),
                          style: w,
                        },
                        a || l['createElement'](M, null),
                      )
                    : null,
                y = {
                  expanded: h
                    ? l['createElement'](R['a'], null)
                    : l['createElement'](I['a'], null),
                  collapsed: h
                    ? l['createElement'](I['a'], null)
                    : l['createElement'](R['a'], null),
                },
                g = U ? 'collapsed' : 'expanded',
                x = y[g],
                E =
                  null !== a
                    ? v ||
                      l['createElement'](
                        'div',
                        {
                          className: ''.concat(o, '-trigger'),
                          onClick: $,
                          style: { width: m },
                        },
                        a || x,
                      )
                    : null,
                S = Object(i['a'])(Object(i['a'])({}, b), {
                  flex: '0 0 '.concat(m),
                  maxWidth: m,
                  minWidth: m,
                  width: m,
                }),
                P = f()(
                  o,
                  ''.concat(o, '-').concat(d),
                  ((e = {}),
                  Object(j['a'])(e, ''.concat(o, '-collapsed'), !!U),
                  Object(j['a'])(
                    e,
                    ''.concat(o, '-has-trigger'),
                    O && null !== a && !v,
                  ),
                  Object(j['a'])(e, ''.concat(o, '-below'), !!Q),
                  Object(j['a'])(
                    e,
                    ''.concat(o, '-zero-width'),
                    0 === parseFloat(m),
                  ),
                  e),
                  r,
                );
              return l['createElement'](
                'aside',
                Object(i['a'])({ className: P }, s, { style: S, ref: t }),
                l['createElement'](
                  'div',
                  { className: ''.concat(o, '-children') },
                  c,
                ),
                O || (Q && v) ? E : null,
              );
            },
            re = l['useMemo'](
              function () {
                return { siderCollapsed: U };
              },
              [U],
            );
          return l['createElement'](W.Provider, { value: re }, ne());
        });
      H.displayName = 'Sider';
      var U = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        q = (function (e) {
          Object(c['a'])(n, e);
          var t = Object(o['a'])(n);
          function n() {
            var e;
            return (
              Object(r['a'])(this, n),
              (e = t.apply(this, arguments)),
              (e.renderItem = function (t) {
                var n,
                  r,
                  a = t.siderCollapsed,
                  c = e.context,
                  o = c.prefixCls,
                  u = c.firstLevel,
                  p = c.inlineCollapsed,
                  d = c.direction,
                  m = c.disableMenuItemTitleTooltip,
                  b = e.props,
                  O = b.className,
                  y = b.children,
                  x = e.props,
                  C = x.title,
                  E = x.icon,
                  N = x.danger,
                  w = U(x, ['title', 'icon', 'danger']),
                  S = C;
                'undefined' === typeof C
                  ? (S = u ? y : '')
                  : !1 === C && (S = '');
                var M = { title: S };
                a || p || ((M.title = null), (M.visible = !1));
                var R = Object(h['a'])(y).length,
                  I = l['createElement'](
                    s['b'],
                    Object(i['a'])({}, w, {
                      className: f()(
                        ((n = {}),
                        Object(j['a'])(n, ''.concat(o, '-item-danger'), N),
                        Object(j['a'])(
                          n,
                          ''.concat(o, '-item-only-child'),
                          1 === (E ? R + 1 : R),
                        ),
                        n),
                        O,
                      ),
                      title: 'string' === typeof C ? C : void 0,
                    }),
                    Object(v['a'])(E, {
                      className: f()(
                        Object(v['b'])(E)
                          ? null === (r = E.props) || void 0 === r
                            ? void 0
                            : r.className
                          : '',
                        ''.concat(o, '-item-icon'),
                      ),
                    }),
                    e.renderItemChildren(p),
                  );
                return (
                  m ||
                    (I = l['createElement'](
                      g['a'],
                      Object(i['a'])({}, M, {
                        placement: 'rtl' === d ? 'left' : 'right',
                        overlayClassName: ''.concat(
                          o,
                          '-inline-collapsed-tooltip',
                        ),
                      }),
                      I,
                    )),
                  I
                );
              }),
              e
            );
          }
          return (
            Object(a['a'])(n, [
              {
                key: 'renderItemChildren',
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    r = t.firstLevel,
                    a = this.props,
                    c = a.icon,
                    o = a.children,
                    i = l['createElement'](
                      'span',
                      { className: ''.concat(n, '-title-content') },
                      o,
                    );
                  return (!c || (Object(v['b'])(o) && 'span' === o.type)) &&
                    o &&
                    e &&
                    r &&
                    'string' === typeof o
                    ? l['createElement'](
                        'div',
                        { className: ''.concat(n, '-inline-collapsed-noicon') },
                        o.charAt(0),
                      )
                    : i;
                },
              },
              {
                key: 'render',
                value: function () {
                  return l['createElement'](W.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(l['Component']);
      q.contextType = b;
      var J = n('M9Ln'),
        V = n('knPO'),
        Q = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        G = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.dashed,
            a = Q(e, ['prefixCls', 'className', 'dashed']),
            c = l['useContext'](k['b']),
            o = c.getPrefixCls,
            u = o('menu', t),
            p = f()(
              Object(j['a'])({}, ''.concat(u, '-item-divider-dashed'), !!r),
              n,
            );
          return l['createElement'](
            s['a'],
            Object(i['a'])({ className: p }, a),
          );
        },
        X = G,
        Y = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function $(e) {
        var t = l['useContext'](k['b']),
          n = t.getPrefixCls,
          r = t.getPopupContainer,
          a = t.direction,
          c = n(),
          o = e.prefixCls,
          u = e.className,
          m = e.theme,
          O = void 0 === m ? 'light' : m,
          y = e.expandIcon,
          j = e._internalDisableMenuItemTitleTooltip,
          h = e.inlineCollapsed,
          g = e.siderCollapsed,
          x = Y(e, [
            'prefixCls',
            'className',
            'theme',
            'expandIcon',
            '_internalDisableMenuItemTitleTooltip',
            'inlineCollapsed',
            'siderCollapsed',
          ]),
          C = Object(p['a'])(x, ['collapsedWidth']);
        Object(J['a'])(
          !('inlineCollapsed' in e && 'inline' !== e.mode),
          'Menu',
          '`inlineCollapsed` should only be used when `mode` is inline.',
        ),
          Object(J['a'])(
            !(void 0 !== e.siderCollapsed && 'inlineCollapsed' in e),
            'Menu',
            '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
          );
        var E = l['useMemo'](
            function () {
              return void 0 !== g ? g : h;
            },
            [h, g],
          ),
          N = {
            horizontal: { motionName: ''.concat(c, '-slide-up') },
            inline: V['a'],
            other: { motionName: ''.concat(c, '-zoom-big') },
          },
          w = n('menu', o),
          S = f()(''.concat(w, '-').concat(O), u),
          M = l['useMemo'](
            function () {
              return {
                prefixCls: w,
                inlineCollapsed: E || !1,
                antdMenuTheme: O,
                direction: a,
                firstLevel: !0,
                disableMenuItemTitleTooltip: j,
              };
            },
            [w, E, O, a, j],
          );
        return l['createElement'](
          b.Provider,
          { value: M },
          l['createElement'](
            s['f'],
            Object(i['a'])(
              {
                getPopupContainer: r,
                overflowedIndicator: l['createElement'](d['a'], null),
                overflowedIndicatorPopupClassName: ''.concat(w, '-').concat(O),
              },
              C,
              {
                inlineCollapsed: E,
                className: S,
                prefixCls: w,
                direction: a,
                defaultMotions: N,
                expandIcon: Object(v['a'])(y, {
                  className: ''.concat(w, '-submenu-expand-icon'),
                }),
              },
            ),
          ),
        );
      }
      var ee = (function (e) {
        Object(c['a'])(n, e);
        var t = Object(o['a'])(n);
        function n() {
          return Object(r['a'])(this, n), t.apply(this, arguments);
        }
        return (
          Object(a['a'])(n, [
            {
              key: 'render',
              value: function () {
                var e = this;
                return l['createElement'](W.Consumer, null, function (t) {
                  return l['createElement']($, Object(i['a'])({}, e.props, t));
                });
              },
            },
          ]),
          n
        );
      })(l['Component']);
      (ee.Divider = X),
        (ee.Item = q),
        (ee.SubMenu = y),
        (ee.ItemGroup = s['c']);
      t['a'] = ee;
    },
    M48Z: function (e, t, n) {
      'use strict';
      var r = n('T9Mk'),
        a = n('RCXU'),
        c = Object(a['a'])() ? r['useLayoutEffect'] : r['useEffect'];
      t['a'] = c;
    },
    Q03V: function (e, t, n) {
      'use strict';
      var r = n('8CZ5'),
        a = n('T9Mk'),
        c = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
                },
              },
            ],
          },
          name: 'left',
          theme: 'outlined',
        },
        o = c,
        i = n('ING4'),
        l = function (e, t) {
          return a['createElement'](
            i['a'],
            Object(r['a'])(Object(r['a'])({}, e), {}, { ref: t, icon: o }),
          );
        };
      l.displayName = 'LeftOutlined';
      t['a'] = a['forwardRef'](l);
    },
    Qevy: function (e, t, n) {
      'use strict';
      var r = n('7eJq'),
        a = n('8CZ5'),
        c = n('DZ87'),
        o = n('bvuw'),
        i = n('T9Mk'),
        l = n('jK+o'),
        s = n.n(l),
        u = n('UZpV'),
        f = n('M48Z'),
        p = [
          'prefixCls',
          'invalidate',
          'item',
          'renderItem',
          'responsive',
          'registerSize',
          'itemKey',
          'className',
          'style',
          'children',
          'display',
          'order',
          'component',
        ],
        d = void 0;
      function m(e, t) {
        var n = e.prefixCls,
          c = e.invalidate,
          l = e.item,
          f = e.renderItem,
          m = e.responsive,
          b = e.registerSize,
          v = e.itemKey,
          O = e.className,
          y = e.style,
          j = e.children,
          h = e.display,
          g = e.order,
          x = e.component,
          C = void 0 === x ? 'div' : x,
          E = Object(o['a'])(e, p),
          N = m && !h;
        function w(e) {
          b(v, e);
        }
        i['useEffect'](function () {
          return function () {
            w(null);
          };
        }, []);
        var S,
          M = f && l !== d ? f(l) : j;
        c ||
          (S = {
            opacity: N ? 0 : 1,
            height: N ? 0 : d,
            overflowY: N ? 'hidden' : d,
            order: m ? g : d,
            pointerEvents: N ? 'none' : d,
            position: N ? 'absolute' : d,
          });
        var R = {};
        N && (R['aria-hidden'] = !0);
        var I = i['createElement'](
          C,
          Object(r['a'])(
            {
              className: s()(!c && n, O),
              style: Object(a['a'])(Object(a['a'])({}, S), y),
            },
            R,
            E,
            { ref: t },
          ),
          M,
        );
        return (
          m &&
            (I = i['createElement'](
              u['a'],
              {
                onResize: function (e) {
                  var t = e.offsetWidth;
                  w(t);
                },
              },
              I,
            )),
          I
        );
      }
      var b = i['forwardRef'](m);
      b.displayName = 'Item';
      var v = b,
        O = n('tH+5'),
        y = n('JZEm');
      function j() {
        var e = Object(y['a'])({}),
          t = Object(c['a'])(e, 2),
          n = t[1],
          r = Object(i['useRef'])([]),
          a = 0,
          o = 0;
        function l(e) {
          var t = a;
          (a += 1), r.current.length < t + 1 && (r.current[t] = e);
          var c = r.current[t];
          function i(e) {
            (r.current[t] = 'function' === typeof e ? e(r.current[t]) : e),
              O['a'].cancel(o),
              (o = Object(O['a'])(function () {
                n({}, !0);
              }));
          }
          return [c, i];
        }
        return l;
      }
      var h = ['component'],
        g = ['className'],
        x = ['className'],
        C = function (e, t) {
          var n = i['useContext'](S);
          if (!n) {
            var a = e.component,
              c = void 0 === a ? 'div' : a,
              l = Object(o['a'])(e, h);
            return i['createElement'](c, Object(r['a'])({}, l, { ref: t }));
          }
          var u = n.className,
            f = Object(o['a'])(n, g),
            p = e.className,
            d = Object(o['a'])(e, x);
          return i['createElement'](
            S.Provider,
            { value: null },
            i['createElement'](
              v,
              Object(r['a'])({ ref: t, className: s()(u, p) }, f, d),
            ),
          );
        },
        E = i['forwardRef'](C);
      E.displayName = 'RawItem';
      var N = E,
        w = [
          'prefixCls',
          'data',
          'renderItem',
          'renderRawItem',
          'itemKey',
          'itemWidth',
          'ssr',
          'style',
          'className',
          'maxCount',
          'renderRest',
          'renderRawRest',
          'suffix',
          'component',
          'itemComponent',
          'onVisibleChange',
        ],
        S = i['createContext'](null),
        M = 'responsive',
        R = 'invalidate';
      function I(e) {
        return '+ '.concat(e.length, ' ...');
      }
      function P(e, t) {
        var n = e.prefixCls,
          l = void 0 === n ? 'rc-overflow' : n,
          p = e.data,
          d = void 0 === p ? [] : p,
          m = e.renderItem,
          b = e.renderRawItem,
          O = e.itemKey,
          y = e.itemWidth,
          h = void 0 === y ? 10 : y,
          g = e.ssr,
          x = e.style,
          C = e.className,
          E = e.maxCount,
          N = e.renderRest,
          P = e.renderRawRest,
          k = e.suffix,
          _ = e.component,
          A = void 0 === _ ? 'div' : _,
          T = e.itemComponent,
          K = e.onVisibleChange,
          z = Object(o['a'])(e, w),
          B = j(),
          L = 'full' === g,
          Z = B(null),
          D = Object(c['a'])(Z, 2),
          W = D[0],
          F = D[1],
          H = W || 0,
          U = B(new Map()),
          q = Object(c['a'])(U, 2),
          J = q[0],
          V = q[1],
          Q = B(0),
          G = Object(c['a'])(Q, 2),
          X = G[0],
          Y = G[1],
          $ = B(0),
          ee = Object(c['a'])($, 2),
          te = ee[0],
          ne = ee[1],
          re = B(0),
          ae = Object(c['a'])(re, 2),
          ce = ae[0],
          oe = ae[1],
          ie = Object(i['useState'])(null),
          le = Object(c['a'])(ie, 2),
          se = le[0],
          ue = le[1],
          fe = Object(i['useState'])(null),
          pe = Object(c['a'])(fe, 2),
          de = pe[0],
          me = pe[1],
          be = i['useMemo'](
            function () {
              return null === de && L ? Number.MAX_SAFE_INTEGER : de || 0;
            },
            [de, W],
          ),
          ve = Object(i['useState'])(!1),
          Oe = Object(c['a'])(ve, 2),
          ye = Oe[0],
          je = Oe[1],
          he = ''.concat(l, '-item'),
          ge = Math.max(X, te),
          xe = d.length && E === M,
          Ce = E === R,
          Ee = xe || ('number' === typeof E && d.length > E),
          Ne = Object(i['useMemo'])(
            function () {
              var e = d;
              return (
                xe
                  ? (e =
                      null === W && L
                        ? d
                        : d.slice(0, Math.min(d.length, H / h)))
                  : 'number' === typeof E && (e = d.slice(0, E)),
                e
              );
            },
            [d, h, W, E, xe],
          ),
          we = Object(i['useMemo'])(
            function () {
              return xe ? d.slice(be + 1) : d.slice(Ne.length);
            },
            [d, Ne, xe, be],
          ),
          Se = Object(i['useCallback'])(
            function (e, t) {
              var n;
              return 'function' === typeof O
                ? O(e)
                : null !==
                    (n = O && (null === e || void 0 === e ? void 0 : e[O])) &&
                  void 0 !== n
                ? n
                : t;
            },
            [O],
          ),
          Me = Object(i['useCallback'])(
            m ||
              function (e) {
                return e;
              },
            [m],
          );
        function Re(e, t) {
          me(e),
            t || (je(e < d.length - 1), null === K || void 0 === K || K(e));
        }
        function Ie(e, t) {
          F(t.clientWidth);
        }
        function Pe(e, t) {
          V(function (n) {
            var r = new Map(n);
            return null === t ? r.delete(e) : r.set(e, t), r;
          });
        }
        function ke(e, t) {
          ne(t), Y(te);
        }
        function _e(e, t) {
          oe(t);
        }
        function Ae(e) {
          return J.get(Se(Ne[e], e));
        }
        Object(f['a'])(
          function () {
            if (H && ge && Ne) {
              var e = ce,
                t = Ne.length,
                n = t - 1;
              if (!t) return Re(0), void ue(null);
              for (var r = 0; r < t; r += 1) {
                var a = Ae(r);
                if (void 0 === a) {
                  Re(r - 1, !0);
                  break;
                }
                if (
                  ((e += a),
                  (0 === n && e <= H) || (r === n - 1 && e + Ae(n) <= H))
                ) {
                  Re(n), ue(null);
                  break;
                }
                if (e + ge > H) {
                  Re(r - 1), ue(e - a - ce + te);
                  break;
                }
              }
              k && Ae(0) + ce > H && ue(null);
            }
          },
          [H, J, te, ce, Se, Ne],
        );
        var Te = ye && !!we.length,
          Ke = {};
        null !== se && xe && (Ke = { position: 'absolute', left: se, top: 0 });
        var ze,
          Be = { prefixCls: he, responsive: xe, component: T, invalidate: Ce },
          Le = b
            ? function (e, t) {
                var n = Se(e, t);
                return i['createElement'](
                  S.Provider,
                  {
                    key: n,
                    value: Object(a['a'])(
                      Object(a['a'])({}, Be),
                      {},
                      {
                        order: t,
                        item: e,
                        itemKey: n,
                        registerSize: Pe,
                        display: t <= be,
                      },
                    ),
                  },
                  b(e, t),
                );
              }
            : function (e, t) {
                var n = Se(e, t);
                return i['createElement'](
                  v,
                  Object(r['a'])({}, Be, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: Me,
                    itemKey: n,
                    registerSize: Pe,
                    display: t <= be,
                  }),
                );
              },
          Ze = {
            order: Te ? be : Number.MAX_SAFE_INTEGER,
            className: ''.concat(he, '-rest'),
            registerSize: ke,
            display: Te,
          };
        if (P)
          P &&
            (ze = i['createElement'](
              S.Provider,
              { value: Object(a['a'])(Object(a['a'])({}, Be), Ze) },
              P(we),
            ));
        else {
          var De = N || I;
          ze = i['createElement'](
            v,
            Object(r['a'])({}, Be, Ze),
            'function' === typeof De ? De(we) : De,
          );
        }
        var We = i['createElement'](
          A,
          Object(r['a'])({ className: s()(!Ce && l, C), style: x, ref: t }, z),
          Ne.map(Le),
          Ee ? ze : null,
          k &&
            i['createElement'](
              v,
              Object(r['a'])({}, Be, {
                order: be,
                className: ''.concat(he, '-suffix'),
                registerSize: _e,
                display: !0,
                style: Ke,
              }),
              k,
            ),
        );
        return (
          xe && (We = i['createElement'](u['a'], { onResize: Ie }, We)), We
        );
      }
      var k = i['forwardRef'](P);
      (k.displayName = 'Overflow'),
        (k.Item = N),
        (k.RESPONSIVE = M),
        (k.INVALIDATE = R);
      var _ = k;
      t['a'] = _;
    },
    ZSNe: function (e, t) {
      function n() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports['default'] = e.exports);
    },
    cZWE: function (e, t, n) {
      var r = n('qRIK');
      function a(e) {
        if (Array.isArray(e)) return r(e);
      }
      (e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports['default'] = e.exports);
    },
    ek0e: function (e, t, n) {
      'use strict';
      n('/YAq'), n('m468'), n('I1fa'), n('YGE+'), n('78L2');
    },
    esFK: function (e, t, n) {
      'use strict';
      var r = n('8CZ5'),
        a = n('T9Mk'),
        c = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
                },
              },
            ],
          },
          name: 'down',
          theme: 'outlined',
        },
        o = c,
        i = n('ING4'),
        l = function (e, t) {
          return a['createElement'](
            i['a'],
            Object(r['a'])(Object(r['a'])({}, e), {}, { ref: t, icon: o }),
          );
        };
      l.displayName = 'DownOutlined';
      t['a'] = a['forwardRef'](l);
    },
    kQr0: function (e, t, n) {
      var r = n('qRIK');
      function a(e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }
      (e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports['default'] = e.exports);
    },
    m468: function (e, t, n) {},
    ntcw: function (e, t, n) {
      'use strict';
      var r = n('7eJq'),
        a = n('3UCj'),
        c = n('mKQt'),
        o = n('T9Mk'),
        i = n('jK+o'),
        l = n.n(i),
        s = n('WFyy'),
        u = n('esFK'),
        f = n('2oJ7'),
        p = n('f9wj'),
        d = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        m = function (e) {
          var t,
            n = e.prefixCls,
            a = e.separator,
            c = void 0 === a ? '/' : a,
            i = e.children,
            l = e.overlay,
            s = e.dropdownProps,
            m = d(e, [
              'prefixCls',
              'separator',
              'children',
              'overlay',
              'dropdownProps',
            ]),
            b = o['useContext'](p['b']),
            v = b.getPrefixCls,
            O = v('breadcrumb', n),
            y = function (e) {
              return l
                ? o['createElement'](
                    f['a'],
                    Object(r['a'])({ overlay: l, placement: 'bottom' }, s),
                    o['createElement'](
                      'span',
                      { className: ''.concat(O, '-overlay-link') },
                      e,
                      o['createElement'](u['a'], null),
                    ),
                  )
                : e;
            };
          return (
            (t =
              'href' in m
                ? o['createElement'](
                    'a',
                    Object(r['a'])({ className: ''.concat(O, '-link') }, m),
                    i,
                  )
                : o['createElement'](
                    'span',
                    Object(r['a'])({ className: ''.concat(O, '-link') }, m),
                    i,
                  )),
            (t = y(t)),
            i
              ? o['createElement'](
                  'span',
                  null,
                  t,
                  c &&
                    o['createElement'](
                      'span',
                      { className: ''.concat(O, '-separator') },
                      c,
                    ),
                )
              : null
          );
        };
      m.__ANT_BREADCRUMB_ITEM = !0;
      var b = m,
        v = function (e) {
          var t = e.children,
            n = o['useContext'](p['b']),
            r = n.getPrefixCls,
            a = r('breadcrumb');
          return o['createElement'](
            'span',
            { className: ''.concat(a, '-separator') },
            t || '/',
          );
        };
      v.__ANT_BREADCRUMB_SEPARATOR = !0;
      var O = v,
        y = n('Kbj6'),
        j = n('M9Ln'),
        h = n('8tHZ'),
        g = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function x(e, t) {
        if (!e.breadcrumbName) return null;
        var n = Object.keys(t).join('|'),
          r = e.breadcrumbName.replace(
            new RegExp(':('.concat(n, ')'), 'g'),
            function (e, n) {
              return t[n] || e;
            },
          );
        return r;
      }
      function C(e, t, n, r) {
        var a = n.indexOf(e) === n.length - 1,
          c = x(e, t);
        return a
          ? o['createElement']('span', null, c)
          : o['createElement']('a', { href: '#/'.concat(r.join('/')) }, c);
      }
      var E = function (e, t) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(t).forEach(function (n) {
              e = e.replace(':'.concat(n), t[n]);
            }),
            e
          );
        },
        N = function (e, t, n) {
          var r = Object(c['a'])(e),
            a = E(t || '', n);
          return a && r.push(a), r;
        },
        w = function (e) {
          var t,
            n = e.prefixCls,
            c = e.separator,
            i = void 0 === c ? '/' : c,
            u = e.style,
            f = e.className,
            d = e.routes,
            m = e.children,
            v = e.itemRender,
            O = void 0 === v ? C : v,
            x = e.params,
            w = void 0 === x ? {} : x,
            S = g(e, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'routes',
              'children',
              'itemRender',
              'params',
            ]),
            M = o['useContext'](p['b']),
            R = M.getPrefixCls,
            I = M.direction,
            P = R('breadcrumb', n);
          if (d && d.length > 0) {
            var k = [];
            t = d.map(function (e) {
              var t,
                n = E(e.path, w);
              return (
                n && k.push(n),
                e.children &&
                  e.children.length &&
                  (t = o['createElement'](
                    y['a'],
                    null,
                    e.children.map(function (e) {
                      return o['createElement'](
                        y['a'].Item,
                        { key: e.path || e.breadcrumbName },
                        O(e, w, d, N(k, e.path, w)),
                      );
                    }),
                  )),
                o['createElement'](
                  b,
                  { overlay: t, separator: i, key: n || e.breadcrumbName },
                  O(e, w, d, k),
                )
              );
            });
          } else
            m &&
              (t = Object(s['a'])(m).map(function (e, t) {
                return e
                  ? (Object(j['a'])(
                      e.type &&
                        (!0 === e.type.__ANT_BREADCRUMB_ITEM ||
                          !0 === e.type.__ANT_BREADCRUMB_SEPARATOR),
                      'Breadcrumb',
                      "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
                    ),
                    Object(h['a'])(e, { separator: i, key: t }))
                  : e;
              }));
          var _ = l()(
            P,
            Object(a['a'])({}, ''.concat(P, '-rtl'), 'rtl' === I),
            f,
          );
          return o['createElement'](
            'div',
            Object(r['a'])({ className: _, style: u }, S),
            t,
          );
        };
      (w.Item = b), (w.Separator = O);
      var S = w;
      t['a'] = S;
    },
    qRIK: function (e, t) {
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports['default'] = e.exports);
    },
    vNQV: function (e, t) {
      function n(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports['default'] = e.exports);
    },
  },
]);
