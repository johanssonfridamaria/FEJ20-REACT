import React, { Component } from 'react'

export default class AddProductForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      desc: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.addProductCallback({
      id: Date.now().toString(),
      name: this.state.name,
      desc: this.state.desc
    })

    this.setState({
      name: '',
      desc: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={ this.onChange } />
        <input type="text" name="desc" value={this.state.desc} onChange={ this.onChange } />
        <button>Lägg till</button>
      </form>
    )
  }
}
