# Matchers

EasyTest has a built-in matcher library that allows you to test your code with a large number of matchers:

## toBe()
`toBe(expected, msg?: string)`

Asserts that the actual value is equal to the expected value. Matcher uses the `Object.is()` method to compare values.

## toBeNot()
`toBeNot(expected, msg?: string)`

Asserts that the actual value is not equal to the expected value. Matcher uses the `Object.is()` method to compare values.

## toBeStrictEqual()
`toBeStrictEqual(expected, msg?: string)` 

Asserts that the actual value is strict equal (uses `===`) to the expected value.

## toBeNotStrictEqual()
`toBeNotStrictEqual(expected, msg?: string)` 

Asserts that the actual value isn't strict equal (uses `!==`) to the expected value.

## toBeEqual()
`toBeEqual(expected, msg?: string)` 

Asserts that the actual value is equal (uses `==`) to the expected value.

## toBeNotEqual()
`toBeNotEqual(expected, msg?: string)` 

Asserts that the actual value is not equal (uses `!=`) to the expected value.

## toBeObject()
`toBeObject(expected, msg?: string)` 

Asserts that the actual object is equal to the expected object. Checks only own level properties and values.

## toBeTrue()
`toBeTrue(msg?: string)` 

Asserts that the actual value is `true`.

## toBeFalse()
`toBeFalse(msg?: string)` 

Asserts that the actual value is `false`.

## toBeBoolean()
`toBeBoolean(msg?: string)` 

Asserts that the actual value is a `boolean`.

## toBeMatch()
`toMatch(expected, msg?: string)` 

Asserts that the actual value matches the expected `RegExp` pattern.

## toNotMatch()
`toNotMatch(expected, msg?: string)` 

Asserts that the actual value does not match to the expected `RegExp` pattern.

## toBeDefined()
`toBeDefined(msg?: string)` 

Asserts that the actual value is defined.

## toBeUndefined()
`toBeUndefined(msg?: string)` 

Asserts that the actual value is undefined.

## toBeNull()
`toBeNull(msg?: string)` 

Asserts that the actual value is null.

## toBeNotNull()
`toBeNotNull(msg?: string)` 

Asserts that the actual value is not null.

## toBeGreaterThan()
`toBeGreaterThan(expected, msg?: string)` 

Asserts that the actual value is greater than the expected value.

## toBeGreaterThanOrEqual()
`toBeGreaterThanOrEqual(expected, msg?: string)` 

Asserts that the actual value is greater than or equal to the expected value.

## toBeLessThan()
`toBeLessThan(expected, msg?: string)` 

Asserts that the actual value is less than the expected value.

## toBeLessThanOrEqual()
`toBeLessThanOrEqual(expected, msg?: string)` 

Asserts that the actual value is less than or equal to the expected value.

## toBetween()
`toBetween(min, max, msg?: string)` 

Asserts that the actual value is between the specified minimum and maximum values.

## toBeInteger()
`toBeInteger(msg?: string)` 

Asserts that the actual value is an integer.

## toBeNotInteger()
`toBeNotInteger(msg?: string)` 

Asserts that the actual value is an integer.

## toBeSafeInteger()
`toBeSafeInteger(msg?: string)` 

Asserts that the actual value is a safe integer.

## toBeNotSafeInteger()
`toBeNotSafeInteger(msg?: string)` 

Asserts that the actual value is a safe integer.

## toBeFloat()
`toBeFloat(msg?: string)` 

Asserts that the actual value is a float.

## toBePositive()
`toBePositive(msg?: string)` 

Asserts that the actual value is positive.

## toBeNegative()
`toBeNegative(msg?: string)` 

Asserts that the actual value is negative.

## toBeFinite()
`toBeFinite(msg?: string)` 

Asserts that the actual value is finite.

## toBeNumber()
`toBeNumber(msg?: string)` 
 
Asserts that the actual value is a number and not is NaN.

## toBeNaN()
`toBeNaN(msg?: string)` 

Asserts that the actual value is NaN.

## toBeCloseTo()
`toBeCloseTo(expected, precision = 2, msg?: string)` 

Asserts that the actual value is close to the expected value within a certain precision.

