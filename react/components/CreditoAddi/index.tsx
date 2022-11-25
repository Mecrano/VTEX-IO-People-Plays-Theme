import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import { FormattedPrice } from "vtex.formatted-price";

import Logo1 from "./Logo1";
import Logo2 from "./Logo2";
import styles from "./styles.css"


interface CreditoAddiProps {
  installments: number;
}

const CreditoAddi = ({ installments }: CreditoAddiProps) => {
  const { selectedItem } = useProduct();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (selectedItem?.sellers?.length) {
      const skuPrice = selectedItem.sellers[0].commertialOffer.Price;

      if (!Number.isNaN(skuPrice)) {
        setPrice(skuPrice / installments);
      }
    }
  }, [selectedItem]);

  return installments > 1 && price > 0 ? (
    <div className={`${styles.creditoAddiContainer} flex items-center`}>
      <Logo1 />
      <p className="nowrap flex items-center ml3 mr3">
        {`0% de interés en ${installments} cuotas de`}
        <div className="ml2">
          <FormattedPrice value={price} />
        </div>
        , con
      </p>
      <a href="https://co.addi.com/" className={`${styles.creditoAddiLink} nowrap mr3`}>Obtén tu cupo</a>
      <Logo2 />
    </div>
  ) : null;
};

CreditoAddi.defaultProps = {
  installments: 1,
};

export default CreditoAddi;
