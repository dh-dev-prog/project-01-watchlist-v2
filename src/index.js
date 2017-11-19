import styles from './assets/css/styles.scss';

function importAll(r){
  r.keys().forEach(r);
}

// Require all pictures

importAll(require.context('./assets/img/', true, /\.jpg$/));
