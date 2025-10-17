function createExtensibleObject () {
    return {
        extend (templateObject) {
            for (const [key, value] of Object.entries(templateObject)) {
                if (typeof value === 'function') {
                    Object.getPrototypeOf(this)[key] = value;
                }

                this[key] = value;
            }
        }
    };
}

const myObj = createExtensibleObject();

const myTemplate = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
};

myObj.extend(myTemplate);
console.log(myObj);