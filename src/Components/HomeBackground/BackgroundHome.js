'use strict';
const t = function () {
    const a = document.querySelector('canvas'),
        i = a.getContext('2d'),
        n = [
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(255, 77, 90)',
        ];

    (a.width = window.innerWidth),
        (a.height = window.innerHeight),
        (a.style.display = 'block'),
        (i.lineWidth = 0.2),
        (i.strokeStyle = 'rgb(81, 162, 233)');

    let r = { x: (30 * a.width) / 100, y: (30 * a.height) / 100 };
    const e = window.innerWidth;
    let d;
    function o() {
        (this.x = Math.random() * a.width),
            (this.y = Math.random() * a.height),
            (this.vx = -0.5 + Math.random()),
            (this.vy = -0.5 + Math.random()),
            (this.radius = 1.5 * Math.random()),
            (this.colour = n[Math.floor(Math.random() * n.length)]);
    }

    (d =
        e > 1600
            ? { nb: 600, distance: 70, d_radius: 240, array: [] }
            : e > 1300
            ? { nb: 575, distance: 60, d_radius: 280, array: [] }
            : e > 1100
            ? { nb: 500, distance: 55, d_radius: 250, array: [] }
            : e > 800
            ? { nb: 450, distance: 50, d_radius: 220, array: [] }
            : e > 650
            ? { nb: 400, distance: 50, d_radius: 185, array: [] }
            : e > 500
            ? { nb: 325, distance: 45, d_radius: 170, array: [] }
            : { nb: 270, distance: 45, d_radius: 140, array: [] }),
        (o.prototype = {
            create: function () {
                i.beginPath(),
                    i.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                const t =
                    ((this.x - r.x) ** 2 + (this.y - r.y) ** 2) ** 0.5 /
                    (e / 1.7);
                (i.fillStyle = this.colour.slice(0, -1) + `,${1 - t})`),
                    i.fill();
            },
            animate: function () {
                for (let t = 1; t < d.nb; t++) {
                    const i = d.array[t];
                    i.y < 0 || i.y > a.height
                        ? ((i.vx = i.vx), (i.vy = -i.vy))
                        : (i.x < 0 || i.x > a.width) &&
                          ((i.vx = -i.vx), (i.vy = i.vy)),
                        (i.x += i.vx),
                        (i.y += i.vy);
                }
            },
            line: function () {
                for (let t = 0; t < d.nb; t++)
                    for (let a = 0; a < d.nb; a++) {
                        const n = d.array[t],
                            e = d.array[a];
                        if (
                            n.x - e.x < d.distance &&
                            n.y - e.y < d.distance &&
                            n.x - e.x > -d.distance &&
                            n.y - e.y > -d.distance &&
                            n.x - r.x < d.d_radius &&
                            n.y - r.y < d.d_radius &&
                            n.x - r.x > -d.d_radius &&
                            n.y - r.y > -d.d_radius
                        ) {
                            i.beginPath(),
                                i.moveTo(n.x, n.y),
                                i.lineTo(e.x, e.y);
                            let t =
                                ((n.x - r.x) ** 2 + (n.y - r.y) ** 2) ** 0.5 /
                                d.d_radius;
                            (t -= 0.3),
                                t < 0 && (t = 0),
                                (i.strokeStyle = `rgb(100, 100, 200, ${
                                    1 - t
                                })`),
                                i.stroke(),
                                i.closePath();
                        }
                    }
            },
        }),
        (window.onmousemove = function (t) {
            (r.x = t.pageX),
                (r.y = t.pageY),
                (d.array[0].x = t.pageX),
                (d.array[0].y = t.pageY),
                (d.array[0].radius = t = 1.5),
                (d.array[0].colour = '#51a2e9');
        }),
        (r.x = window.innerWidth / 2),
        (r.y = window.innerHeight / 2);

    const s = setInterval(() => {
        i.clearRect(0, 0, a.width, a.height);
        let t; // Declarar t aquí con let
        for (let a = 0; a < d.nb; a++) {
            d.array.push(new o());
            t = d.array[a];
            t.create();
        }
        t.line();
        t.animate();
    }, 1000 / 30);

    window.onresize = function () {
        clearInterval(s);
        t();
    };
};
window.onload = function () {
    t();
};
