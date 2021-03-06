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
            
            React.createElement("div", {class: "panel-group", id: "accordion", role: "tablist", "aria-multiselectable": "true"}, 
              React.createElement("div", {class: "panel panel-default"}, 
                React.createElement("div", {class: "panel-heading", role: "tab", id: "headingOne"}, 
                  React.createElement("h4", {class: "panel-title"}, 
                    React.createElement("a", {"data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne"}, 
                      "Collapsible Group Item #1"
                    )
                  )
                ), 
                React.createElement("div", {id: "collapseOne", class: "panel-collapse collapse in", role: "tabpanel", "aria-labelledby": "headingOne"}, 
                  React.createElement("div", {class: "panel-body"}, 
                    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                  )
                )
              ), 
              React.createElement("div", {class: "panel panel-default"}, 
                React.createElement("div", {class: "panel-heading", role: "tab", id: "headingTwo"}, 
                  React.createElement("h4", {class: "panel-title"}, 
                    React.createElement("a", {class: "collapsed", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseTwo", "aria-expanded": "false", "aria-controls": "collapseTwo"}, 
                      "Collapsible Group Item #2"
                    )
                  )
                ), 
                React.createElement("div", {id: "collapseTwo", class: "panel-collapse collapse", role: "tabpanel", "aria-labelledby": "headingTwo"}, 
                  React.createElement("div", {class: "panel-body"}, 
                    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                  )
                )
              ), 
              React.createElement("div", {class: "panel panel-default"}, 
                React.createElement("div", {class: "panel-heading", role: "tab", id: "headingThree"}, 
                  React.createElement("h4", {class: "panel-title"}, 
                    React.createElement("a", {class: "collapsed", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseThree", "aria-expanded": "false", "aria-controls": "collapseThree"}, 
                      "Collapsible Group Item #3"
                    )
                  )
                ), 
                React.createElement("div", {id: "collapseThree", class: "panel-collapse collapse", role: "tabpanel", "aria-labelledby": "headingThree"}, 
                  React.createElement("div", {class: "panel-body"}, 
                    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                  )
                )
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
