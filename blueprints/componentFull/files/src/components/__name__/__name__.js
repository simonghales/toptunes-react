import React from 'react'

class <%= pascalEntityName %> extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='<%= pascalEntityName %>'>
        <h1><%= pascalEntityName %></h1>
      </div>
    );
  }

}

<%= pascalEntityName %>.propTypes = {
}

export default <%= pascalEntityName %>
