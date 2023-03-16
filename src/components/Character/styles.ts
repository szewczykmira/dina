import { css } from 'lit';

export const styles = css`
  :host {
    width: 33%;
  }

  @media (max-width: 800px) {
    :host {
      width: 100%;
    }
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    :host {
      width: 50%;
    }
  }

  .characterCard {
    border: solid;
    margin: 20px;
  }
`;
