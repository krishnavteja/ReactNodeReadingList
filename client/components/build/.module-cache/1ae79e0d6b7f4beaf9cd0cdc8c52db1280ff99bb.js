(function () {
    
    'use strict';
    
    var NewItem = React.createClass({displayName: "NewItem",
        setInitialData: function() {

            var that = this;

            // $.ajax({
            //     url: "http://localhost:8888/api/readitems?callback=?",
            //     dataType: 'jsonp',
            //     jsonp: 'readitemsCallback',
            //     success: function(data) {
            //             console.log('success');
            //             console.log(JSON.stringify(data));

            //             that.setState({ items: data });

            //         },
            //     error: function(XHR, textStatus, errorThrown){
            //             alert(textStatus + ":" + errorThrown);
            //     } 
            // });
          },
        getInitialState: function() {
            return {items: []};
          },
        componentDidMount: function() {
            this.setInitialData();
          },
        render: function() {
            return (React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-md-11 col-sm-10 col-xs-9"}, 
                    React.createElement("h1", {style: { textAlign : 'center'}}, "New Item")
                ), 
                React.createElement("div", {className: "col-md-1 col-sm-2 col-xs-3"}, 
                    React.createElement("a", {href: "home.html", className: "btn btn-default btn-sm", style: {marginTop:'24px'}}, "Home")
                )
            )
                
            ));
        }
    }); 
    
    React.render(
      React.createElement(ManageReadItem, null),
      document.getElementById('managereaditemcontainer')
    );    
    
})();
