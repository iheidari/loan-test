export const toQueryString = (object, base) => {
  var queryString = [];

  Object.keys(object).forEach(function(key) {
    var result, value;

    value = object[key];

    if (base) {
      key = base + '[' + key + ']';
    }
    switch (typeof value) {
      case 'object':
        result = Object.encodeToQueryString(value, key);
        break;
      case 'array':
        var qs = {};
        value.forEach(function(val, i) {
          qs[i] = val;
        });
        result = Object.encodeToQueryString(qs, key);
        break;
      default:
        result = key + '=' + encodeURIComponent(value);
    }

    if (value != null) {
      queryString.push(result);
    }
  });
  return queryString.join('&');
};
