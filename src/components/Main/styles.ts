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
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--dina-app-background-color);
  }

  main {
    flex-grow: 1;
  }
`;
