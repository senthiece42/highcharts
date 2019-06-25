QUnit.test("Zooming too tight on left category should show full category.(#4536)", function (assert) {
    var chart = $('#container').highcharts({
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            minRange: 0.99
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
        }, {
            data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
        }]
    }).highcharts();

    assert.strictEqual(
        chart.xAxis[0].min,
        0,
        "Starting min"
    );
    assert.strictEqual(
        chart.xAxis[0].max,
        11,
        "Starting max"
    );


    chart.xAxis[0].setExtremes(0, 0.5);
    assert.strictEqual(
        chart.xAxis[0].min,
        0,
        "Ending min"
    );
    assert.strictEqual(
        chart.xAxis[0].max,
        0.99,
        "Ending max"
    );
    assert.strictEqual(
        typeof chart.xAxis[0].minPixelPadding,
        'number',
        "Category padding is a number"
    );
    assert.strictEqual(
        chart.xAxis[0].minPixelPadding > 0,
        true,
        "Category padding is more than 0"
    );
});

/* global TestController */
QUnit.test('Zoom type', function (assert) {

    var chart = Highcharts.chart('container', {
        chart: {
            type: 'line',
            zoomType: 'x',
            width: 600,
            height: 300
        },

        title: {
            text: 'Zooming and panning'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    var controller = new TestController(chart);


    // Right-click
    controller.pan([200, 150], [250, 150], { button: 2 });
    assert.strictEqual(
        chart.xAxis[0].min,
        0,
        'Right button drag should not zoom (#1019)'
    );
    assert.strictEqual(
        chart.xAxis[0].max,
        11,
        'Right button drag should not zoom (#1019)'
    );


    // Zoom
    controller.pan([200, 150], [250, 150]);
    assert.strictEqual(
        chart.resetZoomButton.zIndex,
        6,
        'The zoom button should have Z index 6, below tooltip (#6096)'
    );


});

QUnit.test('Zooming scatter charts', function (assert) {
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            width: 600,
            height: 400
        },


        series: [{
            name: 'Male',
            data: [
                [174.0, 65.6],
                [175.3, 71.8],
                [193.5, 80.7],
                [186.5, 72.6],
                [187.2, 78.8],
                [181.5, 74.8],
                [184.0, 86.4],
                [184.5, 78.4],
                [175.0, 62.0],
                [184.0, 81.6],
                [180.0, 76.6],
                [177.8, 83.6],
                [192.0, 90.0],
                [176.0, 74.6],
                [174.0, 71.0],
                [184.0, 79.6],
                [192.7, 93.8],
                [171.5, 70.0],
                [173.0, 72.4],
                [176.0, 85.9],
                [176.0, 78.8],
                [180.5, 77.8],
                [172.7, 66.2],
                [176.0, 86.4],
                [173.5, 81.8],
                [178.0, 89.6],
                [180.3, 82.8],
                [180.3, 76.4],
                [164.5, 63.2],
                [173.0, 60.9],
                [183.5, 74.8],
                [175.5, 70.0],
                [188.0, 72.4],
                [189.2, 84.1],
                [172.8, 69.1],
                [170.0, 59.5],
                [182.0, 67.2],
                [170.0, 61.3],
                [177.8, 68.6],
                [184.2, 80.1],
                [186.7, 87.8],
                [171.4, 84.7],
                [172.7, 73.4],
                [175.3, 72.1],
                [180.3, 82.6],
                [182.9, 88.7],
                [188.0, 84.1],
                [177.2, 94.1],
                [172.1, 74.9],
                [167.0, 59.1],
                [169.5, 75.6],
                [174.0, 86.2],
                [172.7, 75.3],
                [182.2, 87.1],
                [164.1, 55.2],
                [163.0, 57.0],
                [171.5, 61.4],
                [184.2, 76.8],
                [174.0, 86.8],
                [174.0, 72.2],
                [177.0, 71.6],
                [186.0, 84.8],
                [167.0, 68.2],
                [171.8, 66.1],
                [182.0, 72.0],
                [167.0, 64.6],
                [177.8, 74.8],
                [164.5, 70.0],
                [192.0, 101.6],
                [175.5, 63.2],
                [171.2, 79.1],
                [181.6, 78.9],
                [167.4, 67.7],
                [181.1, 66.0],
                [177.0, 68.2],
                [174.5, 63.9],
                [177.5, 72.0],
                [170.5, 56.8],
                [182.4, 74.5],
                [197.1, 90.9],
                [180.1, 93.0],
                [175.5, 80.9],
                [180.6, 72.7],
                [184.4, 68.0],
                [175.5, 70.9],
                [180.6, 72.5],
                [177.0, 72.5],
                [177.1, 83.4],
                [181.6, 75.5],
                [176.5, 73.0],
                [175.0, 70.2],
                [174.0, 73.4],
                [165.1, 70.5],
                [177.0, 68.9],
                [192.0, 102.3],
                [176.5, 68.4],
                [169.4, 65.9],
                [182.1, 75.7],
                [179.8, 84.5],
                [175.3, 87.7],
                [184.9, 86.4],
                [177.3, 73.2],
                [167.4, 53.9],
                [178.1, 72.0],
                [168.9, 55.5],
                [157.2, 58.4],
                [180.3, 83.2],
                [170.2, 72.7],
                [177.8, 64.1],
                [172.7, 72.3],
                [165.1, 65.0],
                [186.7, 86.4],
                [165.1, 65.0],
                [174.0, 88.6],
                [175.3, 84.1],
                [185.4, 66.8],
                [177.8, 75.5],
                [180.3, 93.2],
                [180.3, 82.7],
                [177.8, 58.0],
                [177.8, 79.5],
                [177.8, 78.6],
                [177.8, 71.8],
                [177.8, 116.4],
                [163.8, 72.2],
                [188.0, 83.6],
                [198.1, 85.5],
                [175.3, 90.9],
                [166.4, 85.9],
                [190.5, 89.1],
                [166.4, 75.0],
                [177.8, 77.7],
                [179.7, 86.4],
                [172.7, 90.9],
                [190.5, 73.6],
                [185.4, 76.4],
                [168.9, 69.1],
                [167.6, 84.5],
                [175.3, 64.5],
                [170.2, 69.1],
                [190.5, 108.6],
                [177.8, 86.4],
                [190.5, 80.9],
                [177.8, 87.7],
                [184.2, 94.5],
                [176.5, 80.2],
                [177.8, 72.0],
                [180.3, 71.4],
                [171.4, 72.7],
                [172.7, 84.1],
                [172.7, 76.8],
                [177.8, 63.6],
                [177.8, 80.9],
                [182.9, 80.9],
                [170.2, 85.5],
                [167.6, 68.6],
                [175.3, 67.7],
                [165.1, 66.4],
                [185.4, 102.3],
                [181.6, 70.5],
                [172.7, 95.9],
                [190.5, 84.1],
                [179.1, 87.3],
                [175.3, 71.8],
                [170.2, 65.9],
                [193.0, 95.9],
                [171.4, 91.4],
                [177.8, 81.8],
                [177.8, 96.8],
                [167.6, 69.1],
                [167.6, 82.7],
                [180.3, 75.5],
                [182.9, 79.5],
                [176.5, 73.6],
                [186.7, 91.8],
                [188.0, 84.1],
                [188.0, 85.9],
                [177.8, 81.8],
                [174.0, 82.5],
                [177.8, 80.5],
                [171.4, 70.0],
                [185.4, 81.8],
                [185.4, 84.1],
                [188.0, 90.5],
                [188.0, 91.4],
                [182.9, 89.1],
                [176.5, 85.0],
                [175.3, 69.1],
                [175.3, 73.6],
                [188.0, 80.5],
                [188.0, 82.7],
                [175.3, 86.4],
                [170.5, 67.7],
                [179.1, 92.7],
                [177.8, 93.6],
                [175.3, 70.9],
                [182.9, 75.0],
                [170.8, 93.2],
                [188.0, 93.2],
                [180.3, 77.7],
                [177.8, 61.4],
                [185.4, 94.1],
                [168.9, 75.0],
                [185.4, 83.6],
                [180.3, 85.5],
                [174.0, 73.9],
                [167.6, 66.8],
                [182.9, 87.3],
                [160.0, 72.3],
                [180.3, 88.6],
                [167.6, 75.5],
                [186.7, 101.4],
                [175.3, 91.1],
                [175.3, 67.3],
                [175.9, 77.7],
                [175.3, 81.8],
                [179.1, 75.5],
                [181.6, 84.5],
                [177.8, 76.6],
                [182.9, 85.0],
                [177.8, 102.5],
                [184.2, 77.3],
                [179.1, 71.8],
                [176.5, 87.9],
                [188.0, 94.3],
                [174.0, 70.9],
                [167.6, 64.5],
                [170.2, 77.3],
                [167.6, 72.3],
                [188.0, 87.3],
                [174.0, 80.0],
                [176.5, 82.3],
                [180.3, 73.6],
                [167.6, 74.1],
                [188.0, 85.9],
                [180.3, 73.2],
                [167.6, 76.3],
                [183.0, 65.9],
                [183.0, 90.9],
                [179.1, 89.1],
                [170.2, 62.3],
                [177.8, 82.7],
                [179.1, 79.1],
                [190.5, 98.2],
                [177.8, 84.1],
                [180.3, 83.2],
                [180.3, 83.2]
            ]
        }]
    });

    // Do the first zoom
    chart.pointer.zoomX = chart.pointer.zoomY = true;
    chart.zoom({
        xAxis: [{
            axis: chart.xAxis[0],
            min: 196,
            max: 199
        }],
        yAxis: [{
            axis: chart.yAxis[0],
            min: 81,
            max: 93
        }]
    });

    // Do the second zoom
    chart.pointer.zoomX = chart.pointer.zoomY = true;
    chart.zoom({
        xAxis: [{
            axis: chart.xAxis[0],
            min: 197,
            max: 199
        }],
        yAxis: [{
            axis: chart.yAxis[0],
            min: 84,
            max: 91
        }]
    });

    assert.deepEqual(
        chart.yAxis[0].getExtremes(),
        {
            min: 85,
            max: 91,
            dataMin: 85.5,
            dataMax: 90.9,
            userMin: 85.5,
            userMax: 90.9
        },
        'Two points should be within the zoomed area (#7639)'
    );

});

