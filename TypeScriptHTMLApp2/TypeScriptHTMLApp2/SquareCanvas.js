var SquareCanvas = (function () {
    function SquareCanvas(canvas) {
        this.index = 123;
        this.canvas = canvas;
        //window.addEventListener("resize", this.onResize);
        //window.onresize = this.onResize;
    }
    SquareCanvas.prototype.onResize = function () {
        var length = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.9);
        console.log(this.index);
        this.canvas.style.width = length + "px";
        this.canvas.style.height = length + "px";
    };
    return SquareCanvas;
}());
//# sourceMappingURL=SquareCanvas.js.map