## toThrow()
`toThrow(msg?: string)` 

Asserts that the actual function throws an error.

## toThrowError()
`toThrowError(expected, msg?: string)` 

Asserts that the actual function throws an error matching the expected value.

## toBeHEXColor()
`toBeHEXColor(msg?: string)` 

Asserts that the actual value is a HEX color.

## toBeRGBColor()
`toBeRGBColor(msg?: string)` 

Asserts that the actual value is an RGB color.

## toBeRGBAColor()
`toBeRGBAColor(msg?: string)` 

Asserts that the actual value is an RGBA color.

## toBeHSVColor()
`toBeHSVColor(msg?: string)` 

Asserts that the actual value is an HSL color.

## toBeHSLColor()
`toBeHSLColor(msg?: string)` 

Asserts that the actual value is an HSL color.

## toBeHSLAColor()
`toBeHSLAColor(msg?: string)` 

Asserts that the actual value is an HSLA color.

## toBeCMYKColor()
`toBeCMYKColor(msg?: string)` 

Asserts that the actual value is a CMYK color.

## toBeColor()
`toBeColor(msg?: string)` 

Asserts that the actual value is a valid color (HEX, RGB, RGBA, HSV, HSL, HSLA, or CMYK).

## toBeNotColor()
`toBeNotColor(msg?: string)` 

Asserts that the actual value is not a valid color (HEX, RGB, RGBA, HSV, HSL, HSLA, or CMYK).

## toHaveBeenCalled()
`toHaveBeenCalled(msg?: string)` 

Asserts the mock function was called at least once

## toHaveBeenCalledTimes()
`toHaveBeenCalledTimes(expected, msg?: string)` 

Asserts the mock function was called at least once

## toHaveBeenCalledWith()
`toHaveBeenCalledWith(expected, msg?: string)` 

Asserts that the mock function was called with specified arguments.

## toHaveBeenLastCalledWith()
`toHaveBeenLastCalledWith(expected, msg?: string)` 

Asserts that the mock function was called last with specified arguments.

## toContain()
`toContain(expected, msg?: string)` 

Asserts that the actual value contains the expected value.

## toNotContain()
`toNotContain(expected, msg?: string)` 

Asserts that the actual value does not contain the expected value.

## toBeDeepEqual()
`toBeDeepEqual(expected, msg?: string)` 

Asserts that the actual value is deeply equal to the expected value.

## toBeDeepEqualSafe()
`toBeDeepEqualSafe(expected, msg?: string)` 

Asserts that the actual value is deeply equal to the expected value using a safe comparison.

## toBeObjectStructureEqual()
`toBeObjectStructureEqual(expected, msg?: string)` 

Asserts that the actual structure is equal to the expected structure.

## toBeArrayEqual()
`toBeArrayEqual(expected, msg?: string)` 

Asserts that the actual array is equal to the expected array.

## toBeArray()
`toBeArray(msg?: string)` 

Asserts that the actual value is an array.

## toBeArraySorted()
`toBeArraySorted(msg?: string)` 

Asserts that the actual value is sorted.

## toBeArrayNotSorted()
`toBeArrayNotSorted(msg?: string)` 

Asserts that the actual value is not sorted.

## toBeArrayUnique()
`toBeArrayUnique(msg?: string)` 

Asserts that values in the array are unique.

## toBeArrayNotUnique()
`toBeArrayNotUnique(msg?: string)` 

Asserts that values in the array are not unique.

## toBeIP()
`toBeIP(msg?: string)` 

Asserts that the actual value is a valid IP address.

## toBeNotIP()
`toBeNotIP(msg?: string)` 

Asserts that the actual value isn't a valid IP address.

## toBeIPv4()
`toBeIPv4(msg?: string)` 

Asserts that the actual value is a valid IPv4 address.

## toBeIPv6()
`toBeIPv6(msg?: string)` 

Asserts that the actual value is a valid IPv6 address.

## toBeEmail()
`toBeEmail(msg?: string)` 

Asserts that the actual value is a valid email address.

## toBeUrl()
`toBeUrl(msg?: string)` 

Asserts that the actual value is a valid URL.

## toBeEmpty()
`toBeEmpty(msg?: string)` 

