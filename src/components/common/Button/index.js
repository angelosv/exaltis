import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 30px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #f9c707;
  background: #1d2b3c;
  transition: background 0.5s ease;
  &:hover {
    background: #1d2b3c;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #f9c707;
	`}
`;
