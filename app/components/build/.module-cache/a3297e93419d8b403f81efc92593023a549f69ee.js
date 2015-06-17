(function () {
    
    'use strict';
    
    var ManageReadItem = React.createClass({displayName: "ManageReadItem",
    	mixins: [React.addons.LinkedStateMixin],
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
            return {item: { url : 'sdsds' }};
          },
        componentDidMount: function() {
            this.setInitialData();
          },
        doSomething: function(itemId, e){
            if (!e) var e = window.event;
                e.cancelBubble = true;
            if (e.stopPropagation) 
                e.stopPropagation();
            location.href = "managereaditem.html?itemid=" + itemId;
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

				  React.createElement("div", {className: "form-group"}, 
				    React.createElement("label", {for: "url"}, "Url"), 
				    React.createElement("input", {type: "url", className: "form-control", id: "url", placeholder: "Enter Url", valueLink: this.linkState('item.url')})
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
				  React.createElement("button", {onClick: this.doSomething.bind(this, item.url), className: "btn btn-default"}, "Submit")
                
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
