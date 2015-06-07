(function () {
    
    'use strict';
    
    // var items = [{ title: "Title 1",
    // url: "http://www.angular.com",
    // description: "Description 1",
    // topic: "Angular",
    // complete: false,
    // priority: 3,
    // optional: false }, 
    // { title: "Title 2",
    // url: "http://www.react.com",
    // description: "Description 2",
    // topic: "React",
    // complete: false,
    // priority: 2,
    // optional: false }, 
    // { title: "Title 3",
    // url: "http://www.Node.com",
    // description: "Description 3",
    // topic: "Node",
    // complete: true,
    // priority: 1,
    // optional: true }];

    var ReadingList = React.createClass({displayName: "ReadingList",
        loadCommentsFromServer: function() {

            $.ajax({
                url: "http://localhost:8888/api/readitems?callback=?",
                dataType: 'jsonp',
                jsonp: 'readitemsCallback',
                success: function(data) {
                        console.log('success');
                        console.log(JSON.stringify(data));
                    },
                error: function(XHR, textStatus, errorThrown){
                        alert(textStatus + ":" + errorThrown);
                } 
            });
          },
        getInitialState: function() {
            return {items: []};
          },
        componentDidMount: function() {
            this.loadCommentsFromServer();
          },
        render: function() {
            return (React.createElement("div", {className: "container"}, 
            React.createElement("h1", {style: { textAlign : 'center'}}, "Reading List"), 
            
            React.createElement("div", {className: "list-group"}, 
            
            this.state.items.map(function(item, i) {
                      return (
                          React.createElement("a", {href: item.url, target: "_blank", className: "list-group-item"}, 
                              React.createElement("div", null, 
                                   React.createElement("h3", null, item.title), 
                                   React.createElement("p", null, item.description), 

                                   React.createElement("strong", null, "Topic: "), React.createElement("span", null, item.topic)
                            )
                        )
                      );
                    })
                )
            ));
        }
    });

    function readitemsCallback(result)
    {
        var asdsd = result.length;
    } 
    
    React.render(
      React.createElement(ReadingList, null),
      document.getElementById('example')
    );    
    
})();
