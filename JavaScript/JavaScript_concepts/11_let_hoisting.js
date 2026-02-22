
    // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)




    /*--------------------------------new one -----------------------------------*/
//     let x = "global";

// if (true) {
//     // TDZ for block-scoped "x" starts here
//     // console.log(x);   // ReferenceError (NOT "global"!)
//     let x = "block";     // TDZ ends
//     console.log(x);      // "block"
// }

// console.log(x);