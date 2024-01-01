import styled from 'styled-components';

function ToggleSwitch() {

  // const changeTheme = function () {

  // };

  const SpanStyles = styled.div`
  .toggle {
  background: linear-gradient(to right, #2196F3, hsl(163, 72%, 41%));
  width: 45px;
  height: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}
.toggle-active {
  background-color: #2196F3;
  width: 45px;
  height: 20px;
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
  margin: 1.5px;
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
      <input type="checkbox" id="example" />
      <label for="example" class="toggle">
        <div class="slider"></div>
      </label>
    </SpanStyles>
  );
}

export default ToggleSwitch;