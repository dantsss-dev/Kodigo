import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Textbox } from "./Textbox";

export const Conversor = () => {
  const [dolares, setDolares] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);
  const [colones, setColones] = useState(0);
  const [btc_base, setBtc_base] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onSetDolares = (e) => {
    setDolares(e.target.value);
  };

  const ConvertToBitcoin = () => {
    setBitcoin(dolares / btc_base);
    setColones(dolares * 8.75);
  };

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@trade");
    ws.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      setBtc_base(stockObject.p);
      setIsLoading(false);
    };
  }, []);

  return isLoading ? (
    <div>Is Loading...</div>
  ) : (
    <div className=" d-flex justify-content-center text-center text-capitalize">
      <div className="grid row-gap-3 justify-content-center bg-light rounded p-5 shadow mt-5">
        <h1 className="col-12 my-2">conversor de monedas</h1>
        <Textbox
          label="dolares"
          onChange={onSetDolares}
          className={"row col-12 text-start my-4 fw-bold"}
        />
        <Button
          label="convertir"
          onClick={ConvertToBitcoin}
          className={"col-6"}
        />
        <Textbox
          label="bitcoin"
          value={bitcoin}
          className={"row col-12 text-start my-4 fw-bold"}
        />
        <Textbox
          label="colones"
          value={colones}
          className={"row col-12 text-start my-4 fw-bold"}
        />
      </div>
    </div>
  );
};
