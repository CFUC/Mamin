import { useEffect } from 'react';
import styles from './KakaoMap.module.css';
const { kakao } = window;

const Location = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.871851451638584, 128.6249901868612),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(
      35.871851451638584,
      128.6249901868612
    );

    let marker = new kakao.maps.Marker({
      position: markerPosition,
      clickable: true,
    });

    marker.setMap(map);

    var iwContent = '<div style=" padding: 5px;">대구스케일업허브</div>',
      iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }, []);

  return <div id="map" className={styles.mapWrap}></div>;
};

export default Location;
