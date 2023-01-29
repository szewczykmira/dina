import { css } from 'lit';

export const styles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: var(--paradise-pink);
    margin: 0 0;
    background-color: var(--cosmic-latte);
  }

  main {
    flex-grow: 1;
  }
`;
