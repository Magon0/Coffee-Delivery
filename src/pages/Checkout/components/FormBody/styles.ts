import styled from 'styled-components';

export const FormHeader = styled.div`
  display: flex;
  div {
    padding-left: 0.5rem;
    padding-bottom: 2rem;
  }
  h4 {
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 16px;
    color: ${(prosp) => prosp.theme['base-subtitle']};
  }
  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const FormBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 2px;
  background: ${(props) => props.theme['base-card']};
`;

interface InputFormTextProps {
  InputWidth?: string;
  InputHeight?: string;
}
export const InputFormText = styled.input<InputFormTextProps>`
  width: ${(props) => props.InputWidth};
  height: ${(props) => props.InputHeight};
  margin-bottom: 1rem;
  margin-right: 0.75rem;
  font-size: 0.875rem;
  padding: 0.75rem;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-label']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`;