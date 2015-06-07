(function () {
    
    'use strict';
    
    var ManageReadItem = React.createClass({
        setInitialData: function() {

            var that = this;

            var itemId = getParameterByName('itemid');

            if(itemId)
            {
            	alert(itemId);
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
            return (<div className="container">
                <div className="row">
                <div className="col-md-11 col-sm-10 col-xs-9">
                    <h1 style={{ textAlign : 'center' }}>Manage Read Item</h1>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-3">
                    <a href="home.html" className="btn btn-default btn-sm" style={{marginTop:'24px'}}>Home</a>
                </div>
            </div>
                
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
