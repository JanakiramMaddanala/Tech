var application = function () {
    //private variables and functions
    var components = new Array();
    //initialization
    components.push(1);
    //public interface
    return {
        getComponentCount: function () {
            return components.length;
        },
        registerComponent: function (component) {
            if (typeof component == 'object') {
                components.push(component);
            }
        }
    };
}();




