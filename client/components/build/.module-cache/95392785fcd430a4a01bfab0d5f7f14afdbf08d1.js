(function () {
    
    'use strict';
    
    var tstitems = [{ 
        _id: "sdsdsd",
        title: "Title 1",
    url: "http://www.angular.com",
    description: "Description 1",
    topic: "Angular",
    complete: false,
    priority: 3,
    optional: false }, 
    { 
        _id: "qwqwq",
        title: "Title 2",
    url: "http://www.react.com",
    description: "Description 2",
    topic: "React",
    complete: false,
    priority: 2,
    optional: false }, 
    { 
        _id: "popop",
        title: "Title 3",
    url: "http://www.Node.com",
    description: "Description 3",
    topic: "Node",
    complete: true,
    priority: 1,
    optional: true }];

    var ReadingList = React.createClass({displayName: "ReadingList",
        loadReadItemsFromServer: function() {

            var that = this;

            $.ajax({
                url: "http://localhost:8888/api/readitems",
                dataType: 'json',
                //jsonp: 'readitemsCallback',
                success: function(data) {
                        //that.setState({ items: data });
                    },
                error: function(XHR, textStatus, errorThrown){
                        alert(textStatus + ":" + errorThrown);
                } 
            });
          },
        getInitialState: function() {
            return {items: tstitems};
          },
        componentDidMount: function() {
            this.loadReadItemsFromServer();
          },
        goToManagePage: function(itemId, e){
            if (!e) var e = window.event;
                e.cancelBubble = true;
            if (e.stopPropagation) 
                e.stopPropagation();
            location.href = "managereaditem.html?itemid=" + itemId;
        },
        goToUrl: function(url, e){
            if (!e) var e = window.event;
                e.cancelBubble = true;
            if (e.stopPropagation) 
                e.stopPropagation();
            location.href = url;
        },
        render: function() {
            return (React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-md-11 col-sm-10 col-xs-9"}, 
                    React.createElement("h1", {style: { textAlign : 'center'}}, "Reading List")
                ), 
                React.createElement("div", {className: "col-md-1 col-sm-2 col-xs-3"}, 
                    React.createElement("a", {href: "managereaditem.html", className: "btn btn-primary", style: {marginTop:'24px'}}, "New")
                )
            ), 
                
            React.createElement("div", {className: "list-group"}, 
            
            this.state.items.map(function(item, i) {
                      return (
                          React.createElement("a", {onClick: this.goToUrl.bind(this, item.url), key: i, className: "list-group-item read-item-link"}, 
                              React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-md-11 col-sm-10 col-xs-9"}, 
                                       React.createElement("strong", null, item.title), 
                                       React.createElement("p", null, item.description), 

                                        React.createElement("span", null, "Tags: "), React.createElement("span", null, React.createElement("i", null, item.topic))
                                    ), 
                                    React.createElement("div", {className: "col-md-1 col-sm-2 col-xs-3"}, 
                                        React.createElement("button", {onClick: this.goToManagePage.bind(this, item._id), className: "btn btn-default btn-sm"}, "Edit")
                                    )
                            )
                        )
                      );
                    }, this)
                )
            ));
        }
    }); 

    
    React.render(
      React.createElement(ReadingList, null),
      document.getElementById('readitemscontainer')
    );    
    
})();
