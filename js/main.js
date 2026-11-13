/* =====================================================================
   Endlesshine Co., Limited — Global Corporate Site
   Single source of truth for all behaviour. [Reuse-B]
   Native JavaScript, no frameworks, no third-party libraries.
   ===================================================================== */
(function () {
  'use strict';

  /* Mark the document as script-enabled before anything renders: the CSS uses
     `html.js` to gate the hidden start state of the reveal animations, so a
     script failure can never leave the page blank. */
  document.documentElement.classList.add('js');

  /* ---------------------------------------------------------------
     0. SITE CONSTANTS (single place to edit company facts)
     --------------------------------------------------------------- */
  var SITE = {
    companyName: 'Endlesshine Co., Limited',
    address: 'ROOM 1602, 16/F, WING ON CENTRE, 111 CONNAUGHT ROAD CENTRAL, HONG KONG',
    website: 'yonghengzx.com',
    url: 'https://yonghengzx.com',
    emailSupport: 'support@yonghengzx.com',
    emailAccount: 'jiangyangsen@yonghengzx.com',
    phone: '+852 3980 8866',
    businessScope:
      'Import, export, wholesale and retail of cultural and creative gifts and daily necessities; ' +
      'brand promotion, business information consultation and event planning, ' +
      'excluding financial, securities and insurance business'
  };

  /* Internal links are document-relative on purpose. Root-absolute hrefs such
     as "/services.html" resolve against the *filesystem* root under file://
     (file:///services.html -> E:\services.html) and 404, while the same link
     works unchanged when the site is served from the domain root. */
  var NAV = [
    { label: 'Home', href: 'index.html', key: 'home' },
    { label: 'Services', href: 'services.html', key: 'services' },
    { label: 'Culture', href: 'culture.html', key: 'culture' },
    { label: 'News', href: 'news.html', key: 'news' },
    { label: 'Contact', href: 'contact.html', key: 'contact' }
  ];

  var SPRITE_URL = 'images/sprite.svg';

  /* ---------------------------------------------------------------
     1. SEO CONFIG  [Reuse-F] — keys are site-relative page filenames
     --------------------------------------------------------------- */
  var SEO = {
    'index.html': {
      title: 'Endlesshine Co., Limited — Global Trade & Mobile Management',
      description:
        'Endlesshine Co., Limited imports, exports, wholesales and retails cultural and creative gifts and daily necessities, ' +
        'with brand promotion, business information consultation and event planning — unified in one mobile management app.',
      canonical: 'https://yonghengzx.com/',
      og: {
        'og:type': 'website',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Endlesshine Co., Limited — Global Trade & Mobile Management',
        'og:description':
          'Import, export, wholesale and retail of cultural and creative gifts and daily necessities — with a unified mobile management app.',
        'og:url': 'https://yonghengzx.com/',
        'og:image': 'https://yonghengzx.com/images/hero.png',
        'og:locale': 'en_HK'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Endlesshine Co., Limited — Global Trade & Mobile Management',
        'twitter:description':
          'Global trade and retail for cultural and creative gifts and daily necessities, powered by our mobile management app.',
        'twitter:image': 'https://yonghengzx.com/images/hero.png'
      }
    },
    'services.html': {
      title: 'Services — Endlesshine Co., Limited',
      description:
        'Eight integrated business lines — import, export, wholesale and retail of cultural and creative gifts and daily necessities, ' +
        'brand promotion, business information consultation and event planning — plus the Endlesshine mobile management app.',
      canonical: 'https://yonghengzx.com/services.html',
      og: {
        'og:type': 'website',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Services — Endlesshine Co., Limited',
        'og:description':
          'Eight integrated business lines and one mobile management app covering orders, inventory, supply chain and consulting.',
        'og:url': 'https://yonghengzx.com/services.html',
        'og:image': 'https://yonghengzx.com/images/app-phone.png'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Services — Endlesshine Co., Limited',
        'twitter:description': 'Integrated trade, retail, promotion and consulting services.',
        'twitter:image': 'https://yonghengzx.com/images/app-phone.png'
      }
    },
    'culture.html': {
      title: 'Our Culture — Endlesshine Co., Limited',
      description:
        'Mission, vision and values behind Endlesshine Co., Limited, our milestones from 2011 to today, team spirit and global compliance commitments.',
      canonical: 'https://yonghengzx.com/culture.html',
      og: {
        'og:type': 'website',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Our Culture — Endlesshine Co., Limited',
        'og:description': 'Mission, vision, values and the story of Endlesshine since 2011.',
        'og:url': 'https://yonghengzx.com/culture.html',
        'og:image': 'https://yonghengzx.com/images/hero.png'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Our Culture — Endlesshine Co., Limited',
        'twitter:description': 'Mission, vision, values and milestones.',
        'twitter:image': 'https://yonghengzx.com/images/hero.png'
      }
    },
    'news.html': {
      title: 'Newsroom — Endlesshine Co., Limited',
      description:
        'Company announcements, product launches, exhibition highlights and partnership updates from Endlesshine Co., Limited.',
      canonical: 'https://yonghengzx.com/news.html',
      og: {
        'og:type': 'website',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Newsroom — Endlesshine Co., Limited',
        'og:description': 'Announcements, launches and exhibition highlights.',
        'og:url': 'https://yonghengzx.com/news.html',
        'og:image': 'https://yonghengzx.com/images/news-1.png'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Newsroom — Endlesshine Co., Limited',
        'twitter:description': 'Announcements, launches and exhibition highlights.',
        'twitter:image': 'https://yonghengzx.com/images/news-1.png'
      }
    },
    'contact.html': {
      title: 'Contact — Endlesshine Co., Limited',
      description:
        'Reach Endlesshine Co., Limited at ROOM 1602, 16/F, WING ON CENTRE, 111 CONNAUGHT ROAD CENTRAL, HONG KONG, ' +
        'or write to support@yonghengzx.com.',
      canonical: 'https://yonghengzx.com/contact.html',
      og: {
        'og:type': 'website',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Contact — Endlesshine Co., Limited',
        'og:description': 'Hong Kong office address, business support and key account contacts.',
        'og:url': 'https://yonghengzx.com/contact.html',
        'og:image': 'https://yonghengzx.com/images/map.png'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Contact — Endlesshine Co., Limited',
        'twitter:description': 'Hong Kong office address, business support and key account contacts.',
        'twitter:image': 'https://yonghengzx.com/images/map.png'
      }
    },
    'privacy.html': {
      title: 'Privacy Policy — Endlesshine Co., Limited',
      description:
        'How Endlesshine Co., Limited collects, uses, shares and protects personal data across our website and mobile app, ' +
        'including advertising partners, cookies and regional privacy rights.',
      canonical: 'https://yonghengzx.com/privacy.html',
      og: {
        'og:type': 'article',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Privacy Policy — Endlesshine Co., Limited',
        'og:description': 'Data collection, advertising partners, cookies and regional privacy rights.',
        'og:url': 'https://yonghengzx.com/privacy.html',
        'og:image': 'https://yonghengzx.com/images/hero.png'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Privacy Policy — Endlesshine Co., Limited',
        'twitter:description': 'Data collection, advertising partners, cookies and regional privacy rights.',
        'twitter:image': 'https://yonghengzx.com/images/hero.png'
      }
    },
    'terms.html': {
      title: 'Terms of Service — Endlesshine Co., Limited',
      description:
        'The terms governing use of the Endlesshine Co., Limited website and mobile application, including accounts, ' +
        'purchases, intellectual property, third-party services and dispute resolution in Hong Kong.',
      canonical: 'https://yonghengzx.com/terms.html',
      og: {
        'og:type': 'article',
        'og:site_name': 'Endlesshine Co., Limited',
        'og:title': 'Terms of Service — Endlesshine Co., Limited',
        'og:description': 'Website and mobile app terms, accounts, fees, IP and dispute resolution.',
        'og:url': 'https://yonghengzx.com/terms.html',
        'og:image': 'https://yonghengzx.com/images/hero.png'
      },
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Terms of Service — Endlesshine Co., Limited',
        'twitter:description': 'Website and mobile app terms, accounts, fees, IP and dispute resolution.',
        'twitter:image': 'https://yonghengzx.com/images/hero.png'
      }
    }
  };

  /* ---------------------------------------------------------------
     2. SMALL HELPERS
     --------------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    if (html != null) node.innerHTML = html;
    return node;
  }

  function useIcon(id, cls) {
    return '<svg class="' + (cls || 'icon') + '" aria-hidden="true" focusable="false"><use href="#' + id + '"></use></svg>';
  }

  /* Site-relative key of the current document ("index.html", "services.html").
     Only the last path segment is used, so the key is identical under http://
     ("/services.html") and under file:// ("/E:/.../47/services.html"). */
  function currentPath() {
    var p = window.location.pathname || '/';
    var file = p.substring(p.lastIndexOf('/') + 1);
    if (!file || file === 'index.htm') return 'index.html';
    return file;
  }

  /* ---------------------------------------------------------------
     3. SHARED HEADER  [Reuse-C]
     --------------------------------------------------------------- */
  function buildHeader() {
    var host = $('#site-header');
    if (!host) return;

    var path = currentPath();
    var links = NAV.map(function (item) {
      var active = path === item.href;
      return '<a class="nav__link' + (active ? ' is-active' : '') + '" href="' + item.href + '"' +
        (active ? ' aria-current="page"' : '') + '>' + item.label + '</a>';
    }).join('');

    host.className = 'site-header';
    host.innerHTML =
      '<div class="container site-header__inner">' +
        '<a class="brand" href="index.html" aria-label="' + SITE.companyName + ' home">' +
          '<span class="brand__mark">' + useIcon('logo') + '</span>' +
          '<span class="brand__text">' +
            '<span class="brand__name">Endlesshine</span>' +
            '<span class="brand__tag">Co., Limited</span>' +
          '</span>' +
        '</a>' +
        '<nav class="nav" id="primary-nav" aria-label="Primary">' + links + '</nav>' +
        '<div class="header__cta">' +
          '<a class="btn btn--sm" href="contact.html">Contact' + useIcon('arrow-right', 'btn__icon') + '</a>' +
          '<button class="burger" id="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">' +
            useIcon('menu', 'icon-menu') + useIcon('close', 'icon-close') +
          '</button>' +
        '</div>' +
        '<span class="scroll-progress" id="scroll-progress" aria-hidden="true"></span>' +
      '</div>';

    /* mobile nav toggle */
    var burger = $('#nav-toggle');
    var nav = $('#primary-nav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        burger.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          nav.classList.remove('is-open');
          burger.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* header dark mode while the dark hero is on screen */
    var hero = $('.hero');
    if (hero && 'IntersectionObserver' in window) {
      var heroObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          host.classList.toggle('site-header--dark', entry.isIntersecting);
        });
      }, { threshold: 0, rootMargin: '-' + (76) + 'px 0px 0px 0px' });
      heroObserver.observe(hero);
    }
  }

  /* ---------------------------------------------------------------
     4. SHARED FOOTER  [Reuse-D]
     --------------------------------------------------------------- */
  function buildFooter() {
    var host = $('#site-footer');
    if (!host) return;

    host.className = 'site-footer';
    host.innerHTML =
      '<div class="container">' +
        '<div class="footer__top">' +
          '<div class="footer__col footer__brand">' +
            '<a class="brand" href="index.html">' +
              '<span class="brand__mark">' + useIcon('logo') + '</span>' +
              '<span class="brand__text">' +
                '<span class="brand__name">Endlesshine</span>' +
                '<span class="brand__tag">Co., Limited</span>' +
              '</span>' +
            '</a>' +
            '<p class="footer__about">' + SITE.businessScope + '.</p>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Explore</h4>' +
            '<ul>' + NAV.map(function (i) { return '<li><a href="' + i.href + '">' + i.label + '</a></li>'; }).join('') + '</ul>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Legal</h4>' +
            '<ul>' +
              '<li><a href="privacy.html">Privacy Policy</a></li>' +
              '<li><a href="terms.html">Terms of Service</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
              '<li><a href="news.html">Newsroom</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Company</h4>' +
            '<ul class="footer__contact">' +
              '<li>' + useIcon('briefcase') + '<span>' + SITE.companyName + '</span></li>' +
              '<li>' + useIcon('map-pin') + '<span>' + SITE.address + '</span></li>' +
              '<li>' + useIcon('globe') + '<span>' + SITE.website + '</span></li>' +
              '<li>' + useIcon('mail') + '<span><a href="mailto:' + SITE.emailSupport + '">' + SITE.emailSupport + '</a></span></li>' +
              '<li>' + useIcon('users') + '<span><a href="mailto:' + SITE.emailAccount + '">' + SITE.emailAccount + '</a></span></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom">' +
          '<span class="footer__copyright">&copy; <span id="footer-year">' + new Date().getFullYear() + '</span> ' + SITE.companyName + '. All rights reserved.</span>' +
          '<span class="footer__legal">' +
            '<a href="privacy.html">Privacy Policy</a>' +
            '<a href="terms.html">Terms of Service</a>' +
            '<a href="mailto:' + SITE.emailSupport + '">' + SITE.emailSupport + '</a>' +
          '</span>' +
        '</div>' +
      '</div>';
  }

  /* ---------------------------------------------------------------
     5. SEO APPLICATION + JSON-LD  [Reuse-F]
     --------------------------------------------------------------- */
  function upsertMeta(attr, key, content) {
    if (!content) return;
    var node = document.head.querySelector('meta[' + attr + '="' + key + '"]');
    if (!node) {
      node = document.createElement('meta');
      node.setAttribute(attr, key);
      document.head.appendChild(node);
    }
    node.setAttribute('content', content);
  }

  function applySeo() {
    var path = currentPath();
    var cfg = SEO[path] || SEO['index.html'];

    document.title = cfg.title;

    upsertMeta('name', 'description', cfg.description);

    var canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', cfg.canonical);

    Object.keys(cfg.og || {}).forEach(function (k) {
      upsertMeta('property', k, cfg.og[k]);
    });
    Object.keys(cfg.twitter || {}).forEach(function (k) {
      upsertMeta('name', k, cfg.twitter[k]);
    });

    if (!$('#jsonld-organization')) {
      var ld = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE.companyName,
        legalName: SITE.companyName,
        url: SITE.url,
        logo: SITE.url + '/images/sprite.svg',
        email: SITE.emailSupport,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ROOM 1602, 16/F, WING ON CENTRE, 111 CONNAUGHT ROAD CENTRAL',
          addressLocality: 'Hong Kong',
          addressRegion: 'Hong Kong',
          addressCountry: 'HK'
        },
        contactPoint: [{
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SITE.emailSupport,
          availableLanguage: ['English', 'Chinese']
        }],
        sameAs: [
          'https://' + SITE.website,
          'https://' + SITE.website + '/news.html',
          'https://' + SITE.website + '/contact.html'
        ]
      };
      var script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'jsonld-organization';
      script.textContent = JSON.stringify(ld, null, 2);
      document.head.appendChild(script);
    }
  }

  /* ---------------------------------------------------------------
     6. SPRITE LOADER + MASCOT RESOLUTION  [Reuse-E]
     --------------------------------------------------------------- */
  /* MIRROR of images/sprite.svg - keep byte-identical with that file.
     file:// previews block fetch() of local files, so this inlined copy is
     used as the fallback; production still loads the real sprite file. */
  var SPRITE_MIRROR = `<svg><use href="#icon-id"></use></svg>
     ===================================================================== -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none" aria-hidden="true" focusable="false">
  <defs>
    <style>
      .i { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
      .i-fill { fill: currentColor; stroke: none; }
      .i-accent { fill: none; stroke: #e01b2e; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
    </style>
  </defs>

  <!-- ============ ICONS ============ -->
  <symbol id="logo" viewBox="0 0 24 24">
    <circle class="i" cx="12" cy="12" r="9.2" />
    <path class="i" d="M8 8.2h8M8 12h5.6M8 15.8h8" />
    <circle class="i-accent" cx="16.4" cy="12" r="1.5" />
  </symbol>

  <symbol id="menu" viewBox="0 0 24 24">
    <path class="i" d="M4 7h16M4 12h16M4 17h16" />
  </symbol>

  <symbol id="close" viewBox="0 0 24 24">
    <path class="i" d="M6 6l12 12M18 6L6 18" />
  </symbol>

  <symbol id="arrow-right" viewBox="0 0 24 24">
    <path class="i" d="M4 12h15" />
    <path class="i" d="M13 6l6 6-6 6" />
  </symbol>

  <symbol id="arrow-up" viewBox="0 0 24 24">
    <path class="i" d="M12 19V5" />
    <path class="i" d="M6 11l6-6 6 6" />
  </symbol>

  <symbol id="mail" viewBox="0 0 24 24">
    <rect class="i" x="3" y="5.5" width="18" height="13" rx="2" />
    <path class="i" d="M3.6 7l8.4 6 8.4-6" />
  </symbol>

  <symbol id="phone" viewBox="0 0 24 24">
    <path class="i" d="M7.2 3.5h2.6l1.6 4-2 1.4a11.4 11.4 0 0 0 5.2 5.2l1.4-2 4 1.6v2.6a2 2 0 0 1-2.2 2A16.2 16.2 0 0 1 5.2 5.7a2 2 0 0 1 2-2.2z" />
  </symbol>

  <symbol id="map-pin" viewBox="0 0 24 24">
    <path class="i" d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
    <circle class="i" cx="12" cy="10" r="2.6" />
  </symbol>

  <symbol id="globe" viewBox="0 0 24 24">
    <circle class="i" cx="12" cy="12" r="9" />
    <path class="i" d="M3 12h18" />
    <path class="i" d="M12 3c2.6 2.6 2.6 15 0 18M12 3c-2.6 2.6-2.6 15 0 18" />
  </symbol>

  <symbol id="chart" viewBox="0 0 24 24">
    <path class="i" d="M4 20h16" />
    <path class="i" d="M7 20v-6M12 20V6M17 20v-9" />
  </symbol>

  <symbol id="cart" viewBox="0 0 24 24">
    <path class="i" d="M3 4h2.4l2.2 11h9.8l2-7.5H6.2" />
    <circle class="i" cx="9.4" cy="19" r="1.6" />
    <circle class="i" cx="16.6" cy="19" r="1.6" />
  </symbol>

  <symbol id="truck" viewBox="0 0 24 24">
    <path class="i" d="M2.8 6.5h10.4v9H2.8z" />
    <path class="i" d="M13.2 9.8h3.9l3.1 3v2.7h-7z" />
    <circle class="i" cx="7" cy="18" r="1.7" />
    <circle class="i" cx="17" cy="18" r="1.7" />
  </symbol>

  <symbol id="shield" viewBox="0 0 24 24">
    <path class="i" d="M12 3l7 2.6v5.7c0 4.4-3 8.2-7 9.7-4-1.5-7-5.3-7-9.7V5.6z" />
    <path class="i" d="M9 12.2l2.1 2.1L15.3 10" />
  </symbol>

  <symbol id="star" viewBox="0 0 24 24">
    <path class="i" d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 17l-5.3 2.8 1.1-5.9L3.5 9.8l5.9-.8z" />
  </symbol>

  <symbol id="check" viewBox="0 0 24 24">
    <path class="i" d="M4.5 12.5l5 5 10-11" />
  </symbol>

  <symbol id="play" viewBox="0 0 24 24">
    <path class="i-fill" d="M7 4.8l12 7.2-12 7.2z" />
  </symbol>

  <symbol id="download" viewBox="0 0 24 24">
    <path class="i" d="M12 3.6v11.2" />
    <path class="i" d="M7.4 10.4L12 15l4.6-4.6" />
    <path class="i" d="M4.4 18.6h15.2" />
  </symbol>

  <symbol id="apple" viewBox="0 0 24 24">
    <path class="i-fill" d="M16.4 12.6c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.5 2 1-.1 1.4-.6 2.6-.6s1.5.6 2.6.6 1.7-1 2.4-1.9c.8-1.1 1.1-2.1 1.1-2.2-.1 0-2.1-.8-2.1-3.2zM14.3 6.6c.6-.7 1-1.6.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.8 2.5 1 .1 2-.5 2.4-1.2z" />
  </symbol>

  <symbol id="google-play" viewBox="0 0 24 24">
    <path class="i-fill" d="M3.4 2.6c-.3.3-.4.8-.4 1.4v16c0 .6.1 1.1.4 1.4l8.9-9.4z" />
    <path class="i-fill" d="M16.1 8.6l-3.4-3.4-8.9 8.9 8.9 8.9 3.4-3.4c.9-.6.9-1.6 0-2.2z" opacity=".72" />
    <path class="i-fill" d="M16.1 8.6l3.5-2c1.1-.6 2.1-.4 2.5.5.4.9 0 1.8-1 2.4l-3.6 2.1z" opacity=".9" />
    <path class="i-fill" d="M16.1 18.9l-3.5-2.1-8.9 8.9 8.9 8.9 3.5-2c1.1-.6 1.1-1.6 0-2.2z" opacity=".55" />
  </symbol>

  <symbol id="mobile-app" viewBox="0 0 24 24">
    <rect class="i" x="6.5" y="2.4" width="11" height="19.2" rx="2.6" />
    <path class="i" d="M10.6 4.8h2.8" />
    <circle class="i" cx="12" cy="18.4" r="1.1" />
  </symbol>

  <symbol id="settings" viewBox="0 0 24 24">
    <circle class="i" cx="12" cy="12" r="3.1" />
    <path class="i" d="M12 2.8l1.4 2.4 2.7-.5.5 2.7 2.4 1.4-1.3 2.4 1.3 2.4-2.4 1.4-.5 2.7-2.7-.5L12 21.2l-1.4-2.4-2.7.5-.5-2.7-2.4-1.4L6.3 12 5 9.6l2.4-1.4.5-2.7 2.7.5z" />
  </symbol>

  <symbol id="users" viewBox="0 0 24 24">
    <circle class="i" cx="9.2" cy="8.4" r="3.4" />
    <path class="i" d="M3.4 19.6c0-3.2 2.6-5.4 5.8-5.4s5.8 2.2 5.8 5.4" />
    <path class="i" d="M16.2 5.6a3.4 3.4 0 010 6.6M17.6 14.6c2 .7 3.4 2.4 3.4 5" />
  </symbol>

  <symbol id="briefcase" viewBox="0 0 24 24">
    <rect class="i" x="2.8" y="7" width="18.4" height="13" rx="2.2" />
    <path class="i" d="M8.6 7V5.4a2 2 0 012-2h2.8a2 2 0 012 2V7" />
    <path class="i" d="M2.8 12.6h18.4" />
  </symbol>

  <symbol id="layers" viewBox="0 0 24 24">
    <path class="i" d="M12 3.2L2.8 7.6 12 12l9.2-4.4z" />
    <path class="i" d="M2.8 12.4L12 16.8l9.2-4.4" />
    <path class="i" d="M2.8 16.8L12 21.2l9.2-4.4" />
  </symbol>

  <!-- ============ MASCOTS (viewBox 0 0 64 64) ============ -->
  <symbol id="cat" viewBox="0 0 64 64">
    <path fill="#e01b2e" d="M14 22L12 8l12 8z" />
    <path fill="#e01b2e" d="M50 22l2-14-12 8z" />
    <path fill="#ffd166" d="M16.6 21.4L15.4 12.6l7.4 5.2z" />
    <path fill="#ffd166" d="M47.4 21.4l1.2-8.8-7.4 5.2z" />
    <circle cx="32" cy="33" r="20" fill="#f6b93b" />
    <circle cx="25" cy="31" r="3.1" fill="#2b2118" />
    <circle cx="39" cy="31" r="3.1" fill="#2b2118" />
    <circle cx="26.1" cy="29.9" r="1.05" fill="#fff" />
    <circle cx="40.1" cy="29.9" r="1.05" fill="#fff" />
    <path fill="#c4802a" d="M32 37.5l3.1 2.6-3.1 2.6-3.1-2.6z" />
    <path fill="none" stroke="#2b2118" stroke-width="1.6" stroke-linecap="round" d="M32 42.7c-1.4 1.9-4.4 1.9-5.6 0M32 42.7c1.4 1.9 4.4 1.9 5.6 0" />
    <path fill="none" stroke="#c4802a" stroke-width="1.5" stroke-linecap="round" d="M22 38.5h-7M22 42h-7M42 38.5h7M42 42h7" />
  </symbol>

  <symbol id="dog" viewBox="0 0 64 64">
    <ellipse cx="13" cy="28" rx="7" ry="13" fill="#8d6e63" />
    <ellipse cx="51" cy="28" rx="7" ry="13" fill="#8d6e63" />
    <circle cx="32" cy="32" r="19" fill="#c49a6c" />
    <circle cx="25" cy="29" r="3.2" fill="#33261d" />
    <circle cx="39" cy="29" r="3.2" fill="#33261d" />
    <circle cx="26.2" cy="27.8" r="1.1" fill="#fff" />
    <circle cx="40.2" cy="27.8" r="1.1" fill="#fff" />
    <ellipse cx="32" cy="40" rx="5.4" ry="4.2" fill="#3c2b20" />
    <path fill="none" stroke="#3c2b20" stroke-width="1.7" stroke-linecap="round" d="M32 44.2v3.4M32 47.6c-1.8 2-4.8 1.6-5.8-.4M32 47.6c1.8 2 4.8 1.6 5.8-.4" />
    <ellipse cx="17" cy="37" rx="4" ry="2.6" fill="#e08a8a" opacity=".65" />
    <ellipse cx="47" cy="37" rx="4" ry="2.6" fill="#e08a8a" opacity=".65" />
  </symbol>

  <symbol id="fox" viewBox="0 0 64 64">
    <path fill="#e8662a" d="M12 24L10 6l16 9z" />
    <path fill="#e8662a" d="M52 24l2-18-16 9z" />
    <path fill="#4a2a18" d="M15 22.4L13.6 11l9.4 6.2z" />
    <path fill="#4a2a18" d="M49 22.4L50.4 11L41 17.2z" />
    <path fill="#e8662a" d="M32 8c12.6 0 21 9 21 21S44.6 52 32 52 11 41 11 29 19.4 8 32 8z" />
    <path fill="#fdf3e7" d="M32 30c8 0 13 5 13 12s-6 10-13 10-13-3-13-10 5-12 13-12z" />
    <ellipse cx="24" cy="26" rx="3" ry="3.4" fill="#2f1c10" />
    <ellipse cx="40" cy="26" rx="3" ry="3.4" fill="#2f1c10" />
    <circle cx="25.1" cy="24.9" r="1" fill="#fff" />
    <circle cx="41.1" cy="24.9" r="1" fill="#fff" />
    <path fill="#2f1c10" d="M32 33l3.2 2.8-3.2 2.6-3.2-2.6z" />
    <path fill="none" stroke="#2f1c10" stroke-width="1.6" stroke-linecap="round" d="M32 38.4c-1.3 1.8-4 1.8-5.1 0M32 38.4c1.3 1.8 4 1.8 5.1 0" />
  </symbol>

  <symbol id="panda" viewBox="0 0 64 64">
    <circle cx="15" cy="15" r="8" fill="#2b2b2b" />
    <circle cx="49" cy="15" r="8" fill="#2b2b2b" />
    <circle cx="32" cy="33" r="20" fill="#fdfdfd" />
    <ellipse cx="23.5" cy="31" rx="6" ry="7" fill="#2b2b2b" />
    <ellipse cx="40.5" cy="31" rx="6" ry="7" fill="#2b2b2b" />
    <circle cx="24.4" cy="30" r="2.4" fill="#fff" />
    <circle cx="41.4" cy="30" r="2.4" fill="#fff" />
    <circle cx="24.4" cy="30.6" r="1.3" fill="#2b2b2b" />
    <circle cx="41.4" cy="30.6" r="1.3" fill="#2b2b2b" />
    <ellipse cx="32" cy="40" rx="4.4" ry="3.4" fill="#2b2b2b" />
    <path fill="none" stroke="#2b2b2b" stroke-width="1.7" stroke-linecap="round" d="M32 43.4v3M32 46.4c-1.7 1.9-4.5 1.5-5.4-.3M32 46.4c1.7 1.9 4.5 1.5 5.4-.3" />
  </symbol>

  <symbol id="rabbit" viewBox="0 0 64 64">
    <ellipse cx="23" cy="17" rx="5.4" ry="13" fill="#fdfdfd" />
    <ellipse cx="41" cy="17" rx="5.4" ry="13" fill="#fdfdfd" />
    <ellipse cx="23" cy="18" rx="2.6" ry="8" fill="#ffc0cb" />
    <ellipse cx="41" cy="18" rx="2.6" ry="8" fill="#ffc0cb" />
    <circle cx="32" cy="38" r="18" fill="#fdfdfd" />
    <circle cx="25" cy="36" r="3" fill="#33252e" />
    <circle cx="39" cy="36" r="3" fill="#33252e" />
    <circle cx="26" cy="34.8" r="1.05" fill="#fff" />
    <circle cx="40" cy="34.8" r="1.05" fill="#fff" />
    <path fill="#ff9db1" d="M32 42l3 2.4-3 2.4-3-2.4z" />
    <path fill="none" stroke="#33252e" stroke-width="1.5" stroke-linecap="round" d="M32 46.8c-1.3 1.7-3.9 1.7-5 0M32 46.8c1.3 1.7 3.9 1.7 5 0" />
    <ellipse cx="19" cy="42" rx="3.6" ry="2.4" fill="#ffc0cb" opacity=".7" />
    <ellipse cx="45" cy="42" rx="3.6" ry="2.4" fill="#ffc0cb" opacity=".7" />
  </symbol>

  <symbol id="bear" viewBox="0 0 64 64">
    <circle cx="16" cy="18" r="8.4" fill="#8a5a3b" />
    <circle cx="48" cy="18" r="8.4" fill="#8a5a3b" />
    <circle cx="16" cy="18" r="4.6" fill="#d9a273" />
    <circle cx="48" cy="18" r="4.6" fill="#d9a273" />
    <circle cx="32" cy="34" r="19.5" fill="#a9714b" />
    <ellipse cx="32" cy="40" rx="9" ry="7.4" fill="#d9a273" />
    <circle cx="25" cy="31" r="3" fill="#2f1d12" />
    <circle cx="39" cy="31" r="3" fill="#2f1d12" />
    <circle cx="26.1" cy="29.9" r="1.05" fill="#fff" />
    <circle cx="40.1" cy="29.9" r="1.05" fill="#fff" />
    <ellipse cx="32" cy="38.4" rx="3.6" ry="2.6" fill="#2f1d12" />
    <path fill="none" stroke="#2f1d12" stroke-width="1.6" stroke-linecap="round" d="M32 41v3M32 44c-1.5 1.8-4.2 1.8-5.4 0M32 44c1.5 1.8 4.2 1.8 5.4 0" />
  </symbol>

  <symbol id="owl" viewBox="0 0 64 64">
    <path fill="#5b6fb5" d="M12 22L14 8l11 8z" />
    <path fill="#5b6fb5" d="M52 22l-2-14-11 8z" />
    <circle cx="32" cy="32" r="20" fill="#7b8fd0" />
    <circle cx="24" cy="29" r="8" fill="#fdfdfd" />
    <circle cx="40" cy="29" r="8" fill="#fdfdfd" />
    <circle cx="24" cy="29" r="3.6" fill="#22252f" />
    <circle cx="40" cy="29" r="3.6" fill="#22252f" />
    <circle cx="25.2" cy="27.8" r="1.2" fill="#fff" />
    <circle cx="41.2" cy="27.8" r="1.2" fill="#fff" />
    <path fill="#f0a92c" d="M32 34l4 5h-8z" />
    <path fill="none" stroke="#f0a92c" stroke-width="1.6" stroke-linecap="round" d="M22 44h20" />
    <path fill="#4a5aa0" d="M22 52c0-5 4.5-8 10-8s10 3 10 8z" />
  </symbol>

  <symbol id="penguin" viewBox="0 0 64 64">
    <ellipse cx="32" cy="34" rx="19" ry="23" fill="#2f3a4a" />
    <ellipse cx="32" cy="38" rx="13" ry="16" fill="#fdfdfd" />
    <circle cx="25.5" cy="28" r="3.4" fill="#fff" />
    <circle cx="38.5" cy="28" r="3.4" fill="#fff" />
    <circle cx="25.9" cy="28.4" r="1.9" fill="#1b2230" />
    <circle cx="38.9" cy="28.4" r="1.9" fill="#1b2230" />
    <path fill="#f0a92c" d="M32 33l6 4-6 3.4-6-3.4z" />
    <ellipse cx="32" cy="54" rx="7" ry="4" fill="#f0a92c" />
    <path fill="#e01b2e" d="M24 16c4-5 12-5 16 0 2 2.6.6 5-2 3.6-3.6-2-8.4-2-12 0-2.6 1.4-4-1-2-3.6z" />
  </symbol>

  <symbol id="smile" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="21" fill="#ffd166" />
    <circle cx="24.5" cy="27" r="2.6" fill="#4a3410" />
    <circle cx="39.5" cy="27" r="2.6" fill="#4a3410" />
    <path fill="none" stroke="#4a3410" stroke-width="2.6" stroke-linecap="round" d="M20 36c2.6 5 8 8 12 8s9.4-3 12-8" />
    <ellipse cx="16.5" cy="33" rx="3.4" ry="2.4" fill="#f4807f" opacity=".6" />
    <ellipse cx="47.5" cy="33" rx="3.4" ry="2.4" fill="#f4807f" opacity=".6" />
  </symbol>

  <symbol id="heart-eyes" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="21" fill="#ff8fb1" />
    <path fill="#e01b2e" d="M22 33c-4.4-5.6 3.6-11 6.6-5.4 3-5.6 11 0 6.6 5.4-1.9 2.4-4.8 5.4-6.6 7.2-1.8-1.8-4.7-4.8-6.6-7.2z" />
    <path fill="#e01b2e" d="M32 33c-4.4-5.6 3.6-11 6.6-5.4 3-5.6 11 0 6.6 5.4-1.9 2.4-4.8 5.4-6.6 7.2-1.8-1.8-4.7-4.8-6.6-7.2z" />
    <path fill="none" stroke="#a8314f" stroke-width="2.4" stroke-linecap="round" d="M21 44c3.4 4 7 6 11 6s7.6-2 11-6" />
  </symbol>

  <symbol id="wink" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="21" fill="#ffd166" />
    <circle cx="24" cy="27" r="3" fill="#4a3410" />
    <path fill="none" stroke="#4a3410" stroke-width="2.8" stroke-linecap="round" d="M36 26.5c2.6-2 5.8-2 8 0" />
    <path fill="none" stroke="#4a3410" stroke-width="2.6" stroke-linecap="round" d="M21 37c2.8 5.2 8 8 11.6 8S41.4 42.2 44 37" />
    <ellipse cx="16" cy="33" rx="3.4" ry="2.4" fill="#f4807f" opacity=".6" />
    <ellipse cx="48" cy="33" rx="3.4" ry="2.4" fill="#f4807f" opacity=".6" />
  </symbol>

  <symbol id="thumbs-up" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="21" fill="#8fd6b6" />
    <path fill="#2f7d5c" d="M22 30h5v16h-5z" />
    <path fill="#2f7d5c" d="M29 46V30l7-13c1.6-2.8 5.4-1.6 5.4 1.4L40 27h6.6c2.4 0 4.2 2.2 3.6 4.5l-3.6 13c-.4 1.4-1.6 2.4-3 2.4H29z" />
    <path fill="none" stroke="#1f5c44" stroke-width="1.6" stroke-linecap="round" d="M34 34h11M34 40h10" />
  </symbol>

  <symbol id="party" viewBox="0 0 64 64">
    <path fill="#e01b2e" d="M32 10l4.6 10.4L48 21l-8 8.6 1.8 11.6L32 36l-9.8 5.2L24 29.6 16 21l11.4-.6z" />
    <path fill="#f0a92c" d="M12 40l2.6 6 6 2.6-6 2.6L12 57l-2.6-5.8-6-2.6 6-2.6z" />
    <path fill="#2e8fd6" d="M50 38l2 4.6 4.6 2-4.6 2-2 4.6-2-4.6-4.6-2 4.6-2z" />
    <circle cx="14" cy="18" r="2.4" fill="#35c6a0" />
    <circle cx="52" cy="18" r="2.4" fill="#35c6a0" />
    <circle cx="30" cy="6" r="1.8" fill="#ffd166" />
  </symbol>

  <symbol id="rocket-cat" viewBox="0 0 64 64">
    <path fill="#f6b93b" d="M32 4c8 5 12 13 12 22v10H20V26C20 17 24 9 32 4z" />
    <path fill="#fff" d="M26 12c-2 4-3 8-3 13h18c0-5-1-9-3-13-3 2-9 2-12 0z" />
    <path fill="#e01b2e" d="M20 28l-6 8v8h6z" />
    <path fill="#e01b2e" d="M44 28l6 8v8h-6z" />
    <circle cx="32" cy="30" r="7" fill="#f6b93b" />
    <circle cx="29.4" cy="29.4" r="1.8" fill="#2b2118" />
    <circle cx="34.6" cy="29.4" r="1.8" fill="#2b2118" />
    <path fill="none" stroke="#2b2118" stroke-width="1.5" stroke-linecap="round" d="M29 34.6c1.6 1.6 4.4 1.6 6 0" />
    <path fill="#f0a92c" d="M26 40c1 6 3 10 6 12 3-2 5-6 6-12z" />
    <path fill="#e01b2e" d="M29 50c1 4 2 7 3 9 1-2 2-5 3-9z" />
  </symbol>
</svg>`;

  function resolveMascots() {
    $$('[data-mascot]').forEach(function (node) {
      var id = node.getAttribute('data-mascot');
      if (!id) return;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', (node.className || 'mascot') + ' mascot');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', '#' + id);
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + id);
      svg.appendChild(use);
      if (node.getAttribute('aria-label')) {
        svg.setAttribute('aria-label', node.getAttribute('aria-label'));
        svg.setAttribute('role', 'img');
      }
      node.parentNode.replaceChild(svg, node);
    });
  }

  /* file:// preview: the browser blocks fetch() of local files, so fall back
     to the inlined mirror of images/sprite.svg. Identical symbols, so the
     page looks the same as it will over http. */
  function injectSpriteMirror() {
    try {
      var host = el('div', { 'aria-hidden': 'true' });
      host.innerHTML = SPRITE_MIRROR;
      var svg = host.querySelector('svg');
      if (!svg) throw new Error('mirror has no svg root');
      svg.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
      document.body.insertBefore(svg, document.body.firstChild);
      resolveMascots();
    } catch (err) {
      applyMascotFallback();
    }
  }

  function loadSprite() {
    /* The sprite is optional chrome: it must never be able to break the page.
       On a file:// preview the fetch is blocked by the browser (no http/https
       scheme), which must degrade to the fallback - not to a blank page. */
    try {
      if (!window.fetch) { applyMascotFallback(); return; }
      fetch(SPRITE_URL, { cache: 'force-cache' })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(function (text) {
          var holder = el('div', { 'aria-hidden': 'true', style: 'position:absolute;width:0;height:0;overflow:hidden' });
          holder.innerHTML = text;
          var svg = holder.querySelector('svg');
          if (!svg) throw new Error('no svg root');
          svg.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
          document.body.insertBefore(svg, document.body.firstChild);
          resolveMascots();
        })
        .catch(function () {
          injectSpriteMirror();
        });
    } catch (err) {
      /* A synchronous throw here (unsupported URL scheme) would abort boot(). */
      applyMascotFallback();
    }
  }

  /* graceful degradation: swap mascot nodes for a friendly text mark */
  function applyMascotFallback() {
    $$('[data-mascot]').forEach(function (node) {
      if (!node.parentNode) return;
      var span = el('span', { class: (node.className || 'mascot') + ' mascot', 'aria-hidden': 'true' }, '★');
      span.style.color = '#e01b2e';
      span.style.textAlign = 'center';
      span.style.lineHeight = '1';
      node.parentNode.replaceChild(span, node);
    });
    /* The brand mark points at the sprite symbol; without the sprite the <use>
       resolves to nothing and the mark renders as an empty black square.
       Replace it with a typographic monogram so the header still reads. */
    $$('.brand__mark').forEach(function (mark) {
      mark.textContent = 'ES';
      mark.style.fontWeight = '700';
      mark.style.fontSize = '15px';
      mark.style.letterSpacing = '.04em';
      mark.style.lineHeight = '1';
    });
  }

  /* ---------------------------------------------------------------
     7. REVEAL ANIMATIONS  [Reuse-G]
     --------------------------------------------------------------- */
  function initReveal() {
    var targets = $$('.reveal, .fade-up, .fade-in, .slide-left, .slide-right, .zoom-in, .stagger');
    if (!targets.length) return;

    var observer = null;
    var pending = targets.length;
    var ioFired = false;

    function forceVisible(el) {
      if (!el) return;
      var cs = getComputedStyle(el);
      var cur = parseFloat(cs.opacity);
      if (cur >= 0.99 && (!cs.transform || cs.transform === 'none')) return;
      /* Kill the transition first: an inline opacity change would otherwise be
         animated by the very transition we are trying to finish. */
      el.style.transition = 'none';
      el.style.opacity = '1';
      el.style.transform = 'none';
    }

    function reveal(el) {
      if (!el || el.classList.contains('in')) return;
      el.classList.add('in');
      if (observer) observer.unobserve(el);
      pending--;

      /* Watchdog: the entrance fade is driven by the browser's animation clock.
         If that clock is suspended (background tab, throttled renderer, headless
         capture) the element would stay half-transparent forever. After 1.5s the
         final state is forced, so content is never stuck invisible. */
      setTimeout(function () {
        forceVisible(el);
        if (el.classList.contains('stagger')) {
          Array.prototype.forEach.call(el.children, forceVisible);
        }
      }, 1500);
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach(reveal);
      return;
    }

    observer = new IntersectionObserver(function (entries) {
      ioFired = true;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach(function (t) { observer.observe(t); });

    /* Failsafe sweep. The observer alone is not enough: engines have been seen
       to defer its first callback indefinitely, and a scroll-reveal site that
       renders blank is far worse than one without the entrance animation. */
    function sweep() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach(function (t) {
        if (t.classList.contains('in')) return;
        var r = t.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) { reveal(t); return; }
        /* Already scrolled past (instant jump, anchor link, restored scroll
           position): the element was in view on the way, so it must be shown.
           Without this a single scrollTo() leaves everything in between
           permanently invisible. */
        if (r.bottom <= 0) reveal(t);
      });
    }

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);
    window.addEventListener('load', sweep);

    /* Frame-driven sweep for the first few seconds. This is what guarantees the
       above-the-fold content is painted on the very first frames, without
       waiting for the observer to deliver. */
    var frames = 0;
    function rafSweep() {
      sweep();
      if (pending > 0 && frames < 240) {
        frames++;
        if (window.requestAnimationFrame) window.requestAnimationFrame(rafSweep);
      }
    }
    if (window.requestAnimationFrame) window.requestAnimationFrame(rafSweep);

    sweep();
    setTimeout(sweep, 300);
    setTimeout(sweep, 1200);
    setTimeout(sweep, 3000);

    /* Absolute last resort: if the observer never delivered at all, stop hiding
       content altogether. When the observer is healthy this never fires, so the
       scroll-reveal effect is preserved. */
    setTimeout(function () {
      if (!ioFired) targets.forEach(reveal);
    }, 5000);
  }

  /* ---------------------------------------------------------------
     8. NAV, SCROLL, BACK TO TOP
     --------------------------------------------------------------- */
  function initScrollBehaviours() {
    var header = $('#site-header');
    var progress = $('#scroll-progress');

    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      if (header) header.classList.toggle('is-scrolled', y > 12);
      if (progress) {
        var docH = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
      }
      var top = $('#backtop');
      if (top) top.classList.toggle('is-visible', y > 420);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* smooth anchor scroll with header offset */
    document.addEventListener('click', function (e) {
      var anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      var id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerH = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 24;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });

    /* back to top */
    var btn = el('button', { class: 'backtop', type: 'button', 'aria-label': 'Back to top' }, useIcon('arrow-up'));
    btn.id = 'backtop';
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(btn);
  }

  /* ---------------------------------------------------------------
     9. NEWS FILTER + PAGINATION
     --------------------------------------------------------------- */
  function initNewsFilter() {
    var buttons = $$('[data-filter]');
    var cards = $$('.news-card');
    if (!buttons.length || !cards.length) return;

    var PAGE_SIZE = 4;
    var pagination = $('.pagination');
    var activeFilter = 'all';
    var currentPage = 1;

    function matches(card) {
      if (activeFilter === 'all') return true;
      var cat = (card.getAttribute('data-category') || '').toLowerCase();
      return cat === activeFilter;
    }

    function render() {
      var visible = cards.filter(matches);
      var pages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
      if (currentPage > pages) currentPage = pages;

      cards.forEach(function (card) {
        var index = visible.indexOf(card);
        var inRange = matches(card) && index >= (currentPage - 1) * PAGE_SIZE && index < currentPage * PAGE_SIZE;
        card.classList.toggle('is-hidden', !inRange);
      });

      if (pagination) {
        $$('.pagination__btn', pagination).forEach(function (b) {
          var p = parseInt(b.getAttribute('data-page'), 10);
          b.classList.toggle('is-active', p === currentPage);
        });
        var prev = $('.pagination__btn--prev', pagination);
        var next = $('.pagination__btn--next', pagination);
        if (prev) prev.disabled = currentPage === 1;
        if (next) next.disabled = currentPage === pages;
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        activeFilter = (btn.getAttribute('data-filter') || 'all').toLowerCase();
        currentPage = 1;
        render();
      });
    });

    if (pagination) {
      $$('.pagination__btn', pagination).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var p = parseInt(btn.getAttribute('data-page'), 10);
          if (!p) return;
          currentPage = p;
          render();
          var grid = $('.news-grid');
          if (grid) {
            var top = grid.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
        });
      });
    }

    render();
  }

  /* ---------------------------------------------------------------
     10. FORM VALIDATION
     --------------------------------------------------------------- */
  function initForms() {
    var forms = $$('.form');
    if (!forms.length) return;

    forms.forEach(function (form) {
      form.setAttribute('novalidate', 'novalidate');

      function setError(field, message) {
        var wrap = field.closest('.field') || field.parentNode;
        var box = wrap ? wrap.querySelector('.form-error') : null;
        field.classList.add('has-error');
        if (box) {
          box.textContent = message;
          box.classList.add('is-visible');
        }
      }

      function clearError(field) {
        var wrap = field.closest('.field') || field.parentNode;
        var box = wrap ? wrap.querySelector('.form-error') : null;
        field.classList.remove('has-error');
        if (box) box.classList.remove('is-visible');
      }

      var validators = {
        name: function (v) {
          if (!v.trim()) return 'Please enter your name.';
          if (v.trim().length < 2) return 'Your name looks too short.';
          return '';
        },
        email: function (v) {
          if (!v.trim()) return 'Please enter your email address.';
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return 'Please enter a valid email address.';
          return '';
        },
        message: function (v) {
          if (!v.trim()) return 'Please tell us how we can help.';
          if (v.trim().length < 10) return 'Please add a little more detail (10+ characters).';
          return '';
        }
      };

      $$('input, textarea', form).forEach(function (field) {
        if (!field.type || field.type === 'checkbox' || field.type === 'submit') return;
        field.addEventListener('blur', function () {
          var v = validators[field.name];
          if (!v) return;
          var msg = v(field.value || '');
          if (msg) setError(field, msg); else clearError(field);
        });
        field.addEventListener('input', function () { clearError(field); });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        var firstBad = null;

        Object.keys(validators).forEach(function (name) {
          var field = form.querySelector('[name="' + name + '"]');
          if (!field) return;
          var msg = validators[name](field.value || '');
          if (msg) { setError(field, msg); ok = false; if (!firstBad) firstBad = field; }
          else clearError(field);
        });

        var consent = form.querySelector('[name="consent"]');
        if (consent && !consent.checked) {
          var wrap = consent.closest('.field') || consent.parentNode;
          var box = wrap ? wrap.querySelector('.form-error') : null;
          if (box) { box.textContent = 'Please accept the Privacy Policy and Terms of Service.'; box.classList.add('is-visible'); }
          ok = false;
          if (!firstBad) firstBad = consent;
        } else if (consent) {
          var wrap2 = consent.closest('.field') || consent.parentNode;
          var box2 = wrap2 ? wrap2.querySelector('.form-error') : null;
          if (box2) box2.classList.remove('is-visible');
        }

        if (!ok) {
          if (firstBad && firstBad.focus) firstBad.focus();
          return;
        }

        var success = form.parentNode ? form.parentNode.querySelector('.form-success') : null;
        if (success) success.classList.add('is-visible');
        form.reset();
      });
    });
  }

  /* ---------------------------------------------------------------
     11. FAQ ACCORDION (progressive enhancement)
     --------------------------------------------------------------- */
  function initFaq() {
    $$('.faq__item').forEach(function (item) {
      var q = $('.faq__q', item);
      if (!q) return;
      q.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        q.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* ---------------------------------------------------------------
     12. BOOT
     --------------------------------------------------------------- */
  function boot() {
    applySeo();
    buildHeader();
    buildFooter();

    /* Content-revealing init runs BEFORE the optional sprite fetch: a failed or
       blocked asset request must never be able to keep the page invisible. */
    initReveal();
    initScrollBehaviours();
    initNewsFilter();
    initForms();
    initFaq();

    loadSprite();

    var year = $('#footer-year');
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
