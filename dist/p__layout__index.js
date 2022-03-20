(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    FPyV: function (M, e) {
      M.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAPxQTFRFAAAAAEC/QEC/IEC/LE7TKkrKMVLOMFDHM1DMMk7GLk/MM0/MM1PMMFLLMFLPNFLLNFLPMlHNMlTNMFPMM1PMMlPLMlPNNFPLMlPMM1PMM1PMMVLMM1LMMlLMM1LMM1PMMlLLMlTNNFLLNFTNM1LMM1PMM1PLM1PMM1LMMlLMMlPMM1PLM1LLM1PMNFTMNVTMOlnNOlnOPFvOPlzOPlzPQF7PR2TRSGTRSWbRS2jSTWnST2vTYHnXaH/ZaIDZcIbbcojcc4ncdIncdYvddovdd43dgpbghZjglKXklqblnKvmna3nnq3nn67nobDoo7LopbPpqbbqq7jqrbrrAMaogwAAAC10Uk5TAAQECBcYHyAjJDc3Nzs7OztbW19fe3t7i4uXm5uvr6+3t7e319fn5+vv7/f7c9vaAQAAAXpJREFUGBmNwQtD0lAYBuB3HlAyKzWcbEB4mZMDvF5Is5LSMq1ENPv+/39J2MVzNgY9DywLK24r6JA6aG2+WUCRF15IQ+gtYppyo8eMrl9CTlVzivYabKrBAr6CQe2y0I5CSu1yhh2FhM+ZGoitc44qJsptzqFLGPNpOv5+J8PrI1oaeLLUpeF0KGPDU5p6FQAeTT8lckOLBzj7NPQl9rdPU+hglaZzSZzT8hIuTWeS+EDLBlo0Hd5J5P6AlnfYo2UgkQFtATRtXx9F5PELMzSY9X5wMThiDvif0OGz44tfD38iD78vT2jQ2GPq00hMo898FqDFxMlIbPd9pppwmfghWd+Y2sAKE7eSNWTqFZyQMcljInQAjzHJY6IGoNJjRPIY6y7iSZ2RW8kaMeZjrKw5cXZ1bbv6yEi7hIkq51hDrM6ZfCTUNmfYUkipbRbaUjAonwXqCrb1NqfQb5FT9rvM6NVLmGaptk9DWKugiPPabQaa7ARNd9mB6R+LTwB4AML7bwAAAABJRU5ErkJggg==';
    },
    SQnf: function (M, e, a) {
      M.exports = {
        sider: 'sider___sCX29',
        logo: 'logo___tKDvc',
        title: 'title___tjTIw',
        menuWrap: 'menuWrap___1jtvq',
        menu: 'menu___Iu75I',
        menuItem: 'menuItem___2oOOx',
        activeMenu: 'activeMenu___26D9P',
      };
    },
    bybr: function (M, e, a) {
      'use strict';
      a.r(e);
      var l = a('4+7e'),
        t = a('T9Mk'),
        n = a.n(t),
        c = a('SQnf'),
        i = a.n(c),
        r = a('ikfJ'),
        A = () => {
          var M = Object(t['useState'])([
              { name: '\u5339\u914d\u7ba1\u7406', children: [], id: '1' },
              {
                id: '2',
                name: '\u4f01\u4e1a\u7ba1\u7406',
                children: [
                  {
                    id: '2-1',
                    name: '\u670d\u52a1\u4f01\u4e1a\u7ba1\u7406',
                    children: [],
                  },
                  {
                    id: '2-2',
                    name: '\u5ba2\u6237\u4f01\u4e1a\u7ba1\u7406',
                    children: [],
                  },
                ],
              },
              {
                id: '3',
                name: '\u4ea7\u54c1\u7ef4\u5ea6\u7ba1\u7406',
                children: [],
              },
              {
                id: '4',
                name: '\u5e73\u53f0\u7ba1\u7406',
                children: [
                  { name: '\u7ba1\u7406\u5458', children: [], id: '4-1' },
                  { name: '\u89d2\u8272\u7ba1\u7406', children: [], id: '4-2' },
                ],
              },
              { id: '5', name: '\u7cfb\u7edf\u65e5\u5fd7', children: [] },
            ]),
            e = Object(l['a'])(M, 2),
            c = e[0],
            A = (e[1], Object(t['useState'])('1')),
            s = Object(l['a'])(A, 2),
            P = s[0],
            d = s[1],
            L = (M, e) =>
              M.map((M) =>
                Object(r['jsxs'])(
                  n.a.Fragment,
                  {
                    children: [
                      Object(r['jsx'])(
                        'div',
                        {
                          className: ''
                            .concat(e ? i.a.menu : i.a.menuItem, ' ')
                            .concat(P === M.id && i.a.activeMenu),
                          onClick: () => {
                            d(M.id);
                          },
                          children: M.name,
                        },
                        M.id,
                      ),
                      !!M.children.length && L(M.children, !1),
                    ],
                  },
                  M.id,
                ),
              );
          return Object(r['jsxs'])('div', {
            className: i.a.sider,
            children: [
              Object(r['jsxs'])('div', {
                className: i.a.logo,
                children: [
                  Object(r['jsx'])('img', { src: a('zNBG'), height: '42' }),
                  Object(r['jsxs'])('div', {
                    className: i.a.title,
                    children: [
                      Object(r['jsx'])('h5', {
                        children: '\u6b22\u8fce\u4f7f\u7528',
                      }),
                      Object(r['jsx'])('p', { children: 'xxx\u7cfb\u7edf' }),
                    ],
                  }),
                ],
              }),
              Object(r['jsx'])('div', {
                className: i.a.menuWrap,
                children: L(c, !0),
              }),
            ],
          });
        },
        s = a('pjrA'),
        P = a.n(s),
        d = (a('+raS'), a('QHu2')),
        L = a('DndG'),
        j = a('/6Z1'),
        o = {
          '/match': '\u5339\u914d\u7ba1\u7406',
          '/match/detail': '\u5339\u914d\u8be6\u60c5',
          '/match/edit': '\u5339\u914d\u7f16\u8f91',
          '/product': '\u4ea7\u54c1\u7ef4\u5ea6\u7ba1\u7406',
          '/product/:id': '\u4ea7\u54c1\u7ef4\u5ea6\u7ba1\u7406',
          '/product/:id/fields': '\u5b57\u6bb5\u7ba1\u7406',
        },
        b = (M) => {
          var e = M.breadcrumbs;
          return (
            console.log(e),
            Object(r['jsx'])(d['a'], {
              children: e.map(
                (M, e) =>
                  e > 0 &&
                  Object(r['jsx'])(
                    d['a'].Item,
                    {
                      children: Object(r['jsx'])(L['a'], {
                        to: {
                          pathname: M.match.url,
                          state: M.location.state,
                          query: M.location.query,
                        },
                        children: o[M.key],
                      }),
                    },
                    M.key,
                  ),
              ),
            })
          );
        },
        m = Object(j['a'])()(b);
      e['default'] = (M) =>
        Object(r['jsxs'])('div', {
          className: P.a.layout,
          children: [
            Object(r['jsx'])(A, {}),
            Object(r['jsxs'])('div', {
              className: P.a.content,
              children: [
                Object(r['jsxs'])('div', {
                  className: P.a.bar,
                  children: [
                    Object(r['jsx'])('span', {
                      className: P.a.routerName,
                      children: Object(r['jsx'])(m, {}),
                    }),
                    Object(r['jsxs'])('div', {
                      className: P.a.user,
                      children: [
                        Object(r['jsx'])('img', { src: a('FPyV'), alt: '' }),
                        Object(r['jsx'])('span', {
                          children: '\u7528\u6237\u540d',
                        }),
                      ],
                    }),
                  ],
                }),
                Object(r['jsx'])('div', {
                  className: P.a.mainContent,
                  children: M.children,
                }),
              ],
            }),
          ],
        });
    },
    pjrA: function (M, e, a) {
      M.exports = {
        layout: 'layout___1Y4Kj',
        content: 'content___eHOWI',
        bar: 'bar___OXmOI',
        routerName: 'routerName___34_f5',
        user: 'user___3sdC9',
        mainContent: 'mainContent___1hK9s',
      };
    },
    zNBG: function (M, e) {
      M.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IArs4c6QAAASNQTFRFAAAAAEC/QEC/MzOZIEC/HFXGOVXGKlXVMVLOMFDHM1DMMk7GM1PMMVHOMlDNMlXNMU7JMVPOLk/MM1PMMVHOMVXOMFLPL1XMM1XQMVHOMVXONVHOMVTOL1TMMlPNMFLMM1LMMFHLMFTPNFHLNFTPMVPLM1LMMVPMM1PMMlLLMlTLMlPMM1PMMVLMM1TMM1LMM1TMMlLNMlPNM1PMMlLLMlPLMVLMM1LMMlLMMlPMM1LMM1PMM1LMM1PMM1HLM1PLM1PMMlLLMlPLMlPNMlPMM1PMM1PMMlLLM1PMMlPMMlPMM1LMM1PMMlPMMlLMM1LMMlLMMlPMM1PMM1PMM1LMM1TMMlPMM1LMM1LLM1PLMlLMMlPMM1PLMlLMMlPNM1LLM1PM6lwF5wAAAGB0Uk5TAAQEBQgJCQwfICMkKC8zMzQ0Nzc5OTs8PD8/P0NGR0tLT09PT1mDh4eJiYuLjIySkpOTl5mZm5ufn5+fpaWmprCxsrKzs7W3v9XX19fb5eXm5ubn6Ojp6+zs7/P3+Pj7fecPIgAAAjNJREFUOMuNlWtX2kAQhicIRCl0tGipFCitBfEuRYv06iVcUm6ClNYosP//VzTJbrKzhvQ4X5K885zJzM6cWQDFIoVyuztGHPeNSi4K4ZauW8y2CeK987S+pELAjQ7jZiKa4vVqGRz9tBBudo3Y8t5ZLZDGi57vZEeI+/Krt6aSby3pYyXEEvm0thXykbgGaNuQCI+EXaMx2YmDnlPFSvgV9ag+yztodka1nldbjarsG7rWUMQqJ1OKON3iaIZmyxbrLnqloO9Bi+l6XIOiIneCQQ9ksRXFkbaVr1QwNIlqBvXU7fLpQRlKF6OUtTTIkc9dETP5UsQ9IM4CyWjwTkRL3j28Fq8fpr67DN5PZhcZn2TMZ7d+eL1oQ59HPMsiaj7psxHE/OnARbowujdbeyX31OOS9Ni46ygdX5uTW0BpujO3d15uD05tOnE/RZMSTT9FxxPz5ognEAtNYL9l/r0FPoDDk3xYWdlzPjh9aIv/zb9vLjusN42510koy/HbCbagKEexAgXSu0PR2IRobIQOVw40Oi5NdVyadFxsV52OWpMMYYSS7MJZVMoEVyR6qDjcjdRRpCKsxHU9tgIfFfmSr7UF1YYZ3pvNaTAoQFURGxz9qYi1pStjnnXI/Jxqv/yTSSiL6MxBT5VFtCqL3X72erPZZy9NgFWS7x7iMckzEVjwcsm1EG/8ZVVdds+kLoPXRmcj5I5JNdyU/yD+dpP8/Oo/N1c0t2v0R4ijbrtc0FTfP5WVaCePbQUaAAAAAElFTkSuQmCC';
    },
  },
]);
