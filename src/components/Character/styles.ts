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
    border-bottom: solid;
    border-color: var(--black);
    margin: 20px;
  }
`;
