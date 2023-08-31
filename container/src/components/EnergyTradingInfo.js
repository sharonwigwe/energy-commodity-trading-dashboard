import { mount } from 'energy_trading_info/EnergyTradingInfo';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};
