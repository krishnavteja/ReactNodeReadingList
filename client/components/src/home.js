(function () {
    
    'use strict';
    
    var ReadingList = React.createClass({
        loadReadItemsFromServer: function() {

            var that = this;

            $.ajax({
                url: "http://localhost:3000/api/readitems",
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
            location.href = "manage/" + item._id;
        },
        deleteItem: function(item, e){
            var that = this;
            var existingItems = this.state.items;

            if (!e) var e = window.event;
                e.cancelBubble = true;
            if (e.stopPropagation) 
                e.stopPropagation();
            
            var itemId = item._id;

            $.ajax({
                url: "http://localhost:3000/api/readitem/" + itemId,
                type: 'delete',
                dataType: 'json',
                success: function(data) {
                    var index = existingItems.indexOf(item);
                        if (index > -1) {
                            existingItems.splice(index, 1);
                            that.setState({ items: existingItems });
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

            if(url.indexOf('http') == -1)
                url = 'http://' + url;

            location.href = url;
        },
        render: function() {
            return (<div className="container">
                <div className="row">
                <div className="col-md-11 col-sm-10 col-xs-9">
                    <h1 style={{ textAlign : 'center' }}>Reading List</h1>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-3">
                    <a href="manage" className="btn btn-primary" style={{marginTop:'24px'}}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </a>
                </div>
            </div>
                
            <div className="list-group">
            
            {this.state.items.map(function(item, i) {
                      return (
                          <a onClick={this.goToUrl.bind(this, item.url)} key={i} className="list-group-item read-item-link">
                              <div className="row">
                                    <div className="col-md-11 col-sm-10 col-xs-9">
                                       <strong>{item.title}</strong>
                                       <p>{item.description}</p>

                                        <span>Tags: </span><span><i>{item.topic}</i></span>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-xs-3">
                                        <span className="glyphicon glyphicon-edit" style={{marginRight: '8px'}} onClick={this.goToManagePage.bind(this, item)}></span>
                                        <span className="glyphicon glyphicon-trash" onClick={this.deleteItem.bind(this, item)}></span>
                                    </div>
                            </div>
                        </a>
                      );
                    }, this)}
                </div>        
            </div>);
        }
    }); 

    
    React.render(
      <ReadingList />,
      document.getElementById('readitemscontainer')
    );    
    
})();
