import { default as React, useCallback, useState } from 'react';
import GlobalStatusForm from './GlobalStatusForm';

function GlobalStatus() {
  const [iOSStatus, setIOSStatus] = useState('ok')
  const [androidStatus, setAndroidStatus] = useState('ok');

  const handleChangeIOS = useCallback((e) => {
    setIOSStatus(e.target.value)
  }, [])

  const handleChangeAndroid = useCallback((e) => {
    setAndroidStatus(e.target.value)
  }, [])

  const onClickUpdateIOS = useCallback(() => {

  }, [])

  const onClickUpdateAndroid = useCallback(() => {

  }, [])

  return (
    <section>
      <h1>Global Status - iOS</h1>

      <GlobalStatusForm
        status={iOSStatus}
        handleChange={handleChangeIOS}
        onClickUpdate={onClickUpdateIOS}
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