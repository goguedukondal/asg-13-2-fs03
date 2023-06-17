import React from 'react';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      brand: '',
      
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.setState({
        title: this.props.item.title || '',
        brand: this.props.item.brand || '',
       
      });
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: this.state.title,
      brand: this.state.brand,
      
    };
   
    console.log(newItem);
  };

  render() {
    return (
      <div style={{width:"40vw",margin:"50px auto",padding:"20px",border:"1px solid black"}}>
        <form onSubmit={this.handleSubmit}>
        <label style={{margin:"20px"}}>
          ADD ITEM NAME:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            placeholder='enter mobile name'
            style={{margin:"20px"}}
          />
        </label>
        <br />
        <label style={{margin:"20px"}}>
          ITEM BRAND:
          <input
            value={this.state.brand}
            onChange={this.handleBrandChange}
            placeholder='enter mobile brand name'
            style={{margin:"20px"}}
          />
        </label>
        <br />
        <button type="submit">ADD ITEM</button>
      </form>
      <div>
        <h2>MOBILE NAME : {this.state.title}</h2>
        <p>MOBILE BRAND NAME : {this.state.brand}</p>
        <h3 style={{color:"red"}}>check the console as well</h3>
      </div>
      </div>
    );
  }
}

export default AddItemForm;
