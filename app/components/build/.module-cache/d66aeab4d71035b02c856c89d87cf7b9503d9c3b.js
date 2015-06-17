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
        handleDescChange: function(value) {
        	this.state.item.description = value
        	this.setState({ item: this.state.item })
    	},
        handleTopicChange: function(value) {
        	this.state.item.topic = value
        	this.setState({ item: this.state.item })
    	},
        handlePriorityChange: function(value) {
        	this.state.item.priority = value
        	this.setState({ item: this.state.item })
    	},
        handleCompleteChange: function(value) {
        	this.state.item.complete = value
        	this.setState({ item: this.state.item })
    	},
        render: function() {
        	
            var urlLink = {
                    value: this.state.item.url,
                    requestChange: this.handleUrlChange.bind(null)
                };

            var notesLink = {
                    value: this.state.item.description,
                    requestChange: this.handleDescChange.bind(null)
                };

            var topicLink = {
                    value: this.state.item.topic,
                    requestChange: this.handleUrlChange.bind(null)
                };

            var priorityLink = {
            		value: this.state.item.priority,
                    requestChange: this.handleUrlChange.bind(null)
                };
            
            var completeLink = {
                    value: this.state.item.complete,
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
				    React.createElement("input", {type: "text", className: "form-control", id: "notes", placeholder: "Notes", valueLink: notesLink})
				  ), 
				  React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {for: "tags"}, "Tags"), 
				    React.createElement("input", {type: "text", className: "form-control", id: "tags", placeholder: "Tags", valueLink: topicLink})
				  ), 
				  React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {for: "priority"}, "Tags"), 
				    React.createElement("input", {type: "text", className: "form-control", id: "priority", placeholder: "priority", valueLink: priorityLink})
				  ), 
				  React.createElement("div", {className: "checkbox"}, 
				    React.createElement("label", null, 
				      React.createElement("input", {type: "checkbox", valueLink: completeLink}), " Optional"
				    )
				  ), 
				  React.createElement("button", {onClick: this.addNewItem.bind(this), className: "btn btn-default"}, "Submit"), 

				  React.createElement("p", null, "Url - ", this.state.item.url), 
				  React.createElement("p", null, "Notes - ", this.state.item.description), 
				  React.createElement("p", null, "Tags - ", this.state.item.topic), 
				  React.createElement("p", null, "Priority - ", this.state.item.priority), 
				  React.createElement("p", null, "Complete - ", this.state.item.complete)
                
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
