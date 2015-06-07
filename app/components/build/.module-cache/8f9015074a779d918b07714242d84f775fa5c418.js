(function () {
    
    'use strict';
    
    var items = ["Test1", "Test2", "Test3" ];

    var ReadingList = React.createClass({displayName: "ReadingList",
        render: function() {
            return (React.createElement("div", null, 
             this.props.Items.map(function(item) {
                    return React.createElement("div", null, item)
                })
            
            ));
        }
    });
    
    
    React.render(
      React.createElement(ReadingList, {Items: items}),
      document.getElementById('example')
    );    
    
})();
