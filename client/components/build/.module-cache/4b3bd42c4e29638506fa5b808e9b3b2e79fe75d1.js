(function () {
    
    'use strict';
    
    var ManageReadItem = React.createClass({displayName: "ManageReadItem",
    	// Note: Not using LinkedStateMixin mixin here since it does not work with nested objects yet.
    	//mixins: [React.addons.LinkedStateMixin],
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
            return {item: { }};
          },
        componentDidMount: function() {
            this.setInitialData();
          },
        addNewItem: function() {
            
            
        },
        handleUrlChange: function(value) {
        	this.state.item.url = value
        	this.setState({ item: this.state.item })
    	},
        render: function() {
        	
            var urlLink = {
                    value: this.state.item.url,
                    requestChange: this.handleUrlChange.bind(null)
                };
            	
            return (

            	React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row"}, 
	                React.createElement("div", {className: "col-md-11 col-sm-10 col-xs-9"}, 
	                    React.createElement("h1", {style: { textAlign : 'center'}}, "Manage Read Item")
	                ), 
	                React.createElement("div", {className: "col-md-1 col-sm-2 col-xs-3"}, 
	                    React.createElement("a", {href: "home.html", className: "btn btn-default btn-sm", style: {marginTop:'24px'}}, "Home")
	                )
            	), 

				  React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {for: "url"}, "Url"), 
				    React.createElement("input", {type: "url", className: "form-control", id: "url", placeholder: "Enter Url", valueLink: urlLink})
				  ), 
				  React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {for: "notes"}, "Notes"), 
				    React.createElement("input", {type: "text", className: "form-control", id: "notes", placeholder: "Notes"})
				  ), 
				  React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {for: "tags"}, "Tags"), 
				    React.createElement("input", {type: "text", className: "form-control", id: "tags", placeholder: "Tags"})
				  ), 
				  React.createElement("div", {className: "checkbox"}, 
				    React.createElement("label", null, 
				      React.createElement("input", {type: "checkbox"}), " Optional"
				    )
				  ), 
				  React.createElement("button", {onClick: this.addNewItem.bind(this), className: "btn btn-default"}, "Submit")
                
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
