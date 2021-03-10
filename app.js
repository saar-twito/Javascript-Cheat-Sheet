

for (let i = 0; i < 5; i++) {
    // Count = 1 Bad (Not following the changes)
    // Here the count don't have an accuses to the previous value.
    // So we can say that it always be the value after the first rendering
    setCount(count + 1);

    // Count = 5 Good (Following the changes) ** Use This Way **
    // Here the count has an accuses to the previous value.
    // So for every rendering it will have the previous value and add to it. 
    setCount((prevState) => prevState + 1);
}

