var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("h1", null, "Test")
        );
    }
});


React.render(
  React.createElement(MyComponent, null),
  document.getElementById('example')
);