// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. 
// The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, 
// giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


//notes: 
//for this problem, I think I can use a nes

function checkExam(arr1, arr2) {

    // let score = 0
    // for (i = 0; i < arr1.length; i++){
    //     if (arr2[i] === ''){score += 0}
    //     else if (arr1[i] !== arr2[i]){score -= 1}
    //     else if (arr1[i] === arr2[i]){score += 4}
    // }
    // return score

    let score = 0
    for (i = 0; i < arr1.length; i++){
        if (arr2[i]){
            if (arr1[i] === arr2[i]){
                score += 4
            } else {
                score -=1
            }
        }
    }
    return score < 0 ? 0 : score
}

///sexy best practices version from codewars person:
checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;