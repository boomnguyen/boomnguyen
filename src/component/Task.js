import React, {useState} from 'react';
import './task.css'
import Text from './Text';
import Status from './Status';
import InputText from './inputText';

function Task(props) {
  const {
      content,
      title,
      status,
      updateData,
  } = props;

  const [isEditting, setIsEditting] = useState(false);
  const [inputValue, setInputValue] = useState({value: '', index: ''})

  const getValue = (value, index) =>{
      setInputValue({value: value, index: index});
  }

  const saveData = () => {
    setIsEditting(!isEditting)
      updateData(inputValue.value, inputValue.index);
  }

  const showInputText = () => {
      if (isEditting) {
          return (
              <div className='task__input'>
                  <Text content={title}/>
                  <InputText getValue = {getValue}/>
                  <button className="btn__save" onClick={saveData}>Save</button>
              </div>
          )
      } else {
          return (
            <div className='task'>
                <div onClick = {() => {setIsEditting(!isEditting)}}>
                    <Text isTitle content={title} />
                    <Text content={content} />
                </div>
                <li >
                    <Status status={status} />
                </li>
              </div>
          )
      }
  }


  const chooseStyle = () => {
      if (props.isLastItem) return {
          color: 'red',
          borderRadius: '0 0 20px 20px',

      };
      if (props.isFirstItem) return {
          color: 'blue',
      };
      return;
  }

  return (
      <li style={{...chooseStyle() }}>
          {showInputText()}
      </li>
  );
}

export default Task;