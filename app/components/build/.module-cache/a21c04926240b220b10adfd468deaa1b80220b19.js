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
            React.createElement("table", {className: "table table-striped"}, 
                  React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "Title"), 
                        React.createElement("th", null, "Description"), 
                        React.createElement("th", null, "Topic"), 
                        React.createElement("th", null, "Complete"), 
                        React.createElement("th", null, "Priority"), 
                        React.createElement("th", null, "Optional")
                    )
                  ), 
                 React.createElement("tbody", null, 
                    this.props.Items.map(function(item, i) {
                      return (
                        React.createElement("tr", {key: i}, 
                          React.createElement("td", null, item.title), 
                          React.createElement("td", null, item.description), 
                          React.createElement("td", null, item.topic), 
                          React.createElement("td", null, item.complete == true ? 'Yes' : 'No'), 
                          React.createElement("td", null, item.priority), 
                          React.createElement("td", null, item.optional == true ? 'Yes' : 'No')
                        )
                      );
                    })

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
