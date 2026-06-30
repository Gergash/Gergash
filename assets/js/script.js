// Site config — set calendlyUrl to switch primary CTA to "Book 20 min"
var SITE_CONFIG = {
  calendlyUrl: '',
  cvUrl: 'assets/cv/Geronimo_Saldana_CV_EN.pdf',
  email: 'gerosaldana2004@gmail.com'
};

(function initSiteI18n() {
  var STORAGE_KEY = 'geri_lang';

  function primaryCtaUrl(lang) {
    if (SITE_CONFIG.calendlyUrl) {
      return SITE_CONFIG.calendlyUrl;
    }
    var subject = lang === 'es'
      ? 'Automatizar procesos documentales — 20 min'
      : '20-min call — automate document workflows';
    return 'mailto:' + SITE_CONFIG.email + '?subject=' + encodeURIComponent(subject);
  }

  function updateCtas(lang) {
    var url = primaryCtaUrl(lang);
    var primaryKey = SITE_CONFIG.calendlyUrl ? 'cta.primary.calendly' : 'cta.primary';
    var isCalendly = !!SITE_CONFIG.calendlyUrl;

    document.querySelectorAll('.cta-primary').forEach(function (btn) {
      btn.href = url;
      if (isCalendly) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      } else {
        btn.removeAttribute('target');
        btn.removeAttribute('rel');
      }
      if (window.GSE_t) btn.textContent = window.GSE_t(lang, primaryKey);
    });

    document.querySelectorAll('.cta-cv').forEach(function (btn) {
      btn.href = SITE_CONFIG.cvUrl;
      if (window.GSE_t) btn.textContent = window.GSE_t(lang, 'cta.cv');
    });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    window.GSE_currentLang = lang;
    document.body.classList.remove('lang-en', 'lang-es');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    if (window.GSE_applyI18n) window.GSE_applyI18n(lang);
    updateCtas(lang);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-btn');
    if (btn) {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'));
    }
  });

  var saved = 'en';
  try {
    saved = localStorage.getItem(STORAGE_KEY) || 'en';
  } catch (e) {}
  setLang(saved === 'es' ? 'es' : 'en');
})();

