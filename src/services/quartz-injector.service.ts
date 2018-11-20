
export function Injectable(target: any) {

    var original = target;

    function construct(constructor, args) {
        var c : any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }
    
    var f : any = function (...args) {
        console.log("New: " + original.name);
        return construct(original, args);
    }
    
    f.prototype = original.prototype;
    
    
    return f;

}