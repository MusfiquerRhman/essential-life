import { default as React, useState } from 'react';
import GlobalStatusForm from './GlobalStatusForm';

function GlobalStatus() {
  const [iOSStatus, setIOSStatus] = useState('ok')
  const [androidStatus, setAndroidStatus] = useState('ok');

  const handleChangeiOS = (e) => {
    setIOSStatus(e.target.value)
  }

  const handleChangeAndroid = (e) => {
    setAndroidStatus(e.target.value)
  }

  const onClickUpdateiOS = () => {

  }
  const onClickUpdateAndroid = () => {

  }

  return (
    <section>
      <h1>Global Status - iOS</h1>

      <GlobalStatusForm
        status={iOSStatus}
        handleChange={handleChangeiOS}
        onClickUpdate={onClickUpdateiOS}
        os={'iOS'}
      />

      <h1>Global Status - Android</h1>
      <GlobalStatusForm
        status={androidStatus}
        handleChange={handleChangeAndroid}
        onClickUpdate={onClickUpdateAndroid}
        os={'Android'}
      />

    </section>
  )
}

export default GlobalStatus