$(function () {
// Navigation 
    $('.site-navigation').affix({
      offset: {
        top: $('.hero').height()
            }
    });

    var $window = $(window);

    // Altura real del header fijo (recalculada cuando hace falta)
    function getHeaderOffset() {
        return ($('.site-header').outerHeight() || 64);
    }

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {
            $('.nav a').on('click', function(){
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

// Highlight the top nav as scrolling occurs
// El offset debe igualar la altura del header fijo + un margen,
// para que la sección se marque cuando queda justo bajo el header.
    $('body').scrollspy({
        target: '.site-header',
        offset: getHeaderOffset() + 20
    });

    function refreshScrollspy() {
        var inst = $('body').data('bs.scrollspy');
        if (inst) {
            inst.options.offset = getHeaderOffset() + 20;
            $('body').scrollspy('refresh');
        }
    }

    // Recalcular posiciones cuando cambian las alturas (carga e imágenes/resize)
    $(window).on('load', refreshScrollspy);
    $(window).on('resize', refreshScrollspy);

// Smooth scroll con offset del header fijo
(function(){
    $(document).on('click', '.page-scroll a', function(event) {
      var $target = $($(this).attr('href'));
      if ($target.length) {
        event.preventDefault();

        var headerOffset = getHeaderOffset();
        var destino = Math.round($target.offset().top - headerOffset);

        $('html, body').stop(true).animate(
          { scrollTop: destino },
          700,
          'easeInOutExpo',
          function () {
            // Forzar el estado activo correcto al terminar el desplazamiento
            refreshScrollspy();
          }
        );
      }
    });
  })();
  

//Counters 
    if ($(".counter-start").length>0) {
        $(".counter-start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };


// Progress bar 
    var $section = $('.section-skills');
    function loadDaBars() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 500,
            display_text: 'center'
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

//Team Carousel
    $('#services-carousel').carousel({ interval: false });

    // Carousel touch support
    if($(".carousel-inner").length) {
        $(".carousel-inner").swipe({
            //Generic swipe handler for all directions
            swipeLeft: function (event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('next');
            },
            swipeRight: function () {
                $(this).parent().carousel('prev');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 50
        });
    }

// Slick.js   
    $('.review-carousel').slick({
        nextArrow: '<button class="slick rectangle slick-next"><i class="fa fa-angle-right" aria-hidden="true"></button>',
        prevArrow: '<button class="slick rectangle slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></button>'
    });

    $('.clients-carousel').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [ {
            breakpoint : 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint : 480,
            settings: {
                slidesToShow: 1
            }
      }]
    });

//shuffle.js
    var shuffleme = (function( $ ) {
      'use strict';
          var $grid = $('#grid'), //locate what we want to sort 
          $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories

      init = function() {

        // None of these need to be executed synchronously
        setTimeout(function() {
          listen();
          setupFilters();
        }, 100);

        // instantiate the plugin
        $grid.shuffle({
          itemSelector: '[class*="col-"]', 
           group: Shuffle.ALL_ITEMS, 
        });
      },

        
      // Set up button clicks
      setupFilters = function() {
        var $btns = $filterOptions.children();
        $btns.on('click', function(e) {
          e.preventDefault();
          var $this = $(this),
              isActive = $this.hasClass( 'active' ),
              group = isActive ? 'all' : $this.data('group');

          // Hide current label, show current label in title
          if ( !isActive ) {
            $('.portfolio-sorting li a').removeClass('active');
          }

          $this.toggleClass('active');

          // Filter elements
          $grid.shuffle( 'shuffle', group );
        });

        $btns = null;
      },

      // Re layout shuffle when images load. This is only needed
      // below 768 pixels because the .picture-item height is auto and therefore
      // the height of the picture-item is dependent on the image
      // I recommend using imagesloaded to determine when an image is loaded
      // but that doesn't support IE7
      listen = function() {
        var debouncedLayout = $.throttle( 300, function() {
          $grid.shuffle('update');
        });

        // Get all images inside shuffle
        $grid.find('img').each(function() {
          var proxyImage;

          // Image already loaded
          if ( this.complete && this.naturalWidth !== undefined ) {
            return;
          }

          // If none of the checks above matched, simulate loading on detached element.
          proxyImage = new Image();
          $( proxyImage ).on('load', function() {
            $(this).off('load');
            debouncedLayout();
          });

          proxyImage.src = this.src;
        });

        // Because this method doesn't seem to be perfect.
        setTimeout(function() {
          debouncedLayout();
        }, 500);
      };      

      return {
        init: init
      };
    }( jQuery ));

    if($('#grid').length >0 ) { 
      shuffleme.init(); //filter portfolio
      // El grid cambia de altura tras reordenar: refrescar posiciones del scrollspy
      setTimeout(refreshScrollspy, 800);
    };
    // Reveal on scroll (slide-up / slide-down) para [data-reveal]
(function(){
    var nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;
  
    // Respeta accesibilidad
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { nodes.forEach(function(el){ el.classList.add('is-inview'); }); return; }
  
    // IntersectionObserver
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            var el = entry.target;
  
            // Soporte de retardo opcional: data-delay="120" (ms)
            if (el.dataset.delay) { el.style.transitionDelay = (parseInt(el.dataset.delay,10)||0) + 'ms'; }
  
            el.classList.add('is-inview');
            io.unobserve(el);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  
      nodes.forEach(function(el){ io.observe(el); });
    } else {
      // Fallback: muestra todo si no hay IO
      nodes.forEach(function(el){ el.classList.add('is-inview'); });
    }
  })();  
}());

var chartDom = document.getElementById('pieChart');
var myChart = echarts.init(chartDom);
var option = {
  tooltip: { trigger: 'item' },
  legend: { top: '5%', left: 'center' },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: { show: false, position: 'center' },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: { show: false },
      data: [
        { value: 1048, name: 'Python' },
        { value: 735, name: 'SQL' },
        { value: 588, name: 'Excel' },
        { value: 489, name: 'Power BI' },
        { value: 517, name: 'Spark' },
        { value: 420, name: 'n8n' }
      ]
    }
  ]
};
myChart.setOption(option);
// --- ESTO HACE QUE SEA RESPONSIVE ---
window.addEventListener('resize', function() {
  myChart.resize();
});

 // =============================
// =============================
// Dataset values for line chart (factor labels come from i18n)
var CHART_SERIES_VALUES = [
  [10, 15, 22, 30, 40, 50, 65, 80, 95, 110, 130],
  [8, 12, 18, 25, 35, 45, 60, 75, 90, 105, 125],
  [5, 9, 14, 20, 28, 38, 50, 65, 80, 95, 115]
];
var CHART_FACTOR_KEYS = ['chart.factor1', 'chart.factor2', 'chart.factor3'];
var CHART_YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

function buildChartRawData(lang) {
  var factors = CHART_FACTOR_KEYS.map(function (key) {
    return window.GSE_t(lang, key);
  });
  var rows = [];
  factors.forEach(function (factor, fi) {
    CHART_YEARS.forEach(function (year, yi) {
      rows.push({ Year: year, Factor: factor, Value: CHART_SERIES_VALUES[fi][yi] });
    });
  });
  return rows;
}

// Inicialización del gráfico en el contenedor con id 'lineChart'
var chartLine = echarts.init(document.getElementById('lineChart'));

function runLineChart(lang) {
  var rawData = buildChartRawData(lang);
  var factors = CHART_FACTOR_KEYS.map(function (key) { return window.GSE_t(lang, key); });
  const datasetWithFilters = [];
  const seriesList = [];

  // Crear datasets filtrados y series para cada factor
  echarts.util.each(factors, function (factor) {
    var datasetId = 'dataset_' + factor.replace(/\s+/g, '_');
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 2020 },
            { dimension: 'Factor', '=': factor }
          ]
        }
      }
    });

    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: factor,
      endLabel: {
        show: true,
        formatter: function (params) {
          return params.value[2] + ': ' + params.value[1];
        }
      },
      labelLayout: { moveOverlap: 'shiftY' },
      emphasis: { focus: 'series' },
      encode: {
        x: 'Year',
        y: 'Value',
        label: ['Factor', 'Value'],
        itemName: 'Year',
        tooltip: ['Value']
      },
      lineStyle: {
        width: 3,
      },
      smooth: true
    });
  });

  // Configuración general del gráfico
  const option = {
    animationDuration: 2000,
    animationEasing: 'cubicOut',
    dataset: [
      { id: 'dataset_raw', source: rawData },
      ...datasetWithFilters
    ],
    title: {
      text: window.GSE_t(lang, 'chart.line.title'),
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function (params) {
        let tooltipText = params[0].axisValue + '<br/>';
        params.forEach(p => {
          tooltipText += `<span style="color:${p.color}">\u25CF</span> ${p.seriesName}: ${p.data[2]}<br/>`;
        });
        return tooltipText;
      }
    },
    legend: {
      top: 30,
      data: factors,
      textStyle: {
        fontSize: 14
      }
    },
    grid: {
      left: '10%',
      right: '15%',
      bottom: '15%',
      top: 80
    },
    xAxis: {
      type: 'category',
      name: window.GSE_t(lang, 'chart.line.xAxis'),
      nameLocation: 'middle',
      nameGap: 30,
      boundaryGap: false,
      axisLine: { onZero: false },
      axisTick: { alignWithLabel: true },
      splitLine: { show: false }
    },
    yAxis: {
      type: 'value',
      name: window.GSE_t(lang, 'chart.line.yAxis'),
      min: 0,
      max: 140,
      nameLocation: 'middle',
      nameGap: 50,
      axisLine: { show: true },
      splitLine: { show: true }
    },
    series: seriesList
  };

  chartLine.setOption(option);
}

