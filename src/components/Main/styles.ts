import { css } from 'lit';

export const styles = css`
  :host {
    font-size: calc(10px + 2vmin);
    color: var(--black);
    margin: 0 0;
  }

  .change-location {
    position: fixed;
    background-color: var(--teal);
    z-index: 10000;
    padding: 0.3em;
  }
  .change-location:hover {
    cursor: pointer;
  }
  .go-up-button {
    bottom: 5%;
    right: 5%;
    margin-right: 1%;
    border-radius: 5px 25px 15px;
  }

  .go-down-button {
    bottom: 5%;
    right: 3%;
    border-radius: 15px 25px 5px;
  }
`;
