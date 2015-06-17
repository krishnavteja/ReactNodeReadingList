(function () {
    
    'use strict';
    
    var ReadingList = React.createClass({displayName: "ReadingList",
        loadReadItemsFromServer: function() {

            var that = this;

            $.ajax({
                url: "http://localhost:8888/api/readitems",
                dataType: 'json',
                success: function(data) {
                        that.setState({ items: data });
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
            this.loadReadItemsFromServer();
          },
        goToManagePage: function(item, e){
            if (!e) var e = window.event;
                e.cancelBubble = true;
            if (e.stopPropagation) 
                e.stopPropagation();
            location.href = "managereaditem.html?itemid=" + item._id;
        },
        deleteItem: function(item, e){
            if (!e) var e = window.event;
                e.cancelBubble = true;
            if (e.stopPropagation) 
                e.stopPropagation();
            
            var itemId = item._id;

            $.ajax({
                url: "http://localhost:8888/api/readitem/" + itemId,
                type: 'delete',
                dataType: 'json',
                success: function(data) {
                    var index = this.state.items.indexOf(item);
                        if (index > -1) {
                            this.state.items.splice(index, 1);
                        }
                    },
                error: function(XHR, textStatus, errorThrown){
                        alert(textStatus + ":" + errorThrown);
                } 
            });
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
                                        React.createElement("button", {onClick: this.goToManagePage.bind(this, item), className: "btn btn-default btn-sm"}, "Edit"), 
                                        React.createElement("button", {onClick: this.deleteItem.bind(this, item), className: "btn btn-default btn-sm"}, "Delete")
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
