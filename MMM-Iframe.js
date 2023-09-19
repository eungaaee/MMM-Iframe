/* Magic Mirror
* Module: Iframe
*
* By Avella https://github.com/Av3lla
* MIT Licensed.
*/
Module.register("MMM-Iframe", {
  defaults: {
    headerText: 'Iframe',
    url: null,
    width: 800,
    height: 600,
    updateInterval: 1000 * 60
  },
  
  start: function() {
    // define global variables
    Log.info("Starting module: " + this.name);
    var self = this;
    setInterval(function() {
      self.updateDom();
    }, this.config.updateInterval)
  },
  
  getStyles: function() {
    return ["MMM-Iframe.css"];
  },
  
  getHeader: function() {
    return `${this.config.headerText}`;
  },
  
  getDom: function() {
    var mainDiv = document.createElement("div");
    var iframeDiv = document.createElement("iframe");
    iframeDiv.className = "iframe";
    iframeDiv.setAttribute('src', `${this.config.url}`);
    iframeDiv.setAttribute('width', `${this.config.width}`);
    iframeDiv.setAttribute('height', `${this.config.height}`);
    iframeDiv.setAttribute('scrolling', 'no');

    var developedbyDiv = document.createElement("div");
    developedbyDiv.className = "devby";
    developedbyDiv.innerHTML = "이지원 Github @Av3lla / 허성빈 Github @seongbeenheo";
    
    mainDiv.append(iframeDiv, developedbyDiv);
    
    return iframeDiv;
  }
});