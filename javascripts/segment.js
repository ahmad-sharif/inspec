jQuery(document).ready(function(t){t.getJSON("//api.kickfire.com/gip",function(e){t.getJSON("//api.kickfire.com/v2/company:(all)?ip="+e+"&key=4740bf917627840f",function(t){"data"in t?function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],e.factory=function(t){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(t),e.push(n),e}};for(var n=0;n<e.methods.length;n++){var a=e.methods[n];e[a]=e.factory(a)}e.load=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)},e.SNIPPET_VERSION="4.0.0",e.load("2NpoxZS2fnBmOgGdnQOymLNm6wuij13X"),e.page(),e.identify({kf_company:t.data[0].name,kf_website:t.data[0].website,kf_city:t.data[0].city,kf_state:t.data[0].region,kf_country:t.data[0].country,kf_zipcode:t.data[0].postal,kf_employees:t.data[0].employees,kf_revenue:t.data[0].revenue,kf_sic_desc:t.data[0].category,kf_naics_desc:t.data[0].category2,kf_isp:t.data[0].isISP,kf_source:"KickFire API"})}}():function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}};for(var e=0;e<t.methods.length;e++){var n=t.methods[e];t[n]=t.factory(n)}t.load=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)},t.SNIPPET_VERSION="4.0.0",t.load("2NpoxZS2fnBmOgGdnQOymLNm6wuij13X"),t.page()}}()}).fail(function(){!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}};for(var e=0;e<t.methods.length;e++){var n=t.methods[e];t[n]=t.factory(n)}t.load=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)},t.SNIPPET_VERSION="4.0.0",t.load("2NpoxZS2fnBmOgGdnQOymLNm6wuij13X"),t.page()}}()})}).fail(function(){!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}};for(var e=0;e<t.methods.length;e++){var n=t.methods[e];t[n]=t.factory(n)}t.load=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)},t.SNIPPET_VERSION="4.0.0",t.load("2NpoxZS2fnBmOgGdnQOymLNm6wuij13X"),t.page()}}()})});