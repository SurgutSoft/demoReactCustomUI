import React from 'react';
import {Link} from 'react-router-dom';
import Input from "../../../components/common/Input/Input";

/** @this LoginInputToken */
export default function render() {
  return (
    <main className="LoginInputToken">

      <Input
        disabled={this.state.loading}
        className="text-center"
        placeholder="••• •••"
        size="large"
        autoFocus={true}
        value={this.state && this.state.token}
        onChange={(text) => this.onChangeToken(text)}
      />


      {this.state.error ?
        <p className="text-center error-description">{this.state.error}</p> :
        <p className="text-center description">Enter the verification code from SMS</p>
      }

      <Link className="backIcon" to="/login">
        <i className="material-icons">chevron_left</i>
      </Link>
    </main>
  );
}
