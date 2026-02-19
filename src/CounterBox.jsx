import React from 'react';

// แม่พิมพ์กล่องนับเลข โดยรับค่า Props จากตัวพ่อมาใช้งาน
function CounterBox({ title, titleClass, count, onUp, onDown }) {
  return (
    <div className="counter-box">
      {/* ชื่อกล่อง (Man/Woman) และสีที่จะเปลี่ยนตาม Props */}
      <h2 className={titleClass}>{title}</h2>
      
      <div className="display-area">
        <span>{count}</span>
      </div>

      <div className="main-buttons">
        {/* เมื่อกดปุ่ม จะไปเรียกใช้ฟังก์ชัน onUp หรือ onDown ที่พ่อส่งมาให้ */}
        <button className="btn-large" onClick={onUp}>UP</button>
        <button className="btn-large" onClick={onDown}>DOWN</button>
      </div>
    </div>
  );
}

export default CounterBox;