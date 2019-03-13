var SumFig;
(function () {
    var SumFigArray = new Array();
    SumFig =
        function (n) {
            if (SumFigArray[n]) return SumFigArray[n];
            var s = 0;
            for (var a = 1; a < n; a++)
                if (n % a == 0)
                    s += a;
            return SumFig[n] = s;
        }
})();

function Main(n) {
    for (var a = 1; a <= n; a++)
        for (var b = 1; b <= n; b++)
            if ((SumFig(a) == b) && (SumFig(b) == a))
                alert(a + ' ' + b);
}