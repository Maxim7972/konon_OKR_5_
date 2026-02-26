function count(str) {
    const world = "аеёиоуыэюяaeiou"; 
    const result = {};

    const Str = str.toLowerCase();

    for (let char of Str) {
        if (world.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    }

    console.log(result);
}

count("Привет, как дела?");
