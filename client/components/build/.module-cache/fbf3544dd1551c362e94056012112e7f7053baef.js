(function () {
    
    'use strict';
    
    var ManageReadItem = React.createClass({displayName: "ManageReadItem",
        setInitialData: function() {

            var that = this;

            var itemId = getParameterByName('itemid');

            if(itemId)
            {
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
            }
          },
        getInitialState: function() {
            return {item: []};
          },
        componentDidMount: function() {
            this.setInitialData();
          },
        render: function() {
            return (React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row"}, 
	                React.createElement("div", {className: "col-md-11 col-sm-10 col-xs-9"}, 
	                    React.createElement("h1", {style: { textAlign : 'center'}}, "Manage Read Item")
	                ), 
	                React.createElement("div", {className: "col-md-1 col-sm-2 col-xs-3"}, 
	                    React.createElement("a", {href: "home.html", className: "btn btn-default btn-sm", style: {marginTop:'24px'}}, "Home")
	                )
            	), 

            	React.createElement("form", null, 
				  React.createElement("div", {class: "form-group"}, 
				    React.createElement("label", {for: "exampleInputEmail1"}, "Email address"), 
				    React.createElement("input", {type: "email", class: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"})
				  ), 
				  React.createElement("div", {class: "form-group"}, 
				    React.createElement("label", {for: "exampleInputPassword1"}, "Password"), 
				    React.createElement("input", {type: "password", class: "form-control", id: "exampleInputPassword1", placeholder: "Password"})
				  ), 
				  React.createElement("div", {class: "form-group"}, 
				    React.createElement("label", {for: "exampleInputFile"}, "File input"), 
				    React.createElement("input", {type: "file", id: "exampleInputFile"}), 
				    React.createElement("p", {class: "help-block"}, "Example block-level help text here.")
				  ), 
				  React.createElement("div", {class: "checkbox"}, 
				    React.createElement("label", null, 
				      React.createElement("input", {type: "checkbox"}), " Check me out"
				    )
				  ), 
				  React.createElement("button", {type: "submit", class: "btn btn-default"}, "Submit")
				)
                
            ));
        }
    }); 
    
    function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
    React.render(
      React.createElement(ManageReadItem, null),
      document.getElementById('managereaditemcontainer')
    );    
    
})();
