import React from 'react';
import WifiIcon from '@material-ui/icons/Wifi';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import VideocamIcon from '@material-ui/icons/Videocam';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

export default function Amenities() {
  return (
    <div style={{ padding: '30px' }}>
      <div style={{ marginBottom: '10px' }}>
        <LocalParkingIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> Безплатен паркинг
      </div>
      <div style={{ marginBottom: '10px' }}>
        <WifiIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> Безплатен Wifi
      </div>
      <div style={{ marginBottom: '10px' }}>
        <KitchenIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> Кухня на самообслужване
      </div>
      <div style={{ marginBottom: '10px' }}>
        <LocalBarIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> Барче
      </div>
      <div style={{ marginBottom: '10px' }}>
        <LocationOnIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> На 200м от плажата ивица
      </div>
      <div style={{ marginBottom: '10px' }}>
        <AcUnitIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> Климатик
      </div>
      <div style={{ marginBottom: '10px' }}>
        <VideocamIcon style={{ color: '#3f51b5', marginBottom: '-5px' }} /> Видеонаблюдение
      </div>
    </div>
  );
}
