function iterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    // Object.entries(exampleObj).map(entry => {
    //     let key = entry[0];
    //     let value = entry[1];
    //     console.log(key, value);
    // });

    Object.entries(exampleObj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
    });
    console.log("-------------------------------------------")
    for (const [key, value] of Object.entries(exampleObj)) {
        console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
    }
    console.log("-------------------------------------------")
    Object.keys(exampleObj).forEach((key) => {
        const value = exampleObj[key];
        console.log(`${key} ${value}`)
    })
    console.log("-------------------------------------------")
    Object.values(exampleObj).forEach((value) => {

        console.log(`${value}`)
    })
    console.log("-------------------------------------------")
    Object.entries(exampleObj).reduce((acc, [key, value]) => {
        console.log(key, ":", value);
        return acc;
    }, null);
}
iterateObject();