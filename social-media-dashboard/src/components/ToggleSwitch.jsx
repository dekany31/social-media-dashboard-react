import styled from 'styled-components';

function ToggleSwitch({ onChange, checked }) {
  // a parameterek a funkcionalitast valtoztatjak onchange lefut, checked true vagy false
  const SpanStyles = styled.div`
  .toggle {
  background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  width: 45px;
  height: 22px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}
.toggle-active {
  background-color: #2196F3;
  width: 45px;
  height: 22px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
input {
  display: none;
}
.slider {
  height: 17px;
  width: 17px;
  background-color:hsl(232, 19%, 15%);
  border-radius: 12px;
  margin: 2.5px;
}
input:checked + .toggle {
  background-color: #2196F3;
}
input:checked + .toggle > .slider {
  align-self: flex-end;
}
  `

  return (
    <SpanStyles>
      <input type="checkbox" id="example" onChange={onChange} checked={checked} />
      <label for="example" class="toggle">
        <div class="slider"></div>
      </label>
    </SpanStyles>
  );
}

export default ToggleSwitch;