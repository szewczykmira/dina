import { css } from 'lit';

export const styles = css`
  :host {
    font-size: calc(10px + 2vmin);
    color: var(--black);
    margin: 0 0;
  }

  main {
    flex-grow: 1;
  }

  .go-up-button {
    position: fixed;
    bottom: 5%;
    right: 5%;
  }
`;
