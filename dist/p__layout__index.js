(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [32],
  {
    FPyV: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAPxQTFRFAAAAAEC/QEC/IEC/LE7TKkrKMVLOMFDHM1DMMk7GLk/MM0/MM1PMMFLLMFLPNFLLNFLPMlHNMlTNMFPMM1PMMlPLMlPNNFPLMlPMM1PMM1PMMVLMM1LMMlLMM1LMM1PMMlLLMlTNNFLLNFTNM1LMM1PMM1PLM1PMM1LMMlLMMlPMM1PLM1LLM1PMNFTMNVTMOlnNOlnOPFvOPlzOPlzPQF7PR2TRSGTRSWbRS2jSTWnST2vTYHnXaH/ZaIDZcIbbcojcc4ncdIncdYvddovdd43dgpbghZjglKXklqblnKvmna3nnq3nn67nobDoo7LopbPpqbbqq7jqrbrrAMaogwAAAC10Uk5TAAQECBcYHyAjJDc3Nzs7OztbW19fe3t7i4uXm5uvr6+3t7e319fn5+vv7/f7c9vaAQAAAXpJREFUGBmNwQtD0lAYBuB3HlAyKzWcbEB4mZMDvF5Is5LSMq1ENPv+/39J2MVzNgY9DywLK24r6JA6aG2+WUCRF15IQ+gtYppyo8eMrl9CTlVzivYabKrBAr6CQe2y0I5CSu1yhh2FhM+ZGoitc44qJsptzqFLGPNpOv5+J8PrI1oaeLLUpeF0KGPDU5p6FQAeTT8lckOLBzj7NPQl9rdPU+hglaZzSZzT8hIuTWeS+EDLBlo0Hd5J5P6AlnfYo2UgkQFtATRtXx9F5PELMzSY9X5wMThiDvif0OGz44tfD38iD78vT2jQ2GPq00hMo898FqDFxMlIbPd9pppwmfghWd+Y2sAKE7eSNWTqFZyQMcljInQAjzHJY6IGoNJjRPIY6y7iSZ2RW8kaMeZjrKw5cXZ1bbv6yEi7hIkq51hDrM6ZfCTUNmfYUkipbRbaUjAonwXqCrb1NqfQb5FT9rvM6NVLmGaptk9DWKugiPPabQaa7ARNd9mB6R+LTwB4AML7bwAAAABJRU5ErkJggg==';
    },
    SQnf: function (e, t, M) {
      e.exports = {
        sider: 'sider___sCX29',
        logo: 'logo___tKDvc',
        title: 'title___tjTIw',
        menuWrap: 'menuWrap___1jtvq',
        menu: 'menu___Iu75I',
        menuItem: 'menuItem___2oOOx',
        activeMenu: 'activeMenu___26D9P',
      };
    },
    bybr: function (e, t, M) {
      'use strict';
      M.r(t);
      M('bGXh');
      var a = M('n2bq'),
        c = M('4+7e'),
        r = M('T9Mk'),
        n = M.n(r),
        l = M('q5+0'),
        s = M('9kvl'),
        i = M('SQnf'),
        d = M.n(i),
        o = M('ikfJ'),
        u = () => {
          var e = Object(l['g'])(),
            t = e.location,
            a = Object(s['c'])('@@initialState'),
            i = a.initialState,
            u =
              (a.loading,
              a.error,
              a.refresh,
              a.setInitialState,
              Object(r['useState'])([
                {
                  name: '\u5339\u914d\u7ba1\u7406',
                  children: [],
                  path: '/match',
                  auth: i['/match'],
                },
                {
                  path: '/man',
                  name: '\u4f01\u4e1a\u7ba1\u7406',
                  auth: {
                    read: i['/service']['read'] || i['/customer']['read'],
                  },
                  children: [
                    {
                      path: '/service',
                      name: '\u670d\u52a1\u4f01\u4e1a\u7ba1\u7406',
                      children: [],
                      auth: i['/service'],
                    },
                    {
                      path: '/customer',
                      name: '\u5ba2\u6237\u4f01\u4e1a\u7ba1\u7406',
                      children: [],
                      auth: i['/customer'],
                    },
                  ],
                },
                {
                  path: '/product',
                  name: '\u4ea7\u54c1\u7ef4\u5ea6\u7ba1\u7406',
                  enName: 'product',
                  children: [],
                  auth: i['/product'],
                },
                {
                  name: '\u5e73\u53f0\u7ba1\u7406',
                  path: '/platform',
                  auth: { read: i['/account']['read'] || i['/role']['read'] },
                  children: [
                    {
                      name: '\u7ba1\u7406\u5458',
                      path: '/account',
                      children: [],
                      auth: i['/account'],
                    },
                    {
                      name: '\u89d2\u8272\u7ba1\u7406',
                      path: '/role',
                      children: [],
                      auth: i['/role'],
                    },
                  ],
                },
                {
                  path: '/system',
                  name: '\u7cfb\u7edf\u65e5\u5fd7',
                  enName: 'system',
                  children: [],
                  auth: i['/system'],
                },
              ])),
            A = Object(c['a'])(u, 2),
            h = A[0],
            j =
              (A[1],
              (M, a) =>
                M.map((M) =>
                  Object(o['jsxs'])(
                    n.a.Fragment,
                    {
                      children: [
                        M.auth.read &&
                          Object(o['jsx'])(
                            'div',
                            {
                              className: ''
                                .concat(a ? d.a.menu : d.a.menuItem, ' ')
                                .concat(
                                  t.pathname === M.path && d.a.activeMenu,
                                ),
                              onClick: () => {
                                !M.children.length && e.push(M.path);
                              },
                              children: M.name,
                            },
                            M.path,
                          ),
                        !!M.children.length && j(M.children, !1),
                      ],
                    },
                    M.path,
                  ),
                ));
          return Object(o['jsxs'])('div', {
            className: d.a.sider,
            children: [
              Object(o['jsxs'])('div', {
                className: d.a.logo,
                children: [
                  Object(o['jsx'])('img', { src: M('zNBG'), height: '42' }),
                  Object(o['jsxs'])('div', {
                    className: d.a.title,
                    children: [
                      Object(o['jsx'])('h5', {
                        children: '\u6b22\u8fce\u4f7f\u7528',
                      }),
                      Object(o['jsx'])('p', { children: 'xxx\u7cfb\u7edf' }),
                    ],
                  }),
                ],
              }),
              Object(o['jsx'])('div', {
                className: d.a.menuWrap,
                children: j(h, !0),
              }),
            ],
          });
        },
        A = M('pjrA'),
        h = M.n(A),
        j = (M('kj6K'), M('4/Yc')),
        P = M('DndG'),
        m = M('/6Z1'),
        L = {
          '/match': '\u5339\u914d\u7ba1\u7406',
          '/match/detail': '\u5339\u914d\u8be6\u60c5',
          '/match/edit': '\u5339\u914d\u7f16\u8f91',
          '/product': '\u4ea7\u54c1\u7ef4\u5ea6\u7ba1\u7406',
          '/product/fields': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/product/prehandle': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/product/white': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/product/abstract': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/product/strategy': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/product/whiteDetail': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/product/rules': '\u4ea7\u54c1\u7ef4\u5ea6',
          '/role': '\u89d2\u8272\u7ba1\u7406',
          '/role/edit': '\u7f16\u8f91\u89d2\u8272',
          '/role/add': '\u65b0\u589e\u89d2\u8272',
          '/account': '\u7528\u6237\u7ba1\u7406',
          '/account/add': '\u65b0\u589e\u7528\u6237',
          '/account/edit': '\u7f16\u8f91\u7528\u6237',
          '/customer': '\u5ba2\u6237\u4f01\u4e1a',
          '/customer/add': '\u4f01\u4e1a\u65b0\u589e',
          '/customer/edit': '\u4f01\u4e1a\u7f16\u8f91',
          '/service': '\u670d\u52a1\u4f01\u4e1a',
          '/service/add': '\u670d\u52a1\u4f01\u4e1a\u65b0\u589e',
          '/service/edit': '\u670d\u52a1\u4f01\u4e1a\u7f16\u8f91',
        },
        b = /(\d+)$/g,
        p = /(\d+)\//g,
        O = (e) => {
          var t = e.breadcrumbs;
          return Object(o['jsx'])(j['a'], {
            children: t.map(
              (e, t) =>
                t > 0 &&
                !b.test(e.key) &&
                Object(o['jsx'])(
                  j['a'].Item,
                  {
                    children: Object(o['jsx'])(P['a'], {
                      to: {
                        pathname: e.match.url,
                        state: e.location.state,
                        query: e.location.query,
                      },
                      children: L[e.key.replace(p, '')],
                    }),
                  },
                  e.key,
                ),
            ),
          });
        },
        N = Object(m['a'])()(O),
        v = M('zCsd'),
        F = M('h6bE'),
        T = M.n(F),
        x = (e) => {
          var t = Object(l['g'])();
          return Object(o['jsxs'])('div', {
            className: T.a.menu,
            children: [
              Object(o['jsx'])('div', {
                onClick: () => {
                  t.push('/user/forget');
                },
                children: '\u5bc6\u7801\u8bbe\u7f6e',
              }),
              Object(o['jsx'])('div', {
                onClick: () => {
                  window.localStorage.removeItem('token'),
                    window.location.reload();
                },
                children: '\u9000\u51fa',
              }),
            ],
          });
        };
      t['default'] = (e) => {
        var t = Object(r['useState'])({}),
          n = Object(c['a'])(t, 2),
          l = n[0],
          s = n[1],
          i = () => {
            Object(v['e'])().then((e) => {
              var t = e.data;
              s(t.user);
            });
          };
        return (
          Object(r['useEffect'])(() => {
            i();
          }, []),
          Object(o['jsxs'])('div', {
            className: h.a.layout,
            children: [
              Object(o['jsx'])(u, { props: e }),
              Object(o['jsxs'])('div', {
                className: h.a.content,
                children: [
                  Object(o['jsxs'])('div', {
                    className: h.a.bar,
                    children: [
                      Object(o['jsx'])('span', {
                        className: h.a.routerName,
                        children: Object(o['jsx'])(N, {}),
                      }),
                      Object(o['jsx'])(a['a'], {
                        overlay: Object(o['jsx'])(x, {}),
                        children: Object(o['jsxs'])('div', {
                          className: h.a.user,
                          children: [
                            Object(o['jsx'])('img', {
                              src: M('FPyV'),
                              alt: '',
                            }),
                            Object(o['jsx'])('span', { children: l.userName }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(o['jsx'])('div', {
                    className: h.a.mainContent,
                    children: e.children,
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    h6bE: function (e, t, M) {
      e.exports = { menu: 'menu___6E07k' };
    },
    pjrA: function (e, t, M) {
      e.exports = {
        layout: 'layout___1Y4Kj',
        content: 'content___eHOWI',
        bar: 'bar___OXmOI',
        routerName: 'routerName___34_f5',
        user: 'user___3sdC9',
        mainContent: 'mainContent___1hK9s',
      };
    },
    zNBG: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IArs4c6QAAASNQTFRFAAAAAEC/QEC/MzOZIEC/HFXGOVXGKlXVMVLOMFDHM1DMMk7GM1PMMVHOMlDNMlXNMU7JMVPOLk/MM1PMMVHOMVXOMFLPL1XMM1XQMVHOMVXONVHOMVTOL1TMMlPNMFLMM1LMMFHLMFTPNFHLNFTPMVPLM1LMMVPMM1PMMlLLMlTLMlPMM1PMMVLMM1TMM1LMM1TMMlLNMlPNM1PMMlLLMlPLMVLMM1LMMlLMMlPMM1LMM1PMM1LMM1PMM1HLM1PLM1PMMlLLMlPLMlPNMlPMM1PMM1PMMlLLM1PMMlPMMlPMM1LMM1PMMlPMMlLMM1LMMlLMMlPMM1PMM1PMM1LMM1TMMlPMM1LMM1LLM1PLMlLMMlPMM1PLMlLMMlPNM1LLM1PM6lwF5wAAAGB0Uk5TAAQEBQgJCQwfICMkKC8zMzQ0Nzc5OTs8PD8/P0NGR0tLT09PT1mDh4eJiYuLjIySkpOTl5mZm5ufn5+fpaWmprCxsrKzs7W3v9XX19fb5eXm5ubn6Ojp6+zs7/P3+Pj7fecPIgAAAjNJREFUOMuNlWtX2kAQhicIRCl0tGipFCitBfEuRYv06iVcUm6ClNYosP//VzTJbrKzhvQ4X5K885zJzM6cWQDFIoVyuztGHPeNSi4K4ZauW8y2CeK987S+pELAjQ7jZiKa4vVqGRz9tBBudo3Y8t5ZLZDGi57vZEeI+/Krt6aSby3pYyXEEvm0thXykbgGaNuQCI+EXaMx2YmDnlPFSvgV9ag+yztodka1nldbjarsG7rWUMQqJ1OKON3iaIZmyxbrLnqloO9Bi+l6XIOiIneCQQ9ksRXFkbaVr1QwNIlqBvXU7fLpQRlKF6OUtTTIkc9dETP5UsQ9IM4CyWjwTkRL3j28Fq8fpr67DN5PZhcZn2TMZ7d+eL1oQ59HPMsiaj7psxHE/OnARbowujdbeyX31OOS9Ni46ygdX5uTW0BpujO3d15uD05tOnE/RZMSTT9FxxPz5ognEAtNYL9l/r0FPoDDk3xYWdlzPjh9aIv/zb9vLjusN42510koy/HbCbagKEexAgXSu0PR2IRobIQOVw40Oi5NdVyadFxsV52OWpMMYYSS7MJZVMoEVyR6qDjcjdRRpCKsxHU9tgIfFfmSr7UF1YYZ3pvNaTAoQFURGxz9qYi1pStjnnXI/Jxqv/yTSSiL6MxBT5VFtCqL3X72erPZZy9NgFWS7x7iMckzEVjwcsm1EG/8ZVVdds+kLoPXRmcj5I5JNdyU/yD+dpP8/Oo/N1c0t2v0R4ijbrtc0FTfP5WVaCePbQUaAAAAAElFTkSuQmCC';
    },
  },
]);
