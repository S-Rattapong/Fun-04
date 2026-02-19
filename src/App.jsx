import { useState, useEffect } from 'react';
import './index.css';
import CounterBox from './CounterBox';

function App() {
  // 1. ดึงความจำเดิมมาใส่ตั้งแต่ตอนเริ่มสร้างตัวแปรเลย (แก้ปัญหา F5 แล้วข้อมูลหาย)
  const [manCount, setManCount] = useState(() => parseInt(localStorage.getItem('manCount') ?? 0));
  const [womanCount, setWomanCount] = useState(() => parseInt(localStorage.getItem('womanCount') ?? 0));
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem('logs') ?? "[]"));

  // 2. เซฟข้อมูลอัตโนมัติเมื่อตัวเลขหรือประวัติเปลี่ยนไป
  useEffect(() => {
    localStorage.setItem('manCount', manCount);
  }, [manCount]);

  useEffect(() => {
    localStorage.setItem('womanCount', womanCount);
  }, [womanCount]);

  useEffect(() => {
    localStorage.setItem('logs', JSON.stringify(logs));
  }, [logs]);

  // ฟังก์ชันบันทึก
  const handleSave = () => {
    const now = new Date();
    const dateString = now.toString().split(' ').slice(0, 5).join(' '); 
    const total = manCount + womanCount;
    
    const logEntry = `[${dateString}] : M:${manCount}, F:${womanCount}, T:${total}`;
    setLogs([...logs, logEntry]);
  };

  // ฟังก์ชันรีเซ็ต (แก้ปัญหาให้รีเซ็ตแค่ตัวเลข ประวัติไม่หาย)
  const handleReset = () => {
    setManCount(0);
    setWomanCount(0);
    // ไม่มีการสั่งเซ็ต logs เป็นค่าว่าง หรือลบ localStorage อีกต่อไป
  };

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      
      <div className="counters-wrapper">
        <CounterBox 
          title="Man" 
          titleClass="title-man"
          count={manCount} 
          onUp={() => setManCount(manCount + 1)} 
          onDown={() => manCount > 0 ? setManCount(manCount - 1) : null} 
        />
        
        <CounterBox 
          title="Woman" 
          titleClass="title-woman"
          count={womanCount} 
          onUp={() => setWomanCount(womanCount + 1)} 
          onDown={() => womanCount > 0 ? setWomanCount(womanCount - 1) : null} 
        />
      </div>

      <div className="control-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="log-area">
        <div id="log-container">
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;