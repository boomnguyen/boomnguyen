function InputText(props) {
  const {getValue} = props;
  return (
  <input type = 'text' onChange = {(e) =>{
      getValue(e.target.value)
  }}/>
  );
}

export default InputText;