QUnit.test('Zooming chart with multiple panes', function (assert) {
    var chart = Highcharts.stockChart('container', {
        chart: {
            zoomType: 'xy'
        },
        yAxis: [{
            height: '60%'
        }, {
            top: '65%',
            height: '35%'
        }],
        series: [{
            type: 'candlestick',
            name: 'AAPL',
            data: [
                [1543242600000, 174.24, 174.95, 170.26, 174.62],
                [1543329000000, 171.51, 174.77, 170.88, 174.24],
                [1543415400000, 176.73, 181.29, 174.93, 180.94],
                [1543501800000, 182.66, 182.81, 177.78, 179.55],
                [1543588200000, 180.29, 180.33, 177.03, 178.58],
                [1543847400000, 184.46, 184.94, 181.21, 184.82]
            ]
        }, {
            type: 'column',
            name: 'Volume',
            data: [
                [1543242600000, 44998500],
                [1543329000000, 41387400],
                [1543415400000, 46062500],
                [1543501800000, 41770000],
                [1543588200000, 39531500],
                [1543847400000, 40802500]
            ],
            yAxis: 1
        }]
    });

    var controller = new TestController(chart);

    // Zoom on the first pane
    var yAxis1 = [chart.yAxis[1].min, chart.yAxis[1].max];
    controller.pan([100, 80], [200, 120]);

    assert.deepEqual(
        [
            chart.yAxis[1].min,
            chart.yAxis[1].max
        ],
        yAxis1,
        'Y zoom on the first pane should not affect y-zoom on the second pane (#1289)'
    );

    chart.zoomOut();

    // Zoom on the second pane
    controller.pan([50, 210], [550, 270]);
    var yAxis0 = [chart.yAxis[0].min, chart.yAxis[0].max];
    assert.deepEqual(
        [
            chart.yAxis[0].min,
            chart.yAxis[0].max
        ],
        yAxis0,
        'Y zoom on the second pane should not affect y-zoom on the first pane (#1289)'
    );

    chart = Highcharts.stockChart('container', {
        chart: {
            zoomType: 'y',
            inverted: true
        },
        yAxis: [{
            width: '60%'
        }, {
            left: '65%',
            width: '35%'
        }],
        series: [{
            type: 'candlestick',
            name: 'AAPL',
            data: [
                [1543242600000, 174.24, 174.95, 170.26, 174.62],
                [1543329000000, 171.51, 174.77, 170.88, 174.24],
                [1543415400000, 176.73, 181.29, 174.93, 180.94],
                [1543501800000, 182.66, 182.81, 177.78, 179.55],
                [1543588200000, 180.29, 180.33, 177.03, 178.58],
                [1543847400000, 184.46, 184.94, 181.21, 184.82]
            ]
        }, {
            type: 'column',
            name: 'Volume',
            data: [
                [1543242600000, 44998500],
                [1543329000000, 41387400],
                [1543415400000, 46062500],
                [1543501800000, 41770000],
                [1543588200000, 39531500],
                [1543847400000, 40802500]
            ],
            yAxis: 1
        }]
    });

    controller = new TestController(chart);
    controller.pan([180, 200], [250, 300]);

    yAxis1 = [chart.yAxis[1].min, chart.yAxis[1].max];
    assert.deepEqual(
        [
            chart.yAxis[1].min,
            chart.yAxis[1].max
        ],
        yAxis1,
        'Y zoom on the first pane should not affect y-zoom on the second pane when chart inverted (#1289)'
    );

    chart.zoomOut();

    controller.pan([500, 200], [530, 300]);

    yAxis0 = [chart.yAxis[0].min, chart.yAxis[0].max];
    assert.deepEqual(
        [
            chart.yAxis[0].min,
            chart.yAxis[0].max
        ],
        yAxis0,
        'Y zoom on the second pane should not affect y-zoom on the first pane when chart inverted (#1289)'
    );
});