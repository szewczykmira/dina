import { css } from 'lit';

export const styles = css`
  :host {
    --bottom-border-color: var(--black);
    width: 33%;
    font-size: calc(8px + 1vmin);
  }

  @media (max-width: 800px) {
    :host {
      width: 100%;
      -bottom-border-color: var(—-teal);
    }
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    :host {
      width: 50%;
      -bottom-border-color: var(—-teal);
    }
  }

  .characterCard {
    border-bottom: solid;
    border-color: var(--bottom-border-color);
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
