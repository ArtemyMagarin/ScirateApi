function org_jboss_bpm_console_Application(){
  var $intern_0 = '', $intern_27 = '" for "gwt:onLoadErrorFn"', $intern_25 = '" for "gwt:onPropertyErrorFn"', $intern_10 = '"><\/script>', $intern_12 = '#', $intern_14 = '/', $intern_51 = '22497E6B4885B548EC1EEA54CB524432.cache.html', $intern_56 = '2B12B96B47CEE3CF13B6D6B7532D08FD.cache.html', $intern_54 = '3A8D56BF302B34DA9E2454BD0F51D209.cache.html', $intern_53 = '69CAC99056B6B69F92EDD8E5E77D790F.cache.html', $intern_47 = '95F96A8AF55BE692CB99391844FBC7C0.cache.html', $intern_68 = '<script defer="defer">org_jboss_bpm_console_Application.onInjectionDone(\'org.jboss.bpm.console.Application\')<\/script>', $intern_9 = '<script id="', $intern_22 = '=', $intern_13 = '?', $intern_50 = 'A08429B79B007D6C2DEB3D00192436F0.cache.html', $intern_34 = 'BackCompat', $intern_24 = 'Bad handler "', $intern_33 = 'CSS1Compat', $intern_55 = 'D4D42AC28387C4DFA4ED3289A5EBED6F.cache.html', $intern_67 = 'DOMContentLoaded', $intern_52 = 'E1C98C59E3CC05FF8AEB63217932377C.cache.html', $intern_48 = 'E40CBC5C6D0F7C7C6B6EBEB99A2AA891.cache.html', $intern_49 = 'F60FA6111460AC54A0F84C2774D71DB1.cache.html', $intern_11 = 'SCRIPT', $intern_8 = '__gwt_marker_org.jboss.bpm.console.Application', $intern_15 = 'base', $intern_4 = 'begin', $intern_3 = 'bootstrap', $intern_17 = 'clear.cache.gif', $intern_32 = 'compat.mode', $intern_66 = 'console.css', $intern_21 = 'content', $intern_7 = 'end', $intern_41 = 'gecko', $intern_42 = 'gecko1_8', $intern_63 = 'gwt-dnd.css', $intern_57 = 'gwt-log.css', $intern_5 = 'gwt.hybrid', $intern_64 = 'gwt/aegean/aegean.css', $intern_65 = 'gwt/aegean/mosaic.css', $intern_26 = 'gwt:onLoadErrorFn', $intern_23 = 'gwt:onPropertyErrorFn', $intern_20 = 'gwt:property', $intern_62 = 'head', $intern_46 = 'hosted.html?org_jboss_bpm_console_Application', $intern_61 = 'href', $intern_40 = 'ie6', $intern_28 = 'iframe', $intern_16 = 'img', $intern_29 = "javascript:''", $intern_58 = 'link', $intern_44 = 'loadExternalRefs', $intern_18 = 'meta', $intern_31 = 'moduleRequested', $intern_6 = 'moduleStartup', $intern_39 = 'msie', $intern_19 = 'name', $intern_36 = 'opera', $intern_1 = 'org.jboss.bpm.console.Application', $intern_30 = 'position:absolute;width:0;height:0;border:none', $intern_59 = 'rel', $intern_38 = 'safari', $intern_45 = 'selectingPermutation', $intern_2 = 'startup', $intern_60 = 'stylesheet', $intern_43 = 'unknown', $intern_35 = 'user.agent', $intern_37 = 'webkit';
  var $wnd = window, $doc = document, $stats = $wnd.__gwtStatsEvent?function(a){
    return $wnd.__gwtStatsEvent(a);
  }
  :null, scriptsDone, loadDone, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_4});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    try {
      return $wnd.external && ($wnd.external.gwtOnLoad && $wnd.location.search.indexOf($intern_5) == -1);
    }
     catch (e) {
      return false;
    }
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc.getElementById($intern_1);
      var frameWnd = iframe.contentWindow;
      frameWnd.__gwt_initHandlers = org_jboss_bpm_console_Application.__gwt_initHandlers;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name){
          return computePropValue(name);
        }
        ;
      }
      org_jboss_bpm_console_Application = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, $intern_1, base);
      $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_6, millis:(new Date()).getTime(), type:$intern_7});
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = $intern_8, markerScript;
    $doc.write($intern_9 + markerId + $intern_10);
    markerScript = $doc.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != $intern_11) {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_12);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_13);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_14, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_0;
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == $intern_0) {
      var baseElements = $doc.getElementsByTagName($intern_15);
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc.createElement($intern_16);
      img.src = base + $intern_17;
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_18);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_19), content;
      if (name) {
        if (name == $intern_20) {
          content = meta.getAttribute($intern_21);
          if (content) {
            var value, eq = content.indexOf($intern_22);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_0;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_23) {
          content = meta.getAttribute($intern_21);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_24 + content + $intern_25);
            }
          }
        }
         else if (name == $intern_26) {
          content = meta.getAttribute($intern_21);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_24 + content + $intern_27);
            }
          }
        }
      }
    }
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc.createElement($intern_28);
      iframe.src = $intern_29;
      iframe.id = $intern_1;
      iframe.style.cssText = $intern_30;
      iframe.tabIndex = -1;
      $doc.body.appendChild(iframe);
      $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_6, millis:(new Date()).getTime(), type:$intern_31});
      iframe.contentWindow.location.replace(base + strongName);
    }
  }

  providers[$intern_32] = function(){
    return document.compatMode == $intern_33?$intern_33:$intern_34;
  }
  ;
  values[$intern_32] = {BackCompat:0, CSS1Compat:1};
  providers[$intern_35] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf($intern_36) != -1) {
      return $intern_36;
    }
     else if (ua.indexOf($intern_37) != -1) {
      return $intern_38;
    }
     else if (ua.indexOf($intern_39) != -1) {
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 6000) {
          return $intern_40;
        }
      }
    }
     else if (ua.indexOf($intern_41) != -1) {
      var result = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 1008)
          return $intern_42;
      }
      return $intern_41;
    }
    return $intern_43;
  }
  ;
  values[$intern_35] = {gecko:0, gecko1_8:1, ie6:2, opera:3, safari:4};
  org_jboss_bpm_console_Application.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  org_jboss_bpm_console_Application.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_44, millis:(new Date()).getTime(), type:$intern_7});
    maybeStartModule();
  }
  ;
  computeScriptBase();
  processMetas();
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_45});
  var strongName;
  if (isHostedMode()) {
    strongName = $intern_46;
  }
   else {
    try {
      unflattenKeylistIntoAnswers([$intern_34, $intern_40], $intern_47);
      unflattenKeylistIntoAnswers([$intern_33, $intern_40], $intern_48);
      unflattenKeylistIntoAnswers([$intern_33, $intern_38], $intern_49);
      unflattenKeylistIntoAnswers([$intern_34, $intern_38], $intern_50);
      unflattenKeylistIntoAnswers([$intern_34, $intern_36], $intern_51);
      unflattenKeylistIntoAnswers([$intern_33, $intern_36], $intern_52);
      unflattenKeylistIntoAnswers([$intern_33, $intern_42], $intern_53);
      unflattenKeylistIntoAnswers([$intern_34, $intern_42], $intern_54);
      unflattenKeylistIntoAnswers([$intern_33, $intern_41], $intern_55);
      unflattenKeylistIntoAnswers([$intern_34, $intern_41], $intern_56);
      strongName = answers[computePropValue($intern_32)][computePropValue($intern_35)];
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      if (!__gwt_stylesLoaded[$intern_57]) {
        var l = $doc.createElement($intern_58);
        __gwt_stylesLoaded[$intern_57] = l;
        l.setAttribute($intern_59, $intern_60);
        l.setAttribute($intern_61, base + $intern_57);
        $doc.getElementsByTagName($intern_62)[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded[$intern_63]) {
        var l = $doc.createElement($intern_58);
        __gwt_stylesLoaded[$intern_63] = l;
        l.setAttribute($intern_59, $intern_60);
        l.setAttribute($intern_61, base + $intern_63);
        $doc.getElementsByTagName($intern_62)[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded[$intern_64]) {
        var l = $doc.createElement($intern_58);
        __gwt_stylesLoaded[$intern_64] = l;
        l.setAttribute($intern_59, $intern_60);
        l.setAttribute($intern_61, base + $intern_64);
        $doc.getElementsByTagName($intern_62)[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded[$intern_65]) {
        var l = $doc.createElement($intern_58);
        __gwt_stylesLoaded[$intern_65] = l;
        l.setAttribute($intern_59, $intern_60);
        l.setAttribute($intern_61, base + $intern_65);
        $doc.getElementsByTagName($intern_62)[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded[$intern_66]) {
        var l = $doc.createElement($intern_58);
        __gwt_stylesLoaded[$intern_66] = l;
        l.setAttribute($intern_59, $intern_60);
        l.setAttribute($intern_61, base + $intern_66);
        $doc.getElementsByTagName($intern_62)[0].appendChild(l);
      }
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_67, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_67, function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_7});
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_44, millis:(new Date()).getTime(), type:$intern_4});
  $doc.write($intern_68);
}

org_jboss_bpm_console_Application.__gwt_initHandlers = function(resize, beforeunload, unload){
  var $wnd = window, oldOnResize = $wnd.onresize, oldOnBeforeUnload = $wnd.onbeforeunload, oldOnUnload = $wnd.onunload;
  $wnd.onresize = function(evt){
    try {
      resize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  ;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = beforeunload();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = function(evt){
    try {
      unload();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  ;
}
;
org_jboss_bpm_console_Application();
