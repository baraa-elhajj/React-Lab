import React, { useState, useMemo } from "react";

// Simulate expensive work
const expensiveCalculation = (num) => {
  let result = 0;
  for (let i = 0; i < 100_000_000; i++) {
    result += num * 0.00000001;
  }
  return result;
};

export default function DemoUseMemoBenefit() {
  const [fixedInput, setFixedInput] = useState(5);
  const [typing, setTyping] = useState("");

  // Non-memoized: recalculates on every render
  const startNoMemo = performance.now();
  const noMemoValue = expensiveCalculation(fixedInput);
  const noMemoDuration = performance.now() - startNoMemo;

  // Memoized: only recalculates when fixedInput changes
  const { value: memoValue, duration: memoDuration } = useMemo(() => {
    const start = performance.now();
    const val = expensiveCalculation(fixedInput);
    const end = performance.now();
    return { value: val, duration: end - start };
  }, [fixedInput]);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 20,
        maxWidth: 600,
      }}
    >
      <h1>useMemo Benefit Demo</h1>

      <div style={{ marginBottom: 16 }}>
        <label>
          Fixed input for expensive calc:{" "}
          <input
            type="number"
            value={fixedInput}
            onChange={(e) => setFixedInput(Number(e.target.value))}
            style={{ width: 80 }}
          />
        </label>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>
          Typing here causes re-renders (unrelated):{" "}
          <input
            type="text"
            value={typing}
            onChange={(e) => setTyping(e.target.value)}
          />
        </label>
        <p style={{ fontSize: 12, color: "#555" }}>
          Changing this input triggers renders but should not force the memoized
          expensive calculation again.
        </p>
      </div>

      <div
        style={{
          padding: 12,
          border: "1px solid #ccc",
          borderRadius: 8,
          marginBottom: 12,
        }}
      >
        <h2 style={{ margin: "4px 0" }}>Without useMemo</h2>
        <div>Value: {noMemoValue.toFixed(0)}</div>
        <div>Calculation time: {noMemoDuration.toFixed(2)} ms</div>
        <div style={{ fontSize: 12, color: "#a00" }}>
          This runs on every render, even when you’re just typing above.
        </div>
      </div>

      <div
        style={{ padding: 12, border: "1px solid #4caf50", borderRadius: 8 }}
      >
        <h2 style={{ margin: "4px 0" }}>With useMemo</h2>
        <div>Value: {memoValue.toFixed(0)}</div>
        <div>Calculation time: {memoDuration.toFixed(2)} ms</div>
        <div style={{ fontSize: 12, color: "#555" }}>
          Only recomputes when the fixed input changes. Typing doesn’t
          re-trigger it.
        </div>
      </div>
    </div>
  );
}
