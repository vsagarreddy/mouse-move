"use strict";
var routes = [
    {
        "path": "path1",
        "name": "name1",
        "children": [
            {
                "path": "path11",
                "name": "name11",
                "children": [
                    {
                        "path": "path12",
                        "name": "name12",
                        "children": [
                            {
                                "path": "path13.1",
                                "name": "name13.1",
                                "children": []
                            },
                            {
                                "path": "path13.2",
                                "name": "name13.2",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
function _generateMenuItems() {
    // const loadedRoutes: Inode[] = routes.filter((config: any) => (config && config.title && config.path))
    var loadedRoutes = routes.filter(function (config) { return (config && config.path); })
        .map(function (parent) {
        // if (parent.children && parent.children.length) {
        parent.isWorkSpace = true;
        parent.children = !!(parent.children && parent.children.length) ? _constructChildren(parent, parent.path, 'web_asset') : [];
        // }
        return parent;
    });
    // this.dataSource.data = [...loadedRoutes];
    console.log('########## Routes ######### : ', JSON.stringify(loadedRoutes));
    // this.dataSource.data = TREE_DATA
}
function _constructChildren(parent, parentPath, icon) {
    return parent.children
        // .filter((child: Inode) => (child.path && child.path !== '**') && child.title)
        .filter(function (child) { return (child.path && child.path !== '**'); })
        .map(function (child) {
        var childPath = parentPath ? "".concat(parentPath, "/").concat(child.path) : child.path;
        child.isWorkSpace = !!(child.children && child.children.length);
        child.children = child.isWorkSpace ? _constructChildren(child, childPath) : [];
        child.path = childPath;
        return child;
    });
}
_generateMenuItems();
