var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var SquareCanvas = (function () {
    function SquareCanvas(canvas) {
        this.canvas = canvas;
        //window.addEventListener("resize", this.onResize);
        //window.onresize = this.onResize;
    }
    SquareCanvas.prototype.onResize = function () {
        var length = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.9);
        console.log(this.value);
        this.canvas.style.width = length + "px";
        this.canvas.style.height = length + "px";
    };
    return SquareCanvas;
}());
var sc;
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    //greeter.start();
    var canvas = document.getElementById('canv');
    //var sc = new SquareCanvas(canvas);
    sc = new SquareCanvas(canvas);
    //sc.onResize();
    window.onresize = sc.onResize;
};
//# sourceMappingURL=app.js.map