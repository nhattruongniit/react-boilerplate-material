
export const getNestedValue = (obj, key) => {
    if (!key) return;
    
    try {
        key = key.replace(/\[(\w+)\]/g, '.$1'); // split indexes.
        key = key.replace(/^\.+/, ''); // remove leading dot.
        const a = key.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            let k = a[i];
            if (k in obj) {
                obj = obj[k];
            } else {
                return undefined;
            }
        }
        return obj;
    } catch (err) {
        return undefined;
    }
}

/* usage
const json = {
  user: {
    firstName: 'tony'
  }
}

getNestedValue(json, `user.firstName`) => tony
*/
