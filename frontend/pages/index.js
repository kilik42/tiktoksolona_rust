let connected = false;
import MainView from '../components/MainView';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={app}>
      { connected ?(
        <MainView />
      ):(
        <div className='loginContainer'>
          <div className='logiTitle'> Login </div>
          <div className='loginSubtitle'>
            Manage your account, check notifications, and more.
          </div>
           
        </div>
      )}
     
    </div>
  )
}
