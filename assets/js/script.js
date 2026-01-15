$(function () {    
// Navigation 
    $('.site-navigation').affix({
      offset: {
        top: $('.hero').height()
            }
    });

    var $window = $(window);
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
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

// Smooth scroll con offset del header fijo
(function(){
    var HEADER_OFFSET = $('.site-header').outerHeight() || 64;
  
    $(window).on('resize', function(){
      HEADER_OFFSET = $('.site-header').outerHeight() || 64;
    });
  
    $(document).on('click', '.page-scroll a', function(event) {
      var $target = $($(this).attr('href'));
      if ($target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: $target.offset().top - HEADER_OFFSET
        }, 900, 'easeInOutExpo');
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
// 🔸 GRÁFICO 2: Línea (desde JSON)
// =============================
var chartLine = echarts.init(document.getElementById('lineChart'));

// ✅ Puedes reemplazar este JSON por una URL externa o tu propio archivo
// En este ejemplo, lo definimos dentro del HTML para que funcione sin servidor.
const rawData = [
{ Year: 1950, Country: 'France', Income: 800 },
{ Year: 1960, Country: 'France', Income: 1500 },
{ Year: 1970, Country: 'France', Income: 3200 },
{ Year: 1980, Country: 'France', Income: 7500 },
{ Year: 1950, Country: 'Germany', Income: 1000 },
{ Year: 1960, Country: 'Germany', Income: 2200 },
{ Year: 1970, Country: 'Germany', Income: 5000 },
{ Year: 1980, Country: 'Germany', Income: 9000 }
];

run(rawData); // Llamamos a la función con el dataset

function run(_rawData) {
const countries = ['France', 'Germany'];
const datasetWithFilters = [];
const seriesList = [];

echarts.util.each(countries, function (country) {
var datasetId = 'dataset_' + country;
datasetWithFilters.push({
  id: datasetId,
  fromDatasetId: 'dataset_raw',
  transform: {
    type: 'filter',
    config: {
      and: [
        { dimension: 'Year', gte: 1950 },
        { dimension: 'Country', '=': country }
      ]
    }
  }
});

seriesList.push({
  type: 'line',
  datasetId: datasetId,
  showSymbol: false,
  name: country,
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
    y: 'Income',
    label: ['Country', 'Income'],
    itemName: 'Year',
    tooltip: ['Income']
  }
});
});

const option = {
animationDuration: 10000,
dataset: [
  { id: 'dataset_raw', source: _rawData },
  ...datasetWithFilters
],
title: { text: 'Income of Germany and France since 1950' },
tooltip: { order: 'valueDesc', trigger: 'axis' },
xAxis: { type: 'category', nameLocation: 'middle' },
yAxis: { name: 'Income' },
grid: { right: 140 },
series: seriesList
};


var chartLine = echarts.init(document.getElementById('lineChart'));
chartLine.setOption(option);
}

option = {
  title: {
    text: 'World Population'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
};
window.addEventListener('resize', function() {
  chartLine.resize();
});

const modal = document.getElementById("sqlModal");
const btn = document.getElementById("openSqlModal");
const close = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
