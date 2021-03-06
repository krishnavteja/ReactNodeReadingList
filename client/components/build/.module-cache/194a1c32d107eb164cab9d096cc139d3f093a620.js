(function () {
    
    'use strict';
    
    var items = [{ title: "Title 1",
    url: "www.angular.com",
    description: "Description 1",
    topic: "Angular",
    complete: false,
    priority: 1,
    optional: false }, 
    { title: "Title 2",
    url: "www.react.com",
    description: "Description 2",
    topic: "React",
    complete: false,
    priority: 2,
    optional: false }, 
    { title: "Title 3",
    url: "www.Node.com",
    description: "Description 3",
    topic: "Node",
    complete: true,
    priority: 3,
    optional: true }];

    var ReadingList = React.createClass({displayName: "ReadingList",
        render: function() {
            return (React.createElement("div", null, 
            React.createElement("h1", null, "Reading List"), 
            
            React.createElement("a", {"data-toggle": "collapse", href: "#collapseExample", "aria-expanded": "false", 
            "aria-controls": "collapseExample"}, 
              "Link with href"
            ), 
            React.createElement("div", {className: "collapse", id: "collapseExample"}, 
              React.createElement("div", null, 
                "Test"
              )
            )
            
            ));
        }
    });
    
    
    React.render(
      React.createElement(ReadingList, {Items: items}),
      document.getElementById('example')
    );    
    
})();
