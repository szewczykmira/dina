import { css } from 'lit';

export const styles = css`
  :host {
    width: 33%;
    font-size: calc(8px + 1vmin);
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

  .male {
    color: var(--maroon);
  }

  .female {
    color: var(--teal);
  }

  .undefined {
    color: var(--black);
  }

  .title {
    font-size: calc(10px + 2vmin);
    display: flex;
  }
  .name {
    flex: 1;
  }
`;
