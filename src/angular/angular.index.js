import app from './app.module';
import appRoot from './components/app-root/app-root.module'
import appHeader from './components/app-header/app-header.module'

function importAll(r){
  r.keys().forEach(r);
}

importAll(require.context('.', true, /\.(html|js)$/));
