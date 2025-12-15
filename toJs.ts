let routes = [
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
]


function _generateMenuItems(): void {
  // const loadedRoutes: Inode[] = routes.filter((config: any) => (config && config.title && config.path))
  const loadedRoutes: any[] = routes.filter((config: any) => (config && config.path))
    .map((parent: any) => {
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

function _constructChildren(parent: any, parentPath: string, icon?: string): any[] {
  return parent.children
    // .filter((child: Inode) => (child.path && child.path !== '**') && child.title)
    .filter((child: any) => (child.path && child.path !== '**'))
    .map((child: any) => {
      const childPath = parentPath ? `${parentPath}/${child.path}` : child.path;
      child.isWorkSpace = !!(child.children && child.children.length);
      child.children = child.isWorkSpace ? _constructChildren(child, childPath) : [];
      child.path = childPath;
      return child
    });
}

_generateMenuItems();
