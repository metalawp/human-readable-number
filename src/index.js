module.exports = function toReadable(number) {
    let words = [
        [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ],
        [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
    ];
    let d = number.toString().split("").length;
    number = number.toString().split("");
    let result = "";
    d == 2 && number[0] == "1"
        ? (result = words[1][number[1]])
        : (result = words[0][number[0]]);
    d == 2 && number[0] !== "1" ? (result = words[2][number[0]]) : false;
    number[1] !== undefined && number[2] !== undefined
        ? (result = result + " hundred")
        : false;
    number[1] !== undefined && number[1] !== "0" && number[1] !== "1" && d !== 2
        ? (result = result + " " + words[2][number[1]])
        : false;
    number[2] !== undefined && number[2] !== "0" && number[1] !== "1"
        ? (result = result + " " + words[0][number[2]])
        : false;
    number[1] == "1" && d !== 2
        ? (result = result + " " + words[1][number[2]])
        : false;
    d == 2 && number[0] !== "1" && number[1] !== "0"
        ? (result = result + " " + words[0][number[1]])
        : false;
    return result;
};
