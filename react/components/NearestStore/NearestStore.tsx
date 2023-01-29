import React, { ChangeEvent, FC } from "react";
import { Icon } from "vtex.store-icons";
import { NearestStoreProps, Store } from ".";
import Gmap from "./components/Gmap";
import Loader from "./components/Loader";
import styles from "./styles.css";

interface Props extends NearestStoreProps {
  clipboard: () => void;
  handlerChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedStore: Store;
}

const NearestStore: FC<Props> = ({
  title,
  subTitle,
  stores,
  selectedStore,
  googleMapsApiKey,
  handlerChange,
  clipboard,
}) => {
  return (
    <div className={styles.nearestStore}>
      <div className={styles.nearestStoreSearch}>
        <p className={styles.nearestStoreSearchTitle}>{title}</p>
        <p className={styles.nearestStoreSearchSubTitle}>{subTitle}</p>

        <select
          className={styles.nearestStoreSearchSelect}
          onChange={handlerChange}
        >
          {stores.map((store) => (
            <option key={store.name} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>

        <div className={styles.nearestStoreSearchItem}>
          <div className={styles.nearestStoreSearchItemTitle}>Dirección</div>
          <div className={styles.nearestStoreSearchItemContent}>
            <div className={styles.nearestStoreSearchItemContentAddress}>
              <p className={styles.nearestStoreSearchItemContentAddressText}>
                {selectedStore.address}
              </p>
              <button
                className={styles.nearestStoreSearchItemContentAddressCopy}
                onClick={clipboard}
              >
                <Icon
                  id="bnd-copy-to-clipboard"
                  size={20}
                  viewBox="0 0 20 20"
                />
              </button>
            </div>
            <a
              href={`https://maps.google.com?q=${selectedStore.lat},${selectedStore.lng}`}
              target="_blank"
              className={styles.nearestStoreSearchItemContentAddressButton}
            >
              Ver en google maps
            </a>
          </div>
        </div>
        <div className={styles.nearestStoreSearchItem}>
          <div className={styles.nearestStoreSearchItemTitle}>Local</div>
          <div className={styles.nearestStoreSearchItemContent}>
            {selectedStore.local}
          </div>
        </div>
        <div className={styles.nearestStoreSearchItem}>
          <div className={styles.nearestStoreSearchItemTitle}>Horarios</div>
          <div className={styles.nearestStoreSearchItemContent}>
            {selectedStore.schedules}
          </div>
        </div>
        <div className={styles.nearestStoreSearchItem}>
          <div className={styles.nearestStoreSearchItemTitle}>Whastapp</div>
          <div className={styles.nearestStoreSearchItemContent}>
            <div className={styles.nearestStoreSearchItemContentPhone}>
              <p className={styles.nearestStoreSearchItemContentAddressText}>
                {selectedStore.phone}
              </p>
              {selectedStore.showWhatsapp && (
                <a
                  href={`https://wa.me/+57${selectedStore.phone}`}
                  target="_blank"
                >
                  <Icon id="bnd-whastapp" size={36} viewBox="0 0 36 36" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.nearestStoreMap}>
        <Gmap
          googleMapsApiKey={googleMapsApiKey}
          center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
          markerPosition={{ lat: selectedStore.lat, lng: selectedStore.lng }}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          loadingElement={<Loader />}
        />
      </div>
    </div>
  );
};

export default NearestStore;
