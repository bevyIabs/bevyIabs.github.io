var params = {};

if (window.location.href.match(/.*\?.*/)) {
  for (var i = 0; i < tmp_params.length; i++) {
    var _tmp = window.location.href.replace(/.*\?/,'')
      .split('&')[i]
      .split('=');

    params[_tmp[0]] = _tmp[1];
  }
}

alert(params.data);
