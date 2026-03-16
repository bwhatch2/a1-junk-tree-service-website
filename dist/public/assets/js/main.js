/*
  A1 Junk Removal and Tree Service
  Vanilla JS — menu toggles, mobile nav, sticky CTA
  No frameworks. No dependencies.
*/
(function() {
  'use strict';

  // ─── HEADER SCROLL SHADOW ───
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ─── MEGA MENU (Desktop) ───
  var dropdownBtns = document.querySelectorAll('.nav-dropdown-btn');
  var megaMenus = document.querySelectorAll('.mega-menu');

  function closeAllMegas() {
    megaMenus.forEach(function(m) { m.classList.remove('open'); });
    dropdownBtns.forEach(function(b) { b.classList.remove('open'); });
  }

  dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var menuId = 'mega-' + btn.getAttribute('data-menu');
      var menu = document.getElementById(menuId);
      var isOpen = menu && menu.classList.contains('open');
      closeAllMegas();
      if (!isOpen && menu) {
        menu.classList.add('open');
        btn.classList.add('open');
      }
    });
  });

  document.addEventListener('click', function(e) {
    var insideMega = false;
    megaMenus.forEach(function(m) {
      if (m.contains(e.target)) insideMega = true;
    });
    if (!insideMega) closeAllMegas();
  });

  // ─── MOBILE MENU ───
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileClose = document.getElementById('mobile-menu-close');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function() {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Mobile dropdown toggles
  var mobileDropdowns = document.querySelectorAll('.mobile-dropdown > button');
  mobileDropdowns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var content = btn.nextElementSibling;
      var isOpen = content && content.classList.contains('open');
      document.querySelectorAll('.mobile-dropdown-content').forEach(function(c) { c.classList.remove('open'); });
      document.querySelectorAll('.mobile-dropdown > button').forEach(function(b) { b.classList.remove('open'); });
      if (!isOpen && content) {
        content.classList.add('open');
        btn.classList.add('open');
      }
    });
  });

  // ─── MOBILE STICKY CTA ───
  var stickyCta = document.getElementById('mobile-sticky-cta');
  if (stickyCta) {
    window.addEventListener('scroll', function() {
      stickyCta.classList.toggle('visible', window.scrollY > 300);
    });
  }

  // ─── FAQ ACCORDION ───
  var faqBtns = document.querySelectorAll('.faq-accordion-btn');
  faqBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var content = btn.nextElementSibling;
      var isOpen = btn.classList.contains('open');
      faqBtns.forEach(function(b) {
        b.classList.remove('open');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        if (content) content.classList.add('open');
      }
    });
  });

})();
