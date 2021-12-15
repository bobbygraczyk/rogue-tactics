// let row = "";
// cells = "";
// let grid = "";
// for (let i = 0; i < 24; i++) {
//     cells = "";
//     let left = 0;
//     let odd;
//     if (i % 2 == 0) {
//         odd = " odd";
//     } else {
//         odd = "";
//     }

//     if (i <= 8) {
//         for (let x = 0; x <= i; x++) {
//             cells += '<div class="game_cell"><div class="hover"></div></div>'
//         }
//     } else if (i <= 16) {
//         for (let x = 0; x < 8; x++) {
//             cells += '<div class="game_cell"><div class="hover"></div></div>'
//         }
//     } else {
//         for (let x = (24 - i); x > 0; x--) {
//             cells += '<div class="game_cell"><div class="hover"></div></div>'
//         }
//     }

//     row = '<div class="row' + odd + '" style="left: ' + i * 8 + 'px;">' + cells + '</div>'

//     grid += row;
//}

//console.log(grid);

//document.getElementsByClassName("grid-container")[0].innerHTML = grid;

