import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name
    }

    this.onChangeName = this.onChangeName.bind(this)
  }
  onChangeId = (e) => {
    this.setState({ id: e.target.value })
  }
  onChangeName(e) {
    this.setState({ name: e.target.value })
  }
  onSub = (e) => {
    e.preventDefault();

    this.props.editProductCallback({
      id: this.state.id,
      name: this.state.name,
      desc: this.props.product.desc
    })
  }

  render() {
    const { id, name } = this.state
    return (
      <form onSubmit={this.onSub}>
        <input type="text" disabled name="id" value={id} onChange={this.onChangeId} />
        <input type="text" name="name" value={name} onChange={this.onChangeName} />
        <button type="submit" >Spara</button>
      </form>
    )
  }
}