window.GSE_onLangChange = function (lang) {
  runLineChart(lang);
};

runLineChart(window.GSE_currentLang || 'en');

// Ajustar tamaño del gráfico al cambiar tamaño de ventana
window.addEventListener('resize', function () {
  chartLine.resize();
});

window.addEventListener('resize', function() {
  chartLine.resize();
});

// EmailJS — formulario de contacto
(function () {
  var PUBLIC_KEY  = "khqhZui3FxrKedP88";
  var SERVICE_ID  = "service_mkokojr";
  var TEMPLATE_ID = "template_k63lfgd";

  emailjs.init({ publicKey: PUBLIC_KEY });

  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var btn    = document.getElementById("submit-btn");
    var status = document.getElementById("form-status");

    btn.disabled       = true;
    btn.textContent    = window.GSE_t(window.GSE_currentLang || 'en', 'contact.sending');
    status.textContent = "";

    var params = {
      from_name: document.getElementById("from_name").value,
      reply_to:  document.getElementById("reply_to").value,
      message:   document.getElementById("message").value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
      .then(function () {
        status.style.color = "#00d4aa";
        status.textContent = window.GSE_t(window.GSE_currentLang || 'en', 'contact.sent');
        btn.textContent    = window.GSE_t(window.GSE_currentLang || 'en', 'contact.sentBtn');
        form.reset();
      })
      .catch(function (error) {
        status.style.color = "#ff4444";
        status.textContent = window.GSE_t(window.GSE_currentLang || 'en', 'contact.error');
        btn.disabled       = false;
        btn.textContent    = window.GSE_t(window.GSE_currentLang || 'en', 'contact.submit');
        console.error("EmailJS error:", error);
      });
  });
})();

// Modal SQL: mostrar consultas al hacer clic
(function () {
  var sqlModal = document.getElementById("sqlModal");
  var sqlBtn = document.getElementById("openSqlModal");
  var sqlClose = sqlModal ? sqlModal.querySelector(".close") : null;
  if (sqlModal && sqlBtn) sqlBtn.onclick = function () { sqlModal.style.display = "block"; };
  if (sqlModal && sqlClose) sqlClose.onclick = function () { sqlModal.style.display = "none"; };
  window.addEventListener("click", function (e) {
    if (sqlModal && e.target === sqlModal) sqlModal.style.display = "none";
  });
})();

// Modales de workflow n8n (misma estructura que SQL, reusable)
(function () {
  document.addEventListener("click", function (e) {
    var openBtn = e.target.closest(".open-workflow-modal");
    if (openBtn) {
      var modalId = openBtn.getAttribute("data-target-modal");
      var modal = modalId ? document.getElementById(modalId) : null;
      if (modal) modal.style.display = "block";
      return;
    }

    var closeBtn = e.target.closest(".close-workflow");
    if (closeBtn) {
      var parentModal = closeBtn.closest(".workflow-modal");
      if (parentModal) parentModal.style.display = "none";
      return;
    }

    if (e.target.classList && e.target.classList.contains("workflow-modal")) {
      e.target.style.display = "none";
    }
  });
})();
