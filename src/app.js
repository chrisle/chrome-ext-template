App.init = function() {
  this.pp("init.");
};

App.pp = function(str) {
  if (this.DEBUG_MODE) {
    console.log("[" + this.APP_NAME + "]: " + str);
  }
};
