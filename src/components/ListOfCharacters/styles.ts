import { css } from 'lit';

export const styles = css`
  .characters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  button {
    margin-left: 1rem;
    background-color: var(--teal);
    border: none;
    color: var(--grey);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  button:disabled {
    color: var(--teal);
  }

  character-component {
    --bottom-border-color: var(--teal);
  }
`;
