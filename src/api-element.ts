import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('api-element')
export class ApiElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
  @property({ type: String }) name = 'Call the API';

  @property({
    type: {
      "yada": String, "foo": Number, "bar": Boolean, "wah": String
    }
  })
  data = { yada: "null", foo: 1, bar: true, wah: "wah" };


  override render() {
    if (this.data.yada != "null") {
      this.name = "Clear the Data"
      return html`
        <h1> You've got data!</h1>
        <p>Yada = ${this.data.yada}</p>
        <p>Foo = ${this.data.foo}</p>
        <p>Bar = ${this.data.bar}</p>
        <p>Wah = ${this.data.wah}</p>
        <div>
        <button @click=${this._onClickClear} part="button">${this.name}</button>
    </div>
      `;
    } else {
      return html`
        <h1> Click the button!</h1>
        <button @click=${this._onClickApi} part="button">${this.name}</button>
      `;
    }
  }

  private _onClickApi() {
    if (this.data.yada == "null") {
      this.name = "Clear the Data";
      this.callApi();
    }
  }

  private _onClickClear() {
    if (this.data.yada != "null") {
      this.name = "Call the API";
      this.callClear();
    }
  }

  async callApi() {
    const response = await fetch('https://punk-production.up.railway.app/xmpl/datum', {
      method: 'POST'
    });
    const data = await response.text();
    const jsonData = JSON.parse(data);
    this.data = jsonData;
  }

  callClear() {
    this.data = { yada: "null", foo: 1, bar: true, wah: "wah" };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'api-element': ApiElement;
  }
}
