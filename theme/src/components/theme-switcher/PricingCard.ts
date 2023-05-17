import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pricing-card')
export class PricingCard extends LitElement {
  static styles = css`
    .card {
      padding: 1em;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin: 1em;
      text-align: center;
    }
    .price {
      font-size: 2em;
      color: #333;
    }
    .features {
      list-style-type: none;
      padding: 0;
    }
  `;

  @property({ type: String })
  title = '';

  @property({ type: String })
  price = '';

  @property({ type: Array })
  features: string[] = [];

  @property({ type: String })
  ctaLink = '';

  render() {
    return html`
      <div class="card">
        <h2>${this.title}</h2>
        <p class="price">${this.price}</p>
        <ul class="features">
          ${this.features.map(feature => html`<li>${feature}</li>`)}
        </ul>
        <a href="${this.ctaLink}"><button>Get Started</button></a>
      </div>
    `;
  }
}
