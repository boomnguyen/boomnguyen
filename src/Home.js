import { useState } from 'react';
import './style/home.css';
import Task from './component/Task';
import React from 'react';
import Count from './component/Count';

function Home() {
    
    const DATA = [
        {
            title: 'title 1',
            content: 'hoc react',
            status: 'done',
        },
        {
            title: 'title 2',
            content: 'lam bai  react lay diem',
            status: 'cancel',
        },
        {
            title: 'title 3',
            content: 'di tre nop phat',
            status: 'pending',
        },
    ]

    const [dataTask, setDataTask] = useState(DATA)

    const updateData = (value, index) => {
        const newDataTask = [...dataTask]
        newDataTask[index].content = value;
        setDataTask(newDataTask)
     }
    
   
      const renderTask = (data) => {
        return data.map((item, index) => {
          return (
            <div>
              <Task
                {...item}
                description={item.content}
                updateData={(value) => updateData(value, index)}
                index={index}
              />
            </div>
          )
        })
      }
       
      return (
        <div className="container">
          <h1 className='heading'>TOTO LIST</h1>
          <Count/>
          <ul className='todo-list'>
              {renderTask(dataTask)}
          </ul>
        </div>
      );
    };
    
    export default Home;