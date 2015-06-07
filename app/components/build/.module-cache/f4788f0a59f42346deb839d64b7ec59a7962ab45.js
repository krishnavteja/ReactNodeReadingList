(function () {
    
    'use strict';
    
    var items = ["Test1", "Test2", "Test3" ];

    var ReadingList = React.createClass({displayName: "ReadingList",
        render: function(){
            return (
                React.createElement("h1", null, "this.props.Items.length")
            );
        }
    });
    
    
    React.render(
      React.createElement(ReadingList, {Items: items}),
      document.getElementById('example')
    );    
    
})();
