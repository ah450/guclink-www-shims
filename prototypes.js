(function() {
  if (typeof Array.prototype.remove !== 'function') {
    Array.prototype.remove = function(element) {
      var index;
      index = this.indexOf(element);
      if (index > -1) {
        this.splice(index, 1);
        return true;
      } else {
        return false;
      }
    };
  }

  Object.defineProperty(Array.prototype, 'size', {
    get: function() {
      return this.length;
    }
  });
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  };
  Function.prototype.property = function(prop, desc) {
    return Object.defineProperty(this.prototype, prop, desc);
  };
})();
