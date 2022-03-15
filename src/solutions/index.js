export const isUniqueV1 = (str) => {
    const strArr = str.split('').sort();
    for (let x = 0; x < strArr.length; x++) {
      if (strArr[x] === strArr[x - 1]) {
        return false;
      }
    }
    return true;
};
export const isUniqueV2 = (str) => {
    const chars = {};

    for (let x = 0; x < str.length; x++) {
        const thisChar = str[x];
        if (chars[thisChar] === true) {
            return false;
        }
        chars[thisChar] = true;
    }
    return true;
};
export const flatten = (ourArray) => {
    let newArray = [];
    // created an empty array to push our items into
    for (let x = 0; x < ourArray.length; x++) {
        let thisItem = ourArray[x];
        // defined the current item in the array

        if (Array.isArray(thisItem)) {
            // if the current item is an array
            let flattenItem = flatten(thisItem);
            // flatten it with this very function. It will runrecursively until all array items and sub-items are flatten.
            for (let y = 0; y < flattenItem.length; y++) {
                // push each flatten item to the new array
                newArray.push(flattenItem[y]);
            }
        } else {
            // however if the current item is not an array, just push it
            newArray.push(thisItem)
        }
    }

    return newArray;
    
};