Asserts that the actual value is empty.

## toBeNotEmpty()
`toBeNotEmpty(msg?: string)` 

Asserts that the actual value is not empty.

## hasLength()
`hasLength(expected, msg?: string)` 

Asserts that the array-like object has the expected length.

## toBeBase64()
`toBeBase64(msg?: string)` 

Asserts that the actual value is a Base64 encoded string.

## toBeJson()
`toBeJson(msg?: string)` 

Asserts that the actual value is a JSON string.

## toBeXml()
`toBeXml(msg?: string)` 

Asserts that the actual value is an XML string.

## hasProperty()
`hasProperty(expected, msg?: string)` 

Asserts that the actual value has the specified property.

## hasNoProperty()
`hasNoProperty(expected, msg?: string)` 

Asserts that the actual value has not the specified property.

## toBeType()
`toBeType(type, msg?: string)` 

Asserts that the actual value is of the specified type.

## toBeInstanceOf()
`toBeInstanceOf(type, msg?: string)` 

Asserts that the actual value is an instance of the specified type.

## toBeString()
`toBeString(msg?: string)` 

Asserts that the actual value is a string.

## toBeFunction()
`toBeFunction(msg?: string)` 

Asserts that the actual value is a function.

## toBeAsyncFunction()
`toBeAsyncFunction(msg?: string)` 

Asserts that the actual value is an async function.

## toBeDate()
`toBeDate(msg?: string)` 

Asserts that the actual value is a date.

## toBeDateObject()
`toBeDateObject(msg?: string)` 

Asserts that the actual value is a date.

## toBeRegExp()
`toBeRegExp(msg?: string)` 

Asserts that the actual value is a regular expression.

## toBeSymbol()
`toBeSymbol(msg?: string)` 

Asserts that the actual value is a symbol.

## toBeBigInt()
`toBeBigInt(msg?: string)` 

Asserts that the actual value is a BigInt.

## toBeMap()
`toBeMap(msg?: string)` 

Asserts that the actual value is a Map.

## toBeSet()
`toBeSet(msg?: string)` 

Asserts that the actual value is a Set.

## toBeWeakMap()
`toBeWeakMap(msg?: string)` 

Asserts that the actual value is a WeakMap.

## toBeWeakSet()
`toBeWeakSet(msg?: string)` 

Asserts that the actual value is a WeakSet.

## toBeArrayBuffer()
`toBeArrayBuffer(msg?: string)` 

Asserts that the actual value is an ArrayBuffer.

## toBePromise()
`toBePromise(msg?: string)` 

Asserts that the actual value is a Promise.

## toBeHtmlElement()
`toBeHtmlElement(msg?: string)` 

Asserts that the actual value is an HTML element.

## toBeNode()
`toBeNode(msg?: string)` 

Asserts that the actual value is an HTML node.

## toBeDocument()
`toBeDocument(msg?: string)` 

Asserts that the actual value is an HTML document.

## toBeHtmlCollection()
`toBeHtmlCollection(msg?: string)` 

Asserts that the actual value is an HTML collection.

## toBeWindow()
`toBeWindow(msg?: string)` 

Asserts that the actual value is a Window object.

## toBeTextNode()
`toBeTextNode(msg?: string)` 

Asserts that the actual value is a Text node.

## hasClass()
`hasClass(expected, msg?: string)` 

Asserts that the HTML element has the specified class.

## hasNoClass()
`hasNoClass(expected, msg?: string)` 

Asserts that the HTML element has the specified class.

## hasAttribute()
`hasAttribute(expected, msg?: string)` 

Asserts that the HTML element has the specified attribute.

## hasNoAttribute()
`hasNoAttribute(expected, msg?: string)` 

Asserts that the HTML element has the specified attribute.

## hasChildren()
`hasChildren(msg?: string)` 

Asserts that the HTML element has children.

## hasNoChildren()
`hasNoChildren(msg?: string)` 

Asserts that the HTML element has children.

## hasParent()
`hasParent(msg?: string)` 

Asserts that the HTML element has a parent.

## hasNoParent()
`hasNoParent(msg?: string)` 

Asserts that the HTML element has no parent.