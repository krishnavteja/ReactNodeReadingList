(function () {
    
    'use strict';
    
    var ManageReadItem = React.createClass({
    	// Note: Not using LinkedStateMixin mixin here since it does not work with nested objects yet.
    	//mixins: [React.addons.LinkedStateMixin],
        setInitialData: function() {

            var that = this;

            var itemIdParamValue = getParameterByName('itemid');

            if(itemIdParamValue)
            {
            	this.itemId = itemIdParamValue;

	            $.ajax({
                url: "http://localhost:8888/api/readitem/" + itemIdParamValue,
                dataType: 'json',
                success: function(data) {
                        that.setState({ item: data });
                    },
                error: function(XHR, textStatus, errorThrown){
                        alert(textStatus + ":" + errorThrown);
                } 
            });
            }
          },
        getInitialState: function() {
            return {item: { }};
          },
        componentDidMount: function() {
            this.setInitialData();
          },
        saveChanges: function() {
        	var type = "POST";
        	var url = "http://localhost:8888/api/newreaditem";

        	if(this.itemId)
        	{
        		type = "PUT";
        		url = "http://localhost:8888/api/readitem/" + this.itemId;
        	}

			var postData = "url=" + this.state.item.url + "&description=" + this.state.item.description + "&topic=" + this.state.item.topic + 
					"&priority=" + this.state.item.priority + "&complete=" + this.state.item.complete;

			$.ajax({
				  type: type,
				  url: url,
				  data: postData,
				  success: function(result){
				        alert( "Data Saved: " + result.success );
				  },
				  error: function(XMLHttpRequest, textStatus, errorThrown) {
				     alert("some error - " + textStatus + " - " + errorThrown + " - " + XMLHttpRequest);
				  }
			});            
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
                    requestChange: this.handleTopicChange.bind(null)
                };

            var priorityLink = {
            		value: this.state.item.priority,
                    requestChange: this.handlePriorityChange.bind(null)
                };
             
            var completeLink = {
                    check: this.state.item.complete,
                    requestChange: this.handleCompleteChange.bind(null)
                };
            	
            return (

            	<div className="container">
                <div className="row">
	                <div className="col-md-11 col-sm-10 col-xs-9">
	                    <h1 style={{ textAlign : 'center' }}>Manage Read Item</h1>
	                </div>
	                <div className="col-md-1 col-sm-2 col-xs-3">
	                    <a href="home.html" className="btn btn-default btn-sm" style={{marginTop:'24px'}}>Home</a>
	                </div>
            	</div>

				  <div className="form-group">
				    <label for="url">Url</label>
				    <input type="url" className="form-control" id="url" placeholder="Enter Url" valueLink={urlLink}/>
				  </div>
				  <div className="form-group">
				    <label for="notes">Notes</label>
				    <input type="text" className="form-control" id="notes" placeholder="Notes" valueLink={notesLink}/>
				  </div>
				  <div className="form-group">
				    <label for="tags">Tags</label>
				    <input type="text" className="form-control" id="tags" placeholder="Tags" valueLink={topicLink}/>
				  </div>
				  <div className="form-group">
				    <label for="priority">Priority</label>
				    <input type="text" className="form-control" id="priority" placeholder="priority" valueLink={priorityLink}/>
				  </div>
				  <div className="checkbox">
				    <label>
				      <input type="checkbox" checkedLink={completeLink}/> Optional
				    </label>
				  </div>
				  <button onClick={this.saveChanges.bind(this)} className="btn btn-default">Submit</button>

				  <p>Url - {this.state.item.url}</p>
				  <p>Notes - {this.state.item.description}</p>
				  <p>Tags - {this.state.item.topic}</p>
				  <p>Priority - {this.state.item.priority}</p>
				  <p>Complete - {this.state.item.complete  ? this.state.item.complete.toString() : ''}</p>
                
            </div>);
        }
    }); 
    
    function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
    React.render(
      <ManageReadItem />,
      document.getElementById('managereaditemcontainer')
    );    
    
})();
