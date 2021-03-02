import React from 'react';
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";

export default function render() {
  return (
    <main className="InputPhone">

      <Input
        label="Phone number"
        placeholder="+1"
        value={this.state.phone}
        onChange={(phone) => this.onChangePhone(phone)}
      />

      <Button
        type="primary"
        size="large"
        onClick={this.submitPhone}
        loading={this.state.loading}
        disabled={!this.isValidPhone}
      >
        Sign In or Create an Account
      </Button>


      {
        this.state.error ?
          <p className="text-center error-description">{this.state.error}</p> :
          <p className="text-center description">
            We will send you verification code
            Please enter your mobile phone number.<br/>
            We will send you a verification code
          </p>
      }

    </main>
  